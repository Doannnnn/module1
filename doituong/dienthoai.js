class Mobile{
    constructor(){
        this.battery = 100;
        this.composeMessage = "";
        this.inbox = [];
        this.sent = [];
        this.status = false;
    }
    checkStatus(){
        return this.status;
    }
    statusOn(){
        this.status = true;
    }
    statusOff(){
        this.status = false;
    }
    chargeBattery(){
        this.battery = 100;
    }
    compose(){
        this.composeMessage = message;
        this.battery -= 1;
    }
    receive(){
        this.inbox.append(message);
        this.battery -= 1;
    }
    sentt(){
        if (this.status == true){
            mobile.receive(message);
            this.inbox.append(message);
            this.battery -= 1;
        }
    }
    read_inbox(){
        if (this.status == true){
            for (message in this.inbox)
                print(message)
            this.battery -= 1
        }
    }
    read_sent(){
        if (this.status == true){
            for (message in this.sent)
                print(message)
            this.battery -= 1
        }
    }
}