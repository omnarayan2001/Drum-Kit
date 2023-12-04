// document.querySelectorAll("button").addEventListener("click",handleClick);

// function handleClick() {
//     alert("I got clicked");
// }

// we can do the same as above with the help of an anonymous function as follows -


// document.querySelector("button").addEventListener("click",function(){
    // alert("I got clicked")
    // });



//     var list = document.querySelectorAll("button"); 
    
//     list.forEach(function(list){
//         list.addEventListener("click",function(){
//             alert("I got clicked");
//     })
// });





// var list = document.querySelectorAll("button");

// function myFunction() {
//     alert("I was clicked");
// }

// list.forEach(adds);

// function adds(list){
//     list.addEventListener("click",myFunction);
// }


// above are all possible ways of adding an event listener so you may choose any

// the simplest method of doing so is by using the for loop as follows -



for(var i = 0; i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener('click', function(){
        var button = this.innerHTML;

        buttonAnimation(button);
        playSound(button);
})
}



function playSound(button) {
    switch (button) {
        case "w":

            var crash = new Audio("./sounds/crash.mp3");
            crash.play();               
            break;
            
        case "a":
            var kickbass = new Audio("./sounds/kick-bass.mp3");
            kickbass.play();
            break;
    

        case "s":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;

        case "d":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;

        case "j":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;   

        case "k":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;

        case "l":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;

        default:
            console.log(button);
            break;
    }
}



document.addEventListener("keydown",function(event){
    buttonAnimation(event.key);
    playSound(event.key);
})



function buttonAnimation(currentKey){
     var activeButton = document.querySelector("." +currentKey);
     activeButton.classList.add("pressed");
    
     setTimeout(function(){
        activeButton.classList.remove("pressed")
    },100)
}


// var audio = new Audio("./sounds/tom-1.mp3");
// audio.play();