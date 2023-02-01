import axios from 'axios'
export default class ApiClient {
  private static API_NODE =
    'https://certificatio-feat-uuidf-trhwrd.herokuapp.com/api'
  static API_NAMES = {
    UUID: `/uuid`,
    VERIFY: `/certifications/verify`
  }
  static API_ERRORS = {
    ERR_BAD_REQUEST: 'ERR_BAD_REQUEST',
    ERR_NETWORK: 'ERR_NETWORK',
    NOT_FOUND_UUID: 'uuid.NOT_FOUND_UUID'
  }
  static async verifyFile(formData: FormData) {
    var requestOptions = {
      method: 'PUT',
      body: formData
      // redirect: 'follow'
    }

    const response = await fetch(
      `${ApiClient.API_NODE}${ApiClient.API_NAMES.VERIFY}`,
      requestOptions
    ).then((response) => response.text())
    console.log(
      '🚀 ~ file: ApiClient.ts:14 ~ ApiClient ~ verifyFile ~ response',
      response
    )
    return JSON.parse(response)
  }
  static async getIPSFFromUuid(uuid) {
    const url = `${ApiClient.API_NODE}${ApiClient.API_NAMES.UUID}/${uuid}`
    return axios.get(url).then(function (response) {
      return JSON.stringify(response.data)
    })
  }

  static getErrorCode(error: any) {
    if (typeof error === 'object' && error?.code) {
      const code = error?.code
      const url = error?.config?.url
      if (error.code === ApiClient.API_ERRORS.ERR_BAD_REQUEST) {
        if (url?.includes(ApiClient.API_NAMES.UUID)) {
          return `${code}_UUID`
        }
      } else if (code === ApiClient.API_ERRORS.ERR_NETWORK) {
        return `${code}_DOWNLOAD_IPFS`
      }
    } else if (typeof error === 'string') {
      if (error === ApiClient.API_ERRORS.NOT_FOUND_UUID) {
        return error
      }
    }
    else{
      return error.toString();
    }
  }

  static getErrorDescription = (error) => {
    if (!error) return ''
    if (error.includes(ApiClient.API_ERRORS.ERR_NETWORK)) {
      if (error.includes('DOWNLOAD_IPFS')) {
        return `
          Estamos teniendo problemas para obtener el documento para verificar
          en la RedT de Alastria.
          Por favor, vuelve a intentarlo mas tarde.
        `
      } else {
        return `
          Estamos teniendo problemas para verificar en la RedT de Alastria.
          Por favor, vuelve a intentarlo mas tarde.
        `
      }
    } else if (error.includes(ApiClient.API_ERRORS.ERR_BAD_REQUEST)) {
      return `
        El identificador o documento introducido no se encuentra en la RedT de Alastria.
        Por favor, confirma tu identificador y vuelve a intentarlo.
      `
    } else if (error.includes(ApiClient.API_ERRORS.NOT_FOUND_UUID)) {
      return `
      El identificador introducido no se encuentra en la RedT de Alastria.
      Por favor, confirma tu identificador y vuelve a intentarlo.
      `
    } else {
      return `
        No encontramos este documento en la RedT de Alastria.
        Por favor, confirma tu fichero y vuelve a intentarlo.
      `
    }
  }
}
