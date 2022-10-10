//add event scroll
let skills = document.querySelector('.our-skills');
let spansProg = document.querySelectorAll('.our-skills .skills span');
let stats = document.querySelector('.stats');
let spansNumb = document.querySelectorAll('.stats .box .number ')
let started= false ;
window.onscroll =()=>{
    progress();
    if(!started){
        spansNumb.forEach((ele)=>{
            counter(ele);
        })
    }
    started = true ;
}
function progress (){
    if(window.scrollY >=skills.offsetTop ){
        spansProg.forEach((span) => {
            span.style.width = span.dataset.progress ;
        });
    } 
};  
function counter(ele) {
  let goal = ele.getAttribute('data-goal');
   let count = setInterval(() => {
    ele.textContent++;
    //stop the setInterval()
    if (ele.textContent == goal) {
       clearInterval(count);
    }
  }, 2000 / goal);
}
//section approch beahavior
let approachLi = document.querySelectorAll('.pproach ul li');
let approachDiv = document.querySelectorAll('.pproach .container div');
approachLi.forEach((li)=>{
    li.addEventListener('click',(e)=>{
        //remove active class frome all elements
        approachLi.forEach((ele)=>{
            ele.classList.remove('active');
        })
        //add active class to current terget
        e.currentTarget.classList.add('active');
        //hide all divs 
        approachDiv.forEach((ele)=>{
            ele.style.display='none'
        });
        //show the target one 
         document.querySelector(e.currentTarget.dataset.set).style.display='flex';
     })
});
// //start landing section  
// let landingimgs = ['landing0.png' , 'landing1.png','landing2.png','landing3.png','landing4.png','landing5.png'] ; 
// let landing = document.querySelector('.landing');
// let bullets = document.querySelectorAll('.landing .bullets li ');
// let arrayBullets = Array.from(bullets); 
// let randomNum = Math.floor(Math.random() * landingimgs.length);
