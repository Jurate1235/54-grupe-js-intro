
 //3dienio uždaviniai: // Sukurkite funkciją, kuri pagal pateiktą mėnesio numerį(1 - 12) išveda sezono 
// pavadinimą("Pavasaris", "Vasara", "Ruduo", "Žiema").Kuri struktūra geriausiai tinka šiam uždaviniui?

function season(num) {
    if (num >= 3 && num <= 5) {
        return "Pavasaris";
    } else if (num >= 6 && num <= 8) {
        return "Vasara";
    } else if (num >= 9 && num <= 11) {
        return "Ruduo";
    } else if (num >= 1 && num <= 2) {
        return "Žiema";   
    } else if (num == 12) {
        return "Žiema";   
    } else {
        return "Nepriskirtas jokiam sezonui, įvesk skaičių nuo 1-12";
    }
  
  }
  
  console.log('Pirma užduotis');
  console.log(season(1));
  console.log(season(2));
  console.log(season(3));
  console.log(season(-2));
  
  
  // Parašykite programą, kuri nustato, ar du skaičiai yra lygūs, ar ne, ir atitinkamai išveda pranešimą.
  // Kuris operatorius naudoti?
  function isEqual(n1, n2) {
    return n1 === n2 ? 'Skaičiai yra lygūs' : 'Skaičiai nėra lygūs';
  }
  
  console.log('Antra užduotis');
  console.log(`Pateikiame skaičius (1, 1). ${isEqual(1, 1)}`);
  console.log(`Pateikiame skaičius (2, 1). ${isEqual(2, 1)}`);
  
  function test(raide) {
    const balses = ['a', 'ą', 'e', 'ę', 'ė', 'i', 'į', 'y', 'o', 'u', 'ū', 'ų'];
    const priebalses = ['b', 'c', 'č', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'r', 's', 'š', 't', 'v', 'z', 'ž'];
  
    if (balses.includes(raide)) {
        return 'Pateiktas simbolis yra balsė';
    } else if (priebalses.includes(raide)) {
        return 'Pateiktas simbolis yra priebalsė';
    } else {
        return 'Pateiktas simbolis nėra raidė';
    }
  }
  
  
  console.log(test('b'));
  console.log(test('c'));
  console.log(test('ė'));
  console.log(test('u'));
  console.log(test('-2'));
  
  // Parašykite programą, kuri pagal nurodytą dieną(pirmadienis, antradienis, ...sekmadienis) 
  // išveda, 
  // ar tai darbo diena ar savaitgalis.Kurį operatorių naudoti?
  function week(day) {
    switch (day) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            return 'Darbo diena';
        case 6:
        case 7:
            return 'Savaitgalis';
        default:
            return 'Klaida, įvesk skaičių 1-7';
  
    }
  }
  
  
  console.log(week(1));
  console.log(week(6));
  
  // Sukurkite funkciją, kuri pagal įvestą temperatūrą(Celsius) nustato oro būklę: 
  // "Šalta"(< 10°C), "
  // Šilta"(10 - 25°C), "Karšta"(> 25°C).Koks operatorius geriausiai tinka?
  
  function bukle(temp) {
    if (temp >= 10 && temp <= 25) {
        return "Šilta";
    } else if (temp < 10) {
        return "Šalta";
    } else if (temp > 25) {
        return "Karšta";
    } else {
        return "Nepriskirtas jokiai grupei";
    }
  
  }
  
  
  console.log(bukle(10));
  console.log(bukle(22));
  console.log(bukle(5));
  console.log(bukle(-6));
  console.log(bukle(0));
  console.log(bukle('klklk'));
  
  
  // Parašykite programą, kuri patikrina, ar vartotojo įvestas skaičius yra daliklis tiek 3,
  // tiek 5. Kurį operatorių naudoti?
  
  function dalyba(daliklis) {
          return daliklis % 3 === 0 && daliklis % 5 === 0 ? 'puikiai' : 'Sis skaicius nera daliklis 3 ir 5'
  }
    
  
  console.log(dalyba(15));
  console.log(dalyba(30));
  console.log(dalyba(42));
  
  
  // Sukurkite funkciją, kuri pagal įvestą dienos tipą("darbo diena", "savaitgalis") 
  // išveda atitinkamą veiklą: "Dirbti", "Ilsėtis".
  // Kuri struktūra geriausiai tinka?
  
  function week(day) {
    switch (day) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            return 'Darbo diena Dirbti';
        case 6:
        case 7:
            return 'Savaitgalis Ilsėtis';
        default:
            return 'Klaida, įvesk skaičių 1-7';
  
    }
  }
  
  
  console.log(week(1));
  console.log(week(4));
  console.log(week(7));
  console.log(week(8));
  console.log(week(9));
  
  
  // Parašykite programą, kuri nustato, ar vartotojo įvestas metai
  //  yra keliamieji.Kurį operatorių naudoti?
  
  const isLeapYearDate = year => 
      (new Date(year, 1, 29).getDate() === 29) ? "Keliamieji metai" : "Nėra keliamieji metai";
  
  console.log(isLeapYearDate(2024)); // "Keliamieji metai"
  console.log(isLeapYearDate(2023)); // "Nėra keliamieji metai"
  
  
  // Sukurkite funkciją, kuri pagal vartotojo įvestą temperatūrą(Celsius)
  //  priskiria aprangos rekomendaciją: "Kepurių nereikia", "Kepurės reikalingos", 
  // "Geriau neik į lauką".Koks operatorius geriausiai tinka?
  
  function busena (temp) {
    if (temp >= 5 && temp <= 45) {
        return "Kepurių nereikia";
    } else if (temp <= 4 && temp >= -10) {
        return "Kepurės reikalingos";
    } else if (temp < -11) {
        return "Geriau neik į lauką";
    } else {
        return "Nepriskirtas jokiai grupei";
    }
  
  }
  
  
  console.log(busena(10));
  console.log(busena(22));
  console.log(busena(-6));
  console.log(busena(4));
  console.log(busena(-13));
  console.log(busena(5));
  console.log(busena(0));
  console.log(busena('uuuhgff'));
  
  console.log(clearInterval);
  
  
  