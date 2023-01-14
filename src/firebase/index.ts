
import { initializeApp } from "firebase/app";
import { GithubAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDFw0aHhp3GILfYiFxOTU6ZV3JLvPSvvWA",
  authDomain: "github-14e51.firebaseapp.com",
  projectId: "github-14e51",
  storageBucket: "github-14e51.appspot.com",
  messagingSenderId: "891397871601",
  appId: "1:891397871601:web:82307b97bb6786731c1650"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GithubAuthProvider();
provider.addScope('repo');
provider.setCustomParameters({
  'allow_signup': 'false'
});