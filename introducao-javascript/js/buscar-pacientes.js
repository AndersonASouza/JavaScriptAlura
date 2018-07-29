var botaoAdicionar = document.querySelector("#buscar-paciente");

botaoAdicionar.addEventListener("click", function () {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

	xhr.addEventListener("load", function () {
		var erroAjax = document.querySelector("#erro-ajax");
		erroAjax.classList.add("invisivel");
		if (xhr.status == 200) {
			var resp = xhr.responseText;
			var pacientes = JSON.parse(resp);

			pacientes.forEach(function(paciente) {
				adicinarPacienteNaTabela(paciente);
			});
		} else {
			erroAjax.classList.remove("invisivel");
		}

	});

	xhr.send();
})