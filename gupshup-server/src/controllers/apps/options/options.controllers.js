import mongoose from "mongoose";
import { Option } from "../../../models/apps/options/options.models.js";
import { ApiResponse } from "../../../utils/ApiResponse.js";
import { asyncHandler } from "../../../utils/asyncHandler.js";

const getAllOptions = asyncHandler(async (req, res) => {
    const options = await Option.find();
    return res
        .status(200)
        .json(
            new ApiResponse(200, options || [], "Options fetched successfully")
        );
});

export { getAllOptions };
