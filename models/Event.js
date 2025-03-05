import { Schema, Model } from "#constants/variables.js";

/**
 * @swagger
 * components:
 *   schemas:
 *     Event:
 *       type: object
 *       required:
 *         - title
 *         - slug
 *         - date
 *         - schedule
 *         - description
 *         - dailyPlans
 *         - organizers
 *         - locationName
 *       properties:
 *         title:
 *           type: string
 *           description: Tədbirin adı
 *         slug:
 *           type: string
 *           description: Tədbirin slug'ı
 *         date:
 *           type: string
 *           description: Tədbirin tarixi
 *         schedule:
 *           type: object
 *           properties:
 *             openingTime:
 *               type: string
 *               description: Açılış vaxtı
 *             closingTime:
 *               type: string
 *               description: Bağlanış vaxtı
 *           description: Tədbirin cədvəli
 *         description:
 *           type: string
 *           description: Tədbirin təsviri
 *         dailyPlans:
 *           type: array
 *           items:
 *             type: string
 *           description: Tədbirin günlük planları
 *         organizers:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Təşkilatçının adı
 *               position:
 *                 type: string
 *                 description: Təşkilatçının mövqeyi
 *               company:
 *                 type: string
 *                 description: Təşkilatçının şirkəti
 *           description: Tədbirin təşkilatçıları
 *         isDeleted:
 *           type: boolean
 *           description: Tədbirin silinmiş olub olmadığını belirtir
 *           default: false
 *         locationName:
 *           type: string
 *           description: Tədbirin yeri
 *         googleMapLink:
 *           type: string
 *           description: Tədbirin Google Map linki
 *         googleFormLink:
 *           type: string
 *           description: Tədbirin Google Form linki (isteğe bağlı)
 *       example:
 *         title: "Tech Conference 2025"
 *         slug: "tech-conference-2025"
 *         date: "2025-03-01"
 *         schedule:
 *           openingTime: "09:00"
 *           closingTime: "17:00"
 *         description: "Açıklama burada."
 *         dailyPlans: ["Plan 1", "Plan 2"]
 *         organizers: [
 *           {
 *             name: "John Doe",
 *             position: "Organizer",
 *             company: "Tech Company"
 *           }
 *         ]
 *         isDeleted: false
 *         locationName: "Tech Hall"
 *         googleMapLink: "http://maps.google.com/..."
 *         googleFormLink: "http://forms.google.com/..."
 */

const eventSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        unique: true,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    schedule: {
        openingTime: {
            type: String,
            required: true,
        },
        closingTime: {
            type: String,
            required: true,
        }
    },
    description: {
        type: String,
        required: true,
    },
    dailyPlans: [
        {
            type: String,
            required: true,
        }
    ],
    organizers: [
        {
            _id: false,
            name: {
                type: String,
                required: true,
            },
            position: {
                type: String,
                required: true,
            },
            company: {
                type: String,
                required: true,
            },
        }
    ],
    isDeleted: {
        type: Boolean,
        default: false
    },
    locationName: {
        type: String,
        required: true,
    },
    googleMapLink: {
        type: String,
        required: false,
    },
    googleFormLink: {
        type: String,
    }
}, {
    timestamps: true
});

export default Model('Event', eventSchema);