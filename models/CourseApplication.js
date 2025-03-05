import { Schema, Model } from "#constants/variables.js";

/**
 * @swagger
 * components:
 *   schemas:
 *     CourseApplication:
 *       type: object
 *       required:
 *         - fullName
 *         - email
 *         - phoneNumber
 *         - resumeUrl
 *         - applicationCategory
 *       properties:
 *         fullName:
 *           type: string
 *           description: Başvuru yapan kişinin adı
 *         email:
 *           type: string
 *           description: Başvuru yapan kişinin email adresi
 *         phoneNumber:
 *           type: string
 *           description: Başvuru yapan kişinin telefon numarası
 *         applicationCategory:
 *           type: string
 *           description: Başvuru kategorisi
 *       example:
 *         fullName: "John Doe"
 *         email: "john.doe@example.com"
 *         phoneNumber: "1234567890"
 *         applicationCategory: "Software Engineering"
 */

const courseApplicationSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    applicationCategory: {
        type: String,
        required: true
    },
    sendedToBitrix: {
        type: Boolean,
        default: false
    },
}, {
    timestamps: true
});

export default Model("CourseApplication", courseApplicationSchema);