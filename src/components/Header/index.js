import styled, { css } from 'styled-components'
import { useDispatch } from 'react-redux'
import useScrollPosition from '@react-hook/window-scroll'
import { useSelector } from "react-redux"
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

import { setIsOpen } from '../../state/sidebar/reducer';
import { theme } from '../../styles';


const HeaderWrapper = styled.div`
    position: sticky;
    padding: 0px 30px 0px 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    z-index: 2;
    height: 80px;

    background-color: ${({showBackground}) => (showBackground ? `var(--dark-background)` : `var(--main-background)`)};
    transition: 0.2s all ease;

    @media screen and (max-width: ${theme.breakpoint}px) {
        padding: 0px 20px 0 20px;
    }
`

const AppButtons = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;

    transition: 0.2s ease-in-out;
    margin-left: ${({ isOpen }) => (isOpen ? `${theme.sidebar_width}px` : `0px`)};

    @media screen and (max-width: ${theme.breakpoint}px) {
        margin-left: 0;
    }
`

const LogoWrapper = styled.div`
    font-size: 4rem;
    font-family: 'Glossy Sheen Shadow';
    color: var(--title-text);

    transition: 0.2s ease-in-out;
    margin-right: ${({ isOpen }) => (isOpen ? `${theme.sidebar_width}px` : `0px`)};

    @media screen and (max-width: ${theme.breakpoint}px) {
        font-size: 3rem;
        margin-right: 0;
    }
`

const WalletWrapper = styled.div`
    width: 100%;
`

const SidebarButton = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
    font-size: ${({sidebarIsOpen}) => (sidebarIsOpen ? `1.1rem` : `1.5rem`)};
    border: none;
`

const Close = styled(CloseIcon)`
    color: var(--title-text);
    width: 20px;
    cursor: pointer;
`
const Open = styled(HamburgerIcon)`
    color: var(--title-text);
    width: 25px;
    cursor: pointer;
`

export default function Header () {
    const sidebarIsOpen = useSelector(state => state.sidebar.isOpen);

    const scrollY = useScrollPosition();
    const dispatch = useDispatch();

    const toggleOpen = () => {
        dispatch(setIsOpen(!sidebarIsOpen))
    }

    function OpenSidebarIcon () {
        return (
            <SidebarButton >
                <Open sidebarIsOpen={sidebarIsOpen} onClick={toggleOpen}/>
            </SidebarButton>
        )
    }

    function CloseSidebarIcon () {
        return (
            <SidebarButton >
                <Close sidebarIsOpen={sidebarIsOpen} onClick={toggleOpen}/>
            </SidebarButton>
        )
    }

    return (
        <HeaderWrapper showBackground={scrollY > 45}>
            <AppButtons isOpen={sidebarIsOpen}>
                { sidebarIsOpen ? <CloseSidebarIcon onClick={toggleOpen}/> : <OpenSidebarIcon onClick={toggleOpen}/> }
            </AppButtons>
            <LogoWrapper isOpen={sidebarIsOpen}>
                DEENZ.DEV
            </LogoWrapper>
            <WalletWrapper>
                {/* TBA */}
            </WalletWrapper>
        </HeaderWrapper>
    )
}