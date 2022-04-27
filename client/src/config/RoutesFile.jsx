import { Route, Routes } from "react-router-dom";
import Home from "../page/Home"

const RoutesFile = () => {
    return(
        <Routes>
            <Route 
                path="/" 
                component={Home}
            />

        </Routes>
    )
}