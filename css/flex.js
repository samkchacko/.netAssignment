let dv=[document.querySelector('#one'),document.querySelector('#two'),document.querySelector('#three'),document.querySelector('#four')]
window.addEventListener('onload',()=>{
while(true){
    for(let i=0;i<4;i++){
        dv[i].bgcolor="red"
        console.log("hai")
        if(i==3){
            i=0;
        }
    }
}
})