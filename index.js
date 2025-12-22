/* let broj1 = prompt("Unesi prvi broj: ");
let broj2 = prompt("Unesi drugi broj: ");
if(broj1 > broj2)
{
    alert(broj1 + " je veći od " + broj2)
}
else if(broj1 < broj2)
{
    alert(broj2 + " je veći od " + broj1)
}
else
{
    alert("Brojevi su jednaki")
} */

/* BMI App  */

let masa = prompt("Unesi masu u kg: ");
let visina = prompt("Unesi visinu u m: ");
let bmi = Math.round(masa/(visina*visina));

alert("Vaš BMI iznosi; " + bmi);

/* Skripta treba kada se stranica učita 
ponuditi preko prompta unos (npr. Unesite 
jedan broj: ). Kada se unese broj, skripta 
preko alerta ispiše dva puta veći broj od 
unešenog (npr. Unesete broj 4, preko 
alerta se ispiše 8).
Ispis treba biti u formatu: Unio si 
broj 4, a dva puta veći broj je 8 (7) */