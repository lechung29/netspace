/** @format */

import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

interface IAuthBannerProps {
    backgroundImageUrl: string;
}

const AuthBanner: React.FunctionComponent<IAuthBannerProps> = (props) => {
    return (
        <div className="relative w-full h-full">
            <img src={props.backgroundImageUrl} className="!h-screen blur-[4px] object-cover" alt="net_space_banner" />
            <div className="absolute bottom-30 left-20 right-20 w-auto h-auto flex flex-col gap-4">
                <img src="/src/assets/onlyicon.png" className="w-20 h-20 !-ml-4 object-cover " />
                <p className="!text-white text-2xl font-semibold">Connect With Friends</p>
                <p className="!text-white text-lg font-medium leading-8">
                    This phrase is more casual and playful. It suggests that you are keeping your friends updated on what’s happening in your life.
                </p>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent" />
        </div>
    );
};

export { AuthBanner };
