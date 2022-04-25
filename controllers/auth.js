import { randomBytes } from "crypto";
import Wallet from "ethereumjs-wallet";

export const createPassword = async (req, res) => {
  try {
    const privateKeyBuffer = randomBytes(32);
    const wallet = Wallet["default"].fromPrivateKey(privateKeyBuffer);
    const keystoreFilename = wallet.getV3Filename();
    const keystoreFileContent = await wallet.toV3String(req.body.password);
    res
      .status(200)
      .json({ fileName: keystoreFilename, fileContent: keystoreFileContent });
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: error.message });
  }
};

export const accessWallet = async (req, res) => {
  try {
    const wallet = await Wallet["default"].fromV3(
      req.body.keystore,
      req.body.password,
    );
    res.status(200).json({ publicKey: wallet.getPublicKeyString() });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
