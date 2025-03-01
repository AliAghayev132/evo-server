import dotenv from 'dotenv';
// Config for dotenv
dotenv.config();

const config = {
    development: {
        port: process.env.PORT || 3000,
        db: {
            host: process.env.DB_HOST || 'localhost',
            name: process.env.DB_NAME || 'mydatabase_name',
            username: process.env.DB_USERNAME || 'mydatabase_username',
            password: process.env.DB_PASSWORD || 'mydatabase_password',
            clusterName: process.env.DB_CLUSTER_NAME || 'mydatabase_cluster_name',
        },
    },
    adminRefreshSecretKey: process.env.ADMIN_REFRESH_SECRET_KEY || 'my_admin_register_secret_key',
    adminAccessSecretKey: process.env.ADMIN_ACCESS_SECRET_KEY || 'my_admin_access_secret_key',
}

const corsConfig = {
    origin: "*", //TODO: Sonra fixlə bunu
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Authorization", "Content-Type"],
}
export { config, corsConfig };