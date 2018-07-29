var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
	var pacientes = document.querySelectorAll(".paciente");
	
	if(	this.value.length > 0){
		for (var i = 0; i < pacientes.length; i++) {
			var tdNome = pacientes[i].querySelector(".info-nome");
			var nome = tdNome.textContent;
			var exp = new RegExp(this.value,"i");					
			if (!exp.test(nome)) {
				pacientes[i].classList.add("invisivel");
			}else{
				pacientes[i].classList.remove("invisivel");
			}
		}
		// pacientes.forEach(function (paciente) {});	
	}else{
		pacientes.forEach(function (paciente) {
			paciente.classList.remove("invisivel");
		});
	}
});
