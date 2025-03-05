import { Schema, Model } from "#constants/variables.js";

/**
 * @swagger
 * components:
 *   schemas:
 *     VacancyApplication:
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
 *         resumeUrl:
 *           type: string
 *           description: Başvuru yapan kişinin özgeçmişinin URL'si
 *         applicationCategory:
 *           type: string
 *           description: Başvuru kategorisi
 *       example:
 *         fullName: "John Doe"
 *         email: "john.doe@example.com"
 *         phoneNumber: "1234567890"
 *         resumeUrl: "http://example.com/resume.pdf"
 *         applicationCategory: "Software Engineering"
 */

const vacancyApplicationSchema = new Schema({
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
    resumeUrl: {
        type: String,
        required: true
    },
    applicationCategory: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

export default Model("VacancyApplication", vacancyApplicationSchema);