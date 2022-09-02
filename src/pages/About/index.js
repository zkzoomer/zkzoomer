import styled from "styled-components";

import { AboutBox } from "../../components/SectionBox";
import { theme } from "../../styles";
import { aboutInfo } from "./aboutInfo";
import { ReactComponent as ES } from "../../images/spanish.svg"
import { ReactComponent as EN } from "../../images/english.svg"
import { ReactComponent as FR } from "../../images/french.svg"

const AboutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    min-height: calc(100vh - 80px);
    width: 100%;
    background-color: var(--main-background);
`

const AboutTitle = styled.div`
    width: 70%;
    font-family: 'Inter Bold';
    text-align: start;
    font-size: 1.5rem;
    color: var(--main-text);
    padding-top: 50px;

    @media screen and (max-width: ${theme.breakpoint}px) {
        text-align: center;
    }
`

const ListWrapper = styled.div`
    width: 70%;

    @media screen and (max-width: ${theme.breakpoint}px) {
        width: 100%;
    }
`

const LanguagesWrapper = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    align-items: start;
    justify-content: space-between; 

    border-radius: 5px;
    padding: 20px 15px 20px 15px;

    margin: 25px 0px 25px 0px;
    box-shadow: 2px 2px 2px 1px var(--main-text);
    border: 1px solid var(--title-text);
    background-color: transparent;

    @media screen and (max-width: ${theme.breakpoint}px) {
        padding: 20px 0px 20px 0px;
    }
`

const LanguageText = styled.div`
    font-family: 'Inter Bold';
    font-size: 1.5rem;
    color: var(--title-text);
    padding-left: 10px;
`

const Flags = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 10px;
    height: 100%;

    > * {
        height: 100%;
    }
`

export default function About () {

    const aboutList = aboutInfo.map(({ title, subtitle, description, image, footnote }, index) => {
        return(
            <AboutBox
                key={index}
                id={index}
                title={title}
                subtitle={subtitle}
                description={description}
                image={image}
                footnote={footnote}
            />
        );
    });

    return(
        <AboutWrapper>
            <AboutTitle>
                About the deenz:
            </AboutTitle>
            <ListWrapper>
                {aboutList}
                <LanguagesWrapper>
                    <LanguageText>
                        Languages:
                    </LanguageText>
                    <Flags>
                        <ES />
                        <EN />
                        <FR />
                    </Flags>
                </LanguagesWrapper>
            </ListWrapper>
        </AboutWrapper>
    )   
}