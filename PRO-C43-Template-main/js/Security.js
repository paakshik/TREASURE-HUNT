class Security {

    constructor(){
        this.access1 = createInput("")
        this.access1.position(100,90);
        this.access1.style('background', 'white');  

        this.button1 = createButton('Check');
        this.button1.position(100,120);
        this.button1.style('background', 'lightgrey');    

        this.access2 = createInput("")
        this.access2.position(700,190);
        this.access2.style('background', 'white');  

        this.button2 = createButton('Check');
        this.button2.position(700,220);
        this.button2.style('background', 'lightgrey');

        
        this.access3 = createInput("")
        this.access3.position(180,300);
        this.access3.style('background', 'white');  

        this.button3 = createButton('Check');
        this.button3.position(180,330);
        this.button3.style('background', 'lightgrey');
        
//add code for creating and positioning the third input box and button
        
    }
showed(){
    this.button1.show();
    this.button2.show();
    this.button3.show();
    this.access1.show();
    this.access2.show();
    this.access3.show();
}
    display(){
      
        this.button1.mousePressed(() => {
            click.play();
            if(system.authenticate('variable',this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                score++;
            }
            else{
                confirm('WRONG ANSWER')
            }
        });

        this.button2.mousePressed(() => {
            click.play();
            if(system.authenticate('function',this.access2.value())){
                this.button2.hide();
                this.access2.hide();
                score++;

            }
            else{
                confirm('WRONG ANSWER')
            }
        });
//add code for what happens when the third button is pressed
        
this.button3.mousePressed(() => {
    click.play();
    if(system.authenticate('database',this.access3.value())){
        this.button3.hide();
        this.access3.hide();
        score++;
    }
    else{
        confirm('WRONG ANSWER')
    }
});

    }
    hides(){
        this.button1.hide();
        this.button2.hide();
        this.button3.hide();
        this.access1.hide();
        this.access2.hide();
        this.access3.hide()
    }
}