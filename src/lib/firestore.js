import { db } from "../../firebase/firebase_init";

export function getFirestore() {
  const ref = db.collection("users");
  // usersの内容を獲得。非同期処理に注意。
  const users_snapshot = ref.get();
  // ドキュメントの内容を出力。
  return users_snapshot.then((users) =>
    users.forEach((user) => {
      console.log(
        `id: ${user.id}, name: ${user.data().name}, age: ${user.data().age}`
      );
      return {
        params: {
          id: `${user.id}`
        }
      }
    })
  );
}