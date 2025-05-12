/** @format */

import { themeState, useAppSelector } from "@/redux-store";
import { Breakpoint, getLogoImageSrc, useMinWidth } from "@/utils";
import React from "react";
import { useNavigate } from "react-router-dom";
import { SearchForm } from "../search-form";
import { Drawer } from "antd";
import { Button } from "../common";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { HeaderActionBar } from "../header-action";


const Header: React.FunctionComponent = () => {
    const { theme } = useAppSelector(themeState);
    const navigate = useNavigate()
    const isTablet = useMinWidth(Breakpoint.TabletMin)
    const redirectToNewFeed = (): void => { navigate("/")}
    const [open, setOpen] = React.useState(false);

    const drawerIcon: React.JSX.Element = React.useMemo(() => {
        let Icon = open ? IoCloseOutline : IoMenuOutline;
        return <Icon className="text-2xl" />
    }, [open])

    const showDrawer = () => {
        setOpen(!open);
    };

    const onClose = () => {
        setOpen(false);
    };

    React.useEffect(() => {
        if (isTablet) {
            setOpen(false)
        }
    }, [isTablet])

    return (
        <div className="flex justify-between !items-center w-full h-full !px-6 lg:gap-20 md:gap-10">
            <div className="w-auto flex items-center justify-center gap-2">
                <Button 
                    className="max-lg:!block !hidden dark:!bg-transparent !border-none" 
                    type="default" 
                    onClick={showDrawer}
                    icon={drawerIcon}
                />
                <img 
                    src={getLogoImageSrc(theme)} 
                    alt="net_space_logo" 
                    className="md:w-40 w-30 !h-12 cursor-pointer object-cover" 
                    onClick={redirectToNewFeed}
                />
            </div>
            <div className="max-md:hidden flex-1 relative flex items-center justify-center !p-2">
                <SearchForm />
            </div>
            <HeaderActionBar />
            <Drawer
                title="Basic Drawer"
                placement={"left"}
                closable={false}
                onClose={onClose}
                open={open}
                width={300}
                key={"left"}
                rootClassName="!z-10 lg:!hidden"
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p> 
            </Drawer>
        </div>
    );
};

export { Header };
