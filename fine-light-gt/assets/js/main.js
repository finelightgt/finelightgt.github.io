document.addEventListener('DOMContentLoaded',()=>{
 const loader=document.getElementById('site-preloader');
 if(loader){const hide=()=>loader.classList.add('is-hidden');window.addEventListener('load',()=>setTimeout(hide,220),{once:true});setTimeout(hide,4500)}
 const menu=document.querySelector('.menu-btn'),nav=document.querySelector('.nav-links');
 if(menu&&nav){menu.addEventListener('click',()=>{nav.classList.toggle('open');menu.setAttribute('aria-expanded',nav.classList.contains('open'))})}
 document.querySelectorAll('.dropbtn').forEach(btn=>btn.addEventListener('click',e=>{if(window.innerWidth<=900){e.preventDefault();btn.parentElement.classList.toggle('open')}}));
 const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
 const top=document.querySelector('.back-top');if(top){window.addEventListener('scroll',()=>top.classList.toggle('show',scrollY>500));top.onclick=()=>scrollTo({top:0,behavior:'smooth'})}
 const y=document.getElementById('year');if(y)y.textContent=new Date().getFullYear();
 const modal=document.getElementById('quoteModal');
 const openers=document.querySelectorAll('[data-open-quote]');
 const closers=document.querySelectorAll('[data-close-quote]');
 const close=()=>{if(modal){modal.classList.remove('is-open');modal.setAttribute('aria-hidden','true');document.body.classList.remove('modal-open')}};
 if(modal){openers.forEach(b=>b.addEventListener('click',()=>{modal.classList.add('is-open');modal.setAttribute('aria-hidden','false');document.body.classList.add('modal-open');setTimeout(()=>modal.querySelector('input')?.focus(),100)}));closers.forEach(b=>b.addEventListener('click',close));document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});const qf=modal.querySelector('[data-quote-form]');if(qf){qf.addEventListener('submit',e=>{e.preventDefault();const ok=modal.querySelector('.quote-success');const ar=document.documentElement.lang==='ar';ok.textContent=ar?'شكراً لك. تم استلام استفسارك وسيتواصل معك فريقنا قريباً.':'Thank you. Your enquiry has been received. Our team will contact you shortly.';ok.classList.add('show');qf.reset();setTimeout(close,2800)})}}
 const form=document.querySelector('#contactForm'),notice=document.querySelector('.notice');if(form&&notice)form.addEventListener('submit',e=>{e.preventDefault();notice.style.display='block';notice.textContent=document.documentElement.lang==='ar'?'شكراً لك. تم تجهيز استفسارك بنجاح.':'Thank you. Your enquiry has been prepared successfully. Our team will contact you shortly.';form.reset()});
});