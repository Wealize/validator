import { NextApiRequest, NextApiResponse } from 'next'

import BlockchainService from '../../services/BlockchainService'
import { validateRequest, getFileHash } from '../../utils/ApiUtils'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    validateRequest(req)
    const { fileHash } = await getFileHash(req)
    const blockchainService = await BlockchainService.create()
    const isHashStored = await blockchainService.isHashStored(fileHash)

    if (isHashStored) {
      const timestamp = await blockchainService.getTimestamp()
      res.status(200).json({ is_file_stored: isHashStored, timestamp })
    } else {
      res.status(200).json({ is_file_stored: isHashStored })
    }
  } catch (error) {
    res.status(500).json({ error })
  }
}

export const config = {
  api: {
    bodyParser: false
  }
}
