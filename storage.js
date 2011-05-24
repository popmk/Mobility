function populateDB(tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS Login (name unique, mail)');
        tx.executeSql('INSERT INTO Login (name, mail) VALUES ("Popmk", "popmk@yopmail.com")');
    }

    // Query the database
    //
    function queryDB(tx) {
        tx.executeSql('SELECT * FROM Login', [], querySuccess, errorCB);
    }
    
    function mail(tx){
         tx.executeSql('SELECT mail FROM Login', [], querySuccessMail, errorCB);
        }
        
      function name(tx){
         tx.executeSql('SELECT name FROM Login', [], querySuccessName, errorCB);
        } 

    // Query the success callback
    //
        function call(){
             var db = window.openDatabase("Database", "1.0", "PhoneGap Demo", 200000);
             db.transaction(mail,errorCB,querySuccessMail);
             db.transaction(name,errorCB,querySuccessName);
            }
    
    function querySuccessMail(tx, results) {
        now.mail = results.rows.item(0).mail;
        navigator.notification.alert("Mail = "  +  results.rows.item(0).mail);
        }
        
        function querySuccessName(tx, results) {
            now.name = results.rows.item(0).name;
            navigator.notification.alert("Name = " + results.rows.item(0).name);
        }
    
    function querySuccess(tx, results) {                      
            navigator.notification.alert("Name = " + results.rows.item(0).name + " Mail =  " + results.rows.item(0).mail);        
    }

    // Transaction error callback
    //
    function errorCB(err) {
         navigator.notification.alert("Error processing SQL: "+err.code);
    }

    // Transaction success callback
    //
    function successCB() {
        var db = window.openDatabase("Database", "1.0", "PhoneGap Demo", 200000);
        db.transaction(queryDB, errorCB);
    }