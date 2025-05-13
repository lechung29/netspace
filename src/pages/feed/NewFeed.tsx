/** @format */

import { PeopleYouMightKnow, StoryList } from "@/components";
import React from "react";

const NewFeed: React.FunctionComponent = () => {
    return <div className="w-full flex flex-row items-start justify-center max-[850px]:flex-col max-[850px]:items-center gap-4">
        <div className="flex-1 min-w-0">
            <StoryList />   
        </div>
        <div className="!w-80 flex-shrink-0">
            {/* <div className="w-full h-96 bg-slate-200 dark:bg-slate-700 rounded-lg shadow-md">
                Hello
            </div> */}
            <PeopleYouMightKnow />
        </div>
    </div>
};

export { NewFeed };
