/*
Página web: https://adventjs.dev/
Challenges: 1

    Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color. Haz una función que devuelva una lista con todas las ovejas que sean de color rojo y que además su nombre contenga tanto las letras n Y a, sin importar el orden, las mayúsculas o espacios.
*/

const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'}
];

const ovejasRojas = ovejas.filter(e => {
    if(
        e.color === 'rojo'&&
        e.name.toLowerCase().includes('n') &&
        e.name.toLowerCase().includes('a')
    ) return e;
});

console.log(ovejasRojas);