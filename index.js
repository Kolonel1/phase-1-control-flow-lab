function scuberGreetingForFeet(feet){
  if(feet<=400){
    return'This one is on me!'}
   else if (feet>2500){return'No can do.'}
   else if (feet>2000){return 'I will gladly take your thirty bucks.'};
   // i have found what the secret is and it is to place what the one that represents values that are in between as the last

  // Write your code here!
}
scuberGreetingForFeet(199);

function ternaryCheckCity(city){
let response;
  if(city==='NYC'){         // this is how you do it must use a comparative in if function
  return response='Ok, sounds good.'// i think there should always be a let in this stuff for example i could have given the return a variable such as response or sth but i do agree that there are many methods of going about this
}
else{return response='No go.'}
  // Write your code here!
}

function switchOnCharmFromTip(tip){let reply;
  switch(tip)
  {
    case 'generous':
      return reply='Thank you so much.'
      case 'not as generous':
       return reply='Thank you.'
        default:
          return reply='Bye.'
  }
  // Write your code here!
}