import { Router } from 'express';
import authorization from '../../middlewares/authorization.js';

const attendaceRouter = new Router();

attendaceRouter.use(authorization);

// Get Methods

// Post Methods

// Patch Methods

// Delete methods

export default attendaceRouter;