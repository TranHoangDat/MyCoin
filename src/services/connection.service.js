import socketIoClient from "socket.io-client";
import Peer from "simple-peer";
import Transaction from "../classes/Transaction";
import Block from "../classes/Block";

export class ConnectionService {
  peers = {};
  ws = null;
  address = "";
  blockchainService = null;
  check = [];
  checked = [];
  checking = false;

  constructor(blockchainService) {
    this.blockchainService = blockchainService;
    this.ws = socketIoClient(process.env.REACT_APP_API);

    this.ws.on("me", id => {
      this.address = id;

      this.ws.emit("open", id);
    });

    this.ws.on("welcome", address => this.welcome(address));

    this.ws.on("openedSockets", socketAddresses => {
      socketAddresses.forEach(address => this.handshake(address));
      this.blockchainService.minePendingTransactions();
      // this.sendMessage(
      //   this.produceMessage("TYPE_REPLACE_CHAIN", [
      //     this.blockchainService.getLatestBlock(),
      //     this.blockchainService.getDifficulty(),
      //   ]),
      // );
    });

    this.ws.on("receiveSignal", ({ from, data }) => {
      this.peers[from].signal(data);
    });

    this.ws.on("peerClosed", address => {
      delete this.peers[address];
    });
  }

  produceMessage(type, data) {
    return { type, data };
  }

  sendMessage(message) {
    for (const address in this.peers) {
      this.peers[address].send(JSON.stringify(message));
    }
  }

  createPeer(address, initiator) {
    const peer = new Peer({ initiator: initiator });

    peer.on("signal", data => {
      this.ws.emit("sendSignal", {
        from: this.address,
        to: address,
        data,
      });
    });

    peer.on("data", data => {
      this.handlePeerData(data);
    });

    peer.on("close", () => {});

    this.peers[address] = peer;
  }

  welcome(address) {
    this.createPeer(address, true);
  }

  handshake(address) {
    this.createPeer(address, false);
  }

  handlePeerData(data) {
    const message = JSON.parse(data);

    switch (message.type) {
      case "TYPE_CREATE_TRANSACTION":
        this.createTransactionHandler(message.data);
        break;
      case "TYPE_REPLACE_CHAIN":
        let [newBlock, newDiff] = message.data;
        newBlock = Block.copy(newBlock);
        this.replaceChainHandler(newBlock, newDiff);
        break;
      case "TYPE_REQUEST_CHECK":
        this.requestCheckHandler();
        break;
      case "TYPE_SEND_CHECK":
        if (this.checking) this.check.push(message.data);
        break;
      case "TYPE_SEND_CHAIN": //
        const { block, finished } = message.data;
        this.sendChainHandler(block, finished);
        break;

      case "TYPE_REQUEST_CHAIN":
        this.requestChainHandler(message.data);
        break;

      case "TYPE_REQUEST_INFO":
        opened
          .filter(node => node.address === _message.data)[0]
          .socket.send("TYPE_SEND_INFO", [
            JeChain.difficulty,
            JeChain.transactions,
          ]);

        break;

      case "TYPE_SEND_INFO":
        [JeChain.difficulty, JeChain.transactions] = _message.data;

        break;
    }
  }

  createTransactionHandler(messageData) {
    const transaction = Transaction.copy(messageData);
    this.blockchainService.addTransaction(transaction);
  }

  requestCheckHandler() {
    this.peers[message.data].send(
      JSON.stringify(
        this.produceMessage(
          "TYPE_SEND_CHECK",
          JSON.stringify([
            this.blockchainService.getLatestBlock(),
            this.blockchainService.getPendingTransactions(),
            this.blockchainService.getDifficulty(),
          ]),
        ),
      ),
    );
  }

  sendChainHandler(block, finished) {
    if (!finished) {
      tempChain.chain.push(block);
    } else {
      tempChain.chain.push(block);
      if (Blockchain.isValid(tempChain)) {
        JeChain.chain = tempChain.chain;
      }
      tempChain = new Blockchain();
    }
  }

  requestChainHandler(messageData) {
    const peer = this.peers[messageData];

    // We will send the blocks continously.
    for (
      let i = 1;
      i < this.blockchainService.blockchainInstance.chain.length;
      i++
    ) {
      peer.send(
        JSON.stringify(
          produceMessage("TYPE_SEND_CHAIN", {
            block: this.blockchainService.blockchainInstance.chain[i],
            finished:
              i === this.blockchainService.blockchainInstance.chain.length - 1,
          }),
        ),
      );
    }
  }

  replaceChainHandler(newBlock, newDiff) {
    const ourTx = [
      ...this.blockchainService
        .getPendingTransactions()
        .map(tx => JSON.stringify(tx)),
    ];

    const theirTx = [
      ...newBlock.transactions
        .filter(tx => tx.from !== null)
        .map(tx => JSON.stringify(tx)),
    ];

    const n = theirTx.length;

    if (
      newBlock.previousHash !==
      this.blockchainService.getLatestBlock().previousHash
    ) {
      for (let i = 0; i < n; i++) {
        const index = ourTx.indexOf(theirTx[0]);

        if (index === -1) break;

        ourTx.splice(index, 1);
        theirTx.splice(0, 1);
      }

      if (
        theirTx.length === 0 &&
        Block.calculateHash(newBlock) === newBlock.hash &&
        newBlock.hash.startsWith(
          Array(this.blockchainService.getDifficulty() + 1).join("0"),
        ) &&
        Block.hasValidTransactions(
          newBlock,
          this.blockchainService.blockchainInstance,
        ) &&
        parseInt(newBlock.timestamp) >
          parseInt(this.blockchainService.getLatestBlock().timestamp) &&
        parseInt(newBlock.timestamp) < Date.now() &&
        this.blockchainService.getLatestBlock().hash === newBlock.prevHash &&
        (newDiff + 1 === this.blockchainService.getDifficulty() ||
          newDiff - 1 === this.blockchainService.getDifficulty())
      ) {
        this.blockchainService.addBlock(newBlock);
        this.blockchainService.blockchainInstance.difficulty = newDiff;
        this.blockchainService.blockchainInstance.pendingTransactions = [
          ...ourTx.map(tx => JSON.parse(tx)),
        ];
      }
    } else if (
      !this.checked.includes(
        JSON.stringify([
          newBlock.prevHash,
          this.blockchainService.getLaterBlock().timestamp || "",
        ]),
      )
    ) {
      this.checked.push(
        JSON.stringify([
          this.blockchainService.getLatestBlock().prevHash,
          this.blockchainService.getLaterBlock().timestamp || "",
        ]),
      );

      const position = this.blockchainService.getLatestBlockPosition();

      this.checking = true;

      this.sendMessage(this.produceMessage("TYPE_REQUEST_CHECK", this.address));

      setTimeout(() => {
        this.checking = false;

        let mostAppeared = this.check[0];

        this.check.forEach(group => {
          if (
            this.check.filter(_group => _group === group).length >
            this.check.filter(_group => _group === mostAppeared).length
          ) {
            mostAppeared = group;
          }
        });

        const group = JSON.parse(mostAppeared);

        this.blockchainService.blockchainInstance.chain[position] = group[0];
        this.blockchainService.blockchainInstance.pendingTransactions = [
          ...group[1],
        ];
        this.blockchainService.blockchainInstance.difficulty = group[2];

        this.check.splice(0, this.check.length);
      }, 5000);
    }
  }
}
