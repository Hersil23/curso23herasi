
const alimentos = {
  verduras: ["lechuga", "pepino", "cebolla"],
  frutas: ["manzana", "mazorca", "tomate"],
  carnes: ["pollo", "res", "cerdo"]
};

for (let arrayObjeto in alimentos){
	console.log(arrayObjeto)
	for (let productos of alimentos[arrayObjeto]){
		console.log(productos)
	}
	console.log("\n")
}