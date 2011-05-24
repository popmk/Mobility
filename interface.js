function alert(){
    document.getElementById('list').innerHTML = "";
    menu();
	navigator.notification.vibrate(200); 
	add_li("URL","url");    
	addLink("url","http://www.google.fr");
	add_li("Mail To","mail"); addLink("mail","mail.html");	
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
	$("#kpi").progressbar({ value: nb });
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
	$("#kpi").progressbar({ value: nb });
	}
	if(type=="truegauge"){
		document.getElementById('kpi').innerHTML = "<div id=\"gaugeDiv\" style=\"width: 100; height: 100\" ></div>";
		gauge = bindows.loadGaugeIntoDiv("gauge.xml", "gaugeDiv");
		gauge.needle.setValue(nb);  
	}
	
	KPItxt = document.getElementById('kpitxt');
	KPItxt.innerHTML = ("Seuil d'alerte : " + kpialert + "<br> niveau minimum : " + kpimin + "      "+ "courant :" +nb +"<br> niveau maximum : " + kpimax );
}


 function test(txt){
 document.getElementById('group').innerHTML +=  ("<div class='ui-checkbox'><input type='checkbox' name='"+txt+"' id='"+txt+"' class='custom'><label for='"+txt+"' data-theme='c' class='ui-btn ui-btn-icon-left ui-btn-up-c'><span class='ui-btn-inner'><span class='ui-btn-text'>"+txt+"</span><span class='ui-icon ui-icon-ui-icon-checkbox-off ui-icon-checkbox-off'></span></span></label></div>");

 }
 
 function test2(txt,i){
     
     var nom = "elem";
     nom = nom.concat(parseInt(i));
     
      var group = document.getElementById('group');
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
      label.setAttribute("class",'ui-btn ui-btn-icon-left ui-btn-up-c');
      var span = document.createElement("span");
      span.setAttribute("class",'ui-btn-inner');
      var span1 = document.createElement("span");
      span1.setAttribute("class",'ui-btn-text');
      var span2 = document.createElement("span");
      span2.setAttribute("class",'ui-icon ui-icon-ui-icon-checkbox-off ui-icon-checkbox-off');
      div.appendChild(input);
      div.appendChild(label);
      label.appendChild(span);
      span.appendChild(span1);
      span.appendChild(span2);
      span1.innerHTML = txt;
      document.getElementById('group').appendChild(div);
 }

