

// generate a random color 

const randomcolor= function(){
    const hex = '0123456789ABCDEF';
    let color ='#'

    for(let i=0;i<6; i++){
        color += hex[Math.floor(Math.random()*16)];
    }

    return color;
}



let setColor;
const startchangingcolor = ()=>{

    if(!setColor)
            setColor= setInterval(changecolor, 1000);

    function changecolor(){ document.body.style.backgroundColor = randomcolor();
}}

const stopchangingcolor = ()=>{
    clearInterval(setColor);
    setColor =null;
};

document.querySelector('#start').addEventListener('click',startchangingcolor);
document.querySelector('#stop').addEventListener('click',stopchangingcolor)