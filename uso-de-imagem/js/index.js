var meuModulo = (function(){
// Isso aqui é um módulo.
// Aquio dentro tudo é privado.

    var usuario = {
        nome: 'Funalo',
        senha:"1241kasdjjhdjd",
        podeAcessarRecursosEscondidos: false
    };

    var nomeUsuario = usuario.nome;
    
    function teste(){
        alert('fui chamado');
    }

    return {
        nomeUsuario
    }

})()

// var meuModulo = (() =>{
// })()


// var batatinha = (function(){

// })()
