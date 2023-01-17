import "bootstrap/dist/css/bootstrap.min.css";
import "react-awesome-button/dist/styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AdminApp } from "./components/admin/AdminApp";
import { ClientApp } from "./components/client/ClientApp";
import { JsApp } from "./components/js/JsApp";
import { JsCondition } from "./components/js/JsCondition";
import { JsLoop } from "./components/js/JsLoop";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/admin/*" element={<AdminApp />} />
                <Route path="/js/*" element={<JsApp />}>
                    <Route path="loop" element={<JsLoop />} />
                    <Route path="condition" element={<JsCondition />} />
                </Route>
                <Route path="*" element={<ClientApp />} />
            </Routes>
            <ToastContainer position="top-right" />
        </BrowserRouter>
    );

    // <RouterProvider router={router} />;
}

export default App;
