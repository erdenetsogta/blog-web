import "bootstrap/dist/css/bootstrap.min.css";
import "react-awesome-button/dist/styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AdminApp } from "./components/admin/AdminApp";
import { ClientApp } from "./components/client/ClientApp";

// const router = createBrowserRouter([
//     {
//         path: "/admin",
//         element: <AdminApp />,
//     },

//     {
//         path: "*",
//         element: <ClientApp />,
//     },
// ]);

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/admin/*" element={<AdminApp />} />
                <Route path="*" element={<ClientApp />} />
            </Routes>
        </BrowserRouter>
    );

    // <RouterProvider router={router} />;
}

export default App;
