let nomeUsuario = prompt("Por favor, digite seu nome");
console.log(nomeUsuario);


let tratamentoPersonalizado = confirm("Deseja um tratamento personalizado?")

if(tratamentoPersonalizado) {
  let nome = prompt("Por favor, digite seu nome");
   alert("Bem-vindo ao nosso site"+ nome +". Muito obrigado pela sua visita, estamos à sua disposição! ?");
} else {
   alert("Obrigado por conectar.")
}