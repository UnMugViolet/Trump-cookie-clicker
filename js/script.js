
window.onload = function alert() {
    let name = prompt("What's your name ?");
    let space = document.getElementById("news-animation");
    space.innerHTML = name + ", a new competitor to the great trump's fortune";
    space.classList = 'animated';

}   


    // Récupération du clic sur image 
    document.querySelector('#trump-click').addEventListener('click', maj)
    // Récupération du clic sur bouton multiplié
    document.querySelector('#multiply_btn').addEventListener('click',multiply_btn)
    // Récupération du clic sur imprimante
    document.querySelector('#money_printer').addEventListener('click',money_printer)
    // Récupération du clic sur maison
    document.querySelector('#real_estate').addEventListener('click',real_estate)
    

    // counter + click
    let counter = 0;
    let click_incrementeur = 1;
    let rent_house = 250;
    let amount_money_printer = 0;
    let amount_real_estate = 0;

    // Cost
    let multiply_cost = 20;
    let moneyprinter_cost = 300;
    let real_estate_cost = 10000;

    // Speed
    let printing_speed = 1000;
    let house_rent_speed = 10000;

    // Incrémenteurs
    let increment = 0;

    // fonction attente de 1ms
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Appel un son 
    let sound_fake_news = new Audio("audio/Fake news jingle.mp3");
    let sound_wrong = new Audio("audio/Wrong Sound Effect.mp3");





// Click sur image + renvoie le nombre
        async function maj() {
  
            counter = counter + click_incrementeur;
            document.querySelector("h3").innerHTML = counter ;
            document.title = counter ;


// Breaking news tableau

const news =[
    {sentence: "Trump made a press release mocking your wealth",value: 100},
    {sentence: "Trump accuses you of being Mexican",value: 1000},
    {sentence: "Donald is requiring 80% of your company because you used his name ",value: 10000},
    {sentence: "Trump sues you for using his fame to make money",value: 50000},
    {sentence: "Donald asks for your birth certificate to prove that you are not an immigrant",value: 100000},
    {sentence: "Congratulation you have earned 1M $, Trump has 3200 times more filthy thing !",value: 1000000}
]


// Nouvelle news

        if(counter >= news[increment].value){
                
            // boucle controlée
            increment = increment + 1;

            let space = document.getElementById("news-animation");
            space.innerHTML = document.querySelector("#news-animation").innerHTML = news[increment].sentence;
            space.classList.remove('animated')
            await sleep(1);
            space.classList.add('animated');

            sound_fake_news.play();

    }
            
        }
        
// Multiplicateur x 2

        function multiply_btn(){
            
            if (counter >= multiply_cost){
                click_incrementeur = click_incrementeur + 1;
                counter = counter - multiply_cost;
                multiply_cost = multiply_cost * 2;
                document.querySelector("#multiply_btn").innerHTML = 'Multiply x' +  Number(click_incrementeur + 1);
                display_cost.innerHTML = 'Cost : ' + multiply_cost;
                document.querySelector("h3").innerHTML = counter ;
                multiplied_by.innerHTML = 'x' + Number(click_incrementeur);
            }

            else if(counter<multiply_cost){
                sound_wrong.play();
                alert("You can't afford that, you poor thing !")
                alert("You didn't buy the multiplier")
            }

            else{
                
            }

        }          
  
    

// Auto-click

         function money_printer(){
             if (counter >= moneyprinter_cost){

                // Donne un dollar toutes les secondes
                setInterval(maj,printing_speed)

                // Retire le prix et l'affiche
                counter = counter - moneyprinter_cost;
                document.querySelector("h3").innerHTML = counter;

                // Exponentiel printer cost
                moneyprinter_cost = moneyprinter_cost * 3;
                display_printer_cost.innerHTML = 'Cost : ' + moneyprinter_cost;

                // Ajoute un au score et l'affiche

                amount_money_printer = amount_money_printer + (1);
                display_amount_money_printers.innerHTML = 'x' + amount_money_printer;

             }

             else if(counter<multiply_cost){
                sound_wrong.play();
                alert("You can't afford that, you poor thing !")
                alert("You didn't buy the money printer")
            }

            else{
                
            }

        }

        function maj_house(){
            counter = counter + rent_house;
            document.querySelector("h3").innerHTML = counter ;

        }

// Auto click real estate

        function real_estate(){
            if(counter >= real_estate_cost){

                setInterval(maj_house,house_rent_speed)
                // Augmente rent en exponentiel
                rent_house = rent_house*2;

                // Retire le prix et affiche

                counter = counter - real_estate_cost;
                document.querySelector("h3").innerHTML = counter;

                // Expo cost et affiche

                real_estate_cost = real_estate_cost * 5; 
                display_real_estate_cost.innerHTML = 'Cost : ' + real_estate_cost;

                // Ajout du score
                amount_real_estate = amount_real_estate + (1);
                display_amount_real_estate.innerHTML = 'x' + amount_real_estate;

             }

             else if(counter<multiply_cost){
                sound_wrong.play();
                alert("You can't afford that, you poor thing !")
                alert("You didn't buy the house")
            }

            else{
                
            }
            
            }

