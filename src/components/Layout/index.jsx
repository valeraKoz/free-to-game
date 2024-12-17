import {Header} from "../Header/index.jsx";
import {Outlet} from "react-router";

export const Layout = () => {
    return (
        <>
            <Header />
            <Outlet/>
        </>
    )
}