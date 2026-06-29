const targets=document.querySelectorAll('.reveal-block');
const io=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('is-visible')})},{threshold:.14});
targets.forEach(t=>io.observe(t));
const wide=document.querySelector('.wide-bg');
window.addEventListener('scroll',()=>{if(!wide)return;const r=wide.parentElement.getBoundingClientRect();wide.style.setProperty('--move',`${r.top*-0.08}px`)},{passive:true});
document.querySelectorAll('.card').forEach((c,i)=>{c.style.transitionDelay=`${i*.08}s`});
