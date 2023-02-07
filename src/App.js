import "bootstrap/dist/css/bootstrap.min.css";
import { createContext } from "react";
import "react-awesome-button/dist/styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AdminApp } from "./components/admin/AdminApp";
import { ClientApp } from "./components/client/ClientApp";

export const UserContext = createContext("Guest");

function Greeting() {
    return (
        <div>
            <strong>Hello</strong>
        </div>
    );
}

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/admin/*"
                    element={
                        <UserContext.Provider value={{ greeting: <Greeting />, name: "Balgan" }}>
                            <AdminApp />
                        </UserContext.Provider>
                    }
                />

                <Route path="*" element={<ClientApp />} />
            </Routes>
            <ToastContainer position="top-right" />
        </BrowserRouter>
    );

    // <RouterProvider router={router} />;
}

export default App;
