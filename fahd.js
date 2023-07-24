

const btn_up=document.querySelector('.up .parent');
window.onscroll=function(){
  if(this.scrollY >= 50){
    btn_up.classList.add('active')
  }
  else{
    btn_up.classList.remove('active')
  }
}


const contact = document.querySelector('.contactt .parent i');
const contact_child = document.querySelector('.contactt .contact-child');
contact.addEventListener('click',()=>{
    contact_child.classList.toggle('active')
});