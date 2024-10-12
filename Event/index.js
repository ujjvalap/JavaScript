// function changeText(event) {
//     console.log(event);
    
//     let fpara=document.getElementById('para');
//     fpara.textContent="Hello java ji"
// }

// let fpara=document.getElementById('para');
// fpara.addEventListener('click', changeText());

// fpara.removeEventListener('click', changeText())


/// phases of event

// Event object

// let item=document.getElementById('fanchor');

// item.addEventListener('click', function(event) {
//     event.preventDefault();
//     item.textContent = "Do not click here"
// })

// let para=document.querySelectorAll('p');

// for(let i=0; i<para.length; i++)
// {
//     let paras=para[i];
//     paras.addEventListener('click', function() {
//         alert("You are cilck the para " +i);
        
//     })
// }

function alertPara(event) {
    alert("You dont click here " + event.target.textContent);
    
}

let mydev=document.getElementById('wrapper');
document.addEventListener('click',alertPara);