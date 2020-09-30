import Web3 from 'web3'
import { AbiItem } from 'web3-utils'

class BlockchainService {
  // Alastria node creates an account by default with index 0 and we create
  // our account witch will have index 1 in the eth accounts array
  TNP_ACCOUNT_INDEX = 1
  web3Instance: Web3
  contract: any

  private constructor() {
    this.web3Instance = new Web3(
      new Web3.providers.HttpProvider(process.env.NETWORK_ADDRESS)
    )
  }

  public static async create(): Promise<BlockchainService> {
    const service = new BlockchainService()
    service.contract = new service.web3Instance.eth.Contract(
      JSON.parse(process.env.CONTRACT_ABI as string) as AbiItem[],
      process.env.CONTRACT_ADDRESS
    )
    return service
  }

  public async isHashStored(contractHash: string) {
    const isStored = await this.contract.methods.isStored(contractHash).call()
    return isStored
  }

  public async getTimestamp() {
    const { blockHash } = await this.web3Instance.eth.getTransaction(
      process.env.BLOCK_HASH
    )
    const { timestamp } = await this.web3Instance.eth.getBlock(blockHash)
    return timestamp
  }
}

export default BlockchainService
