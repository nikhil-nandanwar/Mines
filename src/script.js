

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
        }, 1000);  
    }
    else{
        // console.log("NOT MAth");
        box.style.backgroundImage = "url('dimond-BH.svg')"
        box.style.backgroundRepeat = "no-repeat"
    }
}

// const form = document.querySelector('form');
// const select = document.querySelector('select');

// for(let i=1 ; i<=25 ; i++){
//     const option = document.createElement('option');
//     option.value = i;
//     option.innerText = i;
//     if(i == 3){
//         option.selected = true;
//     }
//     select.appendChild(option);
// }


// let value = 0;
// let arr = [];

// select.addEventListener('change' , (e) => {
//     console.log(e.target.value);
//     if(value === 0){
//         value = e.target.value;
//         if(value <= 13){
//             greaterMines();
//         }
//         else{
        
//         }
//     }
//     else{

//     }
// })

// const greaterMines =  () => {
//     console.log("Hello");
//     while(value != 0){
//         let num = Math.floor(Math.random() *25 +1);
//         if(!arr.includes(num)){
//             arr.push(num);
//             console.log(arr);
//             value--;
//         }
//     }
// }









