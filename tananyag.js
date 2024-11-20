function koszones() {
    const nev = document.getElementById('nev').value.trim();
    const hibauzenet = document.getElementById('hibauzenet');
    const koszones = document.getElementById('koszones');
    koszones.innerHTML = '';
    hibauzenet.style.display = 'none';

   

    if (nev === '') {
        hibauzenet.style.display = 'block';
        hibauzenet.textContent = 'A név megadása kötelező!';
        return
    }
    
    for (let i = 1; i <= 10; i++) {
        koszones.innerHTML += `<p>${i}. Helló ${nev}!</p>`;
    }
    if (nev != '') {
        let img=document.getElementById("kep1"); img.src="image.png";
    let img2=document.getElementById("kep2"); img2.src="niga.png";
    }
    
    
}
function frissit(){
        most= new Date()
        ev= most.getFullYear()
        ho= most.getMonth()+1
        nap= most.getDate()
        if( ho  < 10 )   ho  = "0" + ho
        kijelzo2.innerHTML = ev  + "." + ho  + "." + nap + "<br>"
}
setInterval('frissit()',1000)
frissit()

