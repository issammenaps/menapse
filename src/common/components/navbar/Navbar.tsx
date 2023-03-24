import Image from "next/image";
import Link from "next/link";
import Img from "../image/Img";
import { useEffect, useState, useRef } from "react";
import Dropdown from "../dropdown/Dropdown";
import { INavbar } from "./INavbar";
import Button from "../button/Button";
import { log } from "console";
import { useRouter } from 'next/router';
import i18nConfig from "@/i18n/i18n-config";





function useOutsideAlerter(mobileContainer : any, screenWidth : number, menuState: boolean, callback : ()=> void) {


  useEffect(() => {

    function handleClickOutside(event : any) {

      
      if (screenWidth <= 990 && mobileContainer.current && !mobileContainer.current.contains(event.target) && menuState === true) {
      
          callback();
         
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [mobileContainer, menuState]); 
}



function NavBarContent({ items, screenWidth, closeMenu }: any ) {  
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <>
     {items.map((item: any, index: number) => {
      return (
        item.type === "dropdown" ? (
          <Dropdown closeMenu={closeMenu} breakpoint={screenWidth} style={item.style} dropdownTitle={item.dropdownTitle} items={item.elements} />
        ) : item.type === "linkBtn" ? (
          screenWidth > 990 &&
          <Button title={item.title} href={item.href} variant="btnLink" animated={true} />
        ) : (
          screenWidth <= 990 ?      <div className="mobile-nav-item">
                        <Link onClick={closeMenu} className={`${screenWidth <= 990 ? "text-reset text-decoration-none mobile-nav-item-font" : "nav-link navbar-items"} `}href={item?.href}>{item?.title}</Link>
                  </div>  :    <Link className={`${currentRoute === item?.href ? "active" : ""} ${screenWidth <= 990 ? "text-reset text-decoration-none mobile-nav-item-font" : "nav-link navbar-items nav-items"} `}href={item?.href}>{item?.title}</Link>


        
        )
      )
    })}
    </>
   
  )
}


export default function Navbar({ items }: INavbar) {

  const [isOpen, setToggleMenu] = useState(false)

  const [screenWidth, setScreenWidth] = useState(0)

  const handleWindowResize = () => {
    setScreenWidth(window.innerWidth);
  }

  const handleMenu = () => {
    setToggleMenu(!isOpen);
  }

  const mobileContainer = useRef(null)

  useEffect(() => {


    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);

    if(screenWidth > 990){
      setToggleMenu(false)
    }

    

    

    return () => window.removeEventListener('resize', handleWindowResize);

  },  )


  //useOutsideAlerter(mobileContainer, screenWidth, isOpen, ()=> setToggleMenu(false))

  return (

    
    <nav className="navbar navbar-expand-lg  ">
      <div className=" main-wrapper navbar-container">
        <Link href="/" className="navbar-brand" >
          <Img image="/menaps-logo.png" alt="Welcome | Menaps" width={148} height={30.15} />
        </Link>
        {
          screenWidth  <= 990 && !isOpen &&
          <button className="btn" onClick={handleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
            </svg>
          </button>}
        <div   className={`${screenWidth <= 990 && isOpen  ? "mobile-nav-item-container d-flex " : screenWidth <= 990 && !isOpen ? "mobile-nav-item-container d-none" : "navbar-items-container d-flex"}`} >
          {screenWidth <= 990 &&
            <div className="mobile-nav-header">
            <Link href="/">
              <Img image="/menaps-white-logo.png" alt="Welcome | Menaps" width={148} height={30.15} />
              </Link>
            </div>
          }
         {screenWidth <= 990 ? 
          <div className={ "mobile-nav-content dropdown-item-border"}> 
           <NavBarContent closeMenu={()=> setToggleMenu(false)} items={items} screenWidth= {screenWidth}/>
          </div> :  <NavBarContent items={items} screenWidth= {screenWidth}/>

        } 
         
            </div>
            </div>
      {isOpen && screenWidth <= 990 && <div className="mobile-nav-container">
        <button className="btn close-btn"><i className="bi bi-x-lg" onClick={handleMenu}></i></button>
      </div>}

    </nav>

  )

}