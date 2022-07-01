import Image from "next/image"
import styles from "../styles/Home.module.css"
import { useMoralisQuery, useMoralis } from "react-moralis"
import NFTBox from "../components/NFTBox"
import networkMapping from "../constants/networkMapping.json"
import { useQuery } from "@apollo/client"
import GET_ACTIVE_ITEMS from "../constants/subgraphQueries"

export default function Home() {
    // How do we show the recently listed NFTs?

    // We will index the events off-chain and then read from our database.
    // Setup a server to listen those events to be fires, and we will add them to a query.

    //Whoa, isnt that centralized?
    //Moralis does this in a centralized way and comes with a ton of other features.
    //TheGraph does this in a decentralized way

    /* 
        All our logic is still 100% on chain.
        Speed & Development time.
        Its really hard to start a prod blockcahin project 100% decentralized.
        They are working on open sourcing their code.
        Feature richness
        We cann create more features with a centralized back end to start
        As more decentralized tools are bein created.
        Local developments
    */

    const { isWeb3Enabled, chainId } = useMoralis()
    const chainString = chainId ? parseInt(chainId).toString() : "31337"
    const marketplaceAddress = networkMapping[chainString].NftMarketplace[0]

    const { loading, error, data: listedNfts } = useQuery(GET_ACTIVE_ITEMS)

    return (
        <div className="container mx-auto">
            <h1 className="py-4 px-4 font-bold text-2xl">Recently Listed</h1>
            <div className="flex flex-wrap">
                {isWeb3Enabled ? (
                    loading || !listedNfts ? (
                        <div>Loading...</div>
                    ) : (
                        listedNfts.activeItems.map((nft) => {
                            console.log(nft)
                            const { price, nftAddress, tokenId, seller } = nft
                            return (
                                <div>
                                    <NFTBox
                                        price={price}
                                        nftAddress={nftAddress}
                                        tokenId={tokenId}
                                        marketplaceAddress={marketplaceAddress}
                                        seller={seller}
                                        key={`${nftAddress}${tokenId}`}
                                    />
                                </div>
                            )
                        })
                    )
                ) : (
                    <div>Web3 Currently Not Enabled</div>
                )}
            </div>
        </div>
    )
}
