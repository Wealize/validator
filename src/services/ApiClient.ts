export default class ApiClient {
  static async verifyFile(data: any) {
    const url = 'https://certificatio-feat-uuidf-trhwrd.herokuapp.com/api/certifications/verify'
    const response = await fetch(url, {
      method: 'POST',
      body: data
    })

    if (response.status >= 400) {
      throw new Error()
    }

    return response.json()
  }
}
