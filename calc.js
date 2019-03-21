var lords = {};

function rawpower(){
    var t1inf = parseInt(document.getElementById('t1inf').value);
    var t1ran = parseInt(document.getElementById('t1ran').value);
    var t1cav = parseInt(document.getElementById('t1cav').value);
   
    var t2inf = parseInt(document.getElementById('t2inf').value)*2;
    var t2ran = parseInt(document.getElementById('t2ran').value)*2;
    var t2cav = parseInt(document.getElementById('t2cav').value)*2;  
   
    var t3inf = parseInt(document.getElementById('t3inf').value)*3;
    var t3ran = parseInt(document.getElementById('t3ran').value)*3;
    var t3cav = parseInt(document.getElementById('t3cav').value)*3;
    
    var t4inf = parseInt(document.getElementById('t4inf').value)*4;
    var t4ran = parseInt(document.getElementById('t4ran').value)*4;
    var t4cav = parseInt(document.getElementById('t4cav').value)*4;
    
    var infall = parseInt(t1inf + t2inf + t3inf + t4inf);
    var ranall = parseInt(t1ran + t2ran + t3ran + t4ran);
    var cavall = parseInt(t1cav + t2cav + t3cav + t4cav);
   
    var infatkraw = parseInt(document.getElementById('infatk').value);      
    var infatk = parseInt(infall / 100  * infatkraw); 
    var ranatkraw = parseInt(document.getElementById('ranatk').value);      
    var ranatk = parseInt(ranall / 100  * ranatkraw); 
    var cavatkraw = parseInt(document.getElementById('cavatk').value);      
    var cavatk = parseInt(cavall / 100  * cavatkraw);  
   
    var infdefraw = parseInt(document.getElementById('infdef').value);      
    var infdef = parseInt(infall / 100  * infdefraw);  
    var randefraw = parseInt(document.getElementById('randef').value);      
    var randef = parseInt(ranall / 100  * randefraw); 
    var cavdefraw = parseInt(document.getElementById('cavdef').value);      
    var cavdef = parseInt(cavall / 100  * cavdefraw);
    
    var infhpraw = parseInt(document.getElementById('infhp').value);      
    var infhp = parseInt(infall / 100  * infhpraw);  
    var ranhpraw = parseInt(document.getElementById('ranhp').value);      
    var ranhp = parseInt(ranall / 100  * ranhpraw);
    var cavhpraw = parseInt(document.getElementById('cavhp').value);      
    var cavhp = parseInt(cavall / 100  * cavhpraw);
    
    var inftot = parseInt(infall + infatk + infdef + infhp);
    var rantot = parseInt(ranall + ranatk + randef + ranhp);
    var cavtot = parseInt(cavall + cavatk + cavdef + cavhp);
    
    var armyatkraw = parseInt(document.getElementById('armyatk').value);
    var armyatk = parseInt((infall + ranall + cavall) / 100 * armyatkraw);
    
    var armydefraw = parseInt(document.getElementById('armydef').value);
    var armydef = parseInt((infall + ranall + cavall) / 100 * armydefraw);
    
    var armyhpraw = parseInt(document.getElementById('armyhp').value);
    var armyhp = parseInt((infall + ranall + cavall) / 100 * armyhpraw);
    
    lords.rawpower = parseInt(inftot + rantot + cavtot + armyatk + armydef + armyhp);
    
    document.getElementById("rawpower").innerHTML = parseInt(lords.rawpower);
  }
  
function rawpoweropp(){
    var t1infopp = parseInt(document.getElementById('t1infopp').value);
    var t1ranopp = parseInt(document.getElementById('t1ranopp').value);
    var t1cavopp = parseInt(document.getElementById('t1cavopp').value);
    
    var t2infopp = parseInt(document.getElementById('t2infopp').value)*2;
    var t2ranopp = parseInt(document.getElementById('t2ranopp').value)*2;
    var t2cavopp = parseInt(document.getElementById('t2cavopp').value)*2;  
    
    var t3infopp = parseInt(document.getElementById('t3infopp').value)*3;
    var t3ranopp = parseInt(document.getElementById('t3ranopp').value)*3;
    var t3cavopp = parseInt(document.getElementById('t3cavopp').value)*3;
    
    var t4infopp = parseInt(document.getElementById('t4infopp').value)*4;
    var t4ranopp = parseInt(document.getElementById('t4ranopp').value)*4;
    var t4cavopp = parseInt(document.getElementById('t4cavopp').value)*4;
    
    var infallopp = parseInt(t1infopp + t2infopp + t3infopp + t4infopp);
    var ranallopp = parseInt(t1ranopp + t2ranopp + t3ranopp + t4ranopp);
    var cavallopp = parseInt(t1cavopp + t2cavopp + t3cavopp + t4cavopp);
   
    var infatkrawopp = parseInt(document.getElementById('infatkopp').value);      
    var infatkopp = parseInt(infallopp / 100  * infatkrawopp); 
    var ranatkrawopp = parseInt(document.getElementById('ranatkopp').value);      
    var ranatkopp = parseInt(ranallopp / 100  * ranatkrawopp); 
    var cavatkrawopp = parseInt(document.getElementById('cavatkopp').value);      
    var cavatkopp = parseInt(cavallopp / 100  * cavatkrawopp);  
    
    var infdefrawopp = parseInt(document.getElementById('infdefopp').value);      
    var infdefopp = parseInt(infallopp / 100  * infdefrawopp);  
    var randefrawopp = parseInt(document.getElementById('randefopp').value);      
    var randefopp = parseInt(ranallopp / 100  * randefrawopp); 
    var cavdefrawopp = parseInt(document.getElementById('cavdefopp').value);      
    var cavdefopp = parseInt(cavallopp / 100  * cavdefrawopp);
    
    var infhprawopp = parseInt(document.getElementById('infhpopp').value);      
    var infhpopp = parseInt(infallopp / 100  * infhprawopp);  
    var ranhprawopp = parseInt(document.getElementById('ranhpopp').value);      
    var ranhpopp = parseInt(ranallopp / 100  * ranhprawopp);
    var cavhprawopp = parseInt(document.getElementById('cavhpopp').value);      
    var cavhpopp = parseInt(cavallopp / 100  * cavhprawopp);
    
    var inftotopp = parseInt(infallopp + infatkopp + infdefopp + infhpopp);
    var rantotopp = parseInt(ranallopp + ranatkopp + randefopp + ranhpopp);
    var cavtotopp = parseInt(cavallopp + cavatkopp + cavdefopp + cavhpopp);
    
    var armyatkrawopp = parseInt(document.getElementById('armyatkopp').value);
    var armyatkopp = parseInt((infallopp + ranallopp + cavallopp) / 100 * armyatkrawopp);
     
    var armydefrawopp = parseInt(document.getElementById('armydefopp').value);
    var armydefopp = parseInt((infallopp + ranallopp + cavallopp) / 100 * armydefrawopp);
    
    var armyhprawopp = parseInt(document.getElementById('armyhpopp').value);
    var armyhpoppopp = parseInt((infallopp + ranallopp + cavallopp) / 100 * armyhprawopp);
    
    lords.rawpoweropp = parseInt(inftotopp + rantotopp + cavtotopp + armyatkopp + armydefopp + armyhpopp);
    
    document.getElementById("rawpoweropp").innerHTML = parseInt(lords.rawpoweropp);
  }
  
function battle(){
    if(lords.rawpower > lords.rawpoweropp){
     alert("You won!");
    } else if(lords.rawpower < lords.rawpoweropp){
      alert("You lose!");
    } else{
      alert("Draw!");
    }
  }
