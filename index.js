const chalk = require('chalk');
 let readlineSync = require('readline-sync');
let score=0
const naruto = [
  {
    "ques":"What is the fullname of Naruto's father? ",
    "ans":"minato namikaze",
    "options":["Hiyashi Hyuga","Azuma Hiruzen","Minato Namikaze"]
  },
  {
    "ques":"What is the village where Naruto lives called? ",
    "ans":"konoha",
    "options":["Konoha","Osaka"]
  },
  {
    "ques":"Which famed clan was completely massacred? ",
    "ans":"uchiha",
    "options":["Nara","Uchiha"]
  },
  
  {
    "ques":"Which friend died during the Fourth Great War? ",
    "ans":"neji",
    "options":["Kiba","Neji","Choji"]
  },
  {
    "ques":"Which ninja cannot do ninjutsu? ",
    "ans":"lee",
    "options":["Lee","Shino"]
  },
  {
    "ques":"Who gave their life to Gaara? ",
    "ans":"chiyo",
    "options":["Temari","Chiyo"]
  },
  {
    "ques":"What does Gaara's tattoo mean? ",
    "ans":"love",
    "options":["Pain","Friendship","Love"]
  },
  {
    "ques":"Who is the last being that Naruto battled in Naruto Shippuden? ",
    "ans":"sasuke",
    "options":["Madara","Sasuke"]
  },
  {
    "ques":"What is Sasuke's team called? ",
    "ans":"taka",
    "options":["Baka","Taka","Revengers"]
  },
  {
    "ques":"Who does Naruto eventually marry? ",
    "ans":"hinata",
    "options":["Sakura","Hinata","Ino"]
  },
]
function welcomeUser() {
  var userName = readlineSync.question("Hello user, May I have your name? ")
 console.log("Welcome "+ chalk.green.bold(userName));

  if (readlineSync.keyInYN(chalk.yellow.bold("Are you a Naruto Fan? 🦊 "))) {
    console.log(chalk.magenta.bold("Let's see how well do you know Naruto..."))
    askQuestions();
    displayFinalScore()
  } else {
    console.log('Thank you for taking your time. Have a good day :)');
  }
}
 
function askQuestions(){
  for(let i in naruto){
  let item = naruto[i]
 console.log(item.ques)
   options = item.options,
  index = readlineSync.keyInSelect(options, 'Choose one');
    
    if(index > -1){
      if(options[index].toLowerCase()===item.ans.toLowerCase()){
    console.log(chalk.green.bold("Correct answer\n"))
   
    score+=1
  }
  else{
    console.log(chalk.red.bold("Sorry!! wrong answer \n"))
  
  }
    }else{
      console.log("You pressed cancel")
      break;
    }
  

}
}
function displayFinalScore() {
 console.log("Your final score is "+score+"/11");
 console.log("Thank you for playing.."+ chalk.yellow.bold("Dattebayo"))

}

welcomeUser()