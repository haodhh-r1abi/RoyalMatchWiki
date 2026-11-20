
(()=>{const area=document.querySelector('#area-filter'), query=document.querySelector('#task-search'), visual=document.querySelector('#visual-filter');
const cards=[...document.querySelectorAll('.task')], groups=[...document.querySelectorAll('.area')], count=document.querySelector('#result-count');
function norm(s){return s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/đ/g,'d')}
function filter(){const needle=norm(query.value.trim());let n=0;for(const card of cards){const imageMatch=!visual.value||(visual.value==='runtime'?card.dataset.runtime==='true':card.dataset.visual===visual.value);const ok=(!area.value||card.dataset.area===area.value)&&(!needle||norm(card.dataset.search).includes(needle))&&imageMatch;card.hidden=!ok;if(ok)n++;}for(const group of groups)group.hidden=![...group.querySelectorAll('.task')].some(c=>!c.hidden);count.textContent=`Hiển thị ${n.toLocaleString('vi-VN')} / ${cards.length.toLocaleString('vi-VN')} task`;document.querySelector('#empty').hidden=n>0;}
for(const c of[area,query,visual])c.addEventListener(c===query?'input':'change',filter);
document.querySelector('#reset').addEventListener('click',()=>{area.value='';query.value='';visual.value='';filter();});
if(location.hash){const target=document.getElementById(decodeURIComponent(location.hash.slice(1)));if(target){area.value=target.dataset.area||'';filter();setTimeout(()=>target.scrollIntoView(),50);}}
filter();window.areaGallery={filter,cards,groups};})();
