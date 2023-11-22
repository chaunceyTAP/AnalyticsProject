//p13n.js
const site_id = 'partner-dev-tap-cxm'
;(function (b, t, r, a, i, n) {
  ;(b['bt'] =
    b['bt'] ||
    function () {
      ;(b['_bt'] = b['_bt'] || []).push(arguments)
    }),
    (i = t.createElement(r)),
    (n = t.getElementsByTagName(r)[0])
  i.async = 1
  i.src = a
  n.parentNode.insertBefore(i, n)
})(
  window,
  document,
  'script',
  'https://cdn.boomtrain.com/p13n/' + site_id + '/p13n.min.js'
)

//Function to return URL parameters when called
function getQueryVariable(variable) {
  var query = window.location.search.substring(1)
  var vars = query.split('&')
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=')
    console.info('pair: ' + pair)
    if (decodeURIComponent(pair[0]) == variable) {
      return decodeURIComponent(pair[1])
    }
  }

  console.info('Query variable %s not found', variable)
}

//Clear user identity
//bt('clear', {onComplete: function() { console.info('Clear function completed'); }});
$('#modal_loading_spinner').css('top', '50%')
$('#modal_loading_spinner').css('left', '50%')

console.info('btSubscriberJson: ' + JSON.stringify(btSubscriberJson))
console.info('PC_PROFILE_OBJ: ' + JSON.stringify(PC_PROFILE_OBJ))
console.info('PC_EXTRA_OBJ: ' + JSON.stringify(PC_EXTRA_OBJ))

var data_ready = setTimeout(function () {
  if (typeof btSubscriberJson !== 'undefined') {
    console.info('btSub exists')

    var userid = PC_ORIGINAL_PROFILE.uid
    var email = PC_ORIGINAL_PROFILE.email
    var address = btSubscriberJson.properties.address_1
    var fullname
    if (!btSubscriberJson.name) {
      fullname = btSubscriberJson.first_name + ' ' + btSubscriberJson.last_name
    } else {
      fullname = btSubscriberJson.name
    }
    var active_phone = ''
    var phone = ''
    var do_not_call = btSubscriberJson.properties.do_not_call
    var do_not_direct_mail = btSubscriberJson.properties.do_not_direct_mail

    btSubscriberJson.contacts.forEach(function (c) {
      if (c.contact_type == 'phone') {
        phone = c.contact_value
        if (c.subscription_status == 'active') {
          active_phone = c.contact_value
        }
      }
    })

    if (active_phone !== '') {
      phone = active_phone //this is to handle multiple phone situation.
    }

    $('#username').text(PC_ORIGINAL_PROFILE.email)
    $('#text6').text(userid)
    $('#field1').val(fullname)
    $('#field2').val(address)
    $('#field3').val(phone)

    if (typeof btSubscriberJson.properties.has_active_email === 'undefined') {
    } else {
      if (
        btSubscriberJson.properties.has_active_email.toLowerCase() == 'true'
      ) {
        $('#field4').prop('checked', true)
      }
    }
    if (typeof btSubscriberJson.properties.do_not_call === 'undefined') {
    } else {
      if (btSubscriberJson.properties.do_not_call.toLowerCase() == 'false') {
        $('#field5').prop('checked', true)
      }
    }
    if (typeof btSubscriberJson.properties.do_not_direct_mail === 'undefined') {
    } else {
      if (
        btSubscriberJson.properties.do_not_direct_mail.toLowerCase() == 'false'
      ) {
        $('#field6').prop('checked', true)
      }
    }

    console.info(userid)
    // console.info(address);
    console.info(fullname)
    console.info('active phone:   ' + active_phone)
    console.info('phone:   ' + phone)
    console.info(do_not_call)
    console.info(do_not_direct_mail)

    window.preference_submit = function () {
      $('#modal_loading').show()
      let opt_email = 'false'
      opt_email = !$('#flexCheckIndeterminate').prop('checked')
      var email_status
      if (opt_email === true) {
        email_status = 'active'
      } else {
        email_status = 'inactive'
      }
      console.info('opt_email: ' + opt_email)
      console.info('email status: ' + email_status)
      let do_not_call = !$('#field5').prop('checked')
      let do_not_direct_mail = !$('#field6').prop('checked')
      let name = $('#field1').val()
      let a1_street_address = $('#field2').val()
      let new_phone = $('#field3').val()
      var phone_status = $('#field5').prop('checked')
      if (phone_status) {
        phone_status = 'active'
      } else {
        phone_status = 'inactive'
      }
      var payload
      if (new_phone === '') {
        payload = {
          email: email,
          user_id: btSubscriberJson.uid,
          contacts: [{ type: 'email', value: email, status: email_status }],
          do_not_call: do_not_call,
          do_not_direct_mail: do_not_direct_mail,
          name: PC_PROFILE_OBJ.name,
          a1_street_address: address,
        }
      } else {
        payload = {
          email: email,
          user_id: btSubscriberJson.uid,
          contacts: [
            { type: 'email', value: email, status: email_status },
            { type: 'phone', value: phone, status: email_status },
          ],
          do_not_call: do_not_call,
          do_not_direct_mail: do_not_direct_mail,
          name: PC_PROFILE_OBJ.name,
          a1_street_address: address,
        }
      }
      console.info(payload)
      bt('updateUser', payload, {
        onComplete: function () {
          $('#modal_loading').hide()
          $('#text12').text('Your preference has been updated!')
          bt('track', 'updated_preference', {
            name: name,
            a1_street_address: a1_street_address,
            phone: new_phone,
            email_status: email_status,
            do_not_call: do_not_call,
            do_not_direct_mail: do_not_direct_mail,
          })
        },
      })
    }
  }
}, 500)
