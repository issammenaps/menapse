import Footer from "@/common/components/footer/Footer";
import Navbar from "@/common/components/navbar/Navbar";
import { Menu } from "@/helpers/menu/Menu";
import { useRouter } from 'next/router'
import { useEffect } from "react";
import FullLayout from "../full-layout/FullLayout";

export default function Template(props: any) {

    const router = useRouter()

    const isAdminPage = router.pathname === "/admin"
    return (isAdminPage ? <FullLayout>
        {props.children}
    </FullLayout> : <div className="container-fluid d-flex flex-column min-vh-100">
        <Navbar
            items={Menu}
        />
        <main className="">
            {props.children}
        </main>
        <Footer />
    </div>


    )
}