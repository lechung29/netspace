/** @format */

import { Outlet } from "react-router-dom";

const MainLayout: React.FunctionComponent = () => {
    return (
        <section className="g-main-layout-section">
            <Outlet />
        </section>
    );
};

export { MainLayout };
