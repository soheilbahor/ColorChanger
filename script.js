const button = document.querySelector('.button1');
const body = document.querySelector('body');
const colors = ['aqua', 'black', 'blue', 'fuchsia', 'gray', 'green', 
'lime', 'maroon', 'navy', 'olive', 'orange', 'purple', 'red', 
'silver', 'teal', 'yellow'];

button.addEventListener('click',changer);
function changer (){
    const colorIdex = parseInt(Math.random()*colors.length+1);
    body.style.backgroundColor = colors[colorIdex];
    if(colorIdex===1){
    document.querySelector('h1').style.color = 'yellow';
    }else if(colorIdex===2){
        document.querySelector('h1').style.color = 'red';
    }
};
    // let esm = ['ali','vali','beli']
    // let fmli = ['khhar','khi','asb']
    // let result = [...esm,...fmli]
    // console.log(result)