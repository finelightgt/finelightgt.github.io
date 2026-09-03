
document.addEventListener('DOMContentLoaded',()=>{
 const menu=document.querySelector('.menu-btn'), nav=document.querySelector('.nav-links');
 if(menu&&nav){menu.addEventListener('click',()=>{nav.classList.toggle('open');menu.setAttribute('aria-expanded',nav.classList.contains('open'))});}
 document.querySelectorAll('.dropbtn').forEach(btn=>btn.addEventListener('click',e=>{if(window.innerWidth<=900){e.preventDefault();btn.parentElement.classList.toggle('open')}}));
 const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12}); document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
 const top=document.querySelector('.back-top'); if(top){window.addEventListener('scroll',()=>top.classList.toggle('show',scrollY>500));top.onclick=()=>scrollTo({top:0,behavior:'smooth'})}
 const y=document.getElementById('year'); if(y)y.textContent=new Date().getFullYear();
 const form=document.querySelector('#contactForm'); const notice=document.querySelector('.notice'); if(form&&notice)form.addEventListener('submit',e=>{e.preventDefault();notice.style.display='block';notice.textContent='Thank you. Your enquiry has been prepared successfully. Our team will contact you shortly.';form.reset();});
});
