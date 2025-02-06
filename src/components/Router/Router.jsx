import {Routes, Route} from "react-router-dom"

import {Home} from "../Home/Home"
import { Menu } from "../Menu/Menu"
export function Router(){

    return(

        <>

        <Menu></Menu>

        <Routes>
            <Route path="/" element={ <Home /> } />
        </Routes>

        </>
    )

}