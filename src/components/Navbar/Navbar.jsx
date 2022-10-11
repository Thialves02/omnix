import React from 'react'
import logo from '../../assets/images/logo.png'
import { NavbarContainer } from './style'

export default function Navbar() {
    return (
        <NavbarContainer >
            <img src={logo} alt="logo" />
        </NavbarContainer>
    )
}
