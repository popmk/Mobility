var fs = require('fs');
var server = require('http').createServer(function(req, response){
  fs.readFile(__dirname+'/helloworld.html', function(err, data){
    response.writeHead(200, {'Content-Type':'text/html'}); 
    response.write(data);  
    response.end();
  });
});
server.listen(8080);
var everyone = require("now").initialize(server);




everyone.now.Log = function(txt){
	console.log(txt);	
};


everyone.connected(function(){
  console.log("Joined: " + this.now.name);	
});


everyone.disconnected(function(){
  console.log("Left: " + this.now.name);
});




everyone.now.LaunchKPI = function(){	
	setInterval(Generate(),4000);
};

function Generate(){
everyone.now.KPI();
everyone.now.KPIcurrent = everyone.now.KPIcurrent +5;
console.log("Generate : " + everyone.now.KPIcurrent);
};

everyone.now.description = "Surveillance compte en ligne";
everyone.now.KPImin = 20;
everyone.now.KPImax = 80;
everyone.now.KPIalert = 75;
everyone.now.KPIcurrent = 60;

