type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}


//b) rodaria o comando tsc para tranpilar
//c) configuraria o tsconfig a pasta src como pasta raiz rootDir e rodaria o comando tsc para transpilar.
//d) podemos rodar o comando tsc que transpila todos os arquivos .ts ou separar os comando por um  espaço como: tsc esercicio1.ts  exercicio2.ts

