// JavaScript Document
var my_gauge;
var taille = 4;
var KPItxt;
var myChart;
var gauge;
var desc = "Default KPI";
var kpimin = 20;
var kpimax = 90;
var kpialert =80;
var type = "";
var currentgroup = "";
//var mail = "popmk@yopmail.com";


var myData = new Array([0, 40], [5, 50], [10, 55], [15, 45]);
var tabmail = new Array();
var tabKPI = new Array();

function description() {
    document.getElementById('label').value = 'Device Name: '     + device.name     + '<br />' + 
	'Device PhoneGap: ' + device.phonegap +  
	'Device Platform: ' + device.platform +  
	'Device UUID: '     + device.uuid     +  
	'Device Version: '  + device.version  ;
}


function getKPI(){  
	document.getElementById('label').value = desc; 
    document.getElementById('list').innerHTML = "";
	menu();
	now.LaunchKPI(currentgroup);
   
}	


function receiveKPI(nb){
	updateKPI(nb);	
	checkalert(nb);
}


function checkalert(nb){
	if(nb>kpialert)
    	alert();
}


function Gauge(){
	type="gauge";
	
};
function TrueGauge(){
	type="truegauge";    
};
function Chart(){
    type="chart";
};

function kpioptions(){
document.getElementById('kpialert').innerHTML =  " <h1> KPI alert " + kpialert + "</h1>";
document.getElementById('kpimin').innerHTML = " <h1> KPI min " + kpimin + "</h1>";
document.getElementById('kpimax').innerHTML =  " <h1> KPI max " + kpimax + "</h1>";
}

function kpialertdown(){
	kpialert--;
	document.getElementById('kpialert').innerHTML = " <h1> KPI alert " + kpialert + "</h1>";
};
function kpialertup(){
	kpialert++;
	document.getElementById('kpialert').innerHTML = " <h1> KPI alert " + kpialert + "</h1>";
};
function kpimindown(){
	kpimin--;
    document.getElementById('kpimin').innerHTML = " <h1> KPI min " + kpimin + "</h1>";
	gauge.limbasse.setValue(kpimin);
};
function kpiminup(){
	kpimin++;
    document.getElementById('kpimin').innerHTML = " <h1> KPI min " + kpimin + "</h1>";
	gauge.limbasse.setValue(kpimin);
};
function kpimaxdown(){
	kpimax--;
	 document.getElementById('kpimax').innerHTML = " <h1> KPI max " + kpimax + "</h1>";
	gauge.limhaute.setValue(kpimax);
};
function kpimaxup(){
	kpimax++;
	 document.getElementById('kpimax').innerHTML = " <h1> KPI max " + kpimax + "</h1>";
	gauge.limhaute.setValue(kpimax);
};


function add_liKPI(txt,idx) {     
    var oUl = document.getElementById('listloadkpi'); 
	var oLi = document.createElement("li"); 
	var oText = document.createTextNode(txt); 		
	var b = document.createElement("a");
	var div = document.createElement("div");
	var div2 = document.createElement("div");
	b.setAttribute('href',"#");
	b.appendChild(oText);
    b.setAttribute("id",idx);
	oUl.appendChild(oLi); 
	oLi.appendChild(div);
	div.setAttribute('class','ui-btn-inner');
	div.appendChild(div2);
	b.setAttribute('class','ui-link-inherit');
	div2.setAttribute('class','ui-btn-text');
	div2.appendChild(b);
	oLi.setAttribute('class','ui-btn ui-btn-up-c ui-btn-icon-right ui-li');
    return b;
}

function listGroup(){
    document.getElementById('listloadkpi').innerHTML = "";
    for(i = 0; i < now.array.length ; i++){
        add_liKPI(now.array[i][0],now.array[i][0]).onclick = onKPIClicked;
    }
    
    function onKPIClicked(event){                
                if(currentgroup!=""){
            now.removeFromGroup(currentgroup);
        }
        var nom = event.target.getAttribute("id");
        navigator.notification.alert("Indicateur " + nom + " chargé");
        now.getGroupKPI(nom);
        currentgroup = nom;
    }
};

function creernewkpi(){
    
    var nom = document.getElementById('txtnom').value;

    var newdesc = document.getElementById('txtdesc').value;
    var newmin = document.getElementById('txtmin').value;
    var newmax = document.getElementById('txtmax').value;
    var newalert = document.getElementById('txtalert').value;

    if(document.getElementById('Choix_gauge').checked == true)
        var newtype = "gauge";
    if(document.getElementById('Choix_truegauge').checked==true)
        var newtype = "truegauge";
    if(document.getElementById('Choix_chart').checked==true)
        var newtype = "chart";              
        if(currentgroup!=""){
            now.removeFromGroup(currentgroup);
        }
        now.addToGroup(nom,newdesc,newmin,newmax,newalert,newtype);      
        
        listGroup();
};

        function KPIoption(){
         if(document.getElementById('Choix_0').checked == true)
         type = "gauge";
    if(document.getElementById('Choix_1').checked==true)
        type = "truegauge";
    if(document.getElementById('Choix_2').checked==true)
        type = "chart";
        
        updateKPI();
        };


function SendMsg(){
    navigator.notification.alert("SendMsg to: " + currentgroup + "     content  : " + getElementById('msgsend').value);
    now.sendToGroup(currentgroup,getElementById('msgsend').value);
};

function addCheckBox(txt,i){
     var nom = "checkbox-";
     var id = "idbox-";
     id = id.concat(parseInt(i));
     nom = nom.concat(parseInt(i));   
     var li = document.createElement("li");
      li.setAttribute("class"," ui-btn ui-btn-icon-right ui-li ui-li-has-alt ui-btn-up-c");
      var div = document.createElement("div");
      div.setAttribute("class",'ui-checkbox');
      var input = document.createElement("input");
      input.setAttribute("type",'checkbox');
      input.setAttribute("id",nom);
      input.setAttribute("name",nom);
      input.setAttribute("class",'custom');
      var label = document.createElement("label");
      label.setAttribute("for",nom);
      label.setAttribute("data-theme",'c');
      label.setAttribute("id",id);
      label.setAttribute("class",'ui-btn ui-btn-icon-left ui-btn-up-c'); 
      div.appendChild(input);
      div.appendChild(label);
      li.appendChild(div);
      label.innerHTML = txt;
      document.getElementById('box').appendChild(li);   
 }
 
 
 function validList(){
     for(i = 0 ; i < tabmail.length ; i++){
     var nom = "#checkbox-";
    var id = "#idbox-";
     id = id.concat(parseInt(i));
     var label = $(id.toString());
     nom = nom.concat(parseInt(i));
     nom = nom.concat(parseInt(i));
     navigator.notification.alert(label.text());
    var p = $(nom.toString());
      var str ;
         if(p.is(':checked')){    
             navigator.notification.alert("??");
            str += label.text()+", ";
         }        
     }
       navigator.notification.alert(str);
 }