import Blockchain from "../classes/BlockChain";

export class BlockchainService {
  blockchainInstance = new Blockchain();
  wallet = null;

  constructor(wallet) {
    this.blockchainInstance.difficulty = 1;
    this.blockchainInstance.minePendingTransactions(wallet.getAddressString());
    this.wallet = wallet;
  }

  getBlocks() {
    return this.blockchainInstance.chain;
  }
}
