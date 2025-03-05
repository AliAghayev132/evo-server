// Variables
import { Schema, Model } from "#constants/variables.js";

const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    coverImage: {
        type: String,
        required: false,
    },
    imageUrls: {
        type: [String]
    }
});
export default Model("Blog", blogSchema);