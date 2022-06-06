function checkRooms() {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log('Checking hotel rooms...');
            const availableRooms = true;
    
            availableRooms ? resolve("Yes") : reject("No");
        }, 1500);
    });
}

function checkTickets(data) {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log(data);
            console.log('Checking tickets...');
            const availableTickets = true;

            availableTickets ? resolve("Tickets are available") : reject("No tickets.");
        }, 1500);       
    });
}

function success(data) {
    setTimeout(function(){
        console.log(data);
        console.log('We are going to trip!');
    }, 1500);   
}

function failed(data) {
    setTimeout(function(){
        console.log(data);
        console.log('Oh, boy...');
    }, 1500);    
}

checkRooms()
    .then(checkTickets)
    .then(success)
    .catch(failed);