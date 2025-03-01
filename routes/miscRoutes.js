// Variables
import { Router } from "#constants/variables.js";
// Controllers
import vacancyController from "#controllers/admin/vacancyController.js";
import eventController from "#controllers/admin/eventController.js";
import courseController from "#controllers/admin/courseController.js";
import instructorController from "#controllers/admin/instructorController.js";

const MiscRouter = Router();

/**
 * @swagger
 * tags:
 *   name: Misc
 *   description: Siteye giren kullanıcılar için çeşitli API son noktaları
 */

/**
 * @swagger
 * /misc/vacancies:
 *   get:
 *     summary: Tüm İş Elanlarını Al
 *     description: Tüm iş elanlarını alır.
 *     tags: [Misc]
 *     responses:
 *       200:
 *         description: Tüm iş elanları uğurla alındı
 *       500:
 *         description: Server xətası
 */
MiscRouter.get('/vacancies', vacancyController.getAllVacancies);

/**
 * @swagger
 * /misc/events:
 *   get:
 *     summary: Tüm Tədbirləri Al
 *     description: Tüm tədbirləri alır.
 *     tags: [Misc]
 *     responses:
 *       200:
 *         description: Tüm tədbirlər uğurla alındı
 *       500:
 *         description: Server xətası
 */
MiscRouter.get('/events', eventController.getAllEvents);

/**
 * @swagger
 * /misc/courses:
 *   get:
 *     summary: Tüm Kursları Al
 *     description: Tüm kursları alır.
 *     tags: [Misc]
 *     responses:
 *       200:
 *         description: Tüm kurslar uğurla alındı
 *       500:
 *         description: Server xətası
 */
MiscRouter.get('/courses', courseController.getAllCourses);

/**
 * @swagger
 * /misc/instructors:
 *   get:
 *     summary: Tüm Eğitmenleri Al
 *     description: Tüm eğitmenleri alır.
 *     tags: [Misc]
 *     responses:
 *       200:
 *         description: Tüm eğitmenler uğurla alındı
 *       500:
 *         description: Server xətası
 */
MiscRouter.get('/instructors', instructorController.getAllInstructors);

export { MiscRouter };