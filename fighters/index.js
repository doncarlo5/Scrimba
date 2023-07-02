let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random 
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
    // First part
    //     let randomIndex = Math.floor( Math.random() * fighters.length )
    //     console.log(fighters[randomIndex])
    
    function pickFighter() {
        let randomFighter = Math.floor(Math.random() * fighters.length);
        return fighters[randomFighter];
    }

    let fighter1 = pickFighter();
    let fighter2 = pickFighter();

    console.log(fighter1);

    stageEl.textContent = fighter1 + " VS " + fighter2;
});


// Other solution :
// fightButton.addEventListener("click", function() {
//    let randomIndexOne = Math.floor( Math.random() * fighters.length )
//    let randomIndexTwo = Math.floor( Math.random() * fighters.length )
//    stageEl.textContent = fighters[randomIndexOne] + " vs " + fighters[randomIndexTwo]
//    })
