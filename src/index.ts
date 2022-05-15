let v1: number[] = new Array(6);
let indice: number;

for (indice = 0; indice < 6; indice++) {
  v1[indice] = Number(prompt("Ingrese los numeros del primer vector"));
}

let v2: number[] = new Array(6);
let indice: number;
for (indice = 0; indice < 6; indice++) {
  v2[indice] = Number(prompt("Ingrese los numeros del segundo vector"));
}

let vectorSuma: number[] = new Array(6);
let indice: number;

for (indice = 0; indice < 6; indice++) {
  vectorSuma[indice] = v1[indice] + v2[indice];
  console.log(
    "la suma de los vectores es " +
      vectorSuma[indice] +
      " en posición " +
      indice
  );
}
