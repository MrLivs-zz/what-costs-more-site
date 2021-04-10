
if (localStorage.getItem('score')!=null){
    var score = JSON.parse(localStorage.getItem('score'));
    $(".scoreNum").text(score);
}
else{
    var score = 0;
    $(".scoreNum").text(score);
}
var leftCost = $(".left-cost .left-number")
var rightCost = $(".right-cost .right-number")
var leftBg = $(".left-half-bg")
var rightBg = $(".right-half-bg")

var middle = $(".middle-item")


var itemList = [
    {name: "Most Expensive NBA Tickets", cost: 127000, img:"./images/nba-2016-finals-game-7.jpg"},
    {name: "Most Expensive Pokemon Card", cost: 224250, img:"./images/most-expensive-pokemon-card.png"},
    {name: "1 Kilogram of Gold", cost: 55550, img:"./images/1-kilogram-gold.jpg"},
    {name: "Minimum cost to afford a Lamborghini", cost: 200000, img:"./images/baseline-lambo.jpg"},
    {name: "Average cost of a house in Texas", cost: 224466, img:"./images/texas-house.jpg"},
    {name: "Average cost of a house in New York", cost: 779000, img:"./images/new-york-house.jpg"},
    {name: "Most Expensive Stock", cost: 310000, img:"./images/most-expensive-stock.png"},
    {name: "Most Expensive Dog", cost: 1600000, img:"./images/most-expensive-dog.jpg"},
    {name: "Most Expensive Boxing Tickets", cost: 157000, img:"./images/most-expensive-boxing-tickets.jpg"},
    {name: "Most Expensive Video Game Ever Sold", cost: 156000, img:"./images/smb3.png"},
    {name: "Most Expensive Headphones", cost: 120000, img:"./images/most-expensive-headphones.jpg"},
    {name: "Most Expensive Bed", cost: 150000, img:"./images/most-expensive-bed.jpg"},
    {name: "Average Physician Salary", cost: 206500, img:"./images/average-physician-salary.jpg"},
    {name: "Minimum cost to open a Burger King", cost: 333100, img:"./images/burger-king.jpg"},
    {name: "Minimum cost to afford a Yacht", cost: 300000, img:"./images/baseline-yacht.jpg"},
    {name: "Peak Bitcoin Price(2021)", cost: 61283, img:"./images/bitcoin.jpg"},
    {name: "Average Total Cost of Medical School", cost: 150444, img:"./images/medical-school.jpg"},
    {name: "Cheapest Tesla", cost: 36990, img:"./images/cheapest-tesla.jpg"},
    {name: "Average Yearly Butler Cost", cost: 50000, img:"./images/butler.jpg"},
    {name: "Most Expensive Fish", cost: 400000, img:"./images/most-expensive-fish.jpg"},

]



chooseRandomItems();



$(".left-item").click(function(e){
    $(".left-item").css("background","rgba(235, 236, 241, 1)")
    postClick();
        setTimeout(function(){
            leftCost.css("visibility","visible") ;
            $(".left-cost span h1").css("visibility","visible");
            leftCost.addClass("slide-up-fade-in");
            $(".left-cost span h1").addClass("slide-up-fade-in");          
            $(".left-number").easy_number_animate({
                start_value:0,
                end_value: leftCost.data("value"),
                duration:1500,
                delimiter:','
            })

        }, 1000)
        setTimeout(function() {showAnswer(leftCost)},5000);
        setTimeout(function(){
            rightCost.addClass("slide-up-fade-in");
            $(".right-cost span h1").addClass("slide-up-fade-in");
            rightCost.css("visibility","visible") ;
            $(".right-cost span h1").css("visibility", "visible");
            $(".right-number").easy_number_animate({
                start_value:0,
                end_value: rightCost.data("value"),
                duration:1500,
                delimiter:','
            })   

        }, 3000)
      

})

$(".right-item").click(function(e){
    $(".right-item").css("background","rgba(235, 236, 241, 1)")
    postClick();
        setTimeout(function(){
            leftCost.css("visibility","visible") ;
            $(".left-cost span h1").css("visibility","visible");
            leftCost.addClass("slide-up-fade-in");
            $(".left-cost span h1").addClass("slide-up-fade-in");          
            $(".left-number").easy_number_animate({
                start_value:0,
                end_value: leftCost.data("value"),
                duration:1500,
                delimiter:','
            })

        }, 3000)
        setTimeout(function() {showAnswer(rightCost)},5000);
        setTimeout(function(){
            rightCost.addClass("slide-up-fade-in");
            $(".right-cost span h1").addClass("slide-up-fade-in");
            rightCost.css("visibility","visible") ;
            $(".right-cost span h1").css("visibility", "visible");
            $(".right-number").easy_number_animate({
                start_value:0,
                end_value: rightCost.data("value"),
                duration:1500,
                delimiter:','
            })   

        }, 1000)
})

$(".middle-button").click(function(e) {
    location.reload();
})



function showAnswer(userChoice){
    let leftCostNum = leftCost.data('value')
    let rightCostNum = rightCost.data('value')
    if (leftCostNum > rightCostNum){
        if (userChoice == rightCost){
            $(".right-item").addClass("wrong-animation")
            wrongAnswer();
        }
        else{
            $(".left-item").addClass("correct-animation")
            correctAnswer()
        }
        leftBg.css("filter","none");
    }
    else {
        if (userChoice == leftCost){
            $(".left-item").addClass("wrong-animation")
            wrongAnswer();
        }
        else{
            $(".right-item").addClass("correct-animation")
            correctAnswer();
        }
        rightBg.css("filter", "none");
    }

    setTimeout(function(){
        $(".middle-button").css("visibility","visible")
        $(".middle-button").addClass("hvr-bob-stay")
        $(".middle-button").animate({opacity:1}, 1000)

    }, 2000)
    
}


function wrongAnswer(){
    middle.html(`<svg class="crossmark paused" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="crossmark__circle paused" cx="26" cy="26" r="25" fill="none"/><path class="crossmark__check paused" fill="none" d="M14.1 14.1l23.8 23.8 m0,-23.8 l-23.8,23.8"/></svg>`)
    let test = document.querySelector(".crossmark");
    let test2 = document.querySelector(".crossmark__check");
    let test3 = document.querySelector(".crossmark__circle");
    test.classList.remove("paused");
    test2.classList.remove("paused");
    test3.classList.remove("paused");
    updateScore(0);
}

function correctAnswer(){
    middle.html(`<svg class="checkmark paused" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="checkmark__circle paused" cx="26" cy="26" r="25" fill="none"/><path class="checkmark__check paused" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>`)
    let test = document.querySelector(".checkmark");
    let test2 = document.querySelector(".checkmark__check");
    let test3 = document.querySelector(".checkmark__circle");
    test.classList.remove("paused");
    test2.classList.remove("paused");
    test3.classList.remove("paused");
    updateScore(1);

}



function chooseRandomItems(){
    let randomIndex1 = Math.floor(Math.random()*itemList.length)
    let randomIndex2 = Math.floor(Math.random()*itemList.length)
    let leftItem = itemList[randomIndex1];
    while (randomIndex1 == randomIndex2){
        randomIndex2 = Math.floor(Math.random()*itemList.length)
    }
    let rightItem = itemList[randomIndex2];
    $(".left-item p").text(leftItem.name)
    $(".eft-item p").show()
    $(".left-number").attr("data-value", leftItem.cost)
    $(".left-number").text(leftItem.cost.toLocaleString())
    $(".left-half-solid-bg").css("background", `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ),url(${leftItem.img})`)
    $(".left-half-bg").css("background", `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ),url(${leftItem.img})`)

    $(".right-item p").text(rightItem.name)
    $(".right-number").attr("data-value", rightItem.cost)
    $(".right-number").text(rightItem.cost.toLocaleString())
    $(".right-half-solid-bg").css("background", `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ),url(${rightItem.img})`)
    $(".right-half-bg").css("background", `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ),url(${rightItem.img})`);

}
function postClick(){
    $(".middle-item h1").animate({opacity: 0}, 1000)
    $(".left-item").unbind('click');
    $(".left-item").css("pointer-events","none")
    $(".right-item").css("pointer-events","none")
    $(".right-item").unbind('click');
}

function updateScore(decision){
    if (decision == 1){
        score += 1
        localStorage.setItem('score',`${JSON.stringify(score)}`)
    }
    else{
        score = 0
        localStorage.setItem('score',`${JSON.stringify(score)}`)
    }

}

;(function ($) {
    'use strict';
    var content  = $('#main').smoothState({
          // onStart runs as soon as link has been activated
          onStart : {
              
            
            // Set the duration of our animation
            duration: 500,
            
            // Alterations to the page
            render: function () {
  
              // Quickly toggles a class and restarts css animations
              content.toggleAnimationClass('is-exiting');
            }
          }
        }).data('smoothState'); // makes public methods available
  })(jQuery);
