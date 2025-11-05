import connection from "../core/database";

class Student {
    constructor() {
        this.db = connection;
    }

    async create(id, csims_num, fullname, course, yearLevel) {
        try {
            const [result, ] = await this.db.execute(
                "INSERT INTO Students (id, csims_num, fullname, course, year_level, created_at) VALUES (?, ?, ?, ?, ?, NOW())",
                [id, csims_num, fullname, course, yearLevel]
            );
            return result;
        } catch(error) {
            console.error('[ERROR] <student.create>', error);
            throw error;
        }
    }

    async get(id) {
        try {
            const [result, ] = await this.db.execute(
                "SELECT * FROM Students WHERE id=?",
                [id]
            );
            return result?.[0];
        } catch(error) {
            console.error('[ERROR] <student.get>', error);
            throw error;
        }
    }

    async update() {

    }

    async delete() {

    }
}

export default Student;