// 1. Parašykite funkciją, kuri priima skaičių kaip argumentą ir grąžina jo kvadratą.
// (Pvz., kvadratu(4) turi grąžinti 16.)
const kvadratu = (n) => n ** 2;

console.log(`Kvadratu:`);
console.log(`3 kvadratu: ${kvadratu(3)}`);
console.log(`4 kvadratu: ${kvadratu(4)}`);
console.log();
 
// 2. Parašykite funkciją, kuri patikrina, ar perduotas skaičius yra lyginis.
// (Pvz., arLyginis(8) → true, arLyginis(7) → false.)
const arLyginis = (n) => n % 2 === 0 ? true : false;

console.log(`Ar lyginis:`)
console.log(`8: ${arLyginis(8)}`);
console.log(`7: ${arLyginis(7)}`);
console.log();
 
// 3. Sukurkite funkciją, kuri priima du skaičius ir grąžina didesnįjį.
// (Pvz., didesnisSkaicius(5, 8) → 8.)
const didesnisSkaicius = (a, b) => a > b ? a : b;

console.log(`Didesnis skaičius:`)
console.log(`1, 5: ${didesnisSkaicius(1, 5)}`);
console.log(`7, 3: ${didesnisSkaicius(7, 3)}`);
console.log();
 
// 4. Sukurkite funkciją, kuri priima stringą ir grąžina jį atvirkštine tvarka.
// (Pvz., reverseString("JavaScript") → "tpircSavaJ".)
const reverseString = (string) => string.split('').reverse().join('');

console.log(`Reverse string:`);
console.log(`JavaScript: ${reverseString(`JavaScript`)}`);
console.log(`Python: ${reverseString(`Python`)}`);
console.log();
 
// 5. Parašykite funkciją, kuri skaičiuoja, kiek kartų nurodyta raidė pasikartoja string'e.
// (Pvz., skaiciuotiRaides("banana", "a") → 3.)
const skaiciuotiRaides = (string, char) => {
    let count = 0;
    
    string = string.toLowerCase();
    string = string.split('');

    for (let i = 0; i < string.length; i++) {
        if (string[i] === char) {
            count++;
        }
    }

    return count;
}

console.log(`Skaičiuoti raides:`);
console.log(`JavaScript: ${skaiciuotiRaides(`JavaScript`, `a`)}`);
console.log(`Python: ${skaiciuotiRaides(`Python`, `t`)}`);
console.log();

// 6. Sukurkite funkciją, kuri priima skaičių ir grąžina "teigiamas", "neigiamas" arba "nulis" naudojant ternary.
const skaiciausTipas = (n) => n > 0 ? 'teigiamas' : (n < 0 ? 'neigiamas' : 'nulis');

console.log(`Skaičiaus tipas:`);
console.log(`2: ${skaiciausTipas(2)}`);
console.log(`-1: ${skaiciausTipas(-1)}`);
console.log(`0: ${skaiciausTipas(0)}`);
console.log();
 
// 7. Parašykite funkciją, kuri tikrina, ar žodis prasideda raide "A"(nesvarbu, didžioji ar mažoji).
// (Pvz., pradedaA("Automobilis") → true, pradedaA("namas") → false.)
const pradedaA = (string) => string.toLowerCase().charAt(0).includes('a') ? true : false;

console.log(`Ar prasideda raide 'A':`);
console.log(`Arklys: ${pradedaA(`Arklys`)}`);
console.log(`Žirgas: ${pradedaA(`Žirgas`)}`);
console.log(`ananasas: ${pradedaA(`ananasas`)}`);
console.log();
 
// 8. Sukurkite funkciją, kuri priima skaičių ir patikrina, ar jis dalus iš 3 ir 5(grąžina true arba false).
const arDalus = (n) => (n % 3 === 0 && n % 5 === 0) ? true : false;

console.log(`Ar dalus iš 3 ir 5:`);
console.log(`15: ${arDalus(15)}`);
console.log(`12: ${arDalus(12)}`);
console.log();

// 9. Naudodami for ciklą, išveskite visus skaičius nuo 10 iki 1 mažėjančia tvarka.
console.log(`Skaičiai nuo 10 iki 1:`);
for (let i = 10; i > 0; i--) {
    console.log(i);
}
console.log();
 
// 10. Parašykite for ciklą, kuris išveda tik lyginius skaičius nuo 2 iki 20.
console.log(`Lyginiai skaičiai nuo 2 iki 20`);
for (i = 0; i <= 20; i++) {
    if (i % 2 === 0 && i !== 0) console.log(i);
}
console.log();
 
// 11. Naudodami for ciklą, suskaičiuokite visų skaičių nuo 1 iki 100 sumą ir grąžinkite rezultatą.
console.log(`Skaičių nuo 1 iki 100 suma:`);
let skaiciuSuma = 0;
for (i = 0; i <= 100; i++) {
    skaiciuSuma += i;
}
console.log(skaiciuSuma);
console.log();
 
// 12. Sukurkite funkciją, kuri priima masyvą skaičių ir grąžina jų vidurkį.
// (Pvz., vidurkis([5, 10, 15]) → 10.)
const vidurkis = (arr) => {
    let sum = 0;

    arr.forEach(n => {
        sum += n;
    });
    
    return (sum / arr.length).toFixed(2);
}

console.log(`Vidurkis:`);
console.log(`[5, 10, 15]: ${vidurkis([5, 10, 15])}`);
console.log(`[7, 6, 13]: ${vidurkis([7, 6, 13])}`);
console.log();
 
// 13. Naudodami for ciklą, raskite didžiausią skaičių iš pateikto masyvo.
// (Pvz., rastiDidziausia([3, 9, 2, 11, 7]) → 11.)
const rastiDidziausia = (arr) => {
    let biggest = null;

    arr.forEach(n => {
        if (n > biggest) biggest = n;
    });

    return biggest;
}

console.log(`Didžiausias ciklas iš masyvo:`);
console.log(`[3, 9, 2, 11, 7]: ${rastiDidziausia([3, 9, 2, 11, 7])}`)
 
// 14. Sukurkite funkciją, kuri priima stringą ir grąžina jį be tarpų.
// (Pvz., beTarpų("Labas pasauli") → "Labaspasauli".)
const beTarpu = (string) => string.replaceAll(' ', '');

console.log(`Sakinys be tarpų:`);
console.log(`Labas rytas, Lietuva!: ${beTarpu(`Labas rytas, Lietuva!`)}`);
console.log();
 
// 15. Parašykite funkciją, kuri patikrina, ar string'e yra daugiau nei 10 simbolių.
// (Pvz., arIlgas("JavaScript") → true, arIlgas("Labas") → false.)
const arIlgas = (string) => string.length > 10 ? true : false;

console.log(`Ar ilgas:`);
console.log(`JavaScript'as: ${arIlgas(`JavaScript'as`)}`);
console.log(`Labas: ${arIlgas(`Labas`)}`);
console.log();
 
// 16. Sukurkite for ciklą, kuris išveda daugybos lentelę 5(nuo 1 iki 10).
console.log(`Daugybos lentelė skaičiui - 5:`);
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}
console.log();
 
// 17. Parašykite funkciją, kuri priima stringą ir pakeičia visas "a" raides į "@".
// (Pvz., keistiRaide("banana") → "b@n@n@".)
const keistiRaide = (string) => string.replaceAll('a', '@');

console.log(`Keisti 'a' raide į '@:`);
console.log(`Banana: ${keistiRaide(`banana`)}`);
console.log();
 
// 18. Sukurkite funkciją, kuri sugeneruoja stringą "**********"(10 žvaigždučių), naudojant for ciklą.
console.log(`Generuojame 10 vienodų simbolių be jokio ciklo:`)
console.log(`*`.repeat(10));
console.log();
 
// 19. Parašykite funkciją, kuri priima skaičių ir grąžina visus jo daliklius(išskyrus 1 ir patį save).
// (Pvz., dalikliai(12) →[2, 3, 4, 6].)
const dalikliai = (n) => {
    const result = [];

    for (let i = n - 1; i > 1; i--) {
        if (n % i === 0) result.push(i);
    }

    return result.reverse();
}

console.log(`Skaičiaus dalikliai:`);
console.log(`12: ${dalikliai(12)}`);
console.log(`99: ${dalikliai(99)}`);
console.log();
 
// 20. Sukurkite funkciją, kuri tikrina, ar pateiktas skaičius yra pirminis.
// (Pvz., arPirminis(7) → true, arPirminis(8) → false.)
const arPirminis = (n) => {
    let pirminis = true;

    for (let i = n - 1; i > 1; i--) {
        if (n % i === 0) {
            pirminis = false;
            break;
        }
    }

    return pirminis;
}

console.log(`Ar skaičius pirminis:`);
console.log(`7: ${arPirminis(7)}`);
console.log(`8: ${arPirminis(8)}`);