// =============================================
// Užduotis 1: Suskaičiuoti visų masyvo skaičių sumą
// =============================================
const numbers1 = [1, 2, 3, 4, 5];

console.log('1.uzd');


// Sprendimas su for ciklu:
const numbers1_for = (arr) => {
    let sum = 0;
    for (let i = 0; i < numbers1.length; i++) {
        sum += numbers1[i];
    }
    return sum;
}
console.log(`Sprendimas su for ciklu: ${numbers1_for(numbers1)}`);


// Sprendimas su array metodu (reduce):
const numbers1_reduce = (arr) => {
    return arr.reduce((counter, num) => counter + num, 0);
}
console.log(`Sprendimas su array metodu (reduce): ${numbers1_reduce(numbers1)}`);

console.log('-------------');

// =============================================
// Užduotis 2: Suskaičiuoti, kiek masyvo elementų yra lyginiai
// =============================================

console.log('2.uzd');

// Sprendimas su for ciklu:
const numbers2 = [1, 2, 3, 4, 5, 6];
const numbers2_for = (arr) => {
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) counter++;
    }
    return counter;
}
console.log(`Sprendimas su for ciklu: ${numbers2_for(numbers2)}`); 

console.log('----------------');

// Sprendimas su filter metodu:
const numbers2_filter = (arr) => {
    return arr.filter((num) => num % 2 === 0).length;
}
console.log(`Sprendimas su array metody (filter): ${numbers2_filter(numbers2)}`); 

console.log('------------------');

// =============================================
// Užduotis 3: Rasti didžiausią skaičių masyve
// =============================================

console.log('3.uzd.');

// Sprendimas su for ciklu:

const numbers3 = [10, 5, 20, 8, 15];
 
function didziausiasSk(arr1) {
    let didelis = arr1[0];
    for (let i = 0; i < numbers3.length; i++) {
        if (didelis < arr1[i]) {
            didelis = arr1[i];
        }
    } return didelis;
}
console.log(didziausiasSk(numbers3));
 

// Sprendimas su Math.max ir spread operator:
const numbers3_mathMax = (arr) => {
    return Math.max(...arr);
}

console.log(`Sprendimas su Math.max ir spread operator: ${numbers3_mathMax(numbers3)}`); 
 
console.log('----------------');

// =============================================
// Užduotis 4: Suskaičiuoti, kiek kartų masyve pasikartoja nurodytas skaičius
// =============================================
//const numbers4 = [1, 2, 3, 2, 4, 2, 5];
//const target = 2;
 
console.log('4.uzd.');

// Sprendimas su for ciklu:
const numbers4 = [1, 2, 3, 2, 4, 2, 5];
const target = 2;
function pasikartoja1(arr3, skai) {
    let count = 0;
    for (let i = 0; i <= arr3.length; i++) {
        if (arr3[i] === skai) {
            count++;
        }
    } return count
}
console.log(pasikartoja1(numbers4, target));
 
 console.log('---------------------');
 
// Sprendimas su filter metodu:
const numbers4_filter = (arr, target) => {
    return arr.filter((num) => num === target).length;
}
console.log(`Sprendimas su filter metodu: ${numbers4_filter(numbers4, target)}`); 
 
console.log('------------');

// =============================================
// Užduotis 5: Išfiltruoti ir sukurti naują masyvą, kuriame būtų tik teigiami skaičiai
// =============================================
//const numbers5 = [-3, 0, 5, -1, 8, -2];
 
console.log('5.uzd.');

// Sprendimas su for ciklu:
const numbers5 = [-3, 0, 5, -1, 8, -2];
let nums = [];
    for (let i = 0; i < numbers5.length; i++) {
        if (numbers5[i] > 0) {
        nums.push(numbers5[i]);
        }
}
    console.log(nums);
    

// Sprendimas su filter metodu:
const numbers5_filter = (arr) => {
    return arr.filter((num) => num > 0);
}
console.log(`Sprendimas su filter metodu: ${numbers5_filter(numbers5)}`); 

console.log('-----------------');

// =============================================
// Užduotis 6: Rasti visų masyvo elementų sandaugą
// =============================================
//const numbers6 = [1, 2, 3, 4];
 
console.log('6.užd.');

// Sprendimas su for ciklu:

const numbers6 = [1, 2, 3, 4];
let sandauga = 1;
for (let i = 1; i <= numbers6.length; i++) {
        sandauga = sandauga * i;
}
console.log(sandauga);
 

// Sprendimas su reduce metodu:
const numbers6_reduce = (arr) => {
    return arr.reduce((result, num) => result * num, 0);
}
console.log(`Sprendimas su reduce metodu: ${numbers6_reduce(numbers6)}`); 

console.log('----------------');
 
// =============================================
// Užduotis 7: Apversti masyvą (sukurti naują apverstą masyvą)
// =============================================

console.log('7.uzd.');

// Sprendimas su for ciklu:

const array7 = [1, 2, 3, 4, 5];
let arr7 = [];
for (let i = array7.length; i > 0; i--) {
        arr7.push(i)
}
console.log(arr7);

 
// Sprendimas su built-in reverse metodu (kopijuojame, kad nepakeistume originalo):
const array7_reverse = (arr) => {
    return arr.reverse();
}
console.log(`Sprendimas su reverse metodu: ${array7_reverse(array7)}`);

console.log('----------------');

// =============================================
// Užduotis 8: Rasti pirmą indeksą, kuriame pasitaiko nurodytas elementas. Jei neranda, grąžinti -1
// =============================================
//const array8 = ['a', 'b', 'c', 'd'];
//const searchElement = 'c';

console.log('8.uzd.');
// Sprendimas su for ciklu:

const array8 = ['a', 'b', 'c', 'd'];
const searchElement8 = 'c';
function indeksas5(arr8, sym) {
    for (let i = 0; i < arr8.length; i++) {
    if (arr8[i] === sym) 
        return i;
    } return -1;
}
console.log(indeksas5(array8, searchElement8));
 

// Sprendimas su indexOf metodu:
const array8_indexOf = (arr, searchElement) => {
    return arr.indexOf(searchElement);
}
console.log(`Sprendimas su indexOf metodu : ${array8_indexOf(array8, searchElement8)}`);

console.log('----------------');

// =============================================
// Užduotis 9: Patikrinti, ar masyvas yra surikiuotas didėjimo tvarka
// =============================================
//const array9 = [1, 3, 5, 7, 9];

 console.log('9.uzd.');
 
// Sprendimas su for ciklu:
const array9 = [1, 3, 5, 7, 8];
function dideja(arr9) {
    for (let i = 0; i < arr9.length - 1; i++) {
        if (arr9[i] > arr9[i + 1]) {
            return false;
    } 
} return true; 
}
console.log(dideja(array9));
 

// Sprendimas su every metodu:
const array9_every = (arr) => {
    return arr.every((num, i) => i === 0 || num >= arr[i - 1]);
}
console.log(`Sprendimas su every metodu: ${array9_every(array9)}`);
 
console.log('----------------');

// =============================================
// Užduotis 10: Sukurti naują masyvą, kurio kiekvienas elementas yra pradinio masyvo elemento kvadratas
// =============================================
//const numbers10 = [1, 2, 3, 4, 5];

console.log('10.uzd.');

// Sprendimas su for ciklu:
const numbers10 = [1, 2, 3, 4, 5];
    function pakeltiKv(num10) {
        let pakelti = [];
        for (let i = 0; i < num10.length; i++) {
            kvadratu = num10[i] * num10[i];
                pakelti.push(kvadratu)
        } 
        return pakelti;
    }
    console.log(pakeltiKv(numbers10));
 

// Sprendimas su map metodu:
const numbers10_map = (arr) => {
    return arr.map((num) => num ** 2);
}
console.log(`Sprendimas su map metodu: ${numbers10_map(numbers10)}`);
 
console.log('---------------');

// =============================================
// Užduotis 11: Susumuoti tik nelyginius masyvo elementus
// =============================================
//const numbers11 = [1, 2, 3, 4, 5, 6];

console.log('11.uzd.');

// Sprendimas su for ciklu:
const numbers11 = [1, 2, 3, 4, 5, 6];
function susumuoti(numb11) {
    let sum = 0;
    for (let i = 0; i < numb11.length; i++) {
        if (numb11[i] % 2 !== 0) {
            sum += numb11[i];
        }
    } return sum;
}
console.log(susumuoti(numbers11));

 
// Sprendimas su filter ir reduce:
const numbers11_filterReduce = (arr) => {
    return arr.filter((num) => num % 2 === 0).reduce((sum, num) => sum + num, 0);
}
console.log(`Sprendimas su filter ir reduce metodais: ${numbers11_filterReduce(numbers11)}`);
 
console.log('--------------');

// =============================================
// Užduotis 12: Apskaičiuoti masyvo elementų vidurkį
// =============================================
//const numbers12 = [10, 20, 30, 40, 50];

console.log('12.uzd.');

// Sprendimas su for ciklu:
const numbers12 = [10, 20, 30, 40, 50];
function vidurkis12(masyvas12) {
    let sum = 0;
    for (let i = 0; i < masyvas12.length; i++) {
        sum = sum + masyvas12[i];
    } return sum / masyvas12.length;
}
console.log(vidurkis12(numbers12));
 
 
// Sprendimas su reduce:
const numbers12_reduce = (arr) => {
    return (arr.reduce((sum, num) => sum + num, 0) / arr.length).toFixed(2);
}
console.log(`Sprendimas su reduce metodu: ${numbers12_reduce(numbers12)}`);
 
console.log('-------------------');

// =============================================
// Užduotis 13: Pašalinti pasikartojančius elementus iš masyvo
// =============================================
//const numbers13 = [1, 2, 3, 2, 4, 3, 5];

console.log('13.uzd.');

// Sprendimas su for ciklu:
const numbers13 = [1, 2, 3, 2, 4, 2, 5];
function neVienodi(nums13) {
    let sum13 = []; 
for (let i = 0; i < nums13.length; i++) {
    if (!sum13.includes(nums13[i])) {
        sum13.push(nums13[i]);
        
    }
    
} return sum13;
}
console.log(neVienodi(numbers13));

 
// Sprendimas su Set:
const numbers13_set = (arr) => {
    return [... new Set(arr)];
}
console.log(`Sprendimas su Set: ${numbers13_set(numbers13)}`);

console.log('-------------');
 
// =============================================
// Užduotis 14: Rasti antrą didžiausią elementą masyve
// =============================================
//const numbers14 = [5, 3, 9, 1, 7];

console.log('14.uzd.');

// Sprendimas su for ciklu:
const numbers14 = [5, 3, 9, 1, 7];
let antras = 0;
function antrasDidziausias14(arr14) {
    let patsDzidziausias = 0;
    
    for (let i = 0; i < arr14.length; i++) {
    if (arr14[i] > patsDzidziausias) {
        antras = patsDzidziausias;
        patsDzidziausias = arr14[i];
    } else if (arr14[i] > antras && arr14[i] < patsDzidziausias) {
        antras = arr14[i];
    }
    } return antras;
}
console.log(antrasDidziausias14(numbers14));
 

// Sprendimas su sort metodu (kopijuojame, kad nepakeistume originalo):
const numbers14_sort = (arr) => {
    return arr.sort((a, b) => b - a)[1];
}
console.log(`Sprendimas su sort metodu: ${numbers14_sort(numbers14)}`);

console.log('--------------------');

// =============================================
// Užduotis 15: Suskaičiuoti, kiek masyvo elementų yra didesni už duotą slenkstį
// =============================================
const numbers15 = [10, 15, 20, 25, 30];
const threshold = 20;

console.log(' 15.uzd.');

// Sprendimas su for ciklu:
const numbers15_for = (arr, t) => {
    let result = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > t) result++;
    }

    return result;
}
console.log(`Sprendimas su for ciklu: ${numbers15_for(numbers15, threshold)}`);
 
 
// Sprendimas su filter:
const numbers15_filter = (arr, t) => {
    return arr.filter((n) => n > t).length;
}
console.log(`Sprendimas su filter: ${numbers15_filter(numbers15, threshold)}`);

console.log('---------------');

// =============================================
// Užduotis 16: Sujungti du masyvus į vieną
// =============================================
const arrayA = [1, 2, 3];
const arrayB = [4, 5, 6, 7];

console.log('16.uzd.');

// Sprendimas su for ciklu:
const arrayAB_for = (arr1, arr2) => {
    const newArr = [];

    for (let i = 0; i < arr1.length; i++) {
        newArr.push(arr1[i]);
    }

    for (let i = 0; i < arr2.length; i++) {
        newArr.push(arr2[i]);
    }

    return newArr;
}
console.log(`Sprendimas su for ciklu: ${arrayAB_for(arrayA, arrayB)}`);
 
 
// Sprendimas su concat metodu:
const arrayAB_concat = (arr1, arr2) => {
    return arr1.concat(arr2);
}
console.log(`Sprendimas su concat metodu: ${arrayAB_concat(arrayA, arrayB)}`);
 
console.log('----------------');

// =============================================
// Užduotis 17: Išlyginti (flatten) masyvą, kurio elementai yra masyvai (vieno lygmens)
// Pvz.: [[1,2], [3,4]] -> [1,2,3,4]
// =============================================
const nestedArray = [[1, 2], [3, 4], [5, 6]];
 
console.log('17.uzd.');

// Sprendimas su for ciklu:
const nestedArray_for = (arr) => {
    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            newArr.push(arr[i][j]);
        }
    }

    return newArr;
}
console.log(`Sprendimas su for ciklu: ${nestedArray_for(nestedArray)}`);


// Sprendimas su flat metodu:
const nesterArray_flat = (arr) => {
    return arr.flat();
}
console.log(`Sprendimas su flat metodu: ${nesterArray_flat(nestedArray)}`);
 
console.log('---------------');

// =============================================
// Užduotis 18: Rasti bendrus elementus tarp dviejų masyvų
// =============================================
const arrA = [1, 2, 3, 4];
const arrB = [3, 4, 5, 6];

console.log('18.uzd.');

// Sprendimas su for ciklu:
const task18_for = (arrA, arrB) => {
    const newArr = [];

    for (let i = 0; i < arrA.length; i++) {
        if (arrB.includes(arrA[i])) newArr.push(arrA[i]);
    }

    return newArr;
}
console.log(`Sprendimas su for ciklu: ${task18_for(arrA, arrB)}`);
 
 
// Sprendimas su filter:
const task18_filter = (arrA, arrB) => {
    return arrA.filter((n) => arrB.includes(n));
}
console.log(`Sprendimas su filter metodu: ${task18_filter(arrA, arrB)}`);
 
console.log('--------------');

// =============================================
// Užduotis 19: Sukurti objektą, kuriame masyvo elementai suskirstyti į "lyginiai" ir "nelyginiai"
// =============================================
const numbers19 = [1, 2, 3, 4, 5, 6];

console.log('19.uzd.');

// Sprendimas su for ciklu:
const numbers19_for = (arr) => {
    const numbers = {
        odd: [],
        even: [],
    };

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            numbers.even.push(arr[i]);
        } else {
            numbers.odd.push(arr[i]);
        }
    }

    return numbers;
}
console.log(`Sprendimas su for ciklu: `, numbers19_for(numbers19));
 

// Sprendimas su reduce:
const numbers19_reduce = (arr) => {
    return arr.reduce((acc, num) => {
        if (num % 2 === 0) {
            acc.even.push(num);
        } else {
            acc.odd.push(num);
        }
        return acc;
    }, { odd: [], even: [] })
}
console.log(`Sprendimas su reduce metodu: `, numbers19_reduce(numbers19));
 
console.log('------------------');

// =============================================
// Užduotis 20: Sukurti naują masyvą, kuriame kiekvienas elementas yra pradinio masyvo elementų kumuota suma (cumulative sum)
// Pvz.: [1, 2, 3, 4] -> [1, 3, 6, 10]
// =============================================
const numbers20 = [1, 2, 3, 4];

console.log('20.uzd.');

// Sprendimas su for ciklu:
const numbers20_for = (arr) => {
    const newArr = [];
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        newArr.push(sum);
    }

    return newArr;
}
console.log(`Sprendimas su for ciklu: ${numbers20_for(numbers20)}`);

 
// Sprendimas su reduce:
const numbers20_reduce = (arr) => {
    return arr.reduce((acc, num, index) => {
        if (index === 0) {
            acc.push(num);
        } else {
            acc.push(acc[index - 1] + num);
        }
        return acc;
    }, []);
}
console.log(`Sprendimas su reduce metodu: ${numbers20_reduce(numbers20)}`);

console.log('--------------');
