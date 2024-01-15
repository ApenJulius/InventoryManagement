import { Database } from './database/app-data-source';
import { Customers } from './database/models/Customers';
import { Products } from './database/models/Products';



Database.initialize().then(() => {
    massAddUser();
}).catch((err) => {
    console.error('Error initializing database', err);
});


async function createProduct(name, identifier, status, lendingDate, lendingExpiration, returnDate) {
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

async function createUser(name, identifier) {
    const userRepository =  Database.getRepository(Customers);
    userRepository.save({
        name,
        identifier
    });
    console.log('Saved user');
}


async function massAddUser() {
    createUser('John Doe', 'johdoe23');
    createUser('Jane Doe', 'jandoe27');
    
}
