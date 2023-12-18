const axios = require('axios')

const options = {
  method: 'POST',
  url: 'https://api.zetaglobal.net/ver2/partner-dev-tap-cxm/subscribers/identify',
  headers: {
    accept: 'application/json',
    Accept: 'application/json',
    'content-type': 'application/json',
    authorization: 'Basic YXBpOmIwODY2ODljZTAyYTg3Nzg1MDI0NGFmMWUzNWU5MDZi',
  },
  data: {
    subscriber: {
      uid: 'chaunceyp@tapcxm.com2',
      email: 'chaunceyp@tapcxm.com',
      contacts: {
        contact_type: 'email',
        preferences: ['standard'],
        subscription_status: 'active',
        contact_value: 'chaunceyp@tapcxm.com',
      },
      source: 'api',

      first_name: 'Chauncey',
      last_name: 'Plummer',
      name: 'Chauncey Plummer',
    },
  },
}

axios
  .request(options)
  .then(function (response) {
    console.log(response.data)
  })
  .catch(function (error) {
    console.error(error)
  })
