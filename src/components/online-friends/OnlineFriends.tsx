/** @format */

import { Avatar, Badge } from "antd";
import React from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import type { Swiper as SwiperInstance } from "swiper";

const OnlineFriends: React.FunctionComponent = () => {
    const swiperRef = React.useRef<SwiperInstance | null>(null);
    return (
        <div className="w-full h-auto !p-4 !shadow-sm !bg-white dark:!bg-[#1e293b] !rounded-xl overflow-hidden">
            <div className="!text-[16px] dark:!text-white !text-dark font-semibold !mb-4">Online Friends</div>
            <div className="w-full flex items-center justify-start gap-2">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={6}
                    slidesPerView={6}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                >
                    {Array.from({ length: 100 }, (_, index) => (
                        <SwiperSlide key={index}>
                            <Badge
                                dot={true}
                                key={index}
                                status="success"
                                offset={[-5, 35]}
                                color="green"
                                styles={{
                                    indicator: {
                                        width: "10px",
                                        height: "10px",
                                    },
                                }}
                            >
                                <Avatar className="rounded-full cursor-pointer" src="/src/assets/banner.jpg" size="large" alt="User" />
                            </Badge>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export { OnlineFriends };
