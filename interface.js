function alert(){
        now.StopAlert(currentgroup);
    document.getElementById('list').innerHTML = "";
    menu();
    menuGroup();
	add_li("URL","url");    
	addLink("url","http://www.google.fr");
	navigator.notification.alert("Alerte, Seuil dépassé");
    navigator.notification.vibrate(200);	
}

function menuGroup(){
     add_li("Mail To","mail"); 
     addLink("mail","mail.html");    
    add_li("Chat","chat");
    addLink("chat","Chat.html");   
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
        gauge.needlelow.setEndValue(kpimin);
        gauge.needlehigh.setStartValue(kpimax);
		gauge.needle.setValue(nb);          
	}
	KPItxt = document.getElementById('kpitxt');
	KPItxt.innerHTML = ("Seuil d'alerte : " + kpialert + "<br> niveau minimum : " + kpimin + "      "+ "courant :" +nb +"<br> niveau maximum : " + kpimax );
}

function add_li(txt,id){     
	var oUl = document.getElementById('list');
    var oLi = document.createElement("li");
    var oText = document.createTextNode(txt);
	var b = document.createElement("a");
	var div = document.createElement("div");
	var div2 = document.createElement("div");
    var span = document.createElement("span");
    span.setAttribute('class','ui-icon ui-icon-arrow-r');
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
     span.setAttribute('class','ui-icon ui-icon-arrow-r');
    div.appendChild(span);
	return b;
}

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


function add_liKPI(txt,idx) {     
    var oUl = document.getElementById('listloadkpi'); 
    var oLi = document.createElement("li"); 
	var oText = document.createTextNode(txt); 		
	var b = document.createElement("a");
	var div = document.createElement("div");
	var div2 = document.createElement("div");
    var span = document.createElement("span");
    span.setAttribute('class','ui-icon ui-icon-arrow-r');

	b.appendChild(oText);
    b.setAttribute("id",idx);
	oUl.appendChild(oLi); 
	oLi.appendChild(div);
	div.setAttribute('class','ui-btn-inner ui-li');
	div.appendChild(div2);
	b.setAttribute('class','ui-link-inherit');
	div2.setAttribute('class','ui-btn-text');
	div2.appendChild(b);
	oLi.setAttribute('class','ui-btn ui-btn-icon-right ui-li ui-li-has-alt ui-btn-up-c');
    div.appendChild(span);
    return b;
}



