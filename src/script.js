

const id1 = Math.floor(Math.random()*25 +1);
// console.log(id1);

const id2 = Math.floor(Math.random()*25 +1);
// console.log(id2);

const id3 = Math.floor(Math.random()*25 +1);
// console.log(id3);

const boy = document.querySelector('div');

document.querySelectorAll('div[id]').forEach((id) => {
    id.addEventListener('click', (e) => {
        const id = e.target.id;
        const box = document.getElementById(`${id}`);
        
        if(id == id1 || id == id2 || id == id3){
            box.style.backgroundColor = "#8f6ddbc2";
            box.style.backgroundImage = "url('./images/mine.Bomb-X0T.svg')";

            setInterval(() => {
                boy.innerHTML = '<h1> Game Over Please refresh for replay </h1> ';
            }, 700);  
        }

        else{
            box.style.backgroundColor = "#8f6ddbc2";
            // console.log("NOT MAth");
            box.style.backgroundImage = "url('./images/dimond-BH.svg')"
            box.style.backgroundRepeat = "no-repeat"
        }
    })
})




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


// let value = 3;
// let arr = [];

// select.addEventListener('change' , (e) => {
//     if(value === 3 && arr.length === 0){
//         value = e.target.value;
//         if(value <= 13 ){
//             arr = [];
//             greaterMines();

//         }
//         else{
//             arr = [];
//             greaterDiamond();            
//         }
//     }
//     else{
//         alert("Hello")
//     }
// })

// const greaterMines =  () => {
//     let cnt = 0;
//     while(value > cnt){
//         let num = Math.floor(Math.random() *25 +1);
//         if(!arr.includes(num)){
//             arr.push(num);
//             cnt++;
//         }
//     }
// }

// const greaterDiamond = () => {
//     let cnt = 0;
//     while(value + cnt < 25){
//         let num = Math.floor(Math.random() *25 +1);
//         if(!arr.includes(num)){
//             arr.push(num);
//             cnt++;
//         }
//     }
// }

// const boxes = document.querySelectorAll('div[id]');

// boxes.forEach( (box) => {
//     box.addEventListener('click', (e) => {
//         console.log(value);
//         const id = e.target.id;
//         console.log(id);
//         const div = document.getElementById(`${id}`);
//         console.log(div);
        
//     })
// })






