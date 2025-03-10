
/*
1. Parašykite funkciją, kuri pagal vartotojo įvestą balą(nuo 1 iki 10) išspausdina atitinkamą vertinimą:
 "Labai gerai", "Gerai", "Patenkinamai" arba "Nepatenkinamai".Kuris operatorius čia tinkamiausias?
 
2. Parašykite programą, kuri patikrina, ar asmuo gali balsuoti pagal amžių(18 ir daugiau).
Jei taip, atspausdinkite "Gali balsuoti", jei ne – "Negali balsuoti".Kuris metodas čia tinkamiausias?
 
3. Sukurkite programą, kuri pagal savaitės dienos numerį(nuo 1 iki 7) atspausdina dienos pavadinimą.
Kurį metodą čia patartumėte naudoti?
 
4. Parašykite funkciją, kuri patikrina, ar skaičius yra teigiamas, neigiamas ar lygus nuliui, 
ir atitinkamai išveda pranešimą.Kurį operatorių naudoti?
 
5. Sukurkite programą, kuri nustato vartotojo amžių ir priskiria jį į vieną iš trijų grupių:
 "Jaunuolis"(13 - 19), "Suaugęs"(20 - 64), "Pensininkas"(65 +).Koks operatorius geriausiai tinka šiam atvejui?
 
6. Parašykite programą, kuri patikrina, ar skaičius yra lyginis ar nelyginis, ir atspausdina
 atitinkamą pranešimą.Kuris operatorius čia tinkamiausias?
*/


function vertinimas(balas) {
    if (typeof balas !== "number" || 1 > balas > 10) {
      return "Netinkamas įvesties tipas: įveskite gautą balą nuo 1 iki 10.";
    }
    if (balas >= 9) return "Labai gerai";
    else if (balas >= 7) return "Gerai";
    else if (balas >= 4) return "Patenkinamai";
    else return "Nepatenkinamai";
  }

  console.log(vertinimas(4));
  console.log(vertinimas(7));

function balsuotojas(amzius) {
  if (typeof amzius !== "number" || amzius < 0) {
    return "Netinkamas įvesties tipas: amžius turi būti skaičius nemažesnis už 0.";
  }
  if (amzius >= 18) return "Gali balsuoti";
  return "Negali balsuoti";
}

console.log(balsuotojas(20));
console.log(balsuotojas(14));

function savaitesDienos(diena) {
    switch (diena) {
      case 1:
        return "Pirmadienis";
      case 2:
        return "Antradienis";
      case 3:
        return "Trečiadienis";
      case 4:
        return "Ketvirtadienis";
      case 5:
        return "Penktadienis";
      case 6:
        return "Šeštadienis";
      case 7:
        return "Sekmadienis";
      default:
        return "Neteisinga įvestis: įrašykite skaičių atitinkatį savaitės dieną(1-7)";
    }
  }
  
  console.log(savaitesDienos(2));

  function veiksmas(n) {
    let result = 0;
    if (n > 0) {
        result = "Teigiamas";
    } else {
        result = "Neigiamas";
    }
    return result;
}
console.log(veiksmas(10));
console.log(veiksmas(-8));
console.log(veiksmas(69));

function vartotojas(age) {
    if (age >= 13 && age <= 19) {
        return "Jaunuolis";
    } else if (age >= 20 && age <= 64) {
        return "Suaugęs";
    } else if (age >= 65) {
        return "Pensininkas";
    } else {
        return "Nepriskirtas jokiai grupei";
    }

}


console.log(vartotojas(10));
console.log(vartotojas(19));
console.log(vartotojas(67));
console.log(vartotojas(0));

function algoritmas(n) {
    let result = 0;

    if (n % 2 === 0) {
        result = "Lyginis";
    } else {
        result = "Nelyginis";

    }
    return result;
}
console.log(algoritmas(8));
console.log(algoritmas(5));
console.log(algoritmas(-1));