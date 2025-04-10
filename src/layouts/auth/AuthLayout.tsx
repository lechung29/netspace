/** @format */

import { Outlet } from "react-router-dom";
import banner from "@/assets/banner.jpg";
import { AuthBanner } from "@/components";
const AuthLayout: React.FunctionComponent = () => {
    return (
        <section className="sm:flex w-screen h-screen overflow-hidden">
            <div className="relative lg:w-[580px] md:w-96 w-full !p-10 min-h-screen bg-white shadow-xl flex items-center pt-10 dark:bg-slate-900 z-10">
                <Outlet />
            </div>
            <div className="flex-1 max-md:hidden">
                <AuthBanner backgroundImageUrl={banner} />
            </div>
        </section>
    );
};

export { AuthLayout };
