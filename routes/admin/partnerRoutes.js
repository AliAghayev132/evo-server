// Variables
import { Router } from "#constants/variables.js";
// Controller
import partnerController from "#controllers/admin/partnerController.js";
// Middelwares
import { parseJsonFields } from "#middlewares/parseJsonFields.js";
import { adminAuthenticateToken } from "#middlewares/adminAuthenticateToken.js";

const PartnerRouter = Router();

/**
 * @swagger
 * tags:
 *   name: Admin Partner
 *   description: Admin üçün tərəfdaş API son nöqtələri
 */

/**
 * @swagger
 * /admin/partners:
 *   post:
 *     summary: Yeni Tərəfdaş Əlavə Et
 *     description: Yeni bir tərəfdaş əlavə edir.
 *     tags: [Admin Partner]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Tərəfdaşın adı
 *               file:
 *                 type: string
 *                 format: binary
 *                 description: Tərəfdaşın şəkli
 *     responses:
 *       201:
 *         description: Tərəfdaş uğurla əlavə edildi
 *       400:
 *         description: Yanlış məlumat
 *       500:
 *         description: Server xətası
 */

/**
 * @swagger
 * /admin/partners:
 *   get:
 *     summary: Tüm Tərəfdaşları Al
 *     description: Tüm tərəfdaşları alır.
 *     tags: [Admin Partner]
 *     responses:
 *       200:
 *         description: Tüm tərəfdaşlar uğurla alındı
 *       500:
 *         description: Server xətası
 */

/**
 * @swagger
 * /admin/partners/{id}:
 *   delete:
 *     summary: Tərəfdaşı Sil
 *     description: Belirtilen ID'ye sahib bir tərəfdaşı silir.
 *     tags: [Admin Partner]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Tərəfdaşın ID'si
 *     responses:
 *       200:
 *         description: Tərəfdaş uğurla silindi
 *       404:
 *         description: Tərəfdaş tapılmadı
 *       500:
 *         description: Server xətası
 */

/**
 * @swagger
 * /admin/partners/{id}:
 *   put:
 *     summary: Tərəfdaşı Düzenle
 *     description: Belirtilen ID'ye sahib bir tərəfdaşı düzenler.
 *     tags: [Admin Partner]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Tərəfdaşın ID'si
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Tərəfdaşın adı
 *               file:
 *                 type: string
 *                 format: binary
 *                 description: Tərəfdaşın şəkli
 *     responses:
 *       200:
 *         description: Tərəfdaş uğurla düzenlendi
 *       400:
 *         description: Yanlış məlumat
 *       404:
 *         description: Tərəfdaş tapılmadı
 *       500:
 *         description: Server xətası
 */


PartnerRouter.post("/",
    parseJsonFields,
    adminAuthenticateToken,
    partnerController.addPartner
);
PartnerRouter.get("/",
    adminAuthenticateToken,
    partnerController.getPartners
);
PartnerRouter.delete("/:id",
    adminAuthenticateToken,
    partnerController.deletePartner
);

PartnerRouter.put("/:id",
    parseJsonFields,
    adminAuthenticateToken,
    partnerController.editPartner
);

export { PartnerRouter };