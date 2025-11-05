import connection from '../core/database.js';

class Attendance {
    constructor() {
        this.db = connection;
    }

    async create() {
        try {

        } catch(err) {
            console.error('[ERROR] <attendance.create>', err);
            throw err;
        }
    }

    async get() {
        try {

        } catch(error){
            console.error('[ERROR] <attendance.get>', error);
            throw error;
        }
    }

    async update() {
        try {

        } catch(error) {
            console.error('[ERROR] <attendance.update>', error);
            throw error;
        }
    }

    async delete() {
        try {

        } catch(error) {
            console.error('[ERROR] <attendance.delete>', error);
            throw error;
        }
    }

}

export default Attendance;