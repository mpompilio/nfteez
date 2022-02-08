import React from "react";
import List from "../components/List"
import { useQuery } from '@apollo/client';
import { QUERY_NFTS } from "../utils/queries";

const Leaderboard = () => {
    const { loading, data } = useQuery(QUERY_NFTS);
    const nfts = data?.nfts || [];
    console.log(nfts)

    return (
        <main>
            {loading ? (
                <div>Loading...</div>
            ) :
                (
                    <div className='container'>
                        <h2 className='row display-3 justify-content-center mb-5'>Leaderboard</h2>
                        <div className="item-container">
                            {nfts &&
                                nfts.map(nft => (
                                    <div>
                                        <List nft={nft} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                )
            }
        </main>
    )
}
export default Leaderboard;