
// Complexidade: O(1)

function isPar(n) {
    let num = n[3]; // 4
    num = num + 2;

    if (num % 2 == 0) {
        console.log("O número", num, "é par");
    } else {
        console.log("O número", num, "é ímpar");
    }
}

let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
isPar(array1);

// Complexidade: O(log n)

function busca_binaria(array, left, right, valor) {
    if (right >= left) {
        indice = parseInt(left + (right - left) / 2)

        if (array[indice] === valor) {
            return valor
        }
        if (array[indice] > valor) {
            return busca_binaria(array, left, indice - 1, valor)
        }

        return busca_binaria(array, indice + 1, right, valor)
    }

    return "não achou"
}

let array2 = [1, 6, 7, 8, 20]; // o array tem que estar ordenado
console.log(busca_binaria(array2, 0, array2.length - 1, 20));


// Complexidade: O(n)

function busca_linear(array, valor) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === valor) {
            return valor
        }
    }
    return "não achou"
}

let array3 = [1, 6, 7, 8, 20, 465, 562, 621, 745];
console.log(busca_linear(array3, 745));

// Complexidade: O(n log n)

function mergeSort(array) {
    if (array.length < 2) {
        return array;
    }

    var meio = parseInt(array.length / 2);
    var esquerda = array.slice(0, meio);
    var direita = array.slice(meio, array.length);

    return merge(mergeSort(esquerda), mergeSort(direita));
}

function merge(esquerda, direita) {
    var resultado = [];

    while (esquerda.length && direita.length) {
        if (esquerda[0] <= direita[0]) {
            resultado.push(esquerda.shift());
        } else {
            resultado.push(direita.shift());
        }
    }

    while (esquerda.length) {
        resultado.push(esquerda.shift());
    }

    while (direita.length) {
        resultado.push(direita.shift());
    }

    return resultado;
}

let array4 = [34, 203, 3, 746, 200, 984, 198, 764, 9, 10, 95, 47, 47];

console.log(mergeSort(array4));

// Complexidade: O(n²)

function bubbleSort(array) {
    var length = array.length;

    for (var i = 0; i < length; i++) {
        for (var j = 0; j < (length - i - 1); j++) {
            if (array[j] > array[j + 1]) {
                var tmp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = tmp;
            }
        }
    }

    return array;
}

let array5 = [34, 203, 3, 746, 200, 984, 198, 764, 9, 10];
console.log(bubbleSort(array5));


// Complexidade: O(2^n)

function fibonacci(n) {
    if (n <= 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987 1597 2584 4181 6765
// Acha o número na posição 10 da sequência de Fibonacci
console.log(fibonacci(40));


// Complexidade: O(n!)

function permutacao(string) {
    if (string.length < 2) return string;

    var permutations = [];

    for (var i = 0; i < string.length; i++) {
        var char = string[i];

        if (string.indexOf(char) != i) continue;

        var remainingString = string.slice(0, i) + string.slice(i + 1, string.length);

        for (var subPermutation of permutacao(remainingString)) {
            permutations.push(char + subPermutation);
        }
    }

    return permutations;
}

console.log(permutacao("ace1997"));    

// 3! = 3 * 2 * 1 = 6

