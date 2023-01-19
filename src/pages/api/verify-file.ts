import { NextApiRequest, NextApiResponse } from 'next'

import BlockchainService from '../../services/BlockchainService'
import { validateRequest, getFileHash } from '../../utils/ApiUtils'
const verify = async (bytes: Buffer) => {
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  let body = '';
  let buffer;
  req.on('data', (chunk) => {
    body += chunk.toString()
  })
  req.on('end', () => {
    const params = JSON.parse(body)
    buffer = Object.values(params.file)
  })
  const { status, ...response }: any = await verify(buffer)

}

export const config = {
  api: {
    bodyParser: false
  }
}
