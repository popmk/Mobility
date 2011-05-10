// JavaScript Document
 var my_gauge
 var KPItxt;
var myData = new Array([0, 25], [5, 50], [10, 55], [15, 45]);
this.now.name = "Pop";
var taille = 4;



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
	graph();
	proposeAction();
	 now.LaunchKPI();
    	}	

	function graph(){			
	var myChart = new JSChart('kpi', 'line');
	myChart.setDataArray(myData);
	myChart.draw();
	KPItxt = document.getElementById('kpitxt');
	KPItxt.innerHTML = ("Seuil d'alerte : " + now.KPIalert + "<br> niveau minimum : " + now.KPImin + "<br> niveau maximum : " + now.KPImax );
	}

	function proposeAction(){
	
	add_li("URL","url");	
	addLink("url","www.google.fr");
	add_li("Mail To","mail");
	add_li("Augmenter seuil alerte","up").onclick = function up(){now.KPIalert++; var KPItxt = document.getElementById('kpitxt'); KPItxt.innerHTML = ("Seuil d'alerte : " + now.KPIalert + "<br> niveau minimum : " + now.KPImin + "<br> niveau maximum : " + now.KPImax ); };	
	add_li("Diminuer seuil alerte","down").onclick = function down(){now.KPIalert--; var KPItxt = document.getElementById('kpitxt'); KPItxt.innerHTML = ("Seuil d'alerte : " + now.KPIalert + "<br> niveau minimum : " + now.KPImin + "<br> niveau maximum : " + now.KPImax ); };
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

	function receiveKPI(){
		document.getElementById('kpi').innerHTML = ""; 					
		myData.push([myData.length*5,now.KPIcurrent]);					
		var myChart = new JSChart('kpi', 'line');
		myChart.setDataArray(myData);			
		myChart.draw();
		KPItxt = document.getElementById('kpitxt');
		KPItxt.innerHTML = ("Seuil d'alerte : " + now.KPIalert + "<br> niveau minimum : " + now.KPImin + "<br> niveau maximum : " + now.KPImax );		
	}




	

	


	

