import styled from "styled-components";

const AboutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 80px);
    width: 100%;
    background-color: var(--main-background);
`

export default function About () {

    return(
        <AboutWrapper>
            about
        </AboutWrapper>
    )   
}