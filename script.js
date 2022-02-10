const projects = document.querySelectorAll('.projects');
const about = document.querySelector('.about');
const home = document.querySelector('.home');
const resume = document.querySelector('.resume');
const highlight = document.querySelectorAll('.highlight');
const active = document.querySelector('.active');

const highlighterColors = ['yellow', 'blue', 'green', 'pink', 'orange']
let selectedColor;

function randomColor() {
  return highlighterColors[(Math.round(Math.random() * (highlighterColors.length - 1)))];
}

if (active != undefined) {
  active.classList.add(randomColor() + '-highlight');
}

projects.forEach(project => project.addEventListener('mouseenter', () => project.innerHTML = 'work.'));
projects.forEach(project => project.addEventListener('mouseleave', () => project.innerHTML = 'projects.'));

about.addEventListener('mouseenter', () => about.innerHTML = 'me.');
about.addEventListener('mouseleave', () => about.innerHTML = 'about.');

home.addEventListener('mouseenter', () => home.innerHTML = 'davidplaskett.');
home.addEventListener('mouseleave', () => home.innerHTML = 'dp.');

resume.addEventListener('mouseenter', () => resume.innerHTML = 'pdf.');
resume.addEventListener('mouseleave', () => resume.innerHTML = 'résumé.');

highlight.forEach(el => el.addEventListener('mouseenter', (e) => {
  if(e.target.classList.contains('active')) return;
  selectedColor = randomColor()
  e.target.classList.add(selectedColor + '-highlight');
}));

highlight.forEach(el => el.addEventListener('mouseleave', (e) => {
  if(e.target.classList.contains('active')) return;
  e.target.classList.remove(selectedColor + '-highlight');
}));