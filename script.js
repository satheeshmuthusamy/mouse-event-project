`use strict`;

const containerEl=document.querySelector('.container');
window.addEventListener('mousemove',(event)=>{
// console.log(event);
containerEl.innerHTML=`
<div class="mouse_event">
<h4>Mouse X Position(px) </h4>
${event.clientX}
</div>
<div class="mouse_event">
<h4>Mouse Y Position(px) </h4>
${event.clientY}
</div>
`
})
