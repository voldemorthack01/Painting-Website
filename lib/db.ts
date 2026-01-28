import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';

// Ensure the directory exists
const dbPath = path.join(process.cwd(), 'messages.db');
const dbDir = path.dirname(dbPath);

if (!fs.existsSync(dbDir)) {
    fs.mkdirSync(dbDir, { recursive: true });
}

const db = new Database(dbPath);

// Initialize database with table
// DROPPING table to ensure schema update since this is development and per plan
db.exec(`DROP TABLE IF EXISTS messages`);

db.exec(`
    CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        email TEXT,
        phone TEXT,
        suburb TEXT,
        service TEXT,
        message TEXT,
        created_at TEXT NOT NULL
    )
`);

export default db;
