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

var myBody = $('main')
let langPref = btSubscriberJson.properties.preferred_language
console.info(langPref)
let htmlBlock = ''
if (langPref !== 'english') {
  htmlBlock +=
    "<main style='background-color: #fff; line-height: 2rem; margin: 0 auto rem; max-width: 49rem; padding: clamp(0.5rem, 10%, 3rem) clamp(1.5rem, 5%, 6rem);'> <p> Esta dirección de email está actualmente inscrita para recibir las siguientes comunicaciones. Por favor, selecciona el tipo de comunicación por email que te gustaría recibir de ahora en adelante. </p> <label data-nl-format='datetime' ><strong >Tu email actual es: <span class='nl-dce-field nl-dce-done' id='email' data-nl-expr='/context/profile/email' data-nl-type='string' contenteditable='false' ><span id='username'></span> <script> let userName = '    ' + PC_PROFILE_OBJ.uid; document.getElementById('username').innerHTML = userName; </script> <hr /> <div data-nl-format='datetime'> <strong>Sobre cuál de estos temas te gustaría recibir noticias de nosotros:</strong> </div> <div></div> <hr /> <section class='checkbox-section'> <div> <label for='events' data-nl-format='datetime'> <input type='checkbox' id='events' name='events' value='Events you might be interested in' class='nl-dce-done' data-nl-bindto='service' data-nl-servicename='srpEvents' data-nl-servicelabel='01. Events you might be interested in' data-nl-checkboxbehavior='subscription' checked /> <span>Eventos que pueden interesarte</span> </label> </div> <div> <label for='ways'> <input type='checkbox' id='ways' name='ways' value='Ways to save energy and money' class='nl-dce-done' data-nl-bindto='service' data-nl-servicename='srpSaveEnergy' data-nl-servicelabel='02. Ways to save energy and money' data-nl-checkboxbehavior='subscription' checked /> <span>Formas de ahorrar energía y dinero</span> </label> </div> <div> <label for='deals' data-nl-format='datetime'> <input type='checkbox' id='deals' name='deals' value='Deals on energy efficient products - SRP Marketplace' class='nl-dce-done' data-nl-checkboxbehavior='subscription' data-nl-bindto='service' data-nl-servicename='srpMarketplace' data-nl-servicelabel='Deals on Energy Efficient products - SRP Marketplace' checked /> <span>Ofertas en productos de eficiencia energética - SRP Marketplace</span> </label> </div> <div> <label for='price'> <input type='checkbox' id='price' name='price' value='Price plans and billing options' class='nl-dce-done' data-nl-bindto='service' data-nl-servicename='srpPricePlans' data-nl-servicelabel='03. Price plans and billing options' data-nl-checkboxbehavior='subscription' checked /> <span>Planes de precios y opciones de facturación</span> </label> </div> <div> <label for='environment'> <input type='checkbox' id='environment' name='environment' value='Environment and sustainability' class='nl-dce-done' data-nl-bindto='service' data-nl-servicename='srpEnvSustain' data-nl-servicelabel='04. Environment and sustainability' data-nl-checkboxbehavior='subscription' checked /> <span>Medio ambiente y sostenibilidad</span> </label> </div> <div> <label for='safety' data-nl-format='datetime'> <input type='checkbox' id='safety' name='safety' value='Safety information' class='nl-dce-done' data-nl-bindto='service' data-nl-servicename='srpSafetyInfo' data-nl-servicelabel='05. Safety information' data-nl-checkboxbehavior='subscription' checked /> <span>Información sobre seguridad</span> </label> </div> <hr /> <section class='checkbox-section'> <label for='all'>      <input type='checkbox' id='all' name='all' value='true' class='nl-dce-done' data-nl-checkboxbehavior='subscription' data-nl-bindto='xpath' data-nl-uncheckedvalue='false' data-nl-xpath='/context/profile/blackListEmail' data-nl-label='No longer contact by email' data-nl-type='boolean' /> <span style='margin-left:25px;'>No recibir comunicaciones por emails de marketing.</span> </label> <p> Nota: Seguirás recibiendo emails transaccionales de SRP sobre su factura y sus pagos si has optado por recibirlos. </p> <button id='save-button' data-nl-checkboxbehavior='subscription' data-nl-bindto='action' data-nl-format='datetime' data-nl-action='next' > Save preferences </button> </section> </section> <section style='height:300px;'> <br /> <br /> <br /></section> </main>"
} else {
  htmlBlock +=
    "<main style='background-color: #fff; line-height: 2rem; margin: 0 auto rem; max-width: 49rem; padding: clamp(0.5rem, 10%, 3rem) clamp(1.5rem, 5%, 6rem);'> <p> This email address is currently subscribed to receive the following emails. Please select what type of email communication you would like to receive moving forward. </p> <label data-nl-format='datetime' ><strong >Your current email is: <span class='nl-dce-field nl-dce-done' id='email' data-nl-expr='/context/profile/email' data-nl-type='string' contenteditable='false' ><span id='username'></span> <script> let userName = '    ' + PC_PROFILE_OBJ.email; document.getElementById('username').innerHTML = userName; </script></span ></strong ></label > <hr style='width:50%'/> <div data-nl-format='datetime'> <strong>Which of these would you like to hear from us on:</strong> </div> <div></div> <hr style='width:50%'/> <section class='checkbox-section'> <div> <label for='events' data-nl-format='datetime'> <input type='checkbox' id='events' name='events' value='Events you might be interested in' class='nl-dce-done' data-nl-bindto='service' data-nl-servicename='srpEvents' data-nl-servicelabel='01. Events you might be interested in' data-nl-checkboxbehavior='subscription' checked /> <span>Events you might be interested in</span> </label> </div> <div> <label for='ways'> <input type='checkbox' id='ways' name='ways' value='Ways to save energy and money' class='nl-dce-done' data-nl-bindto='service' data-nl-servicename='srpSaveEnergy' data-nl-servicelabel='02. Ways to save energy and money' data-nl-checkboxbehavior='subscription' checked /> <span>Ways to save energy and money</span> </label> </div> <div> <label for='deals' data-nl-format='datetime'> <input type='checkbox' id='deals' name='deals' value='Deals on energy efficient products - SRP Marketplace' class='nl-dce-done' data-nl-checkboxbehavior='subscription' data-nl-bindto='service' data-nl-servicename='srpMarketplace' data-nl-servicelabel='Deals on Energy Efficient products - SRP Marketplace' checked /> <span>Deals on energy efficient products - SRP Marketplace</span> </label> </div> <div> <label for='price'> <input type='checkbox' id='price' name='price' value='Price plans and billing options' class='nl-dce-done' data-nl-bindto='service' data-nl-servicename='srpPricePlans' data-nl-servicelabel='03. Price plans and billing options' data-nl-checkboxbehavior='subscription' checked /> <span>Price plans and billing options</span> </label> </div> <div> <label for='environment'> <input type='checkbox' id='environment' name='environment' value='Environment and sustainability' class='nl-dce-done' data-nl-bindto='service' data-nl-servicename='srpEnvSustain' data-nl-servicelabel='04. Environment and sustainability' data-nl-checkboxbehavior='subscription' checked /> <span>Environment and sustainability</span> </label> </div> <div> <label for='safety' data-nl-format='datetime'> <input type='checkbox' id='safety' name='safety' value='Safety information' class='nl-dce-done' data-nl-bindto='service' data-nl-servicename='srpSafetyInfo' data-nl-servicelabel='05. Safety information' data-nl-checkboxbehavior='subscription' checked /> <span>Safety information</span> </label> </div> <hr style='width:50%'/> <section class='checkbox-section'> <label for='all'>      <input type='checkbox' id='all' name='all' value='true' class='nl-dce-done' data-nl-checkboxbehavior='subscription' data-nl-bindto='xpath' data-nl-uncheckedvalue='false' data-nl-xpath='/context/profile/blackListEmail' data-nl-label='No longer contact by email' data-nl-type='boolean' /> <span style='margin-left:25px;'>Opt out of all marketing emails.</span> </label> <p> Note: You will continue to receive SRP transactional emails about your bill and payments if you are currently opted in to receive those. </p> <button id='save-button' data-nl-checkboxbehavior='subscription' data-nl-bindto='action' data-nl-format='datetime' data-nl-action='next' > Save preferences </button> </section> </section> </main>"
}
console.info(htmlBlock)

$('main').html(htmlBlock)

var data_ready = setTimeout(function () {
  if (typeof btSubscriberJson !== 'undefined') {
    console.info('btSub exists')

    var userid = PC_ORIGINAL_PROFILE.uid
    var email = PC_ORIGINAL_PROFILE.email
    var address = btSubscriberJson.properties.a1_street_address
    var fullname = btSubscriberJson.name
    // if(!btSubscriberJson.name){
    //     fullname = btSubscriberJson.first_name+" "+btSubscriberJson.last_name;
    // }
    // else{
    //     fullname = btSubscriberJson.name;
    // }
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

    $('#text6').text(email)
    $('#field1').val(fullname)
    $('#field2').val(address)

    var events = true
    $('#events').change(function () {
      events = this.checked
      console.info('event checkbox: ' + events)
    })
    var ways = true
    $('#ways').change(function () {
      ways = this.checked
      console.info('way checkbox: ' + ways)
    })
    var deals = true
    $('#deals').change(function () {
      deals = this.checked
      console.info('deals checkbox: ' + deals)
    })
    var price = true
    $('#price').change(function () {
      price = this.checked
      console.info('price checkbox: ' + price)
    })
    var enviornment = true
    $('#environment').change(function () {
      enviornment = this.checked
      console.info('enviornment checkbox: ' + enviornment)
    })
    var safety = true
    $('#safety').change(function () {
      safety = this.checked
      console.info('safety checkbox: ' + safety)
    })
    var all = true
    $('#all').change(function () {
      all = this.checked
      console.info('all checkbox: ' + all)
    })
    var subscription = true
    $('#subscription').change(function () {
      subscription = this.checked
      console.info('all checkbox: ' + subscription)
    })

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

    console.info(events)
    console.info(ways)
    console.info(deals)
    console.info(price)
    console.info(enviornment)
    console.info(safety)
    console.info(all)
    console.info('active_phone: ' + active_phone)
    $('#save-button').click(
      (window.preference_submit = function () {
        $('#modal_loading').show()

        let opt_email = 'inactive'
        opt_email = $('#subscription').prop('checked', false)
        var email_status
        let new_phone

        const logValue = $("input[type='checkbox']").on(
          'change',
          function (i, val) {
            if (val) {
              console.info('checked')
            } else {
              console.info('unchecked')
            }
          }
        )

        const checked = $('#all').prop('checked', function (i, val) {
          if (val) {
            email_status = 'inactive'
            PC_EXTRA_OBJ['boomtrain_all'] = 'inactive'
            // console.info(PC_EXTRA_OBJ);
          } else {
            email_status = 'active'
          }
        })
        var payload
        if (new_phone === '') {
          payload = {
            email: email,
            user_id: PC_ORIGINAL_PROFILE.uid,
            contacts: [
              {
                type: 'email',
                value: email,
                status: email_status,
              },
            ],
            interests_events: events,
            interests_ways: ways,
            interests_deals: deals,
            interests_price: price,
            interests_enviornment: enviornment,
            interests_safety: safety,
          }
        } else {
          payload = {
            email: email,
            user_id: PC_ORIGINAL_PROFILE.uid,
            contacts: [
              {
                type: 'email',
                value: email,
                status: email_status,
              },
              {
                type: 'phone',
                value: phone,
                status: email_status,
              },
            ],
            interests_events: events,
            interests_ways: ways,
            interests_deals: deals,
            interests_price: price,
            interests_enviornment: enviornment,
            interests_safety: safety,
          }
        }
        console.info(payload)
        bt('updateUser', payload, {
          onComplete: function () {
            $('#modal_loading').hide()
            $('#text12').text('Your preference has been updated!')
            bt('track', 'updated_preference', {
              do_not_call: do_not_call,
              do_not_direct_mail: do_not_direct_mail,
              interests_events: events,
              interests_ways: ways,
              interests_deals: deals,
              interests_price: price,
              interests_enviornment: enviornment,
              interests_safety: safety,
              interests_all: all,
            })
            console.info('user updated successfully')
          },
        })
      })
    )
  }
}, 500)
$('#save-button').click(preference_submit())
