// You are a leader of a small pirate crew. And you have a plan. 
// With the help of OOP you wish to make a pretty efficient system to identify ships with a heavy booty on board.

// Unfortunattely for you, people weigh a lot this days, so how do you know if a ship if full of gold and not people?

// You begin with writing a generic Ship class:



function Ship(draft,crew) {
    this.draft = draft;
    this.crew = crew;
     
     this.isWorthIt= function(){
       return this.draft-1.5 * this.crew >20
     }
   }