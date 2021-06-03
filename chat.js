var firebaseConfig = {
    apiKey: "AIzaSyDXA317UQkqaLJgtJbcu0v2b3udkDhehfA",
    authDomain: "kwitter-5ed21.firebaseapp.com",
    databaseURL: "https://kwitter-5ed21-default-rtdb.firebaseio.com",
    projectId: "kwitter-5ed21",
    storageBucket: "kwitter-5ed21.appspot.com",
    messagingSenderId: "728087532670",
    appId: "1:728087532670:web:2f0ee99a6d9404580db42f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 //Start code
 console.log("room name- " + Room_names);
 row = "<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)'> #" + Room_names + "</div> <hr>" ;
 document.getElementById("output").innerHTML += row;
 //End code
 });});}
getData();

function redirectToRoomName(name) {
console.log(name);
localStorage.setItem("room_name" , name);
window.location = "kwitter_page.html";
}
function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}