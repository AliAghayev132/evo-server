// Variables
import { Router } from "#constants/variables.js";
// Controller
import graduateController from "#controllers/admin/graduateController.js";

const GraduateRouter = Router();

/**
 * @swagger
 * tags:
 *   name: Admin Graduate
 *   description: Admin üçün mezun API son nöqtələri
 */

/**
 * @swagger
 * /admin/graduates:
 *   post:
 *     summary: Yeni Mezun Əlavə Et
 *     description: Yeni bir mezun əlavə edir.
 *     tags: [Admin Graduate]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *                 description: Mezunun adı
 *               secondName:
 *                 type: string
 *                 description: Mezunun soyadı
 *               title:
 *                 type: string
 *                 description: Mezunun ünvanı
 *               comment:
 *                 type: string
 *                 description: Mezunun yorumu
 *               socialMedia:
 *                 type: string
 *                 description: Mezunun sosyal medya hesabı
 *               image:
 *                 type: string
 *                 format: binary
 *                 description: Mezunun resmi
 *     responses:
 *       201:
 *         description: Mezun uğurla əlavə edildi
 *       400:
 *         description: Yanlış məlumat
 *       500:
 *         description: Server xətası
 */
GraduateRouter.post('/', graduateController.addGraduate);

/**
 * @swagger
 * /admin/graduates/{id}:
 *   put:
 *     summary: Mezunu Düzenle
 *     description: Belirtilen ID'ye sahib bir mezunu düzenler.
 *     tags: [Admin Graduate]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Mezunun ID'si
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *                 description: Mezunun adı
 *               secondName:
 *                 type: string
 *                 description: Mezunun soyadı
 *               title:
 *                 type: string
 *                 description: Mezunun ünvanı
 *               comment:
 *                 type: string
 *                 description: Mezunun yorumu
 *               socialMedia:
 *                 type: string
 *                 description: Mezunun sosyal medya hesabı
 *               image:
 *                 type: string
 *                 format: binary
 *                 description: Mezunun resmi
 *     responses:
 *       200:
 *         description: Mezun uğurla düzenlendi
 *       400:
 *         description: Yanlış məlumat
 *       404:
 *         description: Mezun tapılmadı
 *       500:
 *         description: Server xətası
 */
GraduateRouter.put('/:id', graduateController.editGraduate);

/**
 * @swagger
 * /admin/graduates/{id}:
 *   delete:
 *     summary: Mezunu Sil
 *     description: Belirtilen ID'ye sahib bir mezunu silir.
 *     tags: [Admin Graduate]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Mezunun ID'si
 *     responses:
 *       200:
 *         description: Mezun uğurla silindi
 *       404:
 *         description: Mezun tapılmadı
 *       500:
 *         description: Server xətası
 */
GraduateRouter.delete('/:id', graduateController.deleteGraduate);

/**
 * @swagger
 * /admin/graduates:
 *   get:
 *     summary: Tüm Mezunları Al
 *     description: Tüm mezunları alır.
 *     tags: [Admin Graduate]
 *     responses:
 *       200:
 *         description: Tüm mezunlar uğurla alındı
 *       500:
 *         description: Server xətası
 */
GraduateRouter.get('/', graduateController.getAllGraduates);

export { GraduateRouter };