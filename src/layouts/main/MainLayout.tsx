/** @format */

import { Header } from "@/components";
import { Outlet } from "react-router-dom";

const MainLayout: React.FunctionComponent = () => {
    return (
        <section className="dark:bg-[#0f172a] min-h-screen w-full">
            <header className="z-50 h-16 fixed top-0 left-0 w-full px-4 bg-white !border-b !border-slate-200 dark:bg-[#1e293b] dark:!border-slate-800">
               <Header />
            </header>
            <div className="!pt-16 flex gap-2 h-screen bg-white dark:!bg-[#0f172a]">
                <aside className="w-64 hidden lg:block !mt-2 !p-2 !pt-0 shrink-0 scroll-on-hover">
                
                </aside>

                <main className="flex-1 scroll-on-hove p-4">
                    <Outlet />
                </main>
            </div>
        </section>
    );
};

export { MainLayout };
