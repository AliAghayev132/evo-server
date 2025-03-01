// Variables
import { Schema, Model } from "#constants/variables.js";
// Schemas
import { activitySchema } from "./Admin/ActivitySchema.js";


const adminSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    activities: [activitySchema]
}, {
    timestamps: true,
    minimize: false
});

const Admin = Model("Admin", adminSchema);
export default Admin;
