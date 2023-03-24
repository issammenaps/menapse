import Link from "next/link"
import { it } from "node:test"
import { useState, useRef, useEffect } from "react"
import Img from "../image/Img"
import { IDropdown } from "./IDropdown"
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

export default function Dropdown({ breakpoint, style, dropdownTitle, items, closeMenu }: IDropdown) {

  const [isOpen, setOpen] = useState(false)
  const [language, setLanguage] = useState({
    title: "English",
    icon: "/en.png"
  });
  const { i18n } = useTranslation();

  const handleLanguage = (lang: { title: string, icon: string }) => {
    i18n.changeLanguage("fr")

    setLanguage(() => ({ ...language, title: lang.title, icon: lang.icon }))
    if (breakpoint && breakpoint <= 990) {
      closeMenu
    }
  }

  const handleClick = () => {
    if (breakpoint && breakpoint <= 990) {
      setOpen(!isOpen);
    }


  }
  const closeDropdown = () => {
    if (breakpoint && breakpoint > 990) {
      setOpen(false);
    }
  }

  const openDropdown = () => {
    if (breakpoint && breakpoint > 990) {
      setOpen(true);
    }
  }

  function useOutsideAlerter(ref: any) {
    useEffect(() => {

      function handleClickOutside(event: any) {

        if (ref.current && !ref.current.contains(event.target)) {
        }
      }
      document.addEventListener("mouseleave", handleClickOutside);
      return () => {
        document.removeEventListener("mouseleave", handleClickOutside);
      };
    }, [ref]);
  }


  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);
  const router = useRouter();
  const currentRoute = router.pathname;
  const checkIfExists = (value: any, data: any[]) => {
    return data.some((item: any) => item.href === value);
  };
  return (

    <>
      {breakpoint && breakpoint > 990 ?
        <li className={`nav-item dropdown menu-li dropdown-a pointer ${checkIfExists(currentRoute, items) ? " active" : ""}`} >
          {
            style === "lang" ? (<a className="nav-link  dropdown-toggle text-decoration-non d-flex align-items-center navbar-items pe-none" data-bs-toggle="dropdown" >
              <Img image={language.icon} alt={language.title} width={18} height={12} marginRight={true} /> {language.title}
            </a>

            ) :
              <a className={` nav-item nav-link dropdown-toggle text-decoration-none  d-flex align-items-center navbar-items pe-none  `} data-bs-toggle="dropdown"  >
                {dropdownTitle}
              </a>
          }

          <ul className={`dropdown-menu`}   >
            <div className="subdropdown-menu">

              {style === 'lang' ? items.map((item: any, index: number) => {
                return !item.isSelected && <li key={index} >
                  <a className="dropdown-item " onClick={() => handleLanguage(item)}>  {style === "lang" && <Img image={item.icon} alt={item.title} width={18} height={12} marginRight={true} />} {item.title}</a></li>
              }) : items.map((item: any, index: number) => {
                return <li key={index} >
                  <Link className="dropdown-item " href={item.href} >  {style === "lang" && <Img image={item.icon} alt={item.title} width={18} height={12} marginRight={true} />} {item.title}</Link></li>
              })}

            </div>

          </ul>

        </li> :
        <li className=" dropdown menu-li" onClick={() => handleClick()}   >
          {
            style === "lang" ? (<a className={`dropDown-toggle text-decoration-none  d-flex justify-content-between  mobile-nav-item-font text-reset  `}  >
              <div className="d-flex align-items-center">
                <Img image={language.icon} alt={language.title} width={18} height={12} marginRight={true} /> {language.title}
              </div>
              <i className={`bi ${isOpen ? "bi-chevron-right" : "bi-chevron-down"} `} style={{ fontSize: 15 }} ></i>
            </a>

            ) :
              <a className={` dropDown-toggle text-decoration-none d-flex justify-content-between  mobile-nav-item-font text-reset `}  >
                <span>{dropdownTitle} </span>
                <i className={`bi ${isOpen ? "bi-chevron-right" : "bi-chevron-down"} `} style={{ fontSize: 15 }} ></i>

              </a>
          }

          {isOpen && (
            <ul className={`dropDown-menu`}   >

              {style === 'lang' ? items.map((item: any, index: number) => {
                return !item.isSelected && <li key={index} >
                  <Link className="dropdown-item navbar-items " href={item.href} onClick={() => handleLanguage(item)}>  {style === "lang" && <Img image={item.icon} alt={item.title} width={18} height={12} marginRight={true} />} {item.title}</Link></li>
              }) : items.map((item: any, index: number) => {
                return <li key={index} >
                  <Link onClick={closeMenu} className="dropdown-item navbar-items " href={item.href} >  {style === "lang" && <Img image={item.icon} alt={item.title} width={18} height={12} marginRight={true} />} {item.title}</Link></li>
              })}
            </ul>
          )}

        </li>
      }

    </>







  )
}



{/* 

  <li className="nav-item dropdown">
        <a className="nav-link  dropdown-toggle" href="#" data-bs-toggle="dropdown">  Hover me  </a>
         <ul className="dropdown-menu">
           <li><a className="dropdown-item" href="#"> Submenu item 1</a></li>
           <li><a className="dropdown-item" href="#"> Submenu item 2 </a></li>
           <li><a className="dropdown-item" href="#"> Submenu item 3 </a></li>
         </ul>
     </li>



          <li  ref={wrapperRef} className="nav-item dropdown menu-li " onMouseEnter={()=>openDropdown()}  onClick={() =>handleClick()} >
        {
         style === "lang" ? (<a className={`text-decoration-none dropdown-toggle ${ breakpoint && breakpoint <= 990 ? "mobile-nav-item-font text-reset " :  "navbar-items"}   `}  >
                <Img image={language.icon} alt={language.title} width={18} height={12} marginRight = {true}/> {language.title} 
         </a>
               
         ) : 
         <a className={` dropdown-toggle text-decoration-none ${ breakpoint && breakpoint <= 990 ? "mobile-nav-item-font text-reset " :  "navbar-items"}   `}  > 
         { dropdownTitle} 
         </a>
       }

      { isOpen &&(
           <ul  className={`dropDown-menu`}   onMouseLeave={()=> closeDropdown()}>
               {items.map((item: any, index: number) =>{
                   return <li className="menu-li" key={index} >   
                   <Link className="dropdown-item navbar-items" href={item.href} onClick={()=> handleLanguage(item)}>  {style === "lang" && <Img image={item.icon} alt={item.title} width={18} height={12} marginRight = {true}/>} {item.title}</Link></li>
               })}
           </ul>
       )}
       
   </li>




         <li  ref={wrapperRef} className="nav-item dropdown menu-li nav-item  menu-li" >
        {
         style === "lang" ? (<a  className="nav-link  dropdown-toggle text-decoration-non" href="#" data-bs-toggle="dropdown" >
                <Img image={language.icon} alt={language.title} width={18} height={12} marginRight = {true}/> {language.title} 
         </a>
               
         ) : 
         <a className={` nav-link dropdown-toggle text-decoration-none `} href="#" data-bs-toggle="dropdown"  > 
         { dropdownTitle} 
         </a>
       }

      
           <ul  className={`dropdown-menu mt-5`}   >
               {items.map((item: any, index: number) =>{
                   return <li  key={index} >   
                   <Link className="dropdown-item " href={item.href} onClick={()=> handleLanguage(item)}>  {style === "lang" && <Img image={item.icon} alt={item.title} width={18} height={12} marginRight = {true}/>} {item.title}</Link></li>
               })}
           </ul>
       
   </li>
*/}