/** @format */

import React, { useRef } from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import type { Swiper as SwiperInstance } from "swiper";
import { useImmerState } from "@/hooks/useImmerState";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import { classNames } from "@/utils";
import { Button } from "../common";
import { StoryAvatar } from "../story-avatar";
import "./StoryList.scss";

export interface IStoryListProps {
    items?: any[];
}

interface IStoryListState {
    isStart: boolean;
    isEnd: boolean;
}

const initialState: IStoryListState = {
    isStart: true,
    isEnd: false,
};

const StoryList: React.FunctionComponent<IStoryListProps> = (_props) => {
    const [state, setState] = useImmerState<IStoryListState>(initialState);
    const { isStart, isEnd } = state;
    const swiperRef = useRef<SwiperInstance | null>(null);

    const onNextItemClick = (): void => {
        if (swiperRef.current) {
            swiperRef.current.slideNext();
            setState({ isStart: false });
            if (swiperRef.current.isEnd) {
                setState({ isEnd: true });
            }
        }
    };

    const onPreviousItemClick = (): void => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev();
            setState({ isEnd: false });
            if (swiperRef.current.isBeginning) {
                setState({ isStart: true });
            }
        }
    };
    return (
        <section className="g-story-list-section">
            <div className="flex justify-start items-center gap-2">
                <Button
                    className={classNames("dark:!bg-[#293445] dark:hover:!bg-[#293445] !bg-[#f1f5f9] hover:!bg-[#dfeefe] !shadow-xl !rounded-full", { "invisible": isStart }, { "visible": !isStart })}
                    onClick={onPreviousItemClick}
                    icon={<GrFormPrevious className="dark:!text-white !text-black !text-lg" />}
                />
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={10}
                    slidesPerView={2}
                    className="g-story-list-section-List-swiper"
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                >
                    {Array.from({ length: 105 }, (_, index) => (
                        <SwiperSlide key={index}>
                            <StoryAvatar />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <Button
                    className={classNames("dark:!bg-[#293445] dark:hover:!bg-[#293445] !bg-[#f1f5f9] hover:!bg-[#dfeefe] !shadow-xl !rounded-full", { "invisible": isEnd }, { "visible": !isEnd })}
                    onClick={onNextItemClick}
                    icon={<GrFormNext className="dark:!text-white !text-black !text-lg" />}
                />
            </div>
        </section>
    );
};

export { StoryList };
