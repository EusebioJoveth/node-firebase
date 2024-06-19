import { Request, Response } from 'express';
import db from '../config/firebaseConfig';

export async function addPost(req: Request, res: Response): Promise<void> {
  try {
    const { organizationData } = req.body;
    const organizationRef = db.collection('organizations').doc();
    await organizationRef.set({ ...organizationData });
    res.status(201).json({ id: organizationRef.id });
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
}

export async function listPost(req: Request, res: Response): Promise<void> {
  try {
      const postColection = db.collection('posts');
      const snapshot = await postColection.get();
      const posts: any[] = [];
      snapshot.forEach(doc => {
          posts.push({ id: doc.id, ...doc.data() });
      });
      res.status(200).json(posts);
  } catch (error:any) {
      res.status(500).json({ error: error.message });
  }
}
