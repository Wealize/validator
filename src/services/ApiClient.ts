const axios = require('axios')
export default class ApiClient {
  static async verifyFile(formData: FormData) {
    var requestOptions = {
      method: 'PUT',
      body: formData
      // redirect: 'follow'
    }

    const response = await fetch(
      'https://certificatio-feat-uuidf-trhwrd.herokuapp.com/api/certifications/verify',
      requestOptions
    ).then((response) => response.text())
    return JSON.parse(response)
  }
}
