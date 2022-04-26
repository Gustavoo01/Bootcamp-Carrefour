const lista = [
	{
		name: 'Toalha',
		preco: 30,
	},
	{
		name: 'Cereal',
		preco: 15,
	},
	{
		name: 'Cafe',
		preco: 15,
	},
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista) {
	return lista.reduce(function(prev, current, index) {
		console.log('rodada', index +1);
		console.log({ prev });
		console.log({ current });
		return prev - current.preco;
	}, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel,lista));
