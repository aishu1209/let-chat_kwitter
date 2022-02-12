user_name = localStorage.getItem("user_name");



document.getElementById("person_name").innerHTML = "Welcome " + user_name +"!";





var firebaseConfig = {
  apiKey: "AIzaSyAmCF6dh_HMRN3mQj7Vg--IlW5A9dccyRU",
  authDomain: "let-chat-8a505.firebaseapp.com",
  databaseURL: "https://let-chat-8a505-default-rtdb.firebaseio.com",
  projectId: "let-chat-8a505",
  storageBucket: "let-chat-8a505.appspot.com",
  messagingSenderId: "201024743078",
  appId: "1:201024743078:web:56297b06616c5facbbb667",
  measurementId: "G-60LEJ010LC"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);



function addRoom(){
room_name = document.getElementById("room_name").value;
localStorage.setItem("room_name", room_name);  

firebase.database().ref("/").child(room_name).update({
  purpose:"Aashritha"

});



window.location = "kwitter_page.html"
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;
//End code
});});}
getData(); 

function redirectToRoomName(name){

  localStorage.setItem("Room_names",name);
  window.location = "kwitter_page.html"
}







