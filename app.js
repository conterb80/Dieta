const DEFAULT_PROGRAM={
  schema:'dieta-conte-v1',
  id:'2026-W33',
  weekName:'Settimana 1',
  startDate:'2026-08-10',
  endDate:'2026-08-16',
  goalWeight:115,
  rules:'Acqua come bevanda principale · caffè senza zucchero · zero alcol · niente compensazioni se salti uno spuntino.',
  rulesNote:'Obiettivo: regolarità, non perfezione. Con caldo intenso fai attività solo nelle ore fresche e interrompi in caso di malessere.',
  days:[
    {date:'2026-08-10',label:'Lun 10',shift:'14–22',meals:[['Al risveglio','Yogurt greco 200 g + banana + mandorle 15 g'],['12:30 · Pranzo','Pasta 90 g al pomodoro + pollo 160 g + verdure + olio EVO 10 g'],['17:30 · Lavoro','1 frutto'],['19:30 · Lavoro','Piadina integrale 80–100 g + bresaola 80 g + rucola/pomodori + formaggio fresco 30 g'],['Rientro, solo se fame','Yogurt bianco 125–150 g']]},
    {date:'2026-08-11',label:'Mar 11',shift:'Riposo',meals:[['Colazione','2 uova + pane integrale 60 g + 1 frutto'],['Pranzo','Riso basmati 90 g + tonno naturale 120 g sgocciolato + verdure + olio EVO 10 g'],['Spuntino','Yogurt greco 170 g'],['Cena','Merluzzo/nasello 200 g + patate 250 g + verdure + olio EVO 10 g']]},
    {date:'2026-08-12',label:'Mer 12',shift:'14–22',meals:[['Colazione','Latte parz. scremato 250 ml + pane integrale 60 g + marmellata 20 g'],['12:30 · Pranzo','Riso 90 g + tacchino 160 g + zucchine grigliate/in padella + olio EVO 10 g'],['Lavoro','1 frutto'],['19:30 · Lavoro','Insalatona + 2 uova + tonno 80 g + pane 70 g + olio EVO 10 g'],['Rientro, solo se fame','Yogurt']]},
    {date:'2026-08-13',label:'Gio 13',shift:'14–22',meals:[['Colazione','Yogurt greco 200 g + 1 frutto + frutta secca 15 g'],['Pranzo','Pasta 90 g al pomodoro + carne magra 160 g + verdure + olio EVO 10 g'],['Lavoro','1 frutto'],['19:30 · Lavoro','Mozzarella 125 g + pomodori + pane integrale 80 g + verdure + olio EVO 10 g'],['Rientro, solo se fame','Yogurt']]},
    {date:'2026-08-14',label:'Ven 14',shift:'Riposo',meals:[['Colazione','2 uova + pane 60 g + 1 frutto'],['Pranzo','Pasta 90 g + legumi 150 g già cotti + verdure + olio EVO 10 g'],['Spuntino','Yogurt greco 170 g + 1 frutto'],['Cena','Pollo/tacchino 180 g + patate 250 g + verdure + olio EVO 10 g']]},
    {date:'2026-08-15',label:'Sab 15',shift:'22–06',meals:[['Primo pasto','Yogurt greco 200 g + banana + mandorle 15 g'],['Pranzo','Riso 90 g + pollo 160 g + verdure + olio EVO 10 g'],['20:00 · Prima del lavoro','Pesce 180–200 g + pane 80 g + verdure + olio EVO 10 g'],['01:00–02:00','Yogurt greco 170 g + 1 frutto'],['06:30 · Solo se fame','Latte 200 ml oppure yogurt; altrimenti acqua e sonno']]},
    {date:'2026-08-16',label:'Dom 16',shift:'22–06',meals:[['Dopo il risveglio','Yogurt greco 200 g + 1 frutto + mandorle 15 g'],['Pasto principale','Pasta 90 g + tonno 120 g + pomodoro/verdure + olio EVO 10 g'],['20:00 · Prima del lavoro','Pollo/tacchino 180 g + pane 80 g + verdure + olio EVO 10 g'],['Durante la notte','Yogurt 170 g + 1 frutto'],['Rientro','Piccolo alimento solo se fame']]}
  ],
  shopping:{
    'Carne, pesce e proteine':['Petto di pollo/tacchino · circa 900 g','Carne magra · 200 g','Merluzzo/nasello o altro pesce magro · circa 400 g','Tonno al naturale · 4–5 scatolette (circa 320 g sgocciolato)','Bresaola · 100 g','Uova · 6','Legumi cotti · 1 confezione/barattolo'],
    'Latticini':['Yogurt greco/bianco naturale · circa 1,5 kg','Mozzarella · 125 g','Formaggio fresco · 1 confezione piccola','Latte parzialmente scremato · 1 litro'],
    'Carboidrati':['Pasta · 500 g','Riso/basmati · 500 g','Pane integrale · circa 500 g','Piadine integrali · 1 confezione','Patate · 500–750 g'],
    'Frutta e verdura':['Banane · 3–4','Frutta di stagione · 10–12 pezzi','Pomodori · circa 1 kg','Insalata/rucola · 2–3 buste o cespi','Zucchine · 4–5','Verdure miste a scelta · circa 2 kg'],
    'Dispensa':['Olio extravergine d\'oliva','Mandorle/frutta secca · 100 g','Passata/pomodoro per pasta · 2 confezioni','Marmellata · 1 vasetto']
  },
  workouts:[
    {date:'2026-08-10',label:'LUN 10',type:'Camminata',duration:'20–25 min',icon:'👟'},
    {date:'2026-08-11',label:'MAR 11',type:'Cyclette',duration:'20–25 min',icon:'🚲'},
    {date:'2026-08-13',label:'GIO 13',type:'Camminata',duration:'25–30 min',icon:'👟'},
    {date:'2026-08-14',label:'VEN 14',type:'Cyclette',duration:'25–30 min',icon:'🚲'}
  ],
  exerciseNotes:['Camminata: passo comodo, devi riuscire a parlare.','Cyclette: resistenza leggera, ritmo continuo e confortevole.','Recupero: nei giorni non programmati nessun allenamento obbligatorio.']
};

const PROGRAM_KEY='dietaConteProgram';
const ARCHIVE_KEY='dietaConteArchive';
let program=loadProgram();
function clone(x){return JSON.parse(JSON.stringify(x))}
function loadProgram(){try{return JSON.parse(localStorage.getItem(PROGRAM_KEY))||clone(DEFAULT_PROGRAM)}catch(e){return clone(DEFAULT_PROGRAM)}}
function saveProgram(){localStorage.setItem(PROGRAM_KEY,JSON.stringify(program))}
function sanitizeProgram(p){
  if(!p||p.schema!=='dieta-conte-v1'||!Array.isArray(p.days)||!p.days.length) throw new Error('Formato programma non riconosciuto');
  p.weekName=p.weekName||'Nuova settimana'; p.startDate=p.startDate||p.days[0].date; p.endDate=p.endDate||p.days[p.days.length-1].date;
  p.shopping=p.shopping||{}; p.workouts=p.workouts||[]; p.rules=p.rules||''; p.exerciseNotes=p.exerciseNotes||[];
  p.days.forEach((d,i)=>{d.label=d.label||formatDayLabel(d.date);d.shift=d.shift||'Riposo';d.meals=d.meals||[]});
  return p;
}
function formatDayLabel(iso){const d=new Date(iso+'T12:00:00');return d.toLocaleDateString('it-IT',{weekday:'short',day:'numeric'}).replace('.','').replace(/^./,m=>m.toUpperCase())}
function weekRangeLabel(){const s=new Date(program.startDate+'T12:00:00'),e=new Date(program.endDate+'T12:00:00');const sm=s.toLocaleDateString('it-IT',{day:'numeric',month:'long'});const em=e.toLocaleDateString('it-IT',{day:'numeric',month:'long'});return `${program.weekName.toUpperCase()} · ${sm}–${em}`}
function prefix(){return `prog-${program.id||program.startDate}`}
function mealKey(i,j){return `${prefix()}-meal-${i}-${j}`}
function shopKey(g,i){return `${prefix()}-shop-${slug(g)}-${i}`}
function exKey(i){return `${prefix()}-ex-${i}`}
function slug(x){return String(x).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-')}

function openTab(id){document.querySelectorAll('.panel').forEach(x=>x.classList.toggle('active',x.id===id));document.querySelectorAll('.tab').forEach(x=>x.classList.toggle('active',x.dataset.tab===id));window.scrollTo({top:0,behavior:'smooth'})}
document.querySelectorAll('.tab').forEach(b=>b.addEventListener('click',()=>openTab(b.dataset.tab)));
document.querySelectorAll('[data-go]').forEach(b=>b.addEventListener('click',()=>openTab(b.dataset.go)));

function renderProgram(){
  document.getElementById('headerWeekLabel').textContent=weekRangeLabel();
  document.getElementById('weekSectionLabel').textContent=program.weekName.toUpperCase();
  document.getElementById('shoppingWeekLabel').textContent=program.weekName.toUpperCase();
  document.getElementById('activeProgramName').textContent=`${program.weekName} · ${program.startDate.split('-').reverse().join('/')}–${program.endDate.split('-').reverse().join('/')}`;
  document.getElementById('rulesTitle').textContent=`Regole ${program.weekName}`;
  document.getElementById('rulesText').textContent=program.rules||'Nessuna regola specifica per questa settimana.';
  const note=document.querySelector('.rules-card .muted'); if(note) note.textContent=program.rulesNote||'Obiettivo: regolarità, non perfezione.';
  renderDays();renderShopping();renderHomeWorkouts();renderExerciseProgram();renderToday();restoreChecks();updateDashboard();
}
function renderDays(){
  const days=document.getElementById('days');days.innerHTML='';
  program.days.forEach((d,i)=>{const box=document.createElement('div');box.className='day';box.innerHTML=`<div class="day-head"><h3>${d.label}</h3><span class="shift">${d.shift}</span></div>`+d.meals.map((m,j)=>`<div class="meal"><b>${m[0]}</b>${m[1]}<label class="check"><input type="checkbox" data-save="${mealKey(i,j)}"> Fatto</label></div>`).join('');days.appendChild(box)});
}
function renderShopping(){
  const shop=document.getElementById('shopping');shop.innerHTML='';
  Object.entries(program.shopping||{}).forEach(([g,items])=>{shop.insertAdjacentHTML('beforeend',`<div class="shop-group">${g}</div>`);items.forEach((x,i)=>shop.insertAdjacentHTML('beforeend',`<label class="check"><input type="checkbox" data-save="${shopKey(g,i)}"> ${x}</label>`))});
}
function renderHomeWorkouts(){
  const box=document.getElementById('homeWorkouts');box.innerHTML='';
  (program.workouts||[]).forEach((w,i)=>box.insertAdjacentHTML('beforeend',`<label class="workout-item"><input type="checkbox" data-save="${exKey(i)}"><b>${w.label||formatDayLabel(w.date).toUpperCase()}</b><span>${w.duration||w.type||'Attività'}</span><em>${w.icon||'🏃'}</em></label>`));
  if(!(program.workouts||[]).length) box.innerHTML='<p class="muted">Nessun allenamento programmato.</p>';
}
function renderExerciseProgram(){
  const notes=program.exerciseNotes||[];
  const details=(program.workouts||[]).map(w=>`<p><b>${w.label||formatDayLabel(w.date)} · ${w.type||'Attività'}:</b> ${w.duration||''}${w.details?' · '+w.details:''}</p>`).join('');
  document.getElementById('exerciseProgram').innerHTML=details+(notes.length?notes.map(n=>`<p class="muted">${n}</p>`).join(''):'');
}
function restoreChecks(){
  document.querySelectorAll('[data-save]').forEach(x=>{x.checked=localStorage.getItem(x.dataset.save)==='1';x.onchange=()=>{localStorage.setItem(x.dataset.save,x.checked?'1':'0');updateDashboard()}});
}
function currentPlanIndex(){
  const today=new Date(); const start=new Date(program.startDate+'T00:00:00'); const diff=Math.floor((today-start)/86400000);
  if(diff<0)return 0;if(diff>=program.days.length)return program.days.length-1;return diff;
}
function renderToday(){
  const i=currentPlanIndex(),d=program.days[i]; if(!d)return;
  document.getElementById('todayTitle').textContent=d.label;document.getElementById('todayShift').textContent=d.shift;
  document.getElementById('todayMeals').innerHTML=d.meals.map((m,j)=>{const key=mealKey(i,j),checked=localStorage.getItem(key)==='1'?'checked':'';return `<label class="today-meal"><input type="checkbox" data-today-key="${key}" ${checked}><span><b>${m[0]}</b>${m[1]}</span></label>`}).join('');
  document.querySelectorAll('[data-today-key]').forEach(x=>x.addEventListener('change',()=>{localStorage.setItem(x.dataset.todayKey,x.checked?'1':'0');const original=document.querySelector(`[data-save="${x.dataset.todayKey}"]`);if(original)original.checked=x.checked;updateDashboard()}));
}
function updateDashboard(){
  const mealChecks=[...document.querySelectorAll('[data-save*="-meal-"]')],shopChecks=[...document.querySelectorAll('[data-save*="-shop-"]')],exChecks=[...document.querySelectorAll('[data-save*="-ex-"]')];
  const mealDone=mealChecks.filter(x=>x.checked).length,shopDone=shopChecks.filter(x=>x.checked).length,exDone=exChecks.filter(x=>x.checked).length;
  document.getElementById('mealStatus').textContent=`${mealDone} / ${mealChecks.length}`;const mp=Math.round(mealDone/mealChecks.length*100)||0;document.getElementById('mealPct').textContent=`${mp}% completato`;document.getElementById('mealBar').style.width=mp+'%';
  document.getElementById('shopStatus').textContent=`${shopDone} / ${shopChecks.length}`;const sp=Math.round(shopDone/shopChecks.length*100)||0;document.getElementById('shopPct').textContent=`${sp}% completato`;document.getElementById('shopBar').style.width=sp+'%';
  document.getElementById('exerciseStatus').textContent=`${exDone} / ${exChecks.length}`;document.getElementById('exerciseBar').style.width=((exDone/exChecks.length*100)||0)+'%';
}

// Gestione / importazione programma
const modal=document.getElementById('programModal'),pastePane=document.getElementById('pastePane'),editPane=document.getElementById('editPane');
function openModal(mode){modal.hidden=false;pastePane.hidden=mode!=='paste';editPane.hidden=mode!=='edit';document.getElementById('modalTitle').textContent=mode==='paste'?'Incolla programma':'Modifica turni e attività'}
function closeModal(){modal.hidden=true}
document.getElementById('closeModal').onclick=closeModal;modal.addEventListener('click',e=>{if(e.target===modal)closeModal()});
document.getElementById('importProgramBtn').onclick=()=>document.getElementById('programFile').click();
document.getElementById('pasteProgramBtn').onclick=()=>{document.getElementById('programPaste').value='';openModal('paste')};
document.getElementById('programFile').addEventListener('change',async e=>{const f=e.target.files[0];if(!f)return;try{importProgram(JSON.parse(await f.text()))}catch(err){showStatus('Errore: '+err.message,true)}e.target.value=''});
document.getElementById('confirmPaste').onclick=()=>{try{importProgram(JSON.parse(document.getElementById('programPaste').value));closeModal()}catch(err){alert('Importazione non riuscita: '+err.message)}};
function importProgram(obj){
  const old=program;program=sanitizeProgram(obj);
  const archive=JSON.parse(localStorage.getItem(ARCHIVE_KEY)||'[]'); if(!archive.some(x=>x.id===old.id)) archive.push(old);localStorage.setItem(ARCHIVE_KEY,JSON.stringify(archive.slice(-20)));
  saveProgram();renderProgram();showStatus(`Importato: ${program.weekName} ✓`);openTab('oggi');
}
function showStatus(msg,error=false){const x=document.getElementById('importStatus');x.innerHTML=msg;x.classList.toggle('error',error);setTimeout(()=>{x.classList.remove('error');x.innerHTML=`Programma attivo: <b>${program.weekName}</b>`},3500)}

document.getElementById('exportProgramBtn').onclick=()=>downloadJSON(program,`Dieta-Conte-${program.startDate}.json`);
function downloadJSON(obj,name){const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([JSON.stringify(obj,null,2)],{type:'application/json'}));a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),500)}
document.getElementById('duplicateProgramBtn').onclick=()=>{
  const copy=clone(program),start=new Date(program.startDate+'T12:00:00');start.setDate(start.getDate()+7);const end=new Date(program.endDate+'T12:00:00');end.setDate(end.getDate()+7);
  const shiftDate=d=>{const x=new Date(d+'T12:00:00');x.setDate(x.getDate()+7);return x.toISOString().slice(0,10)};
  copy.startDate=start.toISOString().slice(0,10);copy.endDate=end.toISOString().slice(0,10);copy.id=copy.startDate;copy.weekName='Nuova settimana';copy.days.forEach(d=>{d.date=shiftDate(d.date);d.label=formatDayLabel(d.date)});copy.workouts.forEach(w=>{w.date=shiftDate(w.date);w.label=formatDayLabel(w.date).toUpperCase()});
  importProgram(copy);showStatus('Settimana duplicata: ora puoi importare o modificare il nuovo piano ✓');openTab('settimana');
};

document.getElementById('editProgramBtn').onclick=()=>{renderWeekEditor();openModal('edit')};
function renderWeekEditor(){
  const opts=['06–14','14–22','22–06','Riposo','Ferie','Altro'];
  document.getElementById('weekEditor').innerHTML=program.days.map((d,i)=>{const w=(program.workouts||[]).find(x=>x.date===d.date)||{};return `<div class="editor-day"><b>${d.label}</b><select data-edit-shift="${i}">${opts.map(o=>`<option ${d.shift===o?'selected':''}>${o}</option>`).join('')}</select><input data-edit-type="${i}" placeholder="Allenamento / riposo" value="${w.type||''}"><input data-edit-duration="${i}" placeholder="Durata" value="${w.duration||''}"></div>`}).join('');
}
document.getElementById('saveWeekEdits').onclick=()=>{
  const ws=[];program.days.forEach((d,i)=>{d.shift=document.querySelector(`[data-edit-shift="${i}"]`).value;const type=document.querySelector(`[data-edit-type="${i}"]`).value.trim(),duration=document.querySelector(`[data-edit-duration="${i}"]`).value.trim();if(type)ws.push({date:d.date,label:d.label.toUpperCase(),type,duration,icon:type.toLowerCase().includes('cyc')?'🚲':'👟'})});program.workouts=ws;saveProgram();closeModal();renderProgram();showStatus('Turni e attività aggiornati ✓')
};

// Peso e attività personali restano indipendenti dalle settimane
let weights=JSON.parse(localStorage.getItem('weights')||'[{"date":"2026-08-08","value":121}]');let activities=JSON.parse(localStorage.getItem('activities')||'[]');
const wdate=document.getElementById('wdate');wdate.value=new Date().toISOString().slice(0,10);document.getElementById('adate').value=wdate.value;
document.getElementById('addWeight').addEventListener('click',()=>{const v=+document.getElementById('wvalue').value,d=wdate.value;if(!d||!v)return;weights.push({date:d,value:v});weights.sort((a,b)=>a.date.localeCompare(b.date));localStorage.setItem('weights',JSON.stringify(weights));renderWeights()});
function renderWeights(){document.getElementById('weights').innerHTML=weights.slice().reverse().map(w=>`<div class="row"><span>${w.date.split('-').reverse().join('/')}</span><b>${w.value.toFixed(1).replace('.',',')} kg</b></div>`).join('');if(weights.length){const latest=weights[weights.length-1].value,txt=latest.toFixed(1).replace('.',',');document.getElementById('homeWeight').textContent=txt+' kg';document.getElementById('topWeight').innerHTML=txt+' <em>kg</em>';const lost=121-latest;document.getElementById('homeProgress').textContent=(lost>=0?lost:0).toFixed(1).replace('.',',')+' kg';const remaining=Math.max(0,latest-(program.goalWeight||115));document.getElementById('kgRemaining').textContent='Mancano '+remaining.toFixed(1).replace('.',',')+' kg';document.getElementById('lastWeightDate').textContent='Ultimo aggiornamento '+weights[weights.length-1].date.split('-').reverse().join('/')}drawChart()}
function drawChart(){const c=document.getElementById('chart'),x=c.getContext('2d'),W=c.width,H=c.height;x.clearRect(0,0,W,H);x.strokeStyle='#334155';x.lineWidth=1;for(let i=0;i<5;i++){let y=25+i*(H-50)/4;x.beginPath();x.moveTo(35,y);x.lineTo(W-20,y);x.stroke()}if(!weights.length)return;const vals=weights.map(w=>w.value),goal=program.goalWeight||115,min=Math.min(goal,...vals)-1,max=Math.max(121,...vals)+1,px=i=>35+(W-65)*(weights.length===1?.5:i/(weights.length-1)),py=v=>25+(max-v)/(max-min)*(H-50);x.strokeStyle='#22c55e';x.lineWidth=4;x.beginPath();weights.forEach((w,i)=>i?x.lineTo(px(i),py(w.value)):x.moveTo(px(i),py(w.value)));x.stroke();x.fillStyle='#86efac';weights.forEach((w,i)=>{x.beginPath();x.arc(px(i),py(w.value),6,0,Math.PI*2);x.fill()});x.fillStyle='#94a3b8';x.font='18px system-ui';x.fillText(goal+' kg',40,py(goal)-8)}
document.getElementById('addActivity').addEventListener('click',()=>{const d=document.getElementById('adate').value,t=document.getElementById('atype').value,m=+document.getElementById('amin').value;if(!d||!m)return;activities.push({date:d,type:t,min:m});localStorage.setItem('activities',JSON.stringify(activities));renderActivities()});
function renderActivities(){document.getElementById('activities').innerHTML=activities.slice().reverse().map(a=>`<div class="row"><span>${a.date.split('-').reverse().join('/')} · ${a.type}</span><b>${a.min} min</b></div>`).join('')}

renderProgram();renderWeights();renderActivities();
if('serviceWorker' in navigator)navigator.serviceWorker.register('./sw.js');

// RC6 — Ricettario personale e importazione rapida da chat
const RECIPES_KEY='dietaConteRecipesV1';
const DEFAULT_RECIPES=[
 {id:'piadina-integrale',title:'Piadina integrale fatta in casa',category:'Pane e impasti',portions:'4 piadine',time:'25 min + riposo',favorite:true,ingredients:['250 g farina integrale','130–150 ml acqua tiepida','20 g olio EVO','4 g sale','1/2 cucchiaino lievito istantaneo (facoltativo)'],steps:['Mescola farina e sale.','Aggiungi olio e acqua poco alla volta e impasta fino a ottenere un panetto morbido.','Lascia riposare coperto 20–30 minuti.','Dividi in 4 palline e stendi sottili.','Cuoci su padella molto calda 1–2 minuti per lato.'],notes:'Si conserva 2–3 giorni in frigorifero ben chiusa; si può congelare separando le piadine.'},
 {id:'pane-integrale-airfryer',title:'Pane integrale in friggitrice ad aria',category:'Pane e impasti',portions:'1 filoncino',time:'circa 2 h con lievitazione',favorite:true,ingredients:['250 g farina integrale','170 ml acqua tiepida circa','4 g lievito di birra secco','5 g sale','1 cucchiaino olio EVO'],steps:['Sciogli il lievito nell’acqua.','Unisci farina e poi sale; impasta fino a ottenere un panetto elastico.','Lascia lievitare coperto fino al raddoppio.','Forma il filoncino e fai una breve seconda lievitazione.','Cuoci in friggitrice ad aria controllando la cottura in base al modello.'],notes:'Fai raffreddare completamente prima di affettare. Puoi congelarlo già a fette.'}
];
let recipes=JSON.parse(localStorage.getItem(RECIPES_KEY)||'null')||DEFAULT_RECIPES;
function saveRecipes(){localStorage.setItem(RECIPES_KEY,JSON.stringify(recipes))}
function recipeId(){return 'r-'+Date.now().toString(36)}
function renderRecipeCategories(){const sel=document.getElementById('recipeCategory');if(!sel)return;const current=sel.value;const cats=[...new Set(recipes.map(r=>r.category).filter(Boolean))].sort();sel.innerHTML='<option value="">Tutte le categorie</option>'+cats.map(c=>`<option>${escapeHtml(c)}</option>`).join('');sel.value=current}
function escapeHtml(s=''){return String(s).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]))}
function renderRecipes(){const list=document.getElementById('recipeList');if(!list)return;renderRecipeCategories();const q=(document.getElementById('recipeSearch').value||'').toLowerCase(),cat=document.getElementById('recipeCategory').value;const filtered=recipes.filter(r=>(!cat||r.category===cat)&&(!q||[r.title,r.category,...(r.ingredients||[])].join(' ').toLowerCase().includes(q)));list.innerHTML=filtered.length?filtered.map(r=>`<article class="recipe-item" data-recipe="${escapeHtml(r.id)}"><small>${escapeHtml(r.category||'Ricetta')}</small><h3>${escapeHtml(r.title)}</h3><p>${escapeHtml((r.ingredients||[]).slice(0,3).join(' · '))}${(r.ingredients||[]).length>3?'…':''}</p><div class="recipe-meta">${r.favorite?'<span class="recipe-tag favorite">★ Preferita</span>':''}${r.portions?`<span class="recipe-tag">${escapeHtml(r.portions)}</span>`:''}${r.time?`<span class="recipe-tag">${escapeHtml(r.time)}</span>`:''}</div></article>`).join(''):'<div class="empty-recipes">Nessuna ricetta trovata.</div>';document.querySelectorAll('[data-recipe]').forEach(x=>x.onclick=()=>openRecipe(x.dataset.recipe))}
const recipeModal=document.getElementById('recipeModal');
function closeRecipeModal(){recipeModal.hidden=true}
document.getElementById('closeRecipeModal').onclick=closeRecipeModal;recipeModal.addEventListener('click',e=>{if(e.target===recipeModal)closeRecipeModal()});
function openRecipe(id){const r=recipes.find(x=>x.id===id);if(!r)return;document.getElementById('recipeModalTitle').textContent=r.title;document.getElementById('recipeEditPane').hidden=true;const view=document.getElementById('recipeViewPane');view.hidden=false;view.innerHTML=`<div class="recipe-detail"><div class="recipe-meta">${r.category?`<span class="recipe-tag">${escapeHtml(r.category)}</span>`:''}${r.portions?`<span class="recipe-tag">${escapeHtml(r.portions)}</span>`:''}${r.time?`<span class="recipe-tag">${escapeHtml(r.time)}</span>`:''}</div><h3>Ingredienti</h3><ul>${(r.ingredients||[]).map(x=>`<li>${escapeHtml(x)}</li>`).join('')}</ul><h3>Preparazione</h3><ol>${(r.steps||[]).map(x=>`<li>${escapeHtml(x)}</li>`).join('')}</ol>${r.notes?`<h3>Note e conservazione</h3><p>${escapeHtml(r.notes)}</p>`:''}<div class="recipe-actions"><button data-fav>${r.favorite?'★ Preferita':'☆ Aggiungi ai preferiti'}</button><button data-edit>Modifica</button></div></div>`;view.querySelector('[data-fav]').onclick=()=>{r.favorite=!r.favorite;saveRecipes();renderRecipes();openRecipe(id)};view.querySelector('[data-edit]').onclick=()=>editRecipe(id);recipeModal.hidden=false}
let editingRecipeId=null;
function editRecipe(id=null){const r=id?recipes.find(x=>x.id===id):null;editingRecipeId=id;document.getElementById('recipeModalTitle').textContent=r?'Modifica ricetta':'Nuova ricetta';document.getElementById('recipeViewPane').hidden=true;document.getElementById('recipeEditPane').hidden=false;document.getElementById('rTitle').value=r?.title||'';document.getElementById('rCategory').value=r?.category||'Pane e impasti';document.getElementById('rPortions').value=r?.portions||'';document.getElementById('rTime').value=r?.time||'';document.getElementById('rIngredients').value=(r?.ingredients||[]).join('\n');document.getElementById('rSteps').value=(r?.steps||[]).join('\n');document.getElementById('rNotes').value=r?.notes||'';recipeModal.hidden=false}
document.getElementById('addRecipeBtn').onclick=()=>editRecipe();
document.getElementById('saveRecipeBtn').onclick=()=>{const title=document.getElementById('rTitle').value.trim();if(!title){alert('Inserisci il nome della ricetta');return}const old=editingRecipeId?recipes.find(x=>x.id===editingRecipeId):null;const obj={id:old?.id||recipeId(),title,category:document.getElementById('rCategory').value,portions:document.getElementById('rPortions').value.trim(),time:document.getElementById('rTime').value.trim(),favorite:old?.favorite||false,ingredients:document.getElementById('rIngredients').value.split('\n').map(x=>x.trim()).filter(Boolean),steps:document.getElementById('rSteps').value.split('\n').map(x=>x.trim()).filter(Boolean),notes:document.getElementById('rNotes').value.trim()};if(old)Object.assign(old,obj);else recipes.unshift(obj);saveRecipes();renderRecipes();closeRecipeModal()};
document.getElementById('recipeSearch').oninput=renderRecipes;document.getElementById('recipeCategory').onchange=renderRecipes;
document.getElementById('importRecipesBtn').onclick=()=>document.getElementById('recipesFile').click();
document.getElementById('recipesFile').addEventListener('change',async e=>{const f=e.target.files[0];if(!f)return;try{const obj=JSON.parse(await f.text());const incoming=Array.isArray(obj)?obj:(obj.recipes||[]);if(!incoming.length)throw new Error('Nessuna ricetta nel file');incoming.forEach(raw=>{if(!raw.title)return;const r={id:raw.id||recipeId(),title:String(raw.title),category:raw.category||'Altro',portions:raw.portions||'',time:raw.time||'',favorite:!!raw.favorite,ingredients:Array.isArray(raw.ingredients)?raw.ingredients:[],steps:Array.isArray(raw.steps)?raw.steps:[],notes:raw.notes||''};const ix=recipes.findIndex(x=>x.id===r.id||x.title.toLowerCase()===r.title.toLowerCase());if(ix>=0)recipes[ix]={...recipes[ix],...r};else recipes.unshift(r)});saveRecipes();renderRecipes();alert(`${incoming.length} ricette importate ✓`)}catch(err){alert('Importazione ricette non riuscita: '+err.message)}e.target.value=''});
renderRecipes();


// RC7 — Diario pressorio
const PRESSURE_KEY='dietaContePressureV1';
let pressureReadings=JSON.parse(localStorage.getItem(PRESSURE_KEY)||'[]');
function savePressure(){localStorage.setItem(PRESSURE_KEY,JSON.stringify(pressureReadings))}
function pad2(n){return String(n).padStart(2,'0')}
function localDateTimeValue(d=new Date()){return `${d.getFullYear()}-${pad2(d.getMonth()+1)}-${pad2(d.getDate())}T${pad2(d.getHours())}:${pad2(d.getMinutes())}`}
function isoDayFromLocal(dt){return String(dt||'').slice(0,10)}
function fmtDateTime(dt){if(!dt)return '—';const [date,time='']=dt.split('T');return `${date.split('-').reverse().join('/')} ${time.slice(0,5)}`}
function avgReadings(arr){if(!arr.length)return null;const avg=k=>Math.round(arr.reduce((s,x)=>s+Number(x[k]||0),0)/arr.length);return {sys:avg('sys'),dia:avg('dia'),pulse:avg('pulse')}}
function initPressureDateTime(){const el=document.getElementById('bpDateTime');if(el&&!el.value)el.value=localDateTimeValue()}
function renderPressure(){
  pressureReadings.sort((a,b)=>String(a.datetime).localeCompare(String(b.datetime)));
  const latest=pressureReadings[pressureReadings.length-1];
  const today=localDateTimeValue().slice(0,10);
  const todayAvg=avgReadings(pressureReadings.filter(x=>isoDayFromLocal(x.datetime)===today));
  const cutoff=new Date();cutoff.setDate(cutoff.getDate()-6);cutoff.setHours(0,0,0,0);
  const weekAvg=avgReadings(pressureReadings.filter(x=>new Date(x.datetime)>=cutoff));
  document.getElementById('bpLast').textContent=latest?`${latest.sys} / ${latest.dia}`:'— / —';
  document.getElementById('bpTodayAvg').textContent=todayAvg?`${todayAvg.sys} / ${todayAvg.dia}`:'— / —';
  document.getElementById('bpWeekAvg').textContent=weekAvg?`${weekAvg.sys} / ${weekAvg.dia}`:'— / —';
  const hp=document.getElementById('homePressure'),hm=document.getElementById('homePressureMeta');
  if(latest){hp.textContent=`${latest.sys} / ${latest.dia} mmHg · ${latest.pulse} bpm`;hm.textContent=`${fmtDateTime(latest.datetime)} · ${latest.moment||'Misura'}`}
  else{hp.textContent='Nessuna misura';hm.textContent='Tocca per registrare la prima misurazione'}
  const history=document.getElementById('pressureHistory');
  if(!pressureReadings.length)history.innerHTML='<div class="pressure-empty">Nessuna misurazione registrata.</div>';
  else history.innerHTML=`<table class="pressure-table"><thead><tr><th>Data / ora</th><th>Momento</th><th>Massima</th><th>Minima</th><th>Battiti</th><th>Nota</th><th></th></tr></thead><tbody>${pressureReadings.slice().reverse().map(r=>`<tr><td>${fmtDateTime(r.datetime)}</td><td>${escapeHtml(r.moment||'')}</td><td><b>${r.sys}</b></td><td><b>${r.dia}</b></td><td>${r.pulse}</td><td>${escapeHtml(r.note||'')}</td><td><button class="pressure-delete" data-bp-delete="${r.id}">×</button></td></tr>`).join('')}</tbody></table>`;
  document.querySelectorAll('[data-bp-delete]').forEach(b=>b.onclick=()=>{if(confirm('Eliminare questa misurazione?')){pressureReadings=pressureReadings.filter(x=>x.id!==b.dataset.bpDelete);savePressure();renderPressure()}});
  drawPressureChart();drawPressureWeightChart();initPressureDateTime();
}
function drawPressureChart(){
  const c=document.getElementById('pressureChart');if(!c)return;const x=c.getContext('2d'),W=c.width,H=c.height;x.clearRect(0,0,W,H);x.fillStyle='#081421';x.fillRect(0,0,W,H);
  const data=pressureReadings.slice(-30);if(!data.length){x.fillStyle='#94a3b8';x.font='18px system-ui';x.fillText('Registra una misura per iniziare il grafico',32,H/2);return}
  const all=data.flatMap(r=>[r.sys,r.dia,r.pulse]);let min=Math.min(...all)-10,max=Math.max(...all)+10;min=Math.max(20,min);if(max-min<50){max+=25;min-=25}
  const L=44,R=18,T=24,B=34,px=i=>L+(W-L-R)*(data.length===1?.5:i/(data.length-1)),py=v=>T+(max-v)/(max-min)*(H-T-B);
  x.strokeStyle='#25384c';x.lineWidth=1;x.fillStyle='#7f91a6';x.font='12px system-ui';for(let i=0;i<5;i++){const val=Math.round(max-i*(max-min)/4),y=py(val);x.beginPath();x.moveTo(L,y);x.lineTo(W-R,y);x.stroke();x.fillText(String(val),5,y+4)}
  const series=[['sys','#ff767f'],['dia','#58b8ff'],['pulse','#d3a2ff']];series.forEach(([k,color])=>{x.strokeStyle=color;x.lineWidth=3;x.beginPath();data.forEach((r,i)=>i?x.lineTo(px(i),py(r[k])):x.moveTo(px(i),py(r[k])));x.stroke();x.fillStyle=color;data.forEach((r,i)=>{x.beginPath();x.arc(px(i),py(r[k]),4,0,Math.PI*2);x.fill()})});
  x.fillStyle='#7f91a6';x.font='11px system-ui';const first=data[0],last=data[data.length-1];x.fillText(fmtDateTime(first.datetime).slice(0,10),L,H-9);const lab=fmtDateTime(last.datetime).slice(0,10),tw=x.measureText(lab).width;x.fillText(lab,W-R-tw,H-9)
}
function drawPressureWeightChart(){
  const wrap=document.getElementById('pressureWeightCompare'),toggle=document.getElementById('showWeightCompare');if(!wrap||!toggle)return;wrap.hidden=!toggle.checked;if(!toggle.checked)return;
  const c=document.getElementById('pressureWeightChart'),x=c.getContext('2d'),W=c.width,H=c.height;x.clearRect(0,0,W,H);x.fillStyle='#081421';x.fillRect(0,0,W,H);const data=(weights||[]).slice(-30);if(!data.length){x.fillStyle='#94a3b8';x.font='16px system-ui';x.fillText('Nessuna pesata disponibile',28,H/2);return}
  const vals=data.map(w=>w.value),min=Math.min(...vals)-.5,max=Math.max(...vals)+.5,L=46,R=18,T=18,B=30,px=i=>L+(W-L-R)*(data.length===1?.5:i/(data.length-1)),py=v=>T+(max-v)/(max-min||1)*(H-T-B);x.strokeStyle='#22c55e';x.lineWidth=3;x.beginPath();data.forEach((w,i)=>i?x.lineTo(px(i),py(w.value)):x.moveTo(px(i),py(w.value)));x.stroke();x.fillStyle='#86efac';data.forEach((w,i)=>{x.beginPath();x.arc(px(i),py(w.value),4,0,Math.PI*2);x.fill()});x.fillStyle='#94a3b8';x.font='12px system-ui';x.fillText(max.toFixed(1)+' kg',5,T+5);x.fillText(min.toFixed(1)+' kg',5,H-B)
}
document.getElementById('addPressure').onclick=()=>{const datetime=document.getElementById('bpDateTime').value,sys=+document.getElementById('bpSys').value,dia=+document.getElementById('bpDia').value,pulse=+document.getElementById('bpPulse').value,moment=document.getElementById('bpMoment').value,note=document.getElementById('bpNote').value.trim();if(!datetime||!sys||!dia||!pulse){alert('Inserisci data/ora, massima, minima e battiti.');return}pressureReadings.push({id:'bp-'+Date.now().toString(36),datetime,sys,dia,pulse,moment,note});savePressure();document.getElementById('bpSys').value='';document.getElementById('bpDia').value='';document.getElementById('bpPulse').value='';document.getElementById('bpNote').value='';document.getElementById('bpDateTime').value=localDateTimeValue();renderPressure()};
document.getElementById('showWeightCompare').onchange=drawPressureWeightChart;
document.getElementById('exportPressureCsv').onclick=()=>{if(!pressureReadings.length){alert('Nessuna misurazione da esportare.');return}const rows=[['Data e ora','Momento','Massima mmHg','Minima mmHg','Battiti bpm','Note'],...pressureReadings.map(r=>[fmtDateTime(r.datetime),r.moment,r.sys,r.dia,r.pulse,r.note||''])];const csv='\ufeff'+rows.map(row=>row.map(v=>'"'+String(v??'').replace(/"/g,'""')+'"').join(';')).join('\n');const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([csv],{type:'text/csv;charset=utf-8'}));a.download='Diario-Pressorio-Dieta-Conte.csv';a.click();URL.revokeObjectURL(a.href)};
renderPressure();
