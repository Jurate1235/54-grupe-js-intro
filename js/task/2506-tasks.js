/**
 * Užduotis Nr. 1
 * Parašykite funkciją, kuri priima skaičių ir grąžina "true", jei jis teigiamas, ir "false", jei neigiamas arba nulis.
 */
console.log('pirmas variantas');

function skaicius(num1) {
    return num1 > 0 ? 'True' : 'False';
        }

    console.log('1 uzduotis');
    console.log();
    console.log(skaicius(1)); 
    console.log(skaicius(-30)); 


console.log('antras variantas, kuri pasiule Simas')
    function arTeigiamas(skaicius) {
        return skaicius > 0;
    }
    
    console.log('Užduotis Nr. 1.1.');
    console.log('1: ', arTeigiamas(8));
    console.log('-1: ', arTeigiamas(-99));

/**
 * Užduotis Nr. 2
 * Parašykite funkciją, kuri priima skaičių nuo 1 iki 12 ir grąžina mėnesio pavadinimą.
 */
function menesioPavadinimas(menesis) {
    switch (menesis) {
        case 1: return 'Sausis';
        case 2: return 'Vasaris';
        case 3: return 'Kovas';
        case 4: return 'Balandis';
        case 5: return 'Gegužė';
        case 6: return 'Birželis';
        case 7: return 'Liepa';
        case 8: return 'Rugpjūtis';
        case 9: return 'Rugsėjis';
        case 10: return 'Spalis';
        case 11: return 'Lapkritis';
        case 12: return 'Gruodis';
        default: return 'OH nezinau ko ieškai!';
    }
}

console.log('Užduotis Nr. 2');
console.log('1: ', menesioPavadinimas(1));
console.log('3: ', menesioPavadinimas(3));
console.log('14: ', menesioPavadinimas(13));

/**
 * Užduotis Nr. 3
 * Parašykite funkciją, kuri priima du skaičius ir grąžina "Pirmas didesnis", "Antras didesnis" arba "Lygūs".
 */
function kurisDidesnis(skaicius1, skaicius2) {
    return skaicius1 < skaicius2 ? 'Antras didesnis' : (skaicius1 > skaicius2 ? 'Pirmas didesnis' : 'Lygūs');
}

console.log();
console.log('Užduotis Nr. 3');
console.log('1 ir 1: ', kurisDidesnis(2, 1));
console.log('1 ir 3: ', kurisDidesnis(3, 3));
console.log('4 ir 2: ', kurisDidesnis(8, 8));

console.log('arba kitas variantas');
function kurisDidesnis(num1, num2) {
    if (num1 > num2) {
        return 'Pirmas didenis';
    } else if (num1 === num2) {
        return 'Lygus';
    } else if (num1 < num2) {
        return 'Antras didesnis';
    }
}

console.log('3 uzduotis');
console.log();
console.log(kurisDidesnis(1, 5)); 
console.log(kurisDidesnis(8, 2)); 
console.log(kurisDidesnis(20, 20)); 
console.log('-----------');


/**
 * Užduotis Nr. 4
 * Parašykite funkciją, kuri priima temperatūrą Celsijaus laipsniais ir grąžina ją Farenheito laipsniais.
 * P.S.: Dirbame tik su skaičiais, be "°C" ir "°F".
 */
function laipsniuKeitimas(c) {
    return c * (9/5) + 32;
}

console.log();
console.log('Užduotis Nr. 4');
console.log('Formulė: °F = °C×(9/5)+32')
console.log('21°C: ', laipsniuKeitimas(21), '°F');
console.log('3 °C: ', laipsniuKeitimas(3), '°F');
console.log('-60 °C: ', laipsniuKeitimas(-60), '°F');

/**
 * Užduotis Nr. 5
 * Parašykite funkciją, kuri priima teigiamą skaičių ir grąžina visų jo skaitmenų sumą.
 * P.S.: Jei pateikiamas vienženklis skaičius - grąžiname tą patį skaičių.
 */

console.log('Mantas parode');
function skaitmenuSuma(num) {
    let sum = 0;
    for (let i = 0; num / 10 > 0; i++){
        sum += num % 10;
        num = Math.floor(num/10);
    } return sum;
}

console.log('55 uzduotis');
console.log();
console.log(skaitmenuSuma(123)); 
console.log(skaitmenuSuma(17)); 
console.log('-----------');


console.log( 'Simas parode')
function skaiciuSuma(skaicius) {
    let suma = 0;
    skaicius = skaicius.toString();

    for (let i = 0; i < skaicius.length; i++) {
        suma += Number(skaicius[i]);
    }

    return suma;
}

console.log();
console.log('Užduotis Nr. 5');
console.log('559: ', skaiciuSuma(559));
console.log('8677: ', skaiciuSuma(8677));
console.log('33365: ', skaiciuSuma(33365));

/**
 * Užduotis Nr. 6
 * Parašykite funkciją, kuri grąžina atsitiktinį procentą nuo 0 iki 100 (sveikasis skaičius).
 */
function procentai() {
    return Math.floor(Math.random() * 101);
}

console.log();

console.log('Užduotis Nr. 6');
for (let i = 0; i < 5; i++) {
    console.log(procentai(), '%');
}

/**
 * [BONUS] Užduotis Nr. 1
 * Parašykite funkciją, kuri priima skaičių ir grąžina masyvą su jo daugybos lentelės rezultatais iki 10.
 */
console.log(' paiškino Simas kaip reikia spresti');

function daugybosLentele(skaicius) {
    const lentele = [];

    for (let i = 1; i <= 10; i++) {
        lentele.push(skaicius * i);
    }

    return lentele;
}

console.log();
console.log('[BONUS] Užduotis Nr. 1');
console.log('7: ', daugybosLentele(7));
console.log('4: ', daugybosLentele(4));
console.log('19: ', daugybosLentele(19));

console.clear ();



