var fs = require('fs');
var server = require('http').createServer(function(req, response){
  fs.readFile(__dirname+'/helloworld.html', function(err, data){
    response.writeHead(200, {'Content-Type':'text/html'}); 
    response.write(data);  
    response.end();
  });
});
server.listen(process.env.C9_PORT);
var nowjs = require("now");
var everyone = nowjs.initialize(server);
var KPIgroup = nowjs.getGroup("KPIuser");



everyone.now.Log = function(txt){
	console.log(txt);	
};


everyone.connected(function(){
  console.log("Joined: " + this.now.name);	
  this.now.addToKPIgroup();
});


everyone.disconnected(function(){
  console.log("Left: " + this.now.name);
  this.now.removeFromGroup();
});


function Generate(){
everyone.now.KPI();
everyone.now.KPIcurrent = everyone.now.KPIcurrent +5;
console.log("Generate : " + everyone.now.KPIcurrent);
}


everyone.now.LaunchKPI = function(){	
	setInterval(Generate(),4000);
};


everyone.now.addToKPIgroup = function(){
  KPIgroup.addUser(this.user.clientId);
};

everyone.now.removeFromGroup = function(){
  KPigroup.removeUser(this.user.clientId);
};


everyone.now.sendToKPIgroup = function(){
  KPIgroup = nowjs.getGroup("KPIuser");
  KPIgroup.now.receiveMessage("Hello");
};


everyone.now.description = "Surveillance compte en ligne";
everyone.now.KPImin = 20;
everyone.now.KPImax = 80;
everyone.now.KPIalert = 75;
everyone.now.KPIcurrent = 60;

