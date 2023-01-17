import { Outlet } from "react-router";

export function JsApp() {
    return (
        <div>
            <h1> JS APP</h1>
            <Outlet />
            {/* <Router>
                <Route path="loop" element={<JsLoop />} />
                <Route path="condition" element={<JsCondition />} />
            </Router> */}
        </div>
    );
}
