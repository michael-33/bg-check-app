CREATE TABLE IF NOT EXISTS candidates (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    keywords TEXT,
    summary TEXT,
    extData TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
); 