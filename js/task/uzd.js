// Praktinių Užduočių sting metodai

// Sukurkite stringą ir išveskite jo ilgį.

// Konvertuokite stringą į didžiąsias raides.

// Konvertuokite stringą į mažąsias raides.

// Pašalinkite tarpus iš string'o pradžios ir pabaigos.

// Patikrinkite, ar stringas prasideda žodžiu "Hello".

// Patikrinkite, ar stringas baigiasi žodžiu "World".

// Raskite pirmąją žodžio "Java" poziciją string'e.

// Raskite paskutinę žodžio "Java" poziciją string'e.

// Pakeiskite pirmąjį "Java" į "JS".

// Pakeiskite visus "Java" į "JS".

// Padalinkite stringą į masyvą pagal skyriklį.

// Sujunkite du string'us į vieną.

// Išskirkite string'o dalį nuo 3 iki 8 simbolio.

// Naudodami slice, paimkite paskutinius 5 string'o simbolius.

// Naudodami substring, paimkite pirmus 5 string'o simbolius.

console.log('1 užduotis');

const ilgis = 'zalgiris eili karta vel pralaimejo';
console.log(`${ilgis} = ${ilgis.length}`);


console.log('2 uzduotis toUpperCase ');
const didelesRaides = 'jonas sugalvojo laikyti furos teises!';
console.log(didelesRaides.toUpperCase());

console.log("...............");



console.log('3 uzduotis toLowerCase');
const mazosRaides = 'Petras vIsAdA bIjOJO, SaVO ZMoNoS OnUtEs';
console.log(mazosRaides.toLowerCase());

console.log('.............');


console.log('4 uzduotis trim metodas');
const nereikalingiTarpai = "      Kas tas  nereikalingas  tarpas ?     ";

console.log(nereikalingiTarpai);

console.log(nereikalingiTarpai.trim());

console.log('.............');


console.log('5 uzduotis  startsWith');
const prasideda = 'Hello, how are you my bro?';
console.log(prasideda.startsWith('Hello'));
console.log(prasideda.startsWith('my'));

console.log('...............');

console.log('6 uzduotis endsWith');

const baigiasi = ' Mama yra Pasaulis.';
console.log(baigiasi.endsWith('pasaulis'));
console.log(baigiasi.endsWith('.'))

console.log('................');


console.log('7 uzduotis su indexOf');
const pozicija = 'Ar Java yra tas pats kas Javascript? Ar Java Script yra du zodziai?';
console.log(pozicija.indexOf('Java'));
console.log(pozicija.indexOf('pats'));

console.log('................');



console.log('8 uzduotis lastIndexOf');
const paskutinePozicija = 'Ar Java yra tas pats kas Javascript?';
console.log(paskutinePozicija.lastIndexOf('Java'));
console.log(paskutinePozicija.lastIndexOf('pats'));

console.log('.................');


console.log('9 uzduotis .replace');
const pakeitimas1 = 'Ar Java yra tas pats kas Javascript? Ar Java Script yra du zodziai?';
const pak1 = 'Java';
console.log(pakeitimas1.replace(pak1, 'JS'));

console.log('....................');




console.log('10 uzduotis replaceAll');
const pakeitimas2 = 'Ar Java yra tas pats kas Javascript? Ar Java Script yra du zodziai?';
const pak2 = 'Java';
console.log(pakeitimas2.replaceAll(pak2, 'JS'));

console.log('...............');


console.log('11 uzduotis split');
const dalinti = 'Ar šis sakinis dalinasi?.';
const kiekDalin1 = dalinti.split(' ');
const kiekDalin2 = dalinti.split('');
console.log(kiekDalin1[2]);
console.log(kiekDalin2[2]);

console.log('...................');


console.log('12 uzduotis concat');
const pirmas = 'Petras lanai milejo savo masina';
const antras = 'Ona piko ant Petro,nes jis per daug leido laiko garazia.';
console.log(pirmas.concat(', ', antras));

console.log('..................');


console.log('13 uzduotis substring');
const dalis = ' Kas yra meile?';
console.log(dalis.substring(4, 7 + 1));

console.log('.....................');


console.log('14 uzduotis  slice ');
const simboliai = 'NEBEPRISIKIŠKIAKOPŪSTELIAUJANTIESIEMS';
console.log(simboliai.slice(5 + 1));
console.log(simboliai.slice(-4));

console.log('.................');


console.log('15 uzduotis substring');
const pirmi5 = 'Kodel Jonas išsiskire su zmona?'
console.log(pirmi5.substring(5 + 1));
console.log(pirmi5.substring(2));

console.log('.................');

// Sukurkite stringą, kuris pakartojamas 4 kartus.
// Patikrinkite, ar string'e yra žodis "fun".
// Išveskite stringą su kabutėmis "teksto" viduje.
// Sukurkite šablono literatūrą su kintamuoju ir išveskite rezultatą.
// Pašalinkite tarpus tik iš string'o pradžios.

console.log('16 uzduotis repeat');
const pakartojimas = 'Jonas labiau milejo sunis nei katinus❤';

console.log(pakartojimas.repeat(6));

console.log('.................');


console.log('17 uzduotis includes');
const rasti1 = 'Jono zmona taip ir nebegrizo.';
console.log(rasti1.includes('nebegrizo'));

const rasti2 = 'Jono zona taip ir nebegrizo.';
const rasti3 = 'Jono zmona net neketino pareiti.';
const word = 'nebegrizo';
console.log((rasti2.includes(word)) ? 'Zodis yra' : 'Zodzio nera');
console.log((rasti3.includes(word)) ? 'Zodis yra' : 'Zodzio nera');

console.log('.................');

console.log('18 uzduotis');
console.log(`Jonas '' ir "" Aldona`);

console.log('.......................');



console.log('19 uzduotis');
const vardas = 'Jonas';
const amzius = '12';
const augintinis = 'katinas';
const sakinys = `${vardas} yra jaunas ${amzius} vaikas, bet jo ${augintinis} augintis vistiek  pabegto.`;
console.log(sakinys);

console.log('.......................');

console.log('20 uzduotis');
const tarpai1 = '       kas tu? ka vakre?';
console.log(tarpai1.trimStart());

console.log('...........................');




