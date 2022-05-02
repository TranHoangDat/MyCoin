import socketIoClient from "socket.io-client";
import Peer from "simple-peer";

// 1. Trao đổi signal data giữa các peer để kết nối các peer với nhau.
// 2. Sử dụng method send để trao đổi data.
export class ConnectionService {
  peers = {};
  ws = null;
  address = "";

  constructor() {
    this.ws = socketIoClient(process.env.REACT_APP_API);

    this.ws.on("me", id => {
      this.address = id;

      this.ws.emit("open", id);
    });

    this.ws.on("welcome", address => this.welcome(address));

    this.ws.on("openedSockets", socketAddresses => {
      socketAddresses.forEach(address => this.handshake(address));
    });

    this.ws.on("receiveSignal", ({ from, data }) => {
      this.peers[from].signal(data);
    });

    this.ws.on("message", data => {
      const message = JSON.parse(data);
    });
  }

  produceMessage(type, data) {
    return { type, data };
  }

  sendMessage(message) {
    this.opened.forEach(node => {
      node.ws.send(JSON.stringify(message));
    });
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

    // peer.on("connect", () => {
    //   peer.send(`hi peer${address}, this is peer${this.address}`);
    // });

    // peer.on("data", data => {
    //   console.log("got a message: " + data);
    // });

    this.peers[address] = peer;
  }

  welcome(address) {
    this.createPeer(address, true);
  }

  handshake(address) {
    this.createPeer(address, false);
  }

  // async connect(address) {
  //   // We will only connect to the node if we haven't, and we should not be able to connect to ourself
  //   if (
  //     !this.connected.find(peerAddress => peerAddress === address) &&
  //     address !== this.address
  //   ) {
  //     const peer = new Peer({ initiator: false });

  //     peer.on("connect", () => {
  //       peer.send(
  //         JSON.stringify(
  //           this.produceMessage("TYPE_HANDSHAKE", [
  //             this.address,
  //             ...this.connected,
  //           ]),
  //         ),
  //       );

  //       this.opened.forEach(node =>
  //         node.socket.send(
  //           JSON.stringify(this.produceMessage("TYPE_HANDSHAKE", [address])),
  //         ),
  //       );

  //       // If "opened" already contained the address, we will not push.
  //       if (
  //         !this.opened.find(peer => peer.address === address) &&
  //         address !== this.address
  //       ) {
  //         this.opened.push({ socket, address });
  //       }

  //       // If "connected" already contained the address, we will not push.
  //       if (
  //         !this.connected.find(peerAddress => peerAddress === address) &&
  //         address !== this.address
  //       ) {
  //         this.connected.push(address);
  //       }
  //     });

  //     // When they disconnect, we must remove them from our connected list.
  //     socket.on("close", () => {
  //       this.opened.splice(this.connected.indexOf(address), 1);
  //       this.connected.splice(this.connected.indexOf(address), 1);
  //     });
  //   }
  // }
}
