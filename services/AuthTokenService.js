// Installed Packages
import jwt from "jsonwebtoken";
// Config
import { config } from "#config/config.js";

class AuthTokenService {
    // Common method for generating tokens
    static generateToken(payload, secretKey, expiresIn) {
        return jwt.sign(payload, secretKey, { expiresIn });
    }

    //?  Admin
    // For Access Token
    // TODO: Bunu fixə 15 dəqiqə elə
    static generateAdminAccessToken(payload) {
        return this.generateToken(payload, config.adminAccessSecretKey, '30d');
    }

    // For Refresh Token
    static generateAdminRefreshToken(payload) {
        return this.generateToken(payload, config.adminRefreshSecretKey, '15d');
    }

}

export { AuthTokenService };