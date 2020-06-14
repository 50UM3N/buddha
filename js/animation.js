window.onload = load();
window.onresize = load;
function load() {
    if (window.innerWidth <= 654) { document.getElementById('navigation').className = 'nav2'; }
    else { document.getElementById('navigation').className = 'nav1'; }
}
const menu = document.getElementById('menu').onclick = () => { document.getElementById('nav-menu').classList.toggle('nav-active'); }
const para = document.querySelectorAll('#paragraph');
const btn = document.querySelectorAll(".circle");
var current = 0;
function clk(e) {
    cremove(current);
    current = Number(e.slice(1));
    cadd(current);

}
const timmer = setInterval(() => {
    cremove(current);
    current = (current + 1) % 4;
    cadd(current);
}, 10000);
function cremove(e) {
    btn[e].classList.remove('c-active');
    para[e].classList.remove('active');
}
function cadd(e) {
    para[e].classList.add('active');
    btn[e].classList.add('c-active');
}