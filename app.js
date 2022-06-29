let userPswrd;
let point;
let msgV = document.getElementById('msgVert'); // affichera le niveau de sécurité du mdp saisit
let msgO = document.getElementById('msgOrange'); // affichera le niveau de sécurité du mdp saisit
let msgR = document.getElementById('msgRouge'); // affichera le niveau de sécurité du mdp saisit

let regExMinuscule = new RegExp("[a-z]"); // reg ex cherche les lettres de a à z en miniscule
let regExMaj = new RegExp("[A-Z]"); // reg ex cherche les lettres de A à Z en majuscule 
let regExChiffre = new RegExp("[0-9]"); // reg ex cherche les nombre de 0 à 9
let regExCrctSp = new RegExp("\\W"); // reg ex cherche les caractères spéciaux

function verif() {

    msgR = document.getElementById('msgRouge').style.color = "red";
    msgO = document.getElementById('msgOrange').style.color = "orange";
    msgV = document.getElementById('msgVert').style.color = "green";

    userPswrd = document.getElementById('mdp').value; 
    point = 0;

    if (regExMaj.test(userPswrd)) { // reg ex test la présence de majuscule dans le mdp saisit
        point = point + 1; // si la condition est présente point++
    }

    if (regExMinuscule.test(userPswrd)) { // reg ex test la présence de minuscule dans le mdp saisit
        point = point + 1; // si la condition est présente point++
    }

    if (regExCrctSp.test(userPswrd)) { // reg ex test la présence de caractères spéciaux dans le mdp saisit
        point = point + 1; // si la condition est présente point++
    }

    if (regExChiffre.test(userPswrd)) { // reg ex test la présence de chiffre dans le mdp saisit
        point = point + 1; // si la condition est présente point++
    }

    if (userPswrd.length < 8) { // si le mdp fait moins de 8 caractères 
        point = point -1; // si la condition est présente point++
    }

    switch (point) { // switch évalue 'point'
        case 4: // dans le cas où point = 4, afficher le message :
            msgVert.innerHTML = '<span>Très sécurisé</span>';
            break; // arrêter l'évaluation car 'point' = 4 (si ce n'est pas le cas, l'évaluation continue)
        case 3: msgVert.innerHTML = '<span>Sécurisé</span>'; // dans le cas où point = 3, afficher le message :
            break;
        case 2: msgOrange.innerHTML = '<span>Moyen</span>'; // dans le cas où point = 2, afficher le message :
            break;
        case 1: msgRouge.innerHTML = '<span>Dangereux</span>'; // dans le cas où point = 1, afficher le message :
            break;
        case 0: msgRouge.innerHTML = '<span>Très dangereux</span>'; // dans le cas où point = 0, afficher le message :
            break;
            default: msg.innerHTML = 'Erreur'; // défault = aucun cas ne correspond
    }
}

btn.addEventListener('click', verif, false); // fonction verif démarre quand on clique sur le bouton