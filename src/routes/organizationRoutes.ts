import { Router } from 'express';
import { addPost, listPost } from '../controllers/organizationControllers';

const router = Router();

router.post('/addPost', addPost);

router.get('/list', listPost);

export default router;
