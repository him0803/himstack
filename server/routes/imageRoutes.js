import express from 'express';
import { generatedImage } from '../controllers/imageController.js';
import userAuth from '../middlewares/auth.js';


const imageRouter = express.Router();

imageRouter.post('/generate-image', userAuth, generatedImage);

export default imageRouter;
