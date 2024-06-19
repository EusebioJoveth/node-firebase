import express from 'express';
import cors from 'cors';
import organizationRoutes from './routes/organizationRoutes';

const app = express();

app.use(cors({ 
  origin: true,
  credentials: true,
  methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'], 
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept', 'Origin'] }));
app.use(express.json());

app.use('/api/organizations', organizationRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
