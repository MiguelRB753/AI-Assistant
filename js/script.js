const talk_btn = document.querySelector("#talk")
const speech_content = document.querySelector("#speech-text")

function speak(text){
    const text_speak = new SpeechSynthesisUtterance(text)

    text_speak.rate = 1
    text_speak.volume = 1
    text_speak.rate = 1


    window.speechSynthesis.speak(text_speak)
}

function wishMe() {
    speak("inicializando assistente pika 3000..."); 

    var day = new Date();
    var hour = day.getHours();
    var weekday = day.getUTCDate();
    var month = day.getUTCMonth();
    var year = day.getFullYear();

    if (hour >= 0 && hour < 12) {
        speak("bom dia...");
    } else if (hour >= 12 && hour < 18) {
        speak("boa tarde...");
    } else {
        speak("boa noite...");
    }

    speak("hoje é dia "+weekday+" do mês "+month+" de "+year)
}

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    speech_content.textContent = transcript;
    takeCommand(transcript.toLowerCase());
};

talk_btn.addEventListener('click', () => {
    speech_content.textContent = "ouvindo...";
    recognition.start();
});

function takeCommand(message) {
    if (message.includes('oi') || message.includes('olá')) {
        speak("o que você quer cacete?");
    } else if (message.includes("abrir google")) {
        window.open("https://google.com", "_blank");
        speak("abrindo Google porra...");
    } else if (message.includes("abrir youtube")) {
        window.open("https://youtube.com", "_blank");
        speak("abrindo Youtube porra...");
    } else if (message.includes("abrir facebook")) {
        window.open("https://facebook.com", "_blank");
        speak("abrindo Facebook porra...");
    } else if (message.includes("abrir w3")) {
        window.open("https://w3schools.com", "_blank");
        speak("abrindo W3 Schools porra...");
    } else if (message.includes("abrir github")) {
        window.open("https://github.com/", "_blank");
        speak("abrindo GitHub porra...");
    } else if (message.includes("abrir calculadora")) {
        window.open("Calculator:///", "_blank");
        speak("abrindo calculadora porra...");
    } else if (message.includes("se foder") || message.includes("se fode")) {
        speak("vai se foder vc seu merda, não presta pra porra nenhuma na vida, seu vagabundo");
    } else if (message.includes("cu")) {
        speak("vai tomar no seu cu, seu arrombado. Seu toba é tão arrombado que até o bluezão tem nojo de vc, seu pau no cu");
    } else if (message.includes('horas')) {
        const time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
        const finalText = "Hora certa: são" + time;
        speak(finalText);
    } else if (message.includes('o que') || message.includes('quem') || message.includes('quando') || message.includes('como') || message.includes('aonde') || message.includes('onde')){
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "Achei isso na internet sobre " + message; 
        speak(finalText);
    } else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "Eu achei isso para " + message + " no Google";
        speak(finalText);
    }
}

wishMe()