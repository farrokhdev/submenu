import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { colorAndGradiant, fonts } from "../variables";
import { useGlobalContext } from "../context";
import sublinks from "../data";
import { Link } from "react-router-dom";

const SubmenuSec = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  opacity: 0;
  pointer-events: none;
  padding: 20px;
  background: ${colorAndGradiant.colors.white};
  transition: 0.3s ease;
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.11);
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.11);
  /* overflow: hidden; */
  h4 {
    font-size: ${fonts.p.desktop};
    color: ${colorAndGradiant.colors.primary};
    font-weight: 500;
    letter-spacing: 0.5px;
  }

  &::before {
    content: "";
    position: absolute;
    top: -4px;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    background: ${colorAndGradiant.colors.white};
    width: 12px;
    height: 12px;
    border-radius: 3px;
  }
`;

const NavSubLinks = styled.div`
  display: flex;
  min-width: 200px;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  transition: 0.3s ease;
    a {
      display: flex;
      align-items: center;
      color: ${colorAndGradiant.colors.secondary};
      font-weight: 400;
      font-size: ${fonts.p.desktop1000};
      svg {
        margin-right:5px;
      }
    }
    a:hover{
        color:${colorAndGradiant.colors.forth} !important;
      }
`;

const Submenu = () => {
  const[column,setColumn]=useState('col-2');
  const {
    submenuOpen,
    location,
    page: { page, links }
  } = useGlobalContext();
  const submenuRef = useRef(null);
  useEffect(() => {
    setColumn('col-2');
    const subMenu = submenuRef.current;
    const { center, bottom } = location;
    subMenu.style.left = `${center}px`;
    subMenu.style.top = `${bottom}px`;
  
    if(links.length===3){
      setColumn('col-3');
    }
    if(links.length>3){
      setColumn('col-4');
    }
  }, [location,links,column]);
  return (
    <SubmenuSec className={`${submenuOpen ? "sub-show" : ""}`} ref={submenuRef}>
      <h4>{page}</h4>
      <NavSubLinks className={`${column}`}>
        {links.map((link, index) => {
          const { label, icon, url } = link;
          return (
            <Link key={index} to={url}>
              {icon}
              {label}
            </Link>
          );
        })}
      </NavSubLinks>
    </SubmenuSec>
  );
};

export default Submenu;
