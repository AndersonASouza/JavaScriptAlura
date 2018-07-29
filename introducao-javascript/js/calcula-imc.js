var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

// var paciente = document.querySelector("paciente");

var peso, altura, imc;


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

	paciente.classList.add("paciente-invalido");
	imc.textContent = null;

	erros.forEach(function(erro){
		imc.textContent += erro;

	});
	return paciente;
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
	var gordura = paciente.querySelector(".info-gordura");
	var erros = [];

	if(!validaNome(nome.textContent)){
		erros.push("O nome não pode estar vazio");
	}

	if(!validaGordura(gordura.textContent)){
		erros.push("A gordura não pode ser em branco");
	}

	if(peso.textContent.length == 0){
		erros.push("O peso não pode ser em branco");
	}else{
		if(!validaPeso(peso.textContent)){
		erros.push("Peso inválido");
		}
	}

	if(altura.textContent.length == 0){
		erros.push("A altura não pode ser em branco");
	}else{
		if(!validaAltura(altura.textContent)){
		erros.push("Altura inválida");
		}
	}
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

function validaGordura(gordura){
	return (gordura.length > 0);
}
