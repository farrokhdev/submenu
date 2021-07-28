import React,{useRef} from "react";
import { FaTimes } from "react-icons/fa";
import sublinks from "../data";
import styled from "styled-components";
import { useGlobalContext } from "../context";
import { colorAndGradiant, fonts, padding } from "../variables";
import { Link } from "react-router-dom";

const SidebarSec = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  background: transparent;
  z-index: 120;
  width: 100%;
  max-width: 400px;
  height: 100%;
  min-height: 700px;
  background: ${colorAndGradiant.colors.secondary};
  color: ${colorAndGradiant.colors.white};
  flex-direction: column;
  gap: 20px;
  display: none;
  padding: ${padding.sidbar};
  @media screen and (max-width: 500px) {
    max-width: 100%;
  }
`;

const CloseSidebar = styled(Link)`
  font-size: ${fonts.h4.desktop};
  position: absolute;
  top: 20px;
  right: 20px;
  color: ${colorAndGradiant.colors.white};
`;
const SidbarLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  h4 {
    color: ${colorAndGradiant.colors.white};
    font-weight: 500;
    letter-spacing: 0.5px;
  }

  .sidebar-sublinks{
    display: flex;
    width: 100%;
    gap:25px;
    align-items: center;
    margin-bottom: 20px;

    a{
    color: ${colorAndGradiant.colors.white};
    font-weight: 500;
    letter-spacing: 0.5px;
    svg{
      margin-right: 5px;
    }
  }
  }
`;

const Sidebar = () => {
  const { sidebarOpen, closeSidebar} = useGlobalContext();
  

  return (
    <SidebarSec className={`${sidebarOpen ? "show" : ""}`}>
      <CloseSidebar onClick={closeSidebar}>
        <FaTimes />
      </CloseSidebar>
      <SidbarLinks>
        {sublinks.map((item, index) => {
          const {links,page } = item;
          return (
            <>
              <h4 key={index}>{page}</h4>
              <div className="sidebar-sublinks">
                {links.map((link,indx)=>{
                  const{label,icon,url}=link
                  return(
                    <>
                    <Link to={url} key={indx}>{icon}{label}</Link>
                    </>
                  )
                })}
              </div>

            </>
          );
        })}
      </SidbarLinks>
    </SidebarSec>
  );
};

export default Sidebar;
