// Variables
import { Router } from "#constants/variables.js";
// Controller
import eventController from "#controllers/admin/eventController.js";
// Middlewares
import { adminAuthenticateToken } from "#middlewares/adminAuthenticateToken.js";

const EventRouter = Router();

/**
 * @swagger
 * tags:
 *   name: Admin Event
 *   description: Admin üçün tədbir API son nöqtələri
 */

/**
 * @swagger
 * /admin/events:
 *   post:
 *     summary: Yeni Tədbir Əlavə Et
 *     description: Yeni bir tədbir əlavə edir.
 *     tags: [Admin Event]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Tədbirin adı
 *               slug:
 *                 type: string
 *                 description: Tədbirin slug'ı
 *               date:
 *                 type: string
 *                 description: Tədbirin tarixi
 *               schedule:
 *                 type: object
 *                 properties:
 *                   openingTime:
 *                     type: string
 *                     description: Açılış vaxtı
 *                   closingTime:
 *                     type: string
 *                     description: Bağlanış vaxtı
 *                 description: Tədbirin cədvəli
 *               description:
 *                 type: string
 *                 description: Tədbirin təsviri
 *               dailyPlans:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: Tədbirin günlük planları
 *               organizers:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                       description: Təşkilatçının adı
 *                     position:
 *                       type: string
 *                       description: Təşkilatçının mövqeyi
 *                     company:
 *                       type: string
 *                       description: Təşkilatçının şirkəti
 *                 description: Tədbirin təşkilatçıları
 *     responses:
 *       201:
 *         description: Tədbir uğurla əlavə edildi
 *       400:
 *         description: Yanlış məlumat
 *       500:
 *         description: Server xətası
 */

/**
 * @swagger
 * /admin/events/{id}:
 *   delete:
 *     summary: Tədbiri Sil
 *     description: Belirtilen ID'ye sahib bir tədbiri silir.
 *     tags: [Admin Event]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Tədbirin ID'si
 *     responses:
 *       200:
 *         description: Tədbir uğurla silindi
 *       404:
 *         description: Tədbir tapılmadı
 *       500:
 *         description: Server xətası
 */

/**
 * @swagger
 * /admin/events/{id}:
 *   put:
 *     summary: Tədbiri Düzenle
 *     description: Belirtilen ID'ye sahib bir tədbiri düzenler.
 *     tags: [Admin Event]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Tədbirin ID'si
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Tədbirin adı
 *               slug:
 *                 type: string
 *                 description: Tədbirin slug'ı
 *               date:
 *                 type: string
 *                 description: Tədbirin tarixi
 *               schedule:
 *                 type: object
 *                 properties:
 *                   openingTime:
 *                     type: string
 *                     description: Açılış vaxtı
 *                   closingTime:
 *                     type: string
 *                     description: Bağlanış vaxtı
 *                 description: Tədbirin cədvəli
 *               description:
 *                 type: string
 *                 description: Tədbirin təsviri
 *               dailyPlans:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: Tədbirin günlük planları
 *               organizers:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                       description: Təşkilatçının adı
 *                     position:
 *                       type: string
 *                       description: Təşkilatçının mövqeyi
 *                     company:
 *                       type: string
 *                       description: Təşkilatçının şirkəti
 *                 description: Tədbirin təşkilatçıları
 *     responses:
 *       200:
 *         description: Tədbir uğurla düzenlendi
 *       400:
 *         description: Yanlış məlumat
 *       404:
 *         description: Tədbir tapılmadı
 *       500:
 *         description: Server xətası
 */

/**
 * @swagger
 * /admin/events:
 *   get:
 *     summary: Tüm Tədbirləri Al
 *     description: Tüm tədbirləri alır.
 *     tags: [Admin Event]
 *     responses:
 *       200:
 *         description: Tüm tədbirlər uğurla alındı
 *       500:
 *         description: Server xətası
 */

/**
 * @swagger
 * /admin/events/all:
 *   get:
 *     summary: Tüm Tədbirləri (Silinmişlər daxil olmaqla) Al
 *     description: Tüm tədbirləri, silinmişlər daxil olmaqla alır.
 *     tags: [Admin Event]
 *     responses:
 *       200:
 *         description: Tüm tədbirlər uğurla alındı
 *       500:
 *         description: Server xətası
 */

/**
 * @swagger
 * /admin/events/restore/{id}:
 *   put:
 *     summary: Tədbiri Geri Yükle
 *     description: Belirtilen ID'ye sahib bir tədbiri geri yükler.
 *     tags: [Admin Event]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Tədbirin ID'si
 *     responses:
 *       200:
 *         description: Tədbir uğurla geri yüklendi
 *       404:
 *         description: Tədbir tapılmadı
 *       500:
 *         description: Server xətası
 */

EventRouter.post('/', adminAuthenticateToken, eventController.addEvent);
EventRouter.put('/:id', adminAuthenticateToken, eventController.editEvent);
EventRouter.delete('/:id', adminAuthenticateToken, eventController.deleteEvent);
EventRouter.put('/restore/:id', adminAuthenticateToken, eventController.restoreEvent);
EventRouter.get('/', adminAuthenticateToken, eventController.getAllEvents);
EventRouter.get('/all', adminAuthenticateToken, eventController.getAllEventsWithDeleted);

export { EventRouter };