/** @format */

import { IUserInformation } from "@/types";

export const mapUserInfoFromDataToState = (data: any): IUserInformation => {
    return {
        _id: data._id,
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        displayName: data.displayName,
        createdAt: data.createdAt,
        updatedAt: data.updatedAt,
        avatar: data.avatar,
    };
};
