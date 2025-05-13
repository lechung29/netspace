/** @format */

import { StoryList } from "@/components";
import React from "react";

const NewFeed: React.FunctionComponent = () => {
    return <div className="w-full flex items-center justify-center gap-4">
        <div className="flex-1">
            <StoryList />   
        </div>
        <div className="!w-80">
            Hello
        </div>
    </div>
};

export { NewFeed };
