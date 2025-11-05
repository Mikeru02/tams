import jwt from 'jsonwebtoken'
import User from '../../models/user.js';

class UserController {
    constructor() {
        this.user = new User();
    }

    async create(request, response) {
        try {
            const { fullname, role, username, password } = request.body || {};
            const modelResponse = await this.user.create(fullname, role, username, password);
            response.json({
                success: true,
                data: {
                    userId: modelResponse?.insertId,
                    token: jwt.sign({ "username": username}, process.env.API_SECRET_KEY, {
                        expiresIn: "1d",
                    }),
                },
            });
            response.end();
        } catch(error) {
            response.json({
                success: false,
                message: error.toString()
            });
            response.end();
        }
    }

    async login(request, response) {
        try {
            const { username, password } = request.body || {};
            const modelResponse = await this.user.verify(username, password);
            if (!modelResponse.id) {
                return response.json({
                    success: false,
                    message: 'Invalid username/password'
                });
            }
            response.json({
                success: true,
                data: {
                    token: jwt.sign({ "username": username }, process.env.API_SECRET_KEY, {
                        expiresIn: "1d",
                    }),
                },
            });
            response.end();
        } catch(error) {
            response.json({
                success: false,
                message: error.toString()
            });
            response.end();
        }
    }
}

export default UserController