var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function (event) {
	event.preventDefault();

	var form = document.querySelector("#form-adiciona");

	var paciente = obtemPacienteDoFormulario(form);

	var pacienteTr = montaTr(paciente);

	var erros = validaPesoEAltura(pacienteTr);

	var tabela = document.querySelector("#tabela-pacientes");

	if(erros.length>0){
		pacienteTr = invalidaClassePaciente(erros,pacienteTr);
		exibeMensagensDeErro(erros);
	}
	tabela.appendChild(pacienteTr);
	form.reset();
	

	// if (isvalid==0){
	// 	tabela.appendChild(pacienteTr);
	// 	form.reset();
	// 	var mensagem = document.querySelector("#mensagem-erro-pesoaltura");
	// 	mensagem.textContent = "";
	// }else{
	// 	var mensagem = document.querySelector("#mensagem-erro-pesoaltura");
	// 	if(isvalid==1){
	// 	mensagem.textContent = "O peso digitado é inválido";

	// 	}else if(isvalid==2){
	// 		mensagem.textContent = "A altura digitada é inválida";
	// 	}
	// }
	
	
})

function obtemPacienteDoFormulario(form) {	
	var paciente = {
		nome: form.nome.value,
		peso: form.peso.value,
		altura: form.altura.value,
		gordura: form.gordura.value,
		imc: calculaImc(form.peso.value, form.altura.value)
	}

	return paciente;
}

function montaTr(paciente){
	var pacienteTr = document.createElement("tr");
	pacienteTr.classList.add("paciente");

	pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
	pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
	pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
	pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
	pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));
	return pacienteTr;
}

function montaTd(dado,classe){
	var td = document.createElement("td");
	td.textContent = dado;
	td.classList.add(classe);
	return td;
}

function exibeMensagensDeErro (erros) {
	var ul = document.querySelector("#mensagens-erro-pesoaltura");
	for (var i = 0; i < erros.length; i++) {
		var li = document.createElement("li");
		li.textContent = erros[i];
		var br = document.createElement("br");
		ul.appendChild(br);
		ul.appendChild(li);
		ul.appendChild(br);
	}
	
}