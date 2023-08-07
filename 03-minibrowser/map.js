// TDD - Test Driven Devlopment
var novoMapa = new Map();

class historyMap{

}

novoMapa.set('11/11/2023-23:30', {title: 'Título do site', url: 'url sozinha'});
novoMapa.set('11/12/2023-23:30', {});

var resultado = novoMapa.get('11/11/2023-23:30');
console.log(resultado);