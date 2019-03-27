function time() {  
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
    
    var trainingspeed = parseInt(document.getElementById('trainingspeed').value);
    
    var t1 = t1inf + t1ran + t1cav;
    var t2 = t2inf + t2ran + t2cav;
    var t3 = t3inf + t3ran + t3cav;
    var t4 = t4inf + t4ran + t4cav;
    
    var t1time = (t1 * 15)/100;
    var t2time = (t2 * 30)/100;
    var t3time = (t3 * 60)/100;
    var t4time = (t4 * 120)/100;
    
    var fulltime = t1time + t2time + t3time + t4time;
    
    var timeboost = (fulltime / 100) * trainingspeed;
    
    totaltime = fulltime - timeboost;
    
    document.getElementById("armytraintime").innerHTML = parseInt(totaltime) + " min";
}  
