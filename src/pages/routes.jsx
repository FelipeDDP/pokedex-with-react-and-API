import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import App from "../App";
import ErrorPage from "./ErrorPage/ErrorPage";
import { Details } from "./details";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route 
                path="/" 
                element={<App />} 
                errorElement={<ErrorPage />} 
                >
                <Route 
                    path="/:name" 
                    element={<Details />}
                    />
            </Route>
            
        </>
    )
)