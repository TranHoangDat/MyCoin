import Blockchain from "../classes/BlockChain";

export class BlockchainService {
  blockchainInstance = new Blockchain();
  wallet = null;

  constructor(wallet) {
    this.blockchainInstance.difficulty = 1;
    this.blockchainInstance.minePendingTransactions(
      wallet.signingKeyObj.getPublic("hex"),
    );
    this.wallet = wallet;
  }

  getBlocks() {
    return this.blockchainInstance.chain;
  }

  addTransaction(tx) {
    this.blockchainInstance.addTransaction(tx);
  }

  getPendingTransactions() {
    return this.blockchainInstance.pendingTransactions;
  }

  minePendingTransactions() {
    this.blockchainInstance.minePendingTransactions(
      this.wallet.getPublicKeyString(),
    );
  }
}
