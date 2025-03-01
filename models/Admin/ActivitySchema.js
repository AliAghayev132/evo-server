import { Schema } from "#constants/variables.js";

const activitySchema = new Schema({
    _id: false,
    message: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    }
});
export { activitySchema }