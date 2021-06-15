class Security {

    constructor(){

        this.button = createButton('Enter')
        this.access = createInput("").attribute("placeholder", "ACCESSCODE");
        this.button1 = createButton('Enter')
        this.access1 = createInput("").attribute("placeholder", "ACCESSCODE1");
        this.button2 = createButton('Enter')
        this.access2 = createInput("").attribute("placeholder", "ACCESSCODE2");



        // Add code to create the input and button elements


    }

    display(){

        this.button.position(100, 120);
        this.button1.position(700, 220);
        this.button2.position(100, 320);

        this.access.position(100, 100);
        this.access1.position(700, 200);
        this.access2.position(100, 300);

        this.button.mousePressed(()=>{
            if(system.authenticate(accessCode1, this.access.value())){
                this.access.hide();
                this.button.hide();
                score++
            }
        });


        this.button1.mousePressed(()=>{
            if(system.authenticate(accessCode2, this.access1.value())){
                this.access1.hide();
                this.button1.hide();
                score++
            }
        });
        this.button2.mousePressed(()=>{
            if(system.authenticate(accessCode3, this.access2.value())){
                this.access2.hide();
                this.button2.hide();
                score++
            }
        });  

        // Add code to make the buttons function as expected
    }
}