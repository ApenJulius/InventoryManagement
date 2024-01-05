import { Database } from "../database/app-data-source";

Database.initialize().then(() => {
    console.log("Database initialized");
}).catch((err) => {
    console.error("Error initializing database", err);
});

