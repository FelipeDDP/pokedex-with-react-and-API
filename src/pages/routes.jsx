import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Lists } from "./lists";
import { Details } from "./details";

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Lists />} />
                <Route exact path='/:name' element={<Details />} />
            </Routes>
        </BrowserRouter>
    )
}