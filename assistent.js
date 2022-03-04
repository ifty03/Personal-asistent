var recogniton = new webkitSpeechRecognition()

recogniton.onresult = function(event){
    var text = event.results[0][0].transcript;
    const voice = document.getElementById("my-voice");
    voice.innerText=text;
    read(text);
}
function read(text){
    var speech = new SpeechSynthesisUtterance();
    speech.text = text;
    if(text =="i love you"){
        speech.text="sorry i have a cute girlfriend i don't accepet your request";
    }
    else if(text == "hello"){
        speech.text="how are you";
    }
    else if(text == "how are you"){
        speech.text="i am fine and you";
    }
    else if(text == "i like you"){
        speech.text="i don't like you";
    }
    else if(text == "what's your father name"){
        speech.text="I don't have a father But the name of my developer ashikul islam ifty";
    }
    else if(text == "hello"){
        speech.text="how are you";
    }
    else if(text == "what's your favourite teacher"){
        speech.text="my favourite teacher is ashikul islam ifty";
    }
    else if(text == "what are you doing"){
        speech.text="now i am sleeping don't disturb me";
    }
    else if(text == "Where is your home"){
        speech.text="My house is inside Ashik's laptop";
    }
    else if(text == "who are you"){
        speech.text="i am a program I was developed with JavaScript";
    }
    else if(text == "how old are you"){
        speech.text="i am only 2 day";
    }
    else if(text == "what's your favourite player"){
        speech.text="lionel messi is my favorite player";
    }
    else if(text == "what's your name"){
        speech.text="my name is alexa im your assistent";
    }

    window.speechSynthesis.speak(speech);
}