import styled from "styled-components";
import SectionBox from "../../components/SectionBox";

import { theme } from "../../styles";
import { projectsInfo } from "./projectsInfo";

const ProjectsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    min-height: calc(100vh - 80px);
    width: 100%;
    background-color: var(--main-background);
`

const ProjectsTitle = styled.div`
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

export default function Projects () {

    const projectList = projectsInfo.map(({ title, description, image, link, repo, prizes }, index) => {
        return(
            <SectionBox
                key={index}
                id={index}
                title={title}
                description={description}
                image={image}
                link={link}
                repo={repo}
                prizes={prizes}
            />
        );
    });

    return(
        <ProjectsWrapper>
            <ProjectsTitle>
                My Web3 Projects:
            </ProjectsTitle>
            <ListWrapper>
                {projectList}
            </ListWrapper>
        </ProjectsWrapper>
    )   
}