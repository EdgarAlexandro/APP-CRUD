# APP-CRUD
Aplicación CRUD que muestra distintos cines y películas

Instructions to run the repository:

Set-up:
- Make sure you have Docker Desktop installed in your machine
- Clone the repository with (GitHub Desktop or with git clone commands)
- Open a terminal in the project's root directory
- Run `npm install`

Database:
- Before running the code, add a .env file at the projects root
- Add this value to the .env file `DATABASE_URL="postgresql://postgres:postgres@localhost:5434/postgres?schema=public"`
- run: `docker-compose up -d`

Prisma:
- run `npx prisma generate`
- run `npx prisma migrate reset`

API:
- run `node app/data/API.js`

APP:
- run `npm run dev`

The project should be running at http://localhost:3000/