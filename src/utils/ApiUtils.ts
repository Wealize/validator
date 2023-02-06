import { NextApiRequest } from 'next'
import formidable, { Fields, Files } from 'formidable'

import { MethodNotAllowed, UnsupportedContentType } from './Errors'

export const validateRequest = (req: NextApiRequest) => {
  if (req.method !== 'POST') {
    throw new MethodNotAllowed('Only POST method is allowed')
  }

  if (!req.headers['content-type']?.includes('multipart/form-data')) {
    throw new UnsupportedContentType('Content-type must be multipart/form-data')
  }
}

export const getFileHash = (
  req: NextApiRequest
): Promise<{ fileHash: string }> => {
  return new Promise((resolve, reject) => {
    const form:any = new formidable.IncomingForm()
    form.hash = 'sha256'
    form.parse(req, (error, _field: Fields, file: Files) => {
      if (error) {
        reject(new Error(`There was a server error: ${error}`))
      }
      const parsedFile:any = file[Object.keys(file)[0]] // Get file from object, no matter what key name was used
      resolve({ fileHash: parsedFile.hash })
    })
  })
}
