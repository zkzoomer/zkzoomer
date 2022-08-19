import React from 'react';
import { useSelector, useDispatch } from "react-redux"
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FaTwitter, FaGithub, FaFish, FaEnvelope } from 'react-icons/fa';

import useClickOutside from '../../hooks/useClickOutside';
import { setIsOpen } from '../../state/sidebar/reducer';
import { MenuList } from '../../pages/menuList';
import { theme } from '../../styles';

const SidebarWrapper = styled.aside`
    position: fixed;
    z-index: 999;
    width: ${theme.sidebar_width}px;
    height: 100%;
    background-color: var(--sidebar-backgound);

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    transition: 0.2s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0%')};
    left: ${({ isOpen }) => (isOpen ? '0%' : '-100%')};
`

const SidebarTitle = styled.div`
    height: 80px;
    width: 100%;
    color: var(--title-text);
    font-family: 'Glossy Sheen Shadow';
    font-style: italic;
    font-weight: 600;
    font-size: 2rem;

    display: flex;
    justify-content: center;
    align-items: center;
`

const SidebarMenu = styled.div`
    display: grid;
    grid-template-rows: repeat(${MenuList.length}, 80px);
    width: 100%;
`

const activeclassname = 'active';
const SidebarLink = styled(NavLink).attrs({
    activeclassname,
})`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    cursor: pointer;

    &.${activeclassname} {
        font-weight: 600;
        color: var(--highlighted-light-text);
        text-shadow: 1px 1px var(--main-text);
    }
`

const IconWrapper = styled.div`
    transform: rotate(0deg);
    transition: transform 999s 999s;

    ${SidebarLink}:hover & {   
        transform: rotate(300000deg);
        transition: transform 999s;
    }
`

const SidebarAbout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center;
    padding-bottom: 15px;
`

const SidebarAboutText = styled.div`
    display: flex; 
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-style: italic;
    padding-bottom: 15px;
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
`

// TODO: make icons stay at rotated position
export default function Sidebar() {
    const isOpen = useSelector(state => state.sidebar.isOpen);
    const dispatch = useDispatch();

    let domNode = useClickOutside(() => {
        dispatch(setIsOpen(false))
    });

    const menuList = MenuList.map(({url, title, icon}, index) => {
        return(
            <SidebarLink key={index} exact="true" to={url} activeclassname="active" >
                <IconWrapper>{icon}</IconWrapper>
                &nbsp;&nbsp;&nbsp;
                {title}
            </SidebarLink>
        );
    });

    return (
        <SidebarWrapper ref={domNode} isOpen={ isOpen }>
            <div>
                <SidebarTitle>
                    A CAN A DAY
                </SidebarTitle>
                <SidebarMenu>
                    { menuList }
                </SidebarMenu>
            </div>
            <SidebarAbout>
                <SidebarAboutText>
                    reach out here:
                </SidebarAboutText>
                <SidebarAboutText>
                    <IconLink href='https://twitter.com/0xdeenz' target='_blank' aria_label='Twitter'>
                        <FaTwitter />
                    </IconLink>
                    <IconLink href='https://github.com/0xdeenz' target='_blank' aria_label='Github'>
                        <FaGithub />
                    </IconLink>
                    <IconLink href='mailto:sergion@deenz.dev' target='_blank' aria_label='Mail'>
                        <FaEnvelope />
                    </IconLink>
                </SidebarAboutText>
            </SidebarAbout>
        </SidebarWrapper>
    )
}




// https://youtu.be/eWO1b6EoCnQ