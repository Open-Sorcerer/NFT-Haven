/* eslint-disable no-unused-vars */
import ABI from "../contracts/ABI.json";
import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";

const smartContractAddress = "0x23b8bf53cb0dc8607b9b79f28cd5c1b5d7834cf2";

export const useSmartContract = () => {
  const { web3, Moralis, user } = useMoralis();
  const createNFT = async (tokenURI) => {
    await window.ethereum.enable();
    var contract = new web3.eth.Contract(ABI, smartContractAddress);
    const currentUser = user.attributes.ethAddress;
    const txid = await contract.methods
      .createToken(tokenURI)
      .send({ from: currentUser })
      .then((res) => {
        console.log(res);
      });
  };

  return {
    createNFT,
  };
};
