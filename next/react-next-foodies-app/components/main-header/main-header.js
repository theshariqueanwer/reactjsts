"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import MainHederBackground from "./main-heder-background";
import { usePathname } from "next/navigation";
import NavLink from "./nav-link";

export default function MainHeader() {
  console.log("main header server components executing...");
  const path = usePathname();
  return (
    <>
      <MainHederBackground />
      <header className={classes.header}>
        <Link
          className={classes.logo}
          style={{ textTransform: "none" }}
          href="/"
        >
          <Image src={logoImg} alt="a plate with food on it" priority />
          {/* <img src={logoImg.src} alt="a plate with food on it" /> */}
          FindNextLevelFoodHere
          {/* iFood */}
        </Link>

        <nav className={classes.nav}>
          <ul>
            {/* <li>
              <Link
                className={
                  path.startsWith("/meals") ? classes.active : undefined
                }
                href="/meals"
              >
                Browse Meals
              </Link>
            </li>
            <li>
              <Link
                className={path === "/community" ? classes.active : undefined}
                href="/community"
              >
                Foodies Community
              </Link>
            </li> */}
            <li> <NavLink href={"/meals"} >Browse Meals</NavLink> </li>
            <li> <NavLink href={"/community"} >Foodies Community</NavLink> </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
