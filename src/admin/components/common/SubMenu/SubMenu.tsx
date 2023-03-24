import React, { useState } from "react";
import classNames from "classnames";
import { Collapse, NavItem, NavLink } from "reactstrap";
import { useDispatch } from "react-redux";

const SubMenu = (props: any) => {
    const dispatch = useDispatch();
    const [collapsed, setCollapsed] = useState(true);
    const toggle = () => setCollapsed(!collapsed);
    const { icon, title, items } = props;

    function navigateTo(page: string) {
        dispatch.pageModel.setPage({ page: page })
    }
    return (
        <div>
            <NavItem
                onClick={toggle}
                className={`sidenav-bg ${classNames({ "menu-open": !collapsed })}`}
            >


                <NavLink className="dropdown-toggle nav-link text-secondary py-3 pointer">
                    <i className={icon}></i>
                    <span className="ms-3 d-inline-block">{title}</span>
                </NavLink>
            </NavItem>
            <Collapse
                isOpen={!collapsed}
                navbar
                className={classNames("items-menu", { "mb-1": !collapsed })}

            >
                {items.map((item: any, index: number) => (
                    <NavItem key={index} className="pl-4">
                        <a className={
                            "nav-link text-secondary py-3  pointer"
                        }
                            onClick={() => navigateTo(item.to)}
                        >
                            {item.title}
                        </a>
                    </NavItem>
                ))}
            </Collapse>
        </div>
    );
};

export default SubMenu;
