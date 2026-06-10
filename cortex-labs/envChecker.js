const { Client } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

async function checkSystem() {
  console.log('\n=========================================');
  console.log('🚀 SYSTEM PRE-CHECK INITIALIZING...');
  console.log('=========================================\n');

  // 1. Check Environment Variables
  console.log('⏳ Checking Environment Variables...');
  const requiredEnvs = [
    'DATABASE_URL',
    'NEXTAUTH_SECRET',
    'NEXTAUTH_URL',
    'ADMIN_USERNAME',
    'ADMIN_PASSWORD'
  ];

  const missing = requiredEnvs.filter((env) => !process.env[env]);

  if (missing.length > 0) {
    console.error('❌ Environment check failed! Missing:');
    missing.forEach((env) => console.error(`  - ${env}`));
    process.exit(1);
  } else {
    console.log('✅ Environment variables are correctly set up.');
  }

  // 2. Check Database Connection
  console.log('\n⏳ Testing Database Connection...');
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false } // Required for Neon
  });

  try {
    await client.connect();
    // Execute a simple query
    await client.query('SELECT 1');
    console.log('✅ Database connection established successfully.');
  } catch (error) {
    console.error('❌ Failed to connect to the database!');
    console.error(`   Error details: ${error.message}`);
    process.exit(1);
  } finally {
    await client.end();
  }

  console.log('\n=========================================');
  console.log('🎉 ALL CHECKS PASSED. STARTING SERVER...');
  console.log('=========================================\n');
}

checkSystem();
