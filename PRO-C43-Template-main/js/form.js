class Form{
constructor(){
  this.input = createInput("");
       this.button = createButton('Play');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
      this.next = createButton('Next')
this.next.hide();
}
display(){
    this.title.html("TREASURE FINDER");
    this.title.position(300, 20);
    this.title.style('font-size', '40px');
    this.title.style('color', 'darkOrange');
    this.input.position(400,200);
    this.input.style('width', '200px');
    this.input.style('height', '20px');
    this.input.style('background', 'orange');
    this.input.style('color', 'red');
    this.button.position(410,300);
    this.button.style('width', '200px');
    this.button.style('height', '40px');
    this.button.style('background', 'white');
    this.next.position(780,390);
    this.next.style('width', '100px');
    this.next.style('height', '40px');
    this.next.style('background', 'white');

    this.button.mousePressed(() => {
        this.input.hide();
        this.button.hide();
      this.next.show();
        this.greeting.html("Hello " + this.input.value())
        this.greeting.position(390,250);
        this.greeting.style('color', 'crimson');
        this.greeting.style('font-size', '30px');
        click.play();
    }); 
this.next.mousePressed(() => {
    this.next.hide();
    this.greeting.hide();
    gameState =1;
    click.play();
    security.showed();
})
}
hide(){
    this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();   
}
}