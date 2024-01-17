// Import Assets
import block_qualified from '../assets/block_qualified.png';
import rollup_demo from '../assets/rollup_demo.png';
import dorsiaclub from '../assets/dorsiaclub.gif';

const Projects = () => {
    return (
        <section className="projects">
            <h2>Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>Block Qualified</h3>
                    <img src={block_qualified} alt="Block Qualified" />
                    <figcaption><a href="https://zk-hacking.org/" target='_blank' rel="noreferrer">2nd Place at ZKP / Web3 Hackathon</a></figcaption>
                    <p>
                        Originally a hackathon project, I obtained a grant from the Ethereum Foundation's PSE team to develop a decentralized, private, and verifiable education platform using Semaphore.
                        <br/><br/>
                        Tech stack: circom, Solidity, Typescript, The Graph, React.
                    </p>

                    <div className="button__container">
                        <a href="https://bq2.netlify.app/" target="_blank" rel="noreferrer" className="button">Site</a>
                        <a href="https://github.com/zkzoomer/bq2" target="_blank" rel="noreferrer" className="button">Code</a>
                    </div>
                </div>

                <div className="projects__card">
                    <h3>ZK-Rollup</h3>
                    <img src={rollup_demo} alt="ZK-Rollup" />
                    <figcaption><a href="https://uniswap.org/" target='_blank' rel="noreferrer">&nbsp;</a></figcaption>
                    <p>
                        Research project on ZK Rollups for non-financial applications. Originally built a payment channel with 140x throughput, later studied verifiable congestion control algorithms.
                        <br/><br/>
                        Tech stack: circom, Solidity, ZK-SNARKs.
                    </p>

                    <div className="button__container">
                        <a href="https://github.com/zkzoomer/rollup-demo" target="_blank" rel="noreferrer" className="button">Code #1</a>
                        <a href="https://github.com/zkzoomer/congestion-control" target="_blank" rel="noreferrer" className="button">Code #2</a>
                    </div>
                </div>

                <div className="projects__card">
                    <h3>Dorsia Club</h3>
                    <img src={dorsiaclub} alt="Dorsia Club" />
                    <figcaption><a href="https://devpost.com/software/dorsia-club" target='_blank' rel="noreferrer">3rd Place at Web3 Infinity Hackathon</a></figcaption>
                    <p>
                        Dynamic and customizable NFT business cards, randomly generated and pinned to IPFS on-demand by an off-chain oracle, which are also natively tradeable. All directly from the frontend.
                        <br/><br/>
                        Tech stack: Solidity, Python, React.
                    </p>
                    <div className="button__container">
                        <a href="https://dorsiaclub.netlify.app/" target="_blank" rel="noreferrer" className="button">Site</a>
                        <a href="https://github.com/zkzoomer/dorsiaclub" target="_blank" className="button" rel="noreferrer">Code</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;