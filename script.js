
document.addEventListener('DOMContentLoaded',()=>{
    let bar = document.querySelector('.bars')
    let close = document.querySelector('.close')
    let menu = document.querySelector('.menu')

bar.addEventListener('click',()=>{
   menu.classList.toggle('change');
   close.style.display="block";
   bar.style.display="none"

})

close.addEventListener('click',()=>{
    menu.classList.remove('change');
    close.style.display="none";
    bar.style.display="block"
 
 })
})
