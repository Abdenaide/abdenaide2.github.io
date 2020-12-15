/**
 * Meu primeiro Java Script. Acessar a API DOM (Documente Object Model) 
 */
let minhaImagem = document.querySelector('img');
minhaImagem.onclick = function(){
	let src = minhaImagem.getAttribute('src');
	if (src === 'imagens/p com asas.png'){
		minhaImagem.setAttribute('src', 'imagens/pessoas trabalhando.jpg');
	} else {
		minhaImagem.setAttribute('src', 'imagens/p com asas.png');
	}
}
let meuCabecalho = document.querySelector('h2');
let meuBotao = document.querySelector('button');

function defineNomeUsuario(){
	let nomeUsuario = prompt('Digite o seu nome:');
	if (nomeUsuario !== null){
		if (!nomeUsuario){
			defineNomeUsuario();
		}else{
			localStorage.setItem('nome', nomeUsuario);
			meuCabecalho.textContent = 'Bem vindo, ' + nomeUsuario;	
		}
	}
}
let nomeUsuario = localStorage.getItem('nome');
if (!nomeUsuario){
	defineNomeUsuario();
} else {
	meuCabecalho.textContent = 'Bem vindo,' + nomeUsuario;
}
meuBotao.onclick = function (){defineNomeUsuario();}
