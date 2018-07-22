var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

// var paciente = document.querySelector("paciente");

var peso, altura, imc=0;


for (var i = 0; i < pacientes.length; i++) {	
	var erros = validaPaciente(pacientes[i]);
	if (erros.length>0) {
		invalidaClassePaciente(erros,pacientes[i]);
	} else {
		peso = pacientes[i].querySelector(".info-peso").textContent;
		altura = pacientes[i].querySelector(".info-altura").textContent;
		imc = pacientes[i].querySelector(".info-imc");
		imc.textContent = calculaImc(peso,altura);	
	}
 }

function invalidaClassePaciente (erros,paciente) {
	peso = paciente.querySelector(".info-peso").textContent;
	altura = paciente.querySelector(".info-altura").textContent;
	imc = paciente.querySelector(".info-imc");

	switch (erros.length) {
		case 1:
			imc.textContent = erros[0];
			paciente.classList.add("paciente-invalido");
			return paciente;

		case 2: 
			imc.textContent = "Peso e Altura inválidos";
			paciente.classList.add("paciente-invalido");
			return paciente;

		case 3:
			imc.textContent = "Nome, Peso e Altura inválidos";
			paciente.classList.add("paciente-invalido");
			return paciente;
		default:
			break;
	}


}

function calculaImc (peso, altura) {
	var imc = 0;
	imc = (peso/(altura*altura));	
	return imc.toFixed(2);
}


function validaPaciente (paciente) {
	var peso = paciente.querySelector(".info-peso");
	var altura = paciente.querySelector(".info-altura");
	var nome = paciente.querySelector(".info-nome");
	var erros = [];

	if(!validaNome(nome.textContent)){
		erros.push("O campo de nome não pode estar vazio");
	}

	if(!validaPeso(peso.textContent)){
		// paciente.querySelector(".info-imc").textContent = "Peso inválido!";
		// paciente.classList.add("paciente-invalido");
		erros.push("Peso inválido");
	}

	if(!validaAltura(altura.textContent)){
		// paciente.querySelector(".info-imc").textContent = "Altura inválida!";
		// paciente.classList.add("paciente-invalido");
		erros.push("Altura inválida");
	}

	// var peso = paciente.querySelector(".info-peso").textContent;
	// var altura = paciente.querySelector(".info-altura").textContent;
	// var erros = [];

	// if(!validaPeso(peso)){
	// 	paciente.querySelector(".info-imc").textContent = "Peso inválido!";
	// 	paciente.classList.add("paciente-invalido");
	// 	erros.push("O peso digitado é inválido");
	// }

	// if(!validaAltura(altura)){
	// 	paciente.querySelector(".info-imc").textContent = "Altura inválida!";
	// 	paciente.classList.add("paciente-invalido");
	// 	erros.push("A altura digitada é inválida");
	// }
	return erros;
}

function validaPeso (peso){
	return (peso > 0 && peso <= 200.0);
}

function validaAltura (altura){
	return (altura > 0 && altura <= 3.0);

}

function validaNome (nome){
	return (nome.length>0);
}

