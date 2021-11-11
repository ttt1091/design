var admin = require("firebase-admin");

// ダウンロードしたJSONファイルをインポート。
var serviceAccount = require("./design-test-2021-firebase-adminsdk-nda5e-bb9c268454.json");

try {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
} catch {}

export const db = admin.firestore();