function alert(){
        now.StopAlert(currentgroup);
    document.getElementById('list').innerHTML = "";
    menu();
    menuGroup();
	add_li("URL","url");    
	addLink("url","http://www.google.fr");
	navigator.notification.alert("Alerte, Seuil depasse");
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
	 myData.shift();    
     var str = taille*5;
     str = str + "";
     myData.push([str,nb]);                 
     taille = taille + 1;
     
	if(type=="chart"){
		ChartLine();
	}
	if(type=="gauge"){    
	    ChartBar();
	}            
	if(type=="truegauge"){
	    Gauge(nb);
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
function ChartBar(){
    BarChart = new JSChart('kpi', 'bar');
    BarChart.setDataArray(myData);
    BarChart.setSize(300, 225);
    BarChart.setBarValues(false);
    BarChart.setBarOpacity(0.7);
    BarChart.setBarSpacingRatio(35);
    BarChart.setBarBorderWidth(0);
    BarChart.setTitle('KPI');
    BarChart.setTitleFontSize(10);
    BarChart.setTitleColor('#408F7F');
    BarChart.setAxisValuesColor('#408F7F');
    BarChart.setAxisNameX('Evolution');
    BarChart.setAxisNameY('%');
    BarChart.setAxisNameColor('#408F7F');
    BarChart.setAxisColor('#5DB0A0');
    BarChart.setGridOpacity(0.8);
    BarChart.setGridColor('#B9D7C9');    
    BarChart.draw();
}

function ChartLine(){    
    myChart = new JSChart('kpi', 'line', '', '');
    myChart.setDataArray(myData);
    myChart.setSize(300,225);
    myChart.setIntervalStartY(kpimin);
    myChart.setIntervalEndY(kpimax);
    myChart.setLineColor('#632C8C');
    myChart.setLineWidth(4);
    myChart.setGridColor('#0072BB');
    myChart.setAxisColor('#0072BB');
    myChart.setTitleColor('#632C8C');
    myChart.setAxisValuesColor('#632C8C');
    myChart.setAxisNameX(' ');
    myChart.setAxisNameY(' ');
    myChart.setGridOpacity(0.8);
    myChart.setGraphExtend(true);
    myChart.setTitle('KPI');
    myChart.draw();
}

function Gauge(nb){
    document.getElementById('kpi').innerHTML = '<div id="jGaugeDemo" class="jgauge"></div>';
    demoGauge = new jGauge(); 
    demoGauge.id = 'jGaugeDemo';
    demoGauge.init();
    demoGauge.setValue(nb);
}

function drawKPI(nb){
	document.getElementById('kpi').innerHTML = "";
	if(type=="chart"){
		ChartLine();
	}
	if(type=="gauge"){
	    ChartBar();
	}
	if(type=="truegauge"){
	    Gauge(nb);
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



