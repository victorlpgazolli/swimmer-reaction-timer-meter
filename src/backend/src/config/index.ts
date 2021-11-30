import dotenv from 'dotenv';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.PORT = process.env.PORT || '8082';

const envFound = dotenv.config();
if (envFound.error) throw new Error("missing .env");

export default {
    port: parseInt(process.env.PORT, 10),
    databaseURL: process.env.MONGODB_URI as string,
    jwtSecret: process.env.JWT_SECRET as string,
    jwtAlgorithm: process.env.JWT_ALGORITHM as string,
    apiBaseURL: process.env.BASE_URL as string,
    apiFullUrl: process.env.URL as string,
};
