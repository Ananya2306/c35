class Form {
    constructor(){

    }

    display(){
        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(400,100);

        var input = createInput("Name");
        var button = createButton('play');
        var greeting = createElement('h3');

        input.position(450,300);
        button.position(450,350);

        button.mousePressed(function(){
            input.hide();
            button.hide();

            var name = input.value();

            playerCount+=1;
            player.update(name);
            player.updateCount(playerCount);
            
            greeting.html("~ Hello " + name + " ~");
            greeting.position(400,200);

        });
    }
}