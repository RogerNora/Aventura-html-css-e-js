const avanca = document.querySelectorAll('.btn-proximo');
/* 
adicionando todo o documento na variavel avanca 
e usamos o metodo querySelector para buscar todas as classes marcadas 
por .btn-proximo
*/

avanca.forEach(button => {
//adicionaos um ouvinte para cada um dos botoes

    button.addEventListener('click', function(){
    // em cada ouvinte adicionamos um evento de click com uma funçao

        const atual = document.querySelector('.ativo');
        // identificamos com o elemento com classe ativo e armazenamos na variavel atual
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');
        // definimos qual sera o proximo passo pegando o numero contido no atributo data-proximo
        
        atual.classList.remove('ativo');
        // removemos a classe ativo da div atual
        document.getElementById(proximoPasso).classList.add('ativo');
        //add classe ativo na div corresponder ao proximoPasso
    })

})