function startGame() {
const myName = prompt("please enter your name") 
const partnerName = prompt(`Hello ${myName}!
Please enter your partner's name`)
 let value = Math.floor(Math.random() * 100) + 1;
 if (value < 60) {
    alert(`${value}% 
    Better Keep Coding Solo
    "Sometimes, you just have to stay alone and full of hope while waiting for the right person... "

    ${randomLoveQuotes}
                        Love Doctor`);
 } else if (value >= 60 && value <= 69) {
    alert(`${value}% 
    Coding Acquaintances
    "You see ${myName}, it takes someone with courage to maintain the connection between the both of you once it"s established, and that person is YOU!"
    
    ${randomLoveQuotes}
                        ~Engr. Mufutau`);
 } else if (value >= 70 && value <= 79) {
    alert(`${value}% 
    Coding Buddies
    "${partnerName} sees you as a person worth taking a life journey with, it's left to you if you want something more!"
    
    ${randomLoveQuotes}
                        ~M.A Opemipo`);
 } else if (value >= 80 && value <= 89) {
    alert(`${value}% 
    Coding Companions
    "Awesome! Both of you are part of the 0.1percent on Earth with a high love affinity."
    
    ${randomLoveQuotes}
                        ~M.A.O`);
 } else {
    alert(`${value}% 
    Coding Soulmates
    "Congratulations! You and ${partnerName} are a perfect match made in the coding heavens! Keep coding together for a lifetime of bug-free hapiness!"
    
    ${randomLoveQuotes}
                        ~Sir Wayseh`);
 }

function isInputValid(myName, partnerName) {
    
}
}
const loveQuotes = ["All you need is love.", "True love stories never have endings.", "A life lived in love will never be dull.", "We can only learn to love by loving.", "Love all, trust a few, do wrong to none.", "Forever & Always!", "You're my greatest adventure.", "I never want to stop making memories with you", "You call it madness, but I call it love."]
const randomLoveQuotes = loveQuotes[Math.floor(Math.random() * loveQuotes.length )]