let choices = document.querySelectorAll(".move");
let user_score = document.querySelector(".output-user");
let comp_score = document.querySelector(".output-comp");
let user = 0;
let message_out = document.querySelector(".message");
let comp = 0;
let message = "";
function check(input,compChoice){
    if(input===compChoice){
        message = "It's a draw";
    }

    else if(input !== compChoice){
        if(input==="stone" && compChoice==="scissor"){
            user += 1;
            message = "🎉Congratulations User is the WINNER";
        
        }

        else if(input==="stone" && compChoice==="paper"){
            comp += 1;
            message = "Computer is the WINNER";
        }

        else if(input==="paper" && compChoice==="stone"){
            user += 1;
            message = "🎉Congratulations User is the WINNER";
        }

        else if(input==="paper" && compChoice==="scissor"){
            comp += 1;
            message = "Computer is the WINNER";
        }

        else if(input==="scissor" && compChoice==="stone"){
            comp += 1;
            message = "Computer is the WINNER";
        }


        else if(input==="scissor" && compChoice==="paper"){
            user += 1;
            message = "🎉Congratulations User is the WINNER";
        }
    }
    return user, comp,message;
}
choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        let choices = ["stone","paper","scissor"];
        let idx = Math.floor(Math.random()*3);
        let compChoice = choices[idx];
        console.log(`the computer selected ${compChoice}`);
        let input = choice.getAttribute("id");
        user,comp, message = check(input,compChoice);
        user_score.innerText = user;
        comp_score.innerText = comp;
        message_out.style.visibility = "visible";
        message_out.innerText = message;
    })
})