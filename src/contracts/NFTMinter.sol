// SPDX-License-Identifier: MIT
// Deployed on Celo Alfajores Testnet: 0x9Cc7E7ea69DA9c905D86e181a8bDbf9C1e90c558
// Deployed on Polygon Mumbai Testnet: 0x23b8bf53cb0dc8607b9b79f28cd5c1b5d7834cf2
pragma solidity ^0.8.1;

import "github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/Counters.sol";
import "github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/ERC721.sol";


contract NFT is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;


    constructor() ERC721("NonFungibleTalent", "NFT") {}

    function createToken(string memory tokenURI) public returns (uint) {
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();

        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);
        return newItemId;
    }
}
