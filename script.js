const id1 = Math.floor(Math.random()*25 +1);
console.log(id1);

const id2 = Math.floor(Math.random()*25 +1);
console.log(id2);

const id3 = Math.floor(Math.random()*25 +1);
console.log(id3);

const boy = document.querySelector('div');

function check(id){
    const box = document.getElementById(`${id}`);
    box.style.backgroundColor = "#8f6ddbc2";

    if(id == id1 || id == id2 || id == id3){
        box.style.backgroundImage = "url('mine.Bomb-X0T.svg')";

        setInterval(() => {
            boy.innerHTML = '<h1> Game Over Please refresh for replay </h1> ';
        }, 1500);  
    }
    else{
        // console.log("NOT MAth");
        box.style.backgroundImage = "url('dimond-BH.svg')"
        box.style.backgroundRepeat = "no-repeat"
    }
}