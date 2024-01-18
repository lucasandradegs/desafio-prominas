import mongoose, { Schema } from "mongoose";

const briefSchema = new Schema(
    {
        title: String,
        course: String,
        feedback: String
    }, {
        timestamps: true
    }
);

const Brief = mongoose.models.Brief || mongoose.model("Brief", briefSchema)

export default Brief;