import styled from 'styled-components'

const FootnoteContent = styled.a`
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

const InlineBold = styled.a`
    font-weight: 700;
`

const InlineItalic = styled.a`
    font-style: italic;
`

export const aboutInfo = [
    {
        title: 'Aerospace Engineering Degree',
        subtitle: 'Universidad Politécnica de Madrid (Madrid, Spain)',
        description: (
            <>
                Majored in Aerospace Sciences and Technologies with special distinction in 7 subjects, including Mathematics I, Mathematics II, Mathematical Methods, 
                Physics I and Computer Science.
                <br /><br />
                By all means a very technical and tough school, which is what in retrospect has made me love it so much. This school promised to teach me aerospace, 
                but instead <InlineBold> it taught me how to think and approach problems. </InlineBold>
                It is unlikely that I will ever solve a Fluid Mechanics problem again, or analyze the behavior of a turbojet, but the 
                mental model of <InlineItalic>reducing it all to simple energy equations and working from there</InlineItalic> has stayed with me.
            </>
        ),
        image: require('../../images/upm.png'),
        footnote: (
            <FootnoteContent>
                GPA: 8/10 (top 10%)
            </FootnoteContent>
        ) 
    },
    {
        title: 'Flight Test Engineer Intern',
        subtitle: 'Airbus Defence and Space (Getafe, Spain)', // TODO: add LidarSim source code to GitHub and link here
        description: (
            <>
                The Flight Test department inside Airbus Defence and Space is responsible for trajectory calculation for flight operations. The aim of the internship 
                was studying the possibility of using Lidar technology to this end.
                <br /><br />
                I developed a Lidar simulator tool from scratch for simulating a Lidar sensor under these very scenarios with the aim of being able to evaluate different 
                models under specific conditions. Although I already had programming experience, 
                <InlineBold> this taught me how to build something that works for the user, </InlineBold> 
                abstracting away everything else: all the physics, Lidar specifications, data analysis...
            </>
        ),
        image: require('../../images/airbus.png')
    },
    {
        title: 'Masters in Aerospace Engineering',
        subtitle: 'ISAE SUPAERO (Toulouse, France)',
        description: (
            <>
                Majoring in Embedded Systems, the program is much more focused on practical work.
                <br /><br />
                Courses are varied in subject and it is left to the student to find the areas they would like to follow. As part of the Cryptography department, I am 
                completing a research project on verifiable computation for embedded blockchains, studying and implementing scaling solutions based on zero-knowledge 
                proofs. Here is where I decided to finally <InlineBold> pursue a career as a Web3 engineer. </InlineBold>
                <br /><br />
            </>
        ),
        image: require('../../images/isae.png')
    },
]
