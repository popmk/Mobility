// JavaScript Document
var my_gauge;
var taille = 4;
var KPItxt;
var myChart;
var gauge;
var myData = new Array([0, 40], [5, 50], [10, 55], [15, 45]);
now.name = 'Pop';
var currentgroup = "KPIuser";


function description() {
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
	menu();
	now.LaunchKPI();
}	


function receiveKPI(){
	updateKPI();	
	checkalert();
}


function checkalert(){
	if(now.KPIcurrent>now.KPIalert)
    	alert();
}


function Gauge(){
	now.type="gauge";
	
};
function TrueGauge(){
	now.type="truegauge";    
};
function Chart(){
	now.type="chart";
};

function kpioptions(){
	var kpialert = document.getElementById('kpialert'); kpialert.innerHTML = "KPIalert = " + now.KPIalert;
	var kpimin = document.getElementById('kpimin'); kpimin.innerHTML = "KPImin = " + now.KPImin;
	var kpimax = document.getElementById('kpimax'); kpimax.innerHTML = "KPImax = " + now.KPImax;
}

function kpialertdown(){
	now.KPIalert--;
	document.getElementById('kpialert').innerHTML = "KPIalert = " + now.KPIalert;
};
function kpialertup(){
	now.KPIalert++;
	document.getElementById('kpialert').innerHTML = "KPIalert = " + now.KPIalert;
};
function kpimindown(){
	now.KPImin--;
	document.getElementById('kpimin').innerHTML = "KPImin = " + now.KPImin;
	gauge.limbasse.setEndValue(now.KPImin);
};
function kpiminup(){
	now.KPImin++;
	document.getElementById('kpimin').innerHTML = "KPImin = " + now.KPImin;
	gauge.limbasse.setValue(now.KPImin);
};
function kpimaxdown(){
	now.KPImax--;
	document.getElementById('kpimax').innerHTML = "KPImax = " + now.KPImax;
	gauge.limhaute.setValue(now.KPImax);
};
function kpimaxup(){
	now.KPImax++;
	document.getElementById('kpimax').innerHTML = "KPImax = " + now.KPImax;
	gauge.limhaute.setValue(now.KPImax);
};

