const { PrismaClient } = require('@prisma/client');
const dotenv = require('dotenv');
dotenv.config();
const prisma = new PrismaClient({
  datasourceUrl: process.env.DATABASE_URL
});
prisma.$queryRaw`SELECT 1`.then(console.log).catch(console.error);
