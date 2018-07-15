var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function (event) {
	event.preventDefault();

	var form = document.querySelector("#form-adiciona");

	var pacienteTr = document.createElement("tr");
	var nomeTd = document.createElement("td");
	nomeTd.textContent = form.nome.value;
	var pesoTd = document.createElement("td");
	pesoTd.textContent = form.peso.value;
	var alturaTd = document.createElement("td");
	alturaTd.textContent = form.altura.value;
	var gorduraTd = document.createElement("td");
	gorduraTd.textContent = form.gordura.value;

	var imcTd = document.createElement("td");
	imcTd.textContent = calculaImc(form.peso.value, form.altura.value);

	pacienteTr.appendChild(nomeTd);
	pacienteTr.appendChild(pesoTd);
	pacienteTr.appendChild(alturaTd);
	pacienteTr.appendChild(alturaTd);
	pacienteTr.appendChild(gorduraTd);
	pacienteTr.appendChild(imcTd);

	var tabela = document.querySelector("#tabela-pacientes");

	tabela.appendChild(pacienteTr);
	
})

