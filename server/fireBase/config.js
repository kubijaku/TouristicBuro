import { getDatabase } from "firebase-admin/database";
import { initializeApp, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import serviceAccount from "./serviceAccountKey.json" assert { type: "json" };

initializeApp({
    credential: cert(serviceAccount),
    databaseURL: "https://touristicburo-default-rtdb.firebaseio.com",
});

export const db = getDatabase();
// db.settings({ ignoreUndefinedProperties: true });
export const auth = getAuth();
