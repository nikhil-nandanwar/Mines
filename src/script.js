
const form = document.querySelector('form');
const select = document.querySelector('select');

for(let i=1 ; i<=25 ; i++){
    const option = document.createElement('option');
    option.value = i;
    option.innerText = i;
    if(i == 3){
        option.selected = true;
    }
    select.appendChild(option);
}


let value = 0;
let arr = [];

select.addEventListener('change' , (e) => {
    console.log(e.target.value);
    if(value === 0){
        value = e.target.value;
        if(value <= 13){
            greaterMines();
        }
        else{
        
        }
    }
    else{

    }
})

const greaterMines =  () => {
    console.log("Hello");
    while(value != 0){
        let num = Math.floor(Math.random() *25 +1);
        if(!arr.includes(num)){
            arr.push(num);
            console.log(arr);
            value--;
        }
    }
}









