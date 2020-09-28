export default class ApiClient {
  static async verifyFile(data: FormData) {
    const url = '/api/verify-file'
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
