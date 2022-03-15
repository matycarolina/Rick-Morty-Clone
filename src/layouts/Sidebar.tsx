import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Nav, NavItem } from "reactstrap";
import { Divider } from "@mui/material";

const Sidebar = () => {
  return (
    <>
      <Nav vertical>
        <NavItem>
          <Image
            src="/rickmorty-logo.png"
            width={128}
            height={77}
            alt="Rick and Morty logo"
          />
        </NavItem>
        <Divider />
        <NavItem>
          <Link href="/">
            <a>Home</a>
          </Link>
        </NavItem>
        <Divider />
        <NavItem>
          {" "}
          <Link href="/characters">
            <a>Personajes</a>
          </Link>
        </NavItem>
        <Divider />
        <NavItem>
          <Link href="/locations">
            <a>Ubicaciones</a>
          </Link>
        </NavItem>
        <Divider />
        <NavItem>
          <Link href="/episodes">
            <a>Episodios</a>
          </Link>
        </NavItem>
      </Nav>
    </>
  );
};

export default Sidebar;
