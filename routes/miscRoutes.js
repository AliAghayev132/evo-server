// Variables
import { Router } from "#constants/variables.js";
// Controllers
import miscController from "#controllers/misc/miscController.js";
// Middelwares
import { parseJsonFields } from "#middlewares/parseJsonFields.js";

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

/**
 * @swagger
 * /misc/partners:
 *   get:
 *     summary: Tüm Tərəfdaşları Al
 *     description: Tüm tərəfdaşları alır.
 *     tags: [Misc]
 *     responses:
 *       200:
 *         description: Tüm tərəfdaşlar uğurla alındı
 *       500:
 *         description: Server xətası
 */
MiscRouter.get('/partners', miscController.getPartners);

/**
 * @swagger
 * /misc/apply-vacancy:
 *   post:
 *     summary: İş Elanına Başvur
 *     description: İş elanına başvuru yapar.
 *     tags: [Misc]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               fullName:
 *                 type: string
 *                 description: Başvuranın tam adı
 *               email:
 *                 type: string
 *                 description: Başvuranın email adresi
 *               phoneNumber:
 *                 type: string
 *                 description: Başvuranın telefon numarası
 *               applicationCategory:
 *                 type: string
 *                 description: Başvuru kategorisi
 *               file:
 *                 type: string
 *                 format: binary
 *                 description: Başvuranın özgeçmiş dosyası
 *     responses:
 *       201:
 *         description: Başvuru başarıyla gönderildi
 *       400:
 *         description: Geçersiz başvuru verileri veya dosya yükleme hatası
 *       500:
 *         description: Server xətası
 */
MiscRouter.post("/apply-vacancy", parseJsonFields, miscController.applyVacancy);

/**
 * @swagger
 * /misc/apply-course:
 *   post:
 *     summary: Kursa Başvur
 *     description: Kursa başvuru yapar.
 *     tags: [Misc]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fullName:
 *                 type: string
 *                 description: Başvuranın tam adı
 *               email:
 *                 type: string
 *                 description: Başvuranın email adresi
 *               phoneNumber:
 *                 type: string
 *                 description: Başvuranın telefon numarası
 *               applicationCategory:
 *                 type: string
 *                 description: Başvuru yapılan kurs
 *     responses:
 *       201:
 *         description: Başvuru başarıyla gönderildi
 *       400:
 *         description: Geçersiz başvuru verileri
 *       500:
 *         description: Server xətası
 */
MiscRouter.post("/apply-course", parseJsonFields, miscController.applyCourse);



export { MiscRouter };