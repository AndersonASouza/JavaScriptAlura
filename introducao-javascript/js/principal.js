var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

// var paciente = document.querySelector("paciente");



var peso, altura, imc=0;


for (var i = 0; i < pacientes.length; i++) {
	if(validaPesoEAltura(pacientes[i])){
		peso = pacientes[i].querySelector(".info-peso").textContent;
		altura = pacientes[i].querySelector(".info-altura").textContent;
		imc = pacientes[i].querySelector(".info-imc");
		imc.textContent = calculaImc(peso,altura);
	}

 }


 //Funcoes :D

function calculaImc (peso, altura) {
	var imc = 0;
	imc = (peso/(altura*altura)).toFixed(2);

	return imc;
}

function validaPesoEAltura (paciente) {
	var peso = paciente.querySelector(".info-peso").textContent;
	var altura = paciente.querySelector(".info-altura").textContent;

	if(peso > 0 && peso <= 200.0){
		if(altura > 0 && altura <= 3.0){
			return true;
		}else{
			alert("Altura do paciente " + paciente.querySelector(".info-nome").textContent + " inválida");
			return false;
		}
	}else{
		alert("Peso do paciente " + paciente.querySelector(".info-nome").textContent + " inválida");
		return false;
	}
}

