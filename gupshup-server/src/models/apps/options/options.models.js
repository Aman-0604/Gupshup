import mongoose, { Schema } from "mongoose";

// const questionSchema = new Schema({
//     type: [String],
// });

const optionSchema = new Schema(
    {
        trainer: [
            [String],
        ],
        student: [
            [String],
        ],
    },
    { timestamps: true }
);

export const Option = mongoose.model("Option", optionSchema);