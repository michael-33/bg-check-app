how to run the project locally:

## Backend

install dependencies

create .env for backend and add:
PORT=3001

# postgreSQL

run postgreSQL server locally
create a database
create a table using the script in backend\src\infrastructure\database\migrations\create_candidates_table.sql

in backend\.env, add:
POSTGRESQL_DATABASE_URL=postgresql://{postgres_username}:{postgres_password}@localhost:5432/{database_name}

# OpenAI

in backend\.env, add:
OPENAI_API_KEY=?

run the command: npm run dev

## Frontend

install dependencies

create .env for frontend and add:
REACT_APP_API_BASE_URL=http://localhost:3001

run the command: npm start
