function alert(){
    document.getElementById('list').innerHTML = "";
    menu();
	navigator.notification.vibrate(200); 
	add_li("URL","url");    
	addLink("url","http://www.google.fr");
	add_li("Mail To","mail");	
    add_li("Chat","chat");
    addLink("chat","Chat.html");
	navigator.notification.alert("Alerte, Seuil dépassé");
	now.StopAlert(currentgroup);
	
}

function menu(){    
	add_li("Relancer alerte","alert").onclick = function alerte(){getKPI();}; 
    add_li("Stop Alert","stopalert").onclick = function stopalert(){now.StopAlert(currentgroup);};
	add_li("Options","opt"); addLink("opt","option.html");	
    add_li("S'abonner a un KPI","abokpi"); addLink("abokpi","LoadKPI.html");
}


function updateKPI(nb){
	document.getElementById('kpi').innerHTML = "";
	if(type=="chart"){
		myData.shift();       			
		myData.push([taille*5,nb]);					
		taille = taille + 1;
		myChart.setDataArray(myData);	
		myChart.setTitle("KPI");
		myChart.draw();
	}
	if(type=="gauge"){                                
		document.getElementById('kpi').innerHTML = "";
		my_gauge =gauge.add(document.getElementById('kpi'),{limit:true,gradient:true,values:[nb,100]});
	}            
	if(type=="truegauge"){
		document.getElementById('kpi').innerHTML = "<div id=\"gaugeDiv\" style=\"width: 150; height: 150\" ></div>";
		gauge = bindows.loadGaugeIntoDiv("gauge.xml", "gaugeDiv");
		gauge.needle.setValue(nb);  
	}
	KPItxt = document.getElementById('kpitxt');
	KPItxt.innerHTML = ("Seuil d'alerte : " + kpialert + "<br> niveau minimum : " + kpimin + "      "+ "courant :" +nb +"<br> niveau maximum : " + kpimax );
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

function drawKPI(nb){
	document.getElementById('kpi').innerHTML = "";
	if(type=="chart"){
		myChart = new JSChart('kpi', 'line');
		myChart.setDataArray(myData);  		
		myChart.setTitle("KPI");                        
	    myChart.draw();   
	}
	if(type=="gauge"){
		my_gauge =gauge.add(document.getElementById('kpi'),{limit:true,gradient:true,values:[nb,100]});
	}
	if(type=="truegauge"){
		document.getElementById('kpi').innerHTML = "<div id=\"gaugeDiv\" style=\"width: 100; height: 100\" ></div>";
		gauge = bindows.loadGaugeIntoDiv("gauge.xml", "gaugeDiv");
		gauge.needle.setValue(nb);  
	}
	
	KPItxt = document.getElementById('kpitxt');
	KPItxt.innerHTML = ("Seuil d'alerte : " + kpialert + "<br> niveau minimum : " + kpimin + "      "+ "courant :" +nb +"<br> niveau maximum : " + kpimax );
}