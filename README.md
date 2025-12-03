# ⚽ Championship Football API

REST API for complete football championship management developed with NestJS and clean architecture. Handles teams, players, matches, and statistics.

## 📋 Description

Robust API that allows comprehensive management of football tournaments. Includes team management, players, fixtures, real-time results, and automatic calculation of league standings.

**Features:**

-   CRUD for teams, players, and tournaments
    
-   Fixture and result management
    
-   Automatic calculation of league standings
    
-   Detailed statistics
    
-   WebSocket for real-time updates
    
-   Documentation with Swagger
    

## 🛠️ Technologies

-   TypeScript
    
-   Node.js
    
-   Express.js
    
-   PostgreSQL
    
-   Prisma ORM
    
-   Docker
    

## 🚀 Installation

```
# Clone the repository
git clone [https://github.com/vKail/championship-football-api.git](https://github.com/vKail/championship-football-api.git)
cd championship-football-api

# Install dependencies
npm install

# Configure environment variables
cp .env.example .env

# Start database with Docker
docker-compose up -d

# Run migrations
npx prisma migrate dev

# Start server
npm run dev

```

## 📂 Project Structure

Clean architecture by layers:

```
src/
├── application/
├── domain/
├── infrastructure/
└── presentation/

```

## 👥 Contributors

-   **Adrian Jurado** - [@vKail](https://github.com/vKail "null")
    
