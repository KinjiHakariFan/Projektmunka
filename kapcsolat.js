function gomb() {
    
    var uzenet = document.getElementById("uzenet").value.trim();
    
    
    if (uzenet === "") {
        alert("Hiba üzenet! Az üzenet nem lehet üres.");
        return false;
    }
    
    
    alert("Üzenetét rögzítettük!");
    document.getElementById("uzenet").value = "";     return true; 

}
