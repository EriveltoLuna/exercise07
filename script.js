// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

const worldCup = [1959, 1962, 1970, 1994, 2002];

worldCup.forEach((i) => {
  let year = `Brasil ganhou a copa de ${i}`;
  console.log(year);
});

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera

const fruits = ["Banana", "Apple", "Pear", "Grape", "Watermelon"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
  if (fruits[i] === "Pear") {
    break;
  }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

const fruit = fruits[fruits.length - 1];
console.log(fruit);
