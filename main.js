setInterval(setClk, 1000);

const hrHand = document.querySelector('[hr-Hand]');
const minHand = document.querySelector('[min-Hand]');
const secHand = document.querySelector('[sec-Hand]');

function setClk(){
    const currentdate = new Date();
    const sec = currentdate.getSeconds(".second") / 60;
    const min = ( sec + currentdate.getMinutes(".minute")) /  60;
    const hr = ( min + currentdate.getHours(".hour")) / 12;
    setRtn(secHand, sec);
    setRtn(minHand, min);
    setRtn(hrHand, hr);
}
function setRtn(element, rotation){
    element.style.setProperty('--rotation', rotation *360);
}