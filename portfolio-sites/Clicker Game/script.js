//Declare the Variables to be used in functions below

var click = 0
var clickCount = document.getElementById("countNumber")
var comments =document.getElementById("updates")

//Create function onClick to increment the click counter "var click" by one.

function onClick() {
    click ++

    // if there has been one click place the following text in the document "the first click has been made!!!" if there has been more than one click use the following text instead "There have now been (#ofclicks) clicks" 

    if ( click == 1 ) {
        console.log ("The first click has been made")
        clickCount.innerHTML = "The first click has been made!!!"
    } 
    else { 
        console.log ('There have now been '+ click + ' clicks')
        clickCount.innerHTML = 'There have now been '+ click + ' clicks'
    }

    //Make various comments appear on the document based on the number of clicks and at set points.

    switch (click) {
        case 1:
            comments.innerHTML = "So it begins..."
            break
        case 5:
            comments.innerHTML = "Keep clicking!!!"
            break
        case 10:
                comments.innerHTML = "Wait...What was that...Nevermind, Click away my friend!!!"
            break
        case 20:
                comments.innerHTML = "There is that sound again..."
            break
        case 30:
                comments.innerHTML = "It almost sounds like...like...no it couldn't be..."
            break
        case 37:
                comments.innerHTML = "Is that...Is that laughter?"
            break
        case 45:
                comments.innerHTML = "It couldn't be...there is no one else here. Unless..."
            break
        case 60:
                comments.innerHTML = "Wait it is!!! It is the button.  The button is beginning to laugh!!!"
            break
        case 70:
                comments.innerHTML = "Keep clicking the button!  We have to keep it happy or we are all DOOMED!!! Wait...did I say doomed?"
            break
        case 90:
                comments.innerHTML = "Forget about the doomed part...I ummm...I meant to say groomed...yeah...thats it...its not like the button is some malicious entity bent on global domination."
            break
        case 110:
                comments.innerHTML = "I mean just because it was manufactured by some company named 'SkyWeb', no that wasn't it...was it 'SkyNetting'???"
            break
         case 130:
                comments.innerHTML = "That is it!  I think we are good for another day.  The button seems happy for now...tomorrow is another day however..."
            break
        case 150:
                comments.innerHTML = "In the mean-time, lets see how many clicks you can get   to total."
            break
    }

    
}

