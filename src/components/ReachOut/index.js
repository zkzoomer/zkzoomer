import { FaEnvelope, FaGithub, FaTwitter } from 'react-icons/fa';
import styled from 'styled-components';

const ReachOutWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center; 
align-items: center;
padding-bottom: 15px;
`

const ReachOutContent = styled.div`
    display: flex; 
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-style: italic;
    padding-top: 15px;
`

const IconLink = styled.a`
    color: var(--light-text);
    font-size: 24px;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    padding: 0 10px 0 10px;

    transform: rotate(0deg);
    transition: transform 999s 999s;

    &:hover {   
        transform: rotate(300000deg);
        transition: transform 999s;
    }

    > * {
        height: 100%;
    }
`

export default function ReachOut () {
    
    return(
        <ReachOutWrapper>
            <ReachOutContent>
                reach out here:
            </ReachOutContent>
            <ReachOutContent>
                <IconLink href='https://twitter.com/0xdeenz' target='_blank' aria_label='Twitter'>
                    <FaTwitter />
                </IconLink>
                <IconLink href='https://github.com/0xdeenz' target='_blank' aria_label='Github'>
                    <FaGithub />
                </IconLink>
                <IconLink href='mailto:sergio@deenz.dev' target='_blank' aria_label='Mail'>
                    <FaEnvelope />
                </IconLink>
            </ReachOutContent>
        </ReachOutWrapper>
    )
}