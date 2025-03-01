// Variables
import { Model, Schema } from "#constants/variables.js";

const graduateSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50,
        minlength: 2
    },
    secondName: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50,
        minlength: 2
    },
    title: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100
    },
    comment: {
        type: String,
        required: true,
        trim: true,
        maxlength: 500
    },
    socialMedia: {
        type: String,
        trim: true,
        maxlength: 100
    },
    imageUrl: {
        type: String,
        trim: true,
        maxlength: 200
    }
}, {
    timestamps: true
});

export default Model("Graduate", graduateSchema);