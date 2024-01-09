import { Database } from './database/app-data-source';
import { Products } from './database/models/Products';



Database.initialize().then(() => {
    console.log('Database initialized');
    createUser(
        'banana',
        Math.floor(Math.random() * 1000000),
        'Active',
        new Date().toISOString(),
        new Date().toISOString(),
        null
    );
    createUser(
        'banana',
        Math.floor(Math.random() * 1000000),
        'Active',
        new Date().toISOString(),
        new Date().toISOString(),
        null
    );createUser(
        'banana',
        Math.floor(Math.random() * 1000000),
        'Active',
        new Date().toISOString(),
        new Date().toISOString(),
        null
    );createUser(
        'banana',
        Math.floor(Math.random() * 1000000),
        'Active',
        new Date().toISOString(),
        new Date().toISOString(),
        null
    );createUser( 
        'banana',
        Math.floor(Math.random() * 1000000),
        'Active',
        new Date().toISOString(),
        new Date().toISOString(),
        null
    );
}).catch((err) => {
    console.error('Error initializing database', err);
});


async function createUser(name, identifier, status, lendingDate, lendingExpiration, returnDate) {
    // Get the user repository
    const userRepository =  Database.getRepository(Products);
    // Create a new user
    userRepository.save({
        name,
        identifier,
        status,
        lendingDate,
        lendingExpiration,
        returnDate
    });
    // Save the user

}
