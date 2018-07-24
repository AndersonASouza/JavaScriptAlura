var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
	console.log("Digitou!");
	console.log(this.value);
	var pacientes = querySelectorAll(".paciente");

	pacientes.forEach(function (paciente) {
		var tdNome = paciente.querySelector(".info-nome");
		var nome = tdNome.textContent;
	});	

	if(nome !== this.value){
		
	}

});
