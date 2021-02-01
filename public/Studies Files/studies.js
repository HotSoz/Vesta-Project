let input = document.querySelector('input'); 
let log = document.getElementById('log'); 
input.onchange = handleChange; 
function handleChange(e) { 
log.textContent = `The field's value is 
${e.target.value.length} character(s) long.`; 
}
// -------------
const input = document.querySelector('input');
const log = document.getElementById('log');
input.onkeydown = logKey;
function logKey(e) { log.textContent += ` ${e.code}`;}
// -------------
const p = document.querySelector('p'); 
p.onmouseover = logMouseOver;
p.onmouseout = logMouseOut;
function logMouseOver() { p.innerHTML = 'MOUSE OVER detected';} 
function logMouseOut() { p.innerHTML = 'MOUSE OUT detected';}
// -------------
let input = document.querySelector('input'); 
input.onblur = inputBlur;
input.onfocus = inputFocus;
function inputBlur() { input.value = 'Focus has been lost'; } 
function inputFocus() { input.value = 'Focus is here'; }
// -------------
const btn = document.querySelector('button'); 
function random(number) { 
return Math.floor(Math.random() * (number+1)); 
} 
btn.onclick = function() { 
const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')'; 
document.body.style.backgroundColor = rndCol; 
}
