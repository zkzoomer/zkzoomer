export const projectsInfo = [
    {
        title: 'Dorsia Club',
        description: (
            <>
                Dynamic and customizable NFT business cards, generated and pineed to IPFS on-demand by an off-chain oracle.
                <br /><br />
                The assets for the NFT all get "randomly" generated when minting, but the name and position are defined by the user. The oracle listens to 
                minting events, constructs the card as defined on-chain, pins it to IPFS, and sends back the CID in a callback transaction. Cards names/positions can
                also be freely updated, with the same effect.
                <br /><br />
                Business cards can also be natively tradeable direclty from the frontend.
            </>
        ),
        image: require('../../images/dorsiaclub-cards.gif'),
        link: 'https://dorsiaclub.netlify.app/',
        repo: 'https://github.com/0xdeenz/dorsiaclub',
    },
    {
        title: 'Block Qualified',
        description: (
            <>
                Get an NFT verifying your credentials by solving multiple choice tests directly on-chain. Powered by ZK-SNARKS.
                <br /><br />
                To ensure the privacy of your solution (ie, someone cannot copy your transaction and gain the same credentials), submissions act rather as a 
                <span style={{fontStyle: "italic"}}> proof of knowledge</span>. By using zk-SNARKS, the smart contract can verify that you know the solution to a
                given multiple choice test, without you revealing <span style={{fontWeight: "500"}}>anything</span> other than the fact that 
                <span style={{fontStyle: "italic"}}> you know the solution</span>.
                <br /><br />
                The frontend manages the pinning and retrieval of tests from IPFS, the necessary smart contract interactions, as well as all the underlaying
                cryptography and zk-SNARK proof generation.

            </>
        ),
        image: require('../../images/block-qualified-logo.png'),
        link: 'https://blockqualified.netlify.app/',
        repo: 'https://github.com/0xdeenz/bq',
    },
    {
        title: 'rollup-demo',
        description: (
            <>
                Part of a research project on zero-knowledge rollups for non-financial blockchain applications.
                <br /><br />
                Built a payment channel that could scale Ethereum up to 140x. Using zk-SNARKS, transactions are processed in batches while generating proofs that 
                these batches are valid. These proofs get later verified inside the rollup smart contract, achieving finality.
                <br /><br />
                Ongoing project. My plan is to keep up with the trends as zk rollups grow in complexity.
            </>
        ),
        image: require('../../images/rollup-demo.png'),
        link: null,
        repo: 'https://github.com/0xdeenz/rollup-demo',
    }
]