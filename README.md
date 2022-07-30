# Hardhat Nft Marketplace Front End

On this repo you will find the front-end for the nft-marketplace smartcontract but using the graph instead of using moralis: https://github.com/AdrianCobo/hardhat-nft-marketplace

1. Home Page:
    1. Show recently listed NFTs
        1. If you own the NFT, you can update the listing
        2. If not, you can buy the listing
    2. Sell Page: 
        1. You can list your NFT on the marketplace
        2. And withdraw proceeds

Moralis: How do we tell it to listen to our events?

1. Connect it to our blockchain
2. Which contract, which events, and what to do when it hears those events.ç

TheGraph:

1. Instead of reading the events from Moralis, we will:
    1. Index them with TheGraph
    2. Read from the graph

This repo follows the lesson 15 developed by Patrick Collins and FreeCodeCamp.

Course: https://www.youtube.com/watch?v=gyMwXuJrbJQ
