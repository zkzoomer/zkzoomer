import styled from 'styled-components'
import { FaTrophy } from 'react-icons/fa'

const PrizeContent = styled.a`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-family: 'Inter ExtraLightItalic';
    padding-bottom: 5px;

    > * {
        padding-left: 5px; 
        padding-right: 5px;
    }
`

const BronzeTrophy = styled(FaTrophy)`
    filter: invert(37%) sepia(27%) saturate(1161%) hue-rotate(308deg) brightness(91%) contrast(77%);
`

const OtherTrophy = styled(FaTrophy)`
    filter: invert(56%) sepia(62%) saturate(320%) hue-rotate(153deg) brightness(80%) contrast(81%);
`

const TrophyText = styled.div`
`

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
        prizes: (
            <>
                <PrizeContent href='https://devpost.com/software/dorsia-club' target='_blank' rel="noreferrer">
                    <BronzeTrophy />
                        Third Place @ Web3 Infinity Hackathon
                </PrizeContent>
            </>
        )
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
        prizes: (
            <>
                <PrizeContent href='https://devpost.com/software/block-qualified' target='_blank' rel="noreferrer">
                    <OtherTrophy />
                        Top 30 @ Web3 Infinity Hackathon
                </PrizeContent>
            </>
        )
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
        prizes: null,
    }
]