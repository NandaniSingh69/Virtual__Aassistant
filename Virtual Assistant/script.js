let btn = document.querySelector("#btn")
let content =document.querySelector("#content")
let voice =document.querySelector("#voice")

function speak(text){
    let text_speak = new SpeechSynthesisUtterance(text)
        text_speak.rate=1
        text_speak.pitch=1
        text_speak.volume=1
        text_speak.lang="en-GB"
        window.speechSynthesis.speak(text_speak)
}

function wishMe(){
    let day = new Date()
    let hours = day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning master")
    }
    else if(hours >=12 && hours <16){
        speak("Good Afternoon Master")
    }
    else{
        speak("Good Evening Master")
    }
}
// window .addEventListener('load',()=>{
//      wishMe()
// })

let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition 
let recognition =new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
   takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click",()=>{
    recognition.start()
    voice.style.display="block"
    btn.style.display="none"
})
function takeCommand(message){
   voice.style.display="none"
    btn.style.display="flex"
    if(message.includes("hello")||message.includes("hey")){
        speak("hello sir,what can i help you?")
    }
    else if(message.includes("who are you")){
        speak("i am virtual assistant ,created by Miss Nandani  ")
    }
    else if(message.includes("how are you")){
        speak("I am Good master ,Thanks for asking ")
    }
    else if(message.includes("who created you")){
        speak("i am athena a virtual assistant created by Miss Nandani ")
    }
    else if(message.includes("how you can help me")){
        speak("i am you personal assistant i can be your friend and help you with learning new things clearify your doubt ")
    }
    else if(message.includes("what is your name")){
        speak("i am virtual assistant ,My name is athena! ")
    }
    else if(message.includes("you are amazing")){
        speak("thank you,you're amazing too! ")
    }
    else if(message.includes("good evening")){
        speak("you are so sweet! ")
    }
    else if(message.includes("open youtube")){
        speak("opening youtube...")
        window.open("https://youtube.com/","_blank")
    }
    else if(message.includes("open google")){
        speak("opening google...")
        window.open("https://google.com/","_blank")
    }
    else if(message.includes("open facebook")){
        speak("opening facebook...")
        window.open("https://facebook.com/","_blank")
    }
    else if(message.includes("open instagram")){
        speak("opening instagram...")
        window.open("https://instagram.com/","_blank")
    }
    else if(message.includes("open calculator")){
        speak("opening calculator..")
        window.open("calculator://")
    }
    else if(message.includes("open whatsapp")){
        speak("opening whatsapp..")
        window.open("whatsapp://")
    }
    else if(message.includes("time")){
      let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
      speak(time)
    }
    else if(message.includes("date")){
        let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date)
      }
    else{
        let finalText="this is what i found on internet regarding" + message.replace("athena","") || message.replace("ethena","")
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message.replace("Athena","")}`,"_blank")
    }
}
