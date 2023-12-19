function iniciarSesion(){
    usuario = document.getElementById("usuario").value;
    localStorage.setItem("usuario",usuario);
    window.location = "Grupos.html";
}
function bienvenida(){
document.getElementById("bienvenida").innerHTML = "¡Bienvenido a Droxid "+ localStorage.getItem("usuario") + "!"
}
var firebaseConfig = {
    apiKey: "AIzaSyAO9N4OFZI1rJJYLEteTOMnBJmT301o_IY",
    authDomain: "droxid-a05af.firebaseapp.com",
    databaseURL: "https://droxid-a05af-default-rtdb.firebaseio.com",
    projectId: "droxid-a05af",
    storageBucket: "droxid-a05af.appspot.com",
    messagingSenderId: "409085151050",
    appId: "1:409085151050:web:c85121df4dc7228a1d63b3"
  };

firebase.initializeApp(firebaseConfig);

function agregarSala(){
    nombre_grupo=document.getElementById("nombre_grupo").value
    firebase.database().ref().child(nombre_grupo).update({
        Hola:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
    })
    document.getElementById("nombre_grupo").value=""

}
function cerrarSesion(){
    window.location = "index.html";
}
room_name = localStorage.getItem("room_name")
function consultarSalas(){
    firebase.database().ref("/").on("value",function (snapshot){
      console.log("holaaa")
        document.getElementById("listaGrupos").innerHTML = "";
        snapshot.forEach(function (childSnapshot){
            childKey = childSnapshot.key;
            console.log(childKey)
            document.getElementById("listaGrupos").innerHTML += '<h1 id="'+childKey+'" class="Salas" onclick="verChat(this.id)">'+childKey+'</h1>'

        })
    })
}    consultarSalas();

function verChat(sala){
    console.log("Bienvenido a "+ sala)
    localStorage.setItem("chat", sala)
    window.location = "chat.html"
}

