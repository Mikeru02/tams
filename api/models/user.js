import connection from '../core/database.js';
import { encryptPassword } from '../utils/hash.js';

class User {
    constructor() {
        this.db = connection;
    }

    async create(fullname, role, username, password) {
        try {
            const [result, ] = await this.db.execute(
                "INSERT INTO Users (fullname, role, username, password, created_at, updated_at) VALUES (?, ?, ?, ?, NOW(), NOW())",
                [fullname, role, username, encryptPassword(password)]
            );
            return result;
        } catch(error) {
            console.error('[ERROR] <user.create>', error);
            throw error;
        }
    }

    async verify(username, password) {
        try {
            const [result, ] = await this.db.execute(
                "SELECT * FROM Users WHERE username=? AND password=?",
                [username, encryptPassword(password)]
            );
            return result?.[0]; 
        } catch(error) {
            console.error(`[ERROR] <user.verify>`, error);
            throw error;
        }
    }

    async get() {

    }

    async update() {

    }

    async delete() {

    }
}

export default User;