import mongoose, { Schema } from "mongoose";

const questionSchema = new Schema({
    type: [String],
});

const optionSchema = new Schema(
    {
        trainer: {
            type: [questionSchema],
        },
        student: {
            type: [questionSchema],
        },
    },
    { timestamps: true }
);

export const Option = mongoose.model("Option", optionSchema);