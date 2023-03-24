import { Button, Nav, NavItem } from "reactstrap";
import React, { useEffect, useState, useRef } from "react";
import Logo from "@/common/components/Logo/Logo";
import { useDispatch } from "react-redux";
import LanguageModal from "@/admin/components/common/LanguageModal/LanguageModal";
import SubMenu from "@/admin/components/common/SubMenu/SubMenu";
const navigation = [
  {
    title: "Dashboard",
    to: "#",
    icon: "bi bi-speedometer2",
  },
  {
    title: "Pages",
    to: "Index",
    icon: "bi bi-file-earmark",
  },
  {
    title: "Settings",
    to: "#",
    icon: "bi bi-gear-fill",
    submenus: [
      {
         title: "Languages", 
         to: "Language"
      }

    ]
  }

];

const Sidebar = ({ showMobilemenu }: any) => {

  const dispatch = useDispatch();
  function navigateTo(page: string) {
    dispatch.pageModel.setPage({ page: page })
  }
  const [modal, setModal] = useState(false);

  const closeModal = () => {
    setModal(false);
    console.log(modal)
  }

  const toggle = () => {
    setModal(!modal)
  };

  const closeBtn = (
    <button className="btn" style={{ fontSize: 16 }} onClick={toggle} type="button">
      &times;
    </button>
  );





  return (
    <>
      <div className="p-3">
        <div className="d-flex align-items-center justify-content-center mt-5">
          <Logo />
        </div>
        <div className="pt-4 mt-2">
          <Nav vertical className="sidebarNav">
           
            {navigation.map((navi, index) => (
              navi.submenus ?  <SubMenu title={navi.title} icon={navi.icon} items={navi.submenus} /> :
              <NavItem key={index} className="sidenav-bg">
                <a className={
                  "nav-link text-secondary py-3 pointer"
                }
                  onClick={() => navigateTo(navi.to)}
                >

                  <i className={navi.icon}></i>
                  <span className="ms-3 d-inline-block">{navi.title}</span>
                </a>
              </NavItem>
            ))}
            <div className="position-fixed bottom-0 start-0 mt-5">
              <button className="btn" onClick={toggle}><i className="bi bi-translate"></i></button>
            </div>
          </Nav>
        </div>
      </div>

      {modal && <LanguageModal modal={modal} toggle={toggle} closeBtn={closeBtn} />}

    </>
  );
};

export default Sidebar;
