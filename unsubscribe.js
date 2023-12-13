const axios = require('axios')
const options = {
  method: 'POST',
  url: 'https://api.zetaglobal.net/ver2/partner-dev-tap-cxm/subscribers/chaunceyp%40tapcxm.com/unsubscribe',
  headers: {
    accept: 'application/json',
    Accept: 'application/json',
    'content-type': 'application/json',
    authorization: 'Basic YXBpOmIwODY2ODljZTAyYTg3Nzg1MDI0NGFmMWUzNWU5MDZi',
  },
  data: { source: 'api', message_uid: '1700159102345e32c4885bcc8' },
}

axios
  .request(options)
  .then(function (response) {
    console.log(response.data)
  })
  .catch(function (error) {
    console.error(error)
  })
