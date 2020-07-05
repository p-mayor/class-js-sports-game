class Team {
    constructor(name) {
        this.name = name
        this.teamElement = document.createElement('div')

        this.header = document.createElement('h1')
        this.header.append(this.name)

        this.statsDiv = document.createElement('div')

        this.shotDiv = document.createElement('div')
        this.shotDiv.append("Shots: 0")
        this.shots = 0

        this.goalDiv = document.createElement('div')
        this.goalDiv.append("Goals: 0")
        this.goals = 0

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
        this.shotDiv.textContent = "Shots: " + this.shots
        this.goalDiv.textContent = "Goals: " + this.goals
    }
}

class Game {
    constructor(stadium, team1, team2, targetElement) {
        this.gameElement = document.createElement('div')
        this.gameElement.style.border = "1px solid black"
        this.gameElement.style.textAlign = "center"

        this.headerElement = document.createElement('h1')
        this.headerElement.style.textAlign = "center"
        this.headerElement.append("Welcome to " + stadium + " stadium")

        this.teamsElement = document.createElement('div')
        this.teamsElement.style.display = "flex"
        this.teamsElement.style.justifyContent = "space-around"

        this.teamsElement.append(team1.teamElement, "vs", team2.teamElement)
        this.gameElement.append(this.headerElement, this.teamsElement)

        targetElement.append(this.gameElement)
    }
}

let dmg = new Team("DMG")
let cramer = new Team("Cramer")

let zach = new Team("Zach")
let alec = new Team("Alec")

let game1 = new Game("abc", dmg, cramer, document.body)
let game2 = new Game("cde", zach, alec, document.body)