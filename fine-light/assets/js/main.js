
document.addEventListener('DOMContentLoaded',()=>{
 const menu=document.querySelector('.menu-btn'), nav=document.querySelector('.nav-links');
 if(menu){menu.addEventListener('click',()=>{nav.classList.toggle('open');menu.setAttribute('aria-expanded',nav.classList.contains('open'))})}
 const page=location.pathname.split('/').pop()||'index.html';
 document.querySelectorAll('.nav-links a').forEach(a=>{if(a.getAttribute('href')===page)a.classList.add('active')});
 const top=document.querySelector('.back-top');
 if(top){window.addEventListener('scroll',()=>top.classList.toggle('show',scrollY>450));top.onclick=()=>scrollTo({top:0,behavior:'smooth'})}
 const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
 document.querySelectorAll('.reveal').forEach(e=>obs.observe(e));
 const form=document.querySelector('#quoteForm');
 if(form){form.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(form);const subject=encodeURIComponent('Business Enquiry - Fine Light General Trading');const body=encodeURIComponent(`Name: ${d.get('name')}\nCompany: ${d.get('company')}\nEmail: ${d.get('email')}\nPhone: ${d.get('phone')}\nService: ${d.get('service')}\nRequirements: ${d.get('requirements')}\n\nMessage:\n${d.get('message')}`);window.location.href=`mailto:info@finelightgt.com?subject=${subject}&body=${body}`;document.querySelector('.notice').style.display='block'})}
});
