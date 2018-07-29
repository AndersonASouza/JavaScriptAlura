var botaoAdicionar = document.querySelector("#buscar-paciente");

botaoAdicionar.addEventListener("click", function () {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

	xhr.addEventListener("load", function () {
		var resp = xhr.responseText;
		var pacientes = JSON.parse(resp);
		pacientes.forEach(function(paciente) {
			adicinarPacienteNaTabela(paciente);
		});

	});

	xhr.send();
})