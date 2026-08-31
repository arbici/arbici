// Shared Firebase project for the Queensland pages.
// Used by the booking checklist (/bookings) and the activity vote (/votes).
// A Firebase web API key is not a secret: it identifies the project, it does not
// authorise anything. Access is controlled by the Realtime Database rules.
export const FIREBASE_CONFIG = {
  apiKey: "AIzaSyAijbzSIAeykHc_yhi5r6iaDX64R-T9nZo",
  authDomain: "arbici-8b875.firebaseapp.com",
  databaseURL: "https://arbici-8b875-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "arbici-8b875"
};

// Loads the Firebase Realtime Database SDK and returns { db, api }, or null if
// it cannot be reached. Callers render a working page either way.
export async function connect() {
  try {
    const [{ initializeApp }, mod] = await Promise.all([
      import("https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js"),
      import("https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js")
    ]);
    return { db: mod.getDatabase(initializeApp(FIREBASE_CONFIG)), api: mod };
  } catch (e) {
    return null;
  }
}
