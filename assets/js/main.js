let icone = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];

//Milestone 1:
//Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.




//Milestone 2 
//Coloriamo le icone per tipo

//Milestone 3 
//Creiamo una select con i tipi di icone e usiamola per filtrare le icone
var selezione = document.getElementById('filtro_icone');
icone.forEach(elemento =>{
	inserimentoElementi(elemento);
})
selezione.addEventListener('change', function() {
	document.getElementById('icons').innerHTML = '';
	var valore;
	valore = selezione[selezione.selectedIndex].value;
    console.log(valore);
    icone.forEach((elemento) => {
		if (valore === 'all'){
			inserimentoElementi(elemento);
		} else if (valore === elemento.type) {
			console.log(inserimentoElementi(elemento));
        } 
    })
})

function inserimentoElementi (elemento){
	document.getElementById('icons').insertAdjacentHTML('beforeend', `
	<div class="my-3 d-flex flex-column justify-content-center align-items-center ${elemento.display}">
	<i class="${elemento.family} ${elemento.prefix}${elemento.name} fa-2x ${elemento.type}"></i>
	<span class="text-uppercase d-block font-weight-bold">${elemento.name}</span>
	</div>
	`)
}