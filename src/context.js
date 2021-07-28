import React, {useState, useContext } from "react";
import sublinks from "./data";

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const[location,setLocation]=useState({});
  const[page,setPage]=useState({page:'',links: []});
 


  const openSidebar = () => { 
    setSidebarOpen(true);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  const openSubmenu = (text,cordinates) => {
    const page=sublinks.find((links)=>links.page===text);
    setPage(page);    
    setSubmenuOpen(true);
    setLocation(cordinates); 
  };
  const closeSubmenu = () => {
    setSubmenuOpen(false);
  };

  const displaySubmenu=(e)=>{
    
    const page = e.target.textContent;
    const tmpBtn =e.target.getBoundingClientRect();
    const center=(tmpBtn.left+tmpBtn.right)/2;
    const bottom=tmpBtn.bottom-3;
    openSubmenu(page,{center,bottom});
    
  }


  return (
    <AppContext.Provider
      value={{  
        sidebarOpen,
        submenuOpen,
        openSidebar,
        closeSidebar,
        openSubmenu,
        closeSubmenu,
        displaySubmenu,
        location,
        page
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
