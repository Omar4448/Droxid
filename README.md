<!DOCTYPE html>
<html>

<head>
	<title>Droxid Salas</title>
	<link href="https://fonts.googleapis.com/css?family=Yeon+Sung&display=swap" rel="stylesheet">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>

	<link rel="stylesheet" type="text/css" href="style.css">

    <script src="https://www.gstatic.com/firebasejs/7.6.2/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/7.6.2/firebase-firestore.js"></script>
<script src="https://www.gstatic.com/firebasejs/live/3.1/firebase.js"></script>

</head>

<body onload="bienvenida()">


	<div class="container">
		<button id="logout" onclick="cerrarSesion();" class="glyphicon glyphicon-log-out btn btn-danger">Salir</button>

		<center>
			<h1 class="header">
				Droxid
				<sup>
					<img src="Droxid 2.0.png">
				</sup>
			</h1>
			<h3 id="bienvenida" class="color_white"></h3>

			<div class="form-group input_div_room_page">
				<label>#Añadir sala:</label>
				<input type="text" id="nombre_grupo" class="form-control" placeholder="#Nombre de la sala">
			</div>

			<button onclick="agregarSala();" class="btn btn-success">#Añadir sala</button>

			<h3 class="color_white">#SALASDETENDENCIA</h3>

			<div id="listaGrupos"></div>

		</center>
	</div>
	<script src="main.js"></script>
</body>

</html>
