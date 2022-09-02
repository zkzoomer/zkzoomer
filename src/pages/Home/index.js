import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaCode, FaUserAlt } from "react-icons/fa";

import { theme } from "../../styles";
import ReachOut from "../../components/ReachOut";

const HomeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 80px);
    width: 100%;
    background-color: var(--main-background);
`

const ContentWrapper = styled.div`
    width: 60%;
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: center;

    padding-bottom: 80px;
    @media screen and (max-width: ${theme.breakpoint}px) {
        width: 100%;
        align-items: center;
        flex-direction: column;
    }
`

const ImageWrapper = styled.div`
    width: 50%;
    padding: 20px;

    @media screen and (max-width: ${theme.breakpoint}px) {
        width: 70%;
        padding: 0px;
        padding-bottom: 20px;
    }
`

const DeenImage = styled.img`
    width: 100%;

    /* filter: invert(56%) sepia(11%) saturate(1568%) hue-rotate(153deg) brightness(88%) contrast(86%); */
`

const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    width: 100%;
    padding: 20px;

    @media screen and (max-width: ${theme.breakpoint}px) {
        padding: 0px;
    }
`

const DescriptionTitle = styled.h1`
    height: 100%;
    font-family: 'Glossy Sheen Shadow';
    text-align: start;
    font-size: 2.5rem;
    color: var(--main-text);
    padding-bottom: 10px;

    transform: rotate(0deg);
    transition: transform 999s 999s;
    cursor: pointer;

    &:hover {   
        transform: rotate(300000deg);
        transition: transform 999s;
    }
`

const DescriptionSubTitle = styled.div`
    width: 100%;
    font-family: 'Inter Bold';
    text-align: start;
    font-size: 1.5rem;
    color: var(--main-text);
    padding-bottom: 30px;
`

const DescriptionText = styled.div`
    width: 100%;
    font-size: 1.2rem;
    color: var(--main-text);
    text-align: justify;
    text-justify: inter-word;
`

const InlineBold = styled.span`
    font-weight: 600;
`

const LinksWrapper = styled.div`
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 80px;

    @media screen and (max-width: ${theme.breakpoint}px) {
        padding-bottom: 80px;
        width: 90%;
    }
`

const Link = styled(NavLink)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    cursor: pointer;

    &:hover {
        font-weight: 600;
        color: var(--highlighted-light-text);
        text-shadow: 1px 1px var(--main-text);
    }
`

const IconWrapper = styled.div`
    transform: rotate(0deg);
    transition: transform 999s 999s;

    ${Link}:hover & {   
        transform: rotate(300000deg);
        transition: transform 999s;
    }

    > * {
        height: 100%;
    }
`

const ExternalLinksWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0px;
    width: 30%;

    @media screen and (max-width: ${theme.breakpoint}px) {
        position: relative;
    }
`

const links = [
    {
      title: "Projects",
      url: "/projects",
      icon: <FaCode />,
    },
    /* {
      title: "Articles",
      url: "/articles",
      icon: <FaRegFile />
    }, */
    {
      title: "About",
      url: "/about",
      icon: <FaUserAlt />,
    },
];

export default function Home () {

    const linkList = links.map(({url, title, icon}, index) => {
        return(
            <Link key={index} exact="true" to={url} activeclassname="active" >
                <IconWrapper>{icon}</IconWrapper>
                &nbsp;&nbsp;&nbsp;
                {title}
            </Link>
        );
    });

    return (
        <HomeWrapper>
            <ContentWrapper>
                <ImageWrapper>
                    <DeenImage src={require('../../images/sardines.png')} />
                </ImageWrapper>
                <Description>  
                    <DescriptionTitle>gm</DescriptionTitle>
                    <DescriptionSubTitle>My name is Sergio</DescriptionSubTitle>
                    <DescriptionText>
                        I am an aerospace/embedded engineer turned web3 developer.
                        <br /><br />
                        Why the switch? Because I want to commit my most productive years to the fastest growing industry of the decade, 
                        creating a better and fairer financial system for all of us. After all, I wasn't taught how to build planes, but 
                        how to solve problems.
                        <br /><br />
                        I have experience with 
                        <InlineBold> React</InlineBold>, 
                        <InlineBold> Node.js</InlineBold>, 
                        <InlineBold> Solidity</InlineBold>, 
                        <InlineBold> Python</InlineBold>, and 
                        <InlineBold> zk-SNARKs</InlineBold>. 
                        And I also eat a can of sardines every day (hence the name).
                    </DescriptionText>
                </Description>
            </ContentWrapper>
            <LinksWrapper>
                {linkList}
            </LinksWrapper>
            <ExternalLinksWrapper>
                <ReachOut />
            </ExternalLinksWrapper>
        </HomeWrapper>
    )
}