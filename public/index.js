// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-analytics.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-auth.js";
import { getDatabase, ref, set ,get, child , update, remove } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDa2nprtnKUZ4Xhfi9U9Juk8lMUrY4noeI",
  authDomain: "geomap-9b916.firebaseapp.com",
  databaseURL: "https://geomap-9b916-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "geomap-9b916",
  storageBucket: "geomap-9b916.appspot.com",
  messagingSenderId: "61333017803",
  appId: "1:61333017803:web:76cf99f3d74278e8f0774e",
  measurementId: "G-ZB4ZRJVK3G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getDatabase(app);
var InsBtn = document.getElementById("ins");
var l = document.getElementById("coor_lat");
var lo = document.getElementById("coor_long");
var id = document.getElementById("client_id");
var c_name = document.getElementById("client_name");
var records;

function insert(){
    write(id.value,c_name.value,lo.value,l.value);
}


function write(userId, name, x, y) {
    set(ref(db,'records/'+userId),{
        id: userId,
        name: name,
        x_coor: x,
        y_coor: y
    })
    .then(()=>{
        alert('Data stored successfully!');
    })
    .catch((error)=>{
        alert('there was an error: ' + error);
    });
  }

 function fetchAll(){
const dbRef = ref(db);
get(child(dbRef,"records/"))
.then((snapshot) => {
    records = [];
    snapshot.forEach(childSnapshot => {
        records.push(childSnapshot.val());
    });
    //console.log(records[0].name);
    //some func here 
    return records;
});
 }

 

  InsBtn.addEventListener('click',insert);