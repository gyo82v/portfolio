import Header from "./Header"
import Footer from "./Footer"
import { Outlet } from "react-router"


export default function Layout(){
    return(
        <>
        <Header />
        <main className="flex flex-col flex-1">
            <Outlet />
        </main>
        <Footer />   
        </>
    )
}