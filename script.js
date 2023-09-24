"use strict";

let name= "john";
let santeMentale = 10;
let feuRouge=0;
let changementDeTaxi=0;// nb de changements taxi

function perdSantéMentale(){ // +1 a feuRouge, -1 a santeMentale et renvoie un texte + la variable santeMentale
    feuRouge++,
    santeMentale--,
    console.log("tu perds un point de santé mentale")
    console.log(santeMentale);
}

function  taxi(){ //+1 a feuRouge et +1 a changement de taxi renvoie un texte + la variable changementDeTaxi 
    feuRouge++, 
    changementDeTaxi++,
    console.log("tu prends un autre taxi");
    console.log(changementDeTaxi); 
}

function nbrFeuRouge(){ // ajoute 1 a feuRouge et renvoie un texte + la variable feuRouge
    feuRouge++,
    console.log("tu passes un feux Rouge");
    console.log(feuRouge) 
}



let musique=['Anissa-Wejdenne',"Homage-Mild High Club",'Acid-Jockstrap',"Sunny-Boney","Du bout des lèvres-Barbara"];


while(feuRouge<30 && santeMentale>0){  // tant que feuRouge <30 et santeMentale >0 la boucle continue 
    musique = Math.floor(Math.random() * 6);  // on initialise les variables case avec le nom des 5 musiques 
        switch(musique){
            case 1:
                console.log("Anissa-Wejdenne");
                perdSantéMentale();
                taxi();//rajoute 1 a la var changement de taxi
                nbrFeuRouge();  
                break;
            case 2:
                console.log("Homage-Mild High Club");
                nbrFeuRouge();  
                break;
            case 3:
                console.log("Acid-Jockstrap");
                nbrFeuRouge();  
                break;
            case 4:
                console.log("Sunny-Boney");    
                nbrFeuRouge();  
                break;     
            case 5:
                console.log("Du bout des lèvres-Barbara");    
                nbrFeuRouge();  
                break;
        }        
} 

if(santeMentale==0){     
    console.log("john explose")
}else if(feuRouge==30){
    console.log("tu es en vie et chez toi");   
    console.log("tu as " + santeMentale + " de santé mentale");
    console.log("tu as passé les 30 feux rouges")
}


 







