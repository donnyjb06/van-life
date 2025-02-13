import { FC } from "react";
import NavBar, { NavBarProps } from "./NavBar";
import NavBarLink from "./NavBarLink";

interface NavBarComponent extends FC<NavBarProps> {
    Link: typeof NavBarLink;
}

const NavBarComponent: NavBarComponent = NavBar as NavBarComponent;
NavBarComponent.Link = NavBarLink;

export default NavBarComponent;
