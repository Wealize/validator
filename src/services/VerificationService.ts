import CertService from "certification-library-service/src/core/services/certification/certificationService";
import BcRepo from "certification-library-service/src/core/repository/blockchain/blockchain.repository";
import RepositoryUtils from "certification-library-service/src/shared/utils/repository.utils";
import WalletUtils from "certification-library-service/src/shared/utils/wallets.utils";
import Logger from "certification-library-service/src/shared/classes/logger";
import UuidService from "certification-library-service/src/core/services/uuid/uuidService";

const logger = new Logger();
const utils = new RepositoryUtils(logger);
const wallet = new WalletUtils(utils);
const bcRepo = new BcRepo(utils, wallet);
const cert = new CertService(bcRepo, logger, wallet);
const uuid = new UuidService(logger, bcRepo);


export default class VerificationService {
    
    static async verifyFile(bytes: Buffer) {
        const response = cert.verify(bytes);
        return response;
    }

    static async getIpfs(uuidNumber: string){
        const response = uuid.getIpfsHash(uuidNumber);
        return response;
    }

}