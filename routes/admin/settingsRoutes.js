// Variables
import { Router } from "#constants/variables.js";
// Controller
import settingsController from "#controllers/admin/settingsController.js";
// Middelwares
import { adminAuthenticateToken } from "#middlewares/adminAuthenticateToken.js";

const SettingsRouter = Router();

/**
 * @swagger
 * /admin/settings:
 *   get:
 *     summary: Get settings
 *     tags:
 *       - Admin Settings
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successful operation
 *       401:
 *         description: Authorization error
 * 
 * /admin/settings/toggle-bitrix-forwarding:
 *   put:
 *     summary: Toggle Bitrix forwarding
 *     tags:
 *       - Admin Settings
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               enabled:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Successful operation
 *       401:
 *         description: Authorization error
 */

SettingsRouter.get('/', adminAuthenticateToken, settingsController.getSettings);
SettingsRouter.put('/toggle-bitrix-forwarding', adminAuthenticateToken, settingsController.toggleBitrixForwarding);


export { SettingsRouter };