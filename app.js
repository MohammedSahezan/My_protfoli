const section = document.querySelectorAll('.section');
const secBtns = document.querySelectorAll('.controls');
const secBtnd1 = document.querySelectorAll('.control'); 
const allsection = document.querySelector('body');

// function pageTranstions(){
//     //button click active class

//     for(let i=0;i<=secBtnd1.length;i++){
//         secBtnd1[i].addEventListener('click', function(){
//             let currentbtn = document.querySelectorAll('.active-btn');
//             currentbtn[0].className = currentbtn[0].className.replace('active-btn', '');
//             this.className += 'active-btn';
//         })
//     }
// }

// pageTranstions();



function pageTranstions() {
    for (let i = 0; i < secBtnd1.length; i++) {
        secBtnd1[i].addEventListener('click', function () {
            let currentbtn = document.querySelector('.active-btn');

            // Remove the "active-btn" class from the currently active button
            if (currentbtn) {
                currentbtn.classList.remove('active-btn');
            }

            // Add the "active-btn" class to the clicked button
            this.classList.add('active-btn');
        });
    }
    //section active class
    allsection.addEventListener('click',(e)=>{
        const id= e.target.dataset.id;
        if(id){
            //resmove selected from the other btns
            secBtns.forEach((btns) => {
               btns.classList.remove('active');
            })
            e.target.classList.add('active');
            section.forEach((section)=>{
                section.classList.remove('active');
            })
            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })
}

pageTranstions();







