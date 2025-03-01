// Variables
import { Schema, Model } from "#constants/variables.js";

/**
 * @swagger
 * components:
 *   schemas:
 *     Instructor:
 *       type: object
 *       required:
 *         - firstName
 *         - secondName
 *         - title
 *         - yearsOfExperience
 *         - certificates
 *         - workExperience
 *         - bio
 *         - category
 *         - socialMedia
 *         - description
 *       properties:
 *         firstName:
 *           type: string
 *           description: Eğitmenin adı
 *         isDeleted:
 *           type: boolean
 *           description: Eğitmenin silinmiş olup olmadığını belirtir
 *           default: false
 *         secondName:
 *           type: string
 *           description: Eğitmenin soyadı
 *         title:
 *           type: string
 *           description: Eğitmenin ünvanı
 *         yearsOfExperience:
 *           type: number
 *           description: Eğitmenin tecrübe yılları
 *         certificates:
 *           type: array
 *           items:
 *             type: string
 *           description: Eğitmenin sertifikaları
 *         workExperience:
 *           type: array
 *           items:
 *             type: string
 *           description: Eğitmenin iş tecrübeleri
 *         bio:
 *           type: string
 *           description: Eğitmenin biyografisi
 *         category:
 *           type: string
 *           description: Eğitmenin kategorisi
 *         imageUrl:
 *           type: string
 *           description: Eğitmenin resim URL'si
 *         socialMedia:
 *           type: string
 *           description: Eğitmenin sosyal medya hesapları
 *         description:
 *           type: string
 *           description: Eğitmenin açıklaması
 *       example:
 *         firstName: "John"
 *         isDeleted: false
 *         secondName: "Doe"
 *         title: "Senior Instructor"
 *         yearsOfExperience: 10
 *         certificates: ["Certificate 1", "Certificate 2"]
 *         workExperience: ["Company 1", "Company 2"]
 *         bio: "This is a bio."
 *         category: "Programming"
 *         imageUrl: "http://example.com/image.jpg"
 *         socialMedia: "@johndoe"
 *         description: "This is a description."
 */

const instructorSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
    secondName: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
    },
    yearsOfExperience: {
        type: Number,
        required: true
    },
    certificates: {
        type: [String],
        required: true
    },
    workExperience: {
        type: [String],
        required: true
    },
    bio: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String
    },
    socialMedia: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
});

export default Model('Instructor', instructorSchema);
