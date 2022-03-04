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
    if(text =="hello"){
        speech.text="no i have a cute girlfriend sorry i don't accepet your request";
    }

    window.speechSynthesis.speak(speech);
}