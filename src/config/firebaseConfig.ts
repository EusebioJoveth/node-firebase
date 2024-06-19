import admin from 'firebase-admin';
import * as serviceAccount  from '../environments/erps-jovethtecnologia-firebase-adminsdk-kvo5x-f3e7e7d06d.json';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount)
});

const db = admin.firestore();

export default db;
