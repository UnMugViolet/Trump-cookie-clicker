
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
    let amount_money_printer = 0;
    let amount_real_estate = 0;

    // Cost
    let multiply_cost = 20;
    let moneyprinter_cost = 300;
    let real_estate_cost = 10;

    // Speed
    let printing_speed = 1000;
    let house_rent_speed = 10000;

    // Incrémenteurs
    let increment = 0;
    
    


// Click sur image + renvoie le nombre
        function maj() {
  
            counter = counter + click_incrementeur;
            document.querySelector("h3").innerHTML = counter ;
            document.title = counter + " Money";

            // Nouvelle news

            if(counter >= news[increment].value){
                // boucle controlée
                
                increment = increment + 1;

                let space = document.getElementById("news-animation");
                space.innerHTML = document.querySelector("#news-animation").innerHTML = news[increment].sentence;
                space.classList = 'animated';

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
                alert("You can't afford that, you poor thing !")
                alert("You didn't buy the money printer")
            }

            else{
                
            }

        }

// Auto click real estate

        function real_estate(){
            if(counter >= real_estate_cost){

                setInterval((maj*100),house_rent_speed)

                // Retire le prix et affiche

                counter = counter - real_estate_cost;
                document.querySelector("h3").innerHTML = counter;

                // Expo cost et affiche

                real_estate_cost = real_estate_cost * 5; 
                display_real_estate_cost.innerHTML = 'Cost ' + real_estate_cost;

                // Ajout du score
                amount_real_estate = amount_real_estate + (1);
                display_amount_real_estate.innerHTML = 'x' + amount_real_estate;

             }

             else if(counter<multiply_cost){
                alert("You can't afford that, you poor thing !")
                alert("You didn't buy the house")
            }

            else{
                
            }

            }

    const news =[
        {sentence: "Trump made a press release mocking your wealth",value: 100},
        {sentence: "lala",value: 1000},
        {sentence: "Donald Trump is requiring 70% of your company because you used his name ",value: 10000},
        {sentence: "Blabla",value: 50000},
        {sentence: "Blabla",value: 100000},
        {sentence: "Blabla",value: 1000000}
    ]