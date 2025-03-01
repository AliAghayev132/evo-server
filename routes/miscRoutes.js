// Variables
import { Router } from "#constants/variables.js";
// Controllers
import miscController from "#controllers/misc/miscController.js";

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
MiscRouter.get('/vacancies', miscController.getVacancies);

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
MiscRouter.get('/events', miscController.getEvents);

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
MiscRouter.get('/courses', miscController.getCourses);

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
MiscRouter.get('/instructors', miscController.getInstructors);

/**
 * @swagger
 * /misc/graduates:
 *   get:
 *     summary: Tüm Mezunları Al
 *     description: Tüm mezunları alır.
 *     tags: [Misc]
 *     responses:
 *       200:
 *         description: Tüm mezunlar uğurla alındı
 *       500:
 *         description: Server xətası
 */
MiscRouter.get('/graduates', miscController.getGraduates);


export { MiscRouter };