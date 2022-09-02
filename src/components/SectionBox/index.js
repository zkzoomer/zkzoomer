import styled from "styled-components"
import { FaGlobeAmericas, FaGithub } from 'react-icons/fa'

import { theme } from "../../styles"

const BoxWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: ${({order}) => (order === 0 ? `row` : `row-reverse`)};
    align-items: start;
    justify-content: center; 

    border-radius: 5px;
    padding: 20px 15px 20px 15px;

    margin: 25px 0px 25px 0px;
    box-shadow: 2px 2px 2px 1px var(--main-text);
    border: 1px solid var(--title-text);
    background-color: transparent;

    @media screen and (max-width: ${theme.breakpoint}px) {
        flex-direction: column;
        align-items: center;
        padding: 0;
    }
`

const ImageWrapper = styled.div`
    height: 100%;
    width: 30%;
    padding: 0px;
    
    padding-left: 10px;
    padding-right: 10px;

    @media screen and (max-width: ${theme.breakpoint}px) {
        width: 100%;
        padding: 15px 0 15px 0;
    }
`

const PrizeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 10px;
`

const FootnoteWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 10px;
`

const Image = styled.img`
    height: 220px;
    width: 100%;
    object-fit: contain;
    cursor: pointer;
    filter: drop-shadow(2px 2px 5px var(--main-text));

    @media screen and (max-width: ${theme.breakpoint}px) {
        width: 90%;
    }
`

const ContentWrapper = styled.div`
    height: 100%;
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    padding-left: 10px;
    padding-right: 10px;

    @media screen and (max-width: ${theme.breakpoint}px) {
        width: 90%;
        padding: 15px 0 15px 0;
    }
`

const TopRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    width: 100%;
    padding-bottom: 20px;
`

const TitleWrapper = styled.div`
    width: 100%;
    font-family: 'Inter Bold';
    text-align: start;
    font-size: 2rem;
    color: var(--title-text);
    padding-bottom: 10px;
`

const SubtitleWrapper = styled.div`
    width: 100%;
    font-family: 'Inter BoldItalic';
    text-align: start;
    font-size: 1.5rem;
    color: var(--title-text);
    padding-bottom: 20px;
`

const IconsWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: end;
    font-size: 1.8rem;

    > * {
        padding-left: 10px;
        padding-right: 10px;
        cursor: pointer;

        transform: rotate(0deg);
        transition: transform 999s 999s;

        &:hover {   
            transform: rotate(300000deg);
            transition: transform 999s;
        }

        > * {
            filter: invert(56%) sepia(11%) saturate(1568%) hue-rotate(153deg) brightness(88%) contrast(86%);
            height: 100%;
        }
    }
`

const DescriptionWrapper = styled.div`
    text-align: justify;
    text-justify: inter-word;
`
function ProjectBox ({ id, title, description, image, link, repo, prizes }) {
    return(
        <BoxWrapper order={id % 2}>
            <ImageWrapper>
                <a href={link ?? repo} target='_blank' rel="noreferrer">
                    <Image src={image} />
                </a>
                <PrizeWrapper>
                    {prizes}
                </PrizeWrapper>
            </ImageWrapper>
            <ContentWrapper>
                <TopRow>
                    <TitleWrapper>{title}</TitleWrapper>
                    <IconsWrapper>
                        { 
                            link 
                        ?
                            <a href={link} target='_blank' rel="noreferrer">
                                <FaGlobeAmericas />
                            </a>
                        :
                            null
                        }
                        <a href={repo} target='_blank' rel="noreferrer">
                            <FaGithub />
                        </a>
                    </IconsWrapper>
                </TopRow>
                <DescriptionWrapper>{description}</DescriptionWrapper>
            </ContentWrapper>
        </BoxWrapper>
    )
}

function AboutBox ({ id, title, subtitle, description, image, footnote }) {
    return(
        <BoxWrapper order={id % 2}>
            <ImageWrapper>
                <Image src={image} />
                <FootnoteWrapper>
                    {footnote}
                </FootnoteWrapper>
            </ImageWrapper>
            <ContentWrapper>
                <TitleWrapper>{title}</TitleWrapper>
                <SubtitleWrapper>{subtitle}</SubtitleWrapper>
                <DescriptionWrapper>{description}</DescriptionWrapper>
            </ContentWrapper>
        </BoxWrapper>
    )
}

export { ProjectBox, AboutBox }