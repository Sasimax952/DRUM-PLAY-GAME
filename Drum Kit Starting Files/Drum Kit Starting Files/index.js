n=document.querySelectorAll(".drum").length;
for (var i=0;i<n;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function()
                {
                var clicked=this.innerHTML;
                makeSound(clicked);
                buttonAnimation(clicked);
            });
}
function makeSound(key){
switch(key) {
    case "w":
        var tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();
        break;
    case "a":
        var audio = new Audio('sounds/tom-2.mp3');
        audio.play();
        break;
    case "s":
        var audio = new Audio('sounds/tom-3.mp3');
        audio.play();
        break;
        case "d":
        var audio = new Audio('sounds/tom-4.mp3');
        audio.play();
        break;       
        case "j":
        var audio = new Audio('sounds/snare.mp3');
        audio.play();
        break;
    case "k":
        var audio = new Audio('sounds/kick-bass.mp3');
        audio.play();
        break;
    case "l":
        var audio = new Audio('sounds/crash.mp3');
        audio.play();
        break;
}}
document.addEventListener("keypress",handleWord)
function handleWord(event){
    var letter=event.key;
    
    makeSound(letter);
    buttonAnimation(letter);
}
function buttonAnimation(letter){
    var activeButton = document.querySelector('.'+letter);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100)

}