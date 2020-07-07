class Team {
    constructor(name) {
        this.name = name
        this.shots = 0
        this.goals = 0
        this.teamElement = document.createElement('div')

        this.header = document.createElement('h1')
        this.header.append(this.name)

        this.shotDiv = document.createElement('div')
        this.goalDiv = document.createElement('div')
        this.updateView()

        this.statsDiv = document.createElement('div')
        this.statsDiv.append(this.shotDiv, this.goalDiv)

        this.shootButton = document.createElement('button')
        this.shootButton.append("SHOOT")
        this.shootButton.addEventListener("click", () => this.shoot())

        this.teamElement.append(
            this.header,
            this.statsDiv,
            this.shootButton
        )
    }

    shoot() {
        console.log(this)
        this.shots++
        if (Math.random() > 0.5) {
            this.goals++
        }
        this.updateView()
    }

    updateView() {
        this.shotDiv.textContent = "Shots: " + this.shots
        this.goalDiv.textContent = "Goals: " + this.goals
    }

    reset() {
        this.shots = 0
        this.goals = 0
        this.updateView()
    }


}

class Game {
    constructor(stadium, team1, team2, targetElement) {
        this.team1 = team1
        this.team2 = team2
        this.stadium = stadium
        this.generateGameElement()
        targetElement.append(this.gameElement)
    }

    generateGameElement() {
        this.gameElement = document.createElement('div')
        this.gameElement.style.border = "1px solid black"
        this.gameElement.style.textAlign = "center"

        this.headerElement = document.createElement('h1')
        this.headerElement.style.textAlign = "center"
        this.headerElement.append("Welcome to " + this.stadium)

        this.generateTeamsElement()

        this.gameElement.append(this.headerElement, this.teamsElement)
    }

    generateTeamsElement(){
        this.teamsElement = document.createElement('div')
        this.teamsElement.style.display = "flex"
        this.teamsElement.style.justifyContent = "space-around"
        
        this.middleElement = document.createElement('div')
        this.middleElement.style.display = "flex"
        this.middleElement.style.flexDirection = "column"
        this.middleElement.style.justifyContent = "space-around"
        
        this.resetButton = document.createElement('button')
        this.resetButton.append("Reset")
        this.resetButton.addEventListener("click", () => this.resetHandler())

        this.middleElement.append("vs", this.resetButton)
        
        this.teamsElement.append(this.team1.teamElement, this.middleElement, this.team2.teamElement)
    }

    resetHandler() {
        this.team1.reset()
        this.team2.reset()
    }

}

let game1 = new Game("Astrodome", new Team("DMG"), new Team("Cramer"), document.body)
let game2 = new Game("Yankee Stadium", new Team("Zach"), new Team("Alec"), document.body)