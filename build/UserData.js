export default class UserData {
    name;
    score;
    level;
    constructor(name) {
        this.name = name;
        this.level = 1;
        this.score = 0;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getScore() {
        return this.score;
    }
    setScore(points) {
        this.score += points;
    }
    getLevel() {
        return this.level;
    }
    increaseLevel() {
        this.level += 1;
    }
}
//# sourceMappingURL=UserData.js.map