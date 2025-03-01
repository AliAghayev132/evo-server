// Variables
import { Schema, Model } from "#constants/variables.js";

/**
 * @swagger
 * components:
 *   schemas:
 *     Course:
 *       type: object
 *       required:
 *         - title
 *         - slug
 *         - description
 *         - instructors
 *         - duration
 *         - syllabus
 *       properties:
 *         title:
 *           type: string
 *           description: Kursun adı
 *         slug:
 *           type: string
 *           description: Kursun slug'ı
 *         description:
 *           type: string
 *           description: Kursun təsviri
 *         instructors:
 *           type: array
 *           items:
 *             type: string
 *             format: objectId
 *             description: Eğitmenlerin ID'leri
 *         duration:
 *           type: string
 *           description: Kursun müddəti
 *         syllabus:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Syllabus başlığı
 *               description:
 *                 type: string
 *                 description: Syllabus təsviri
 *           description: Kursun syllabus'u
 *         imageUrl:
 *           type: string
 *           description: Kursun şəkli
 *         isDeleted:
 *           type: boolean
 *           description: Kursun silinmiş olub olmadığını belirtir
 *           default: false
 *       example:
 *         title: "JavaScript for Beginners"
 *         slug: "javascript-for-beginners"
 *         description: "Bu kurs JavaScript'in temel kavramlarını öğretir."
 *         instructors: ["603d2149f1d2c72b1c8f9f1a"]
 *         duration: "10 saat"
 *         syllabus: [
 *           {
 *             title: "Giriş",
 *             description: "JavaScript'e giriş"
 *           },
 *           {
 *             title: "Temel Kavramlar",
 *             description: "Değişkenler, veri tipleri, operatörler"
 *           }
 *         ]
 *         imageUrl: "http://example.com/image.jpg"
 *         isDeleted: false
 */


const courseSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        unique: true,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    instructors: [{
        type: Schema.Types.ObjectId,
        ref: 'Instructor'
    }],
    duration: {
        type: String,
        required: true
    },
    syllabus: [{
        _id: false,
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    }],
    imageUrl: {
        type: String
    },
    isDeleted: {
        type: Boolean,
        default: false,
    }
}, {
    timestamps: true
});

export default Model('Course', courseSchema);
