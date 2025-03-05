import { Model, Schema } from "#constants/variables.js";

const settingsSchema = new Schema({
    bitrixForwarding: {
        type: Boolean,
        default: true,
    }
}, {
    timestamps: true,
});

export default Model("Settings", settingsSchema);