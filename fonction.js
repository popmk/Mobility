// JavaScript Document
var my_gauge;
var taille = 4;
var KPItxt;
var myChart;
var myData = new Array([0, 40], [5, 50], [10, 55], [15, 45]);
this.now.name = "Pop";




    // PhoneGap is ready
    //
    function getNom() {
      document.getElementById('label').value = 'Device Name: '     + device.name     + '<br />' + 
                            'Device PhoneGap: ' + device.phonegap +  
                            'Device Platform: ' + device.platform +  
                            'Device UUID: '     + device.uuid     +  
                            'Device Version: '  + device.version  ;
                            
    }


    	function getKPI(){      
 	
    document.getElementById('label').value = now.description; 	
	document.getElementById('list').innerHTML = "";    
	drawKPI();
	proposeAction();
	now.LaunchKPI();
    	}	

	function proposeAction(){
	add_li("Augmenter seuil alerte","up").onclick = function up(){now.KPIalert++; var KPItxt = document.getElementById('kpitxt');     KPItxt.innerHTML = ("Seuil d'alerte : " + now.KPIalert + "<br> niveau minimum : " + now.KPImin + "      "+ "courant :" +now.KPIcurrent +"<br> niveau maximum : " + now.KPImax ); };	
	add_li("Diminuer seuil alerte","down").onclick = function down(){now.KPIalert--; var KPItxt = document.getElementById('kpitxt');     KPItxt.innerHTML = ("Seuil d'alerte : " + now.KPIalert + "<br> niveau minimum : " + now.KPImin + "      "+ "courant :" +now.KPIcurrent +"<br> niveau maximum : " + now.KPImax );; };
	}

function add_li(txt,id) { 	
	var oUl = document.getElementById('list'); 
	var oLi = document.createElement("li"); 
	var oText = document.createTextNode(txt); 		
	var b = document.createElement("a");
	var div = document.createElement("div");
	var div2 = document.createElement("div");
	b.setAttribute('id',id);
	b.setAttribute('href',"#");
	b.appendChild(oText); 
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

	function addLink(id,url){
		var b = document.getElementById(id);		
		b.setAttribute('href',url);			
	}

	function drawKPI(){
          document.getElementById('kpi').innerHTML = "";
         if(now.type=="chart"){
             myChart = new JSChart('kpi', 'line');
             myChart.setDataArray(myData);  
             
             myChart.setTitle("KPI");                        
    		 myChart.draw();   
         }
         if(now.type=="gauge"){
              my_gauge =gauge.add(document.getElementById('kpi'),{limit:true,gradient:true,values:[now.KPIcurrent,100]});
         }
         if(now.type=="truegauge"){
             document.getElementById('kpi').innerHTML = "<div id=\"gaugeDiv\" style=\"width: 150; height: 150\" ></div>";
            var gauge = bindows.loadGaugeIntoDiv("gauge.xml", "gaugeDiv");
            
         }
        
      KPItxt = document.getElementById('kpitxt');
        KPItxt.innerHTML = ("Seuil d'alerte : " + now.KPIalert + "<br> niveau minimum : " + now.KPImin + "      "+ "courant :" +now.KPIcurrent +"<br> niveau maximum : " + now.KPImax );
	}
    
    function updateKPI(){
        document.getElementById('kpi').innerHTML = "";
        if(now.type=="chart"){
        myData.shift();   				
		myData.push([taille*5,now.KPIcurrent]);					
        taille = taille + 1;
		myChart.setDataArray(myData);	
        myChart.setTitle("KPI");
		myChart.draw();
        }
        if(now.type=="gauge"){                                
           document.getElementById('kpi').innerHTML = "";
             my_gauge =gauge.add(document.getElementById('kpi'),{limit:true,gradient:true,values:[now.KPIcurrent,100]});
        }            
        if(now.type=="truegauge"){
         gauge.needle.setValue(now.KPIcurrent);   
        }
    KPItxt = document.getElementById('kpitxt');
		KPItxt.innerHTML = ("Seuil d'alerte : " + now.KPIalert + "<br> niveau minimum : " + now.KPImin + "      "+ "courant :" +now.KPIcurrent +"<br> niveau maximum : " + now.KPImax );
    }
    
    
    
function receiveKPI(){
       updateKPI();	
        checkalert();
	}


function checkalert(){
   if(now.KPIcurrent>now.KPIalert)
        alert();
}

	
function alert(){
    navigator.notification.vibrate(200); 
    add_li("URL","url");	
	addLink("url","www.free.fr");
	add_li("Mail To","mail");
    add_li("Relancer alerte","alert").onclick = function alerte(){getKPI()};
    add_li("Changer KPI","change").onclick = function change(){if(now.type=="gauge"){now.type="chart"}else{now.type="gauge"} navigator.notification.alert("Type : "+ now.type); };
    navigator.notification.alert("Alerte, Seuil dépassé");
    now.StopAlert();
    
}
	


	

