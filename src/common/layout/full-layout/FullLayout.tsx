import React from "react";
import { Container } from "reactstrap";
import Header from "../headers/app-header/Header";
import Sidebar from "../sidebars/vertical/Sidebar";

const FullLayout = ({ children }: any) => {
  const [open, setOpen] = React.useState(false);
  const showMobilemenu = () => {
    setOpen(!open);
  };

  return (
    <main className="admin-bg"> 
      <div className="pageWrapper d-md-block d-lg-flex">
        {/******** Sidebar **********/}
        <aside
          className={`sidebarArea shadow bg-white ${!open ? "" : "showSidebar"
            }`}
        >
          <Sidebar showMobilemenu={() => showMobilemenu()} />
        </aside>
        {/********Content Area**********/}
        <div className="contentArea">
          <Header showMobmenu={() => showMobilemenu()} />
          <Container className="p-4 wrapper " fluid>
            <div>{children}</div>
          </Container>
        </div>

      </div>
    </main>
  );
};

export default FullLayout;
