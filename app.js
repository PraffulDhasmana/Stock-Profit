//Step 1 - initializing elements from html

var initialPrice = document.querySelector('#initial-price');
var stocskQuantity = document.querySelector('#stocks-quantity');
var currentPrice = document.querySelector('#current-price');

var calculateProfitButtun = document.querySelector('#calculate-profit');

var outputArea = document.querySelector('#output-area');

//Step 2 - creating main and supporting function



function calculateProfitAndLoss(initial,quantity,current){

    if(initial!= 0 && quantity !=0 && current != 0){

    if(current > initial){
        var costPrice = initial * quantity ;
        var sellPrice = current * quantity ;
        var profit = sellPrice - costPrice ;
        
        var profitPercentage = (profit/current)*100 ;

        showOutput(`Your profit is ${profitPercentage.toFixed(2)}%.`) ; 

    }
    else if(initial>current){
        var loss =  (initial-current)*quantity;
        var lossPercentage = (loss/initial)*100;

        showOutput(`Your loss is ${lossPercentage.toFixed(2)}%.`) ; 
    }
    else{
        showOutput(`No loss no Profit ! No pain no gain`);
    }
    
}

else{
    showOutput(`Please enter all values`);
}

}
function submitHandler(){
    var ip = initialPrice.value;
    var sq = stocskQuantity.value;
    var cp = currentPrice.value;

    calculateProfitAndLoss(ip,sq,cp);

}

function showOutput(message){

    
    outputArea.innerText = message;
}

calculateProfitButtun.addEventListener('click',submitHandler);
