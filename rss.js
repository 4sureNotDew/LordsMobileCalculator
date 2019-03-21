function rss(){
    var t1inf = parseInt(document.getElementById('t1inf').value);
    var t1ran = parseInt(document.getElementById('t1ran').value);
    var t1cav = parseInt(document.getElementById('t1cav').value);
    
    var t2inf = parseInt(document.getElementById('t2inf').value);
    var t2ran = parseInt(document.getElementById('t2ran').value);
    var t2cav = parseInt(document.getElementById('t2cav').value);  
   
    var t3inf = parseInt(document.getElementById('t3inf').value);
    var t3ran = parseInt(document.getElementById('t3ran').value);
    var t3cav = parseInt(document.getElementById('t3cav').value);
    
    var t4inf = parseInt(document.getElementById('t4inf').value);
    var t4ran = parseInt(document.getElementById('t4ran').value);
    var t4cav = parseInt(document.getElementById('t4cav').value);
    
    var t1 = t1inf + t1ran + t1cav;
    var t2 = t2inf + t2ran + t2cav;
    var t3 = t3inf + t3ran + t3cav;
    var t4 = t4inf + t4ran + t4cav;
    
    var food = (t1 * 50) + (t2 * 100) + (t3 * 150) + (t4 * 1000);
    var stone = ((t1 - t1inf) * 50) + ((t2 - t2inf) * 100) + ((t3 - t3inf) * 150) + ((t4 - t4inf) * 1000);
    var timber = ((t1 - t1cav) * 50) + ((t2 - t2cav) * 100) + ((t3 - t3cav) * 150) + ((t4 - t4cav) * 1000);
    var ore = ((t1 - t1ran) * 50) + ((t2 - t2ran) * 100) + ((t3 - t3ran) * 150) + ((t4 - t4ran) * 1000);
    var gold = (t2 * 5) + (t3 * 10) + (t4 * 500);
    
    document.getElementById("food").innerHTML = "Food: " + food;
    document.getElementById("stone").innerHTML = "Stone: " + stone;    
    document.getElementById("timber").innerHTML = "Timber: " + timber; 
    document.getElementById("ore").innerHTML = "Ore: " + ore; 
    document.getElementById("gold").innerHTML = "Gold: " + gold; 
 }
