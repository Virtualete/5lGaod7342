import { UMI } from "../../Logic/UMI.js";
import { Sound } from "../../Element/Sound.js";
export class Sonar {
    constructor() {
        this.sonarActive = false;
        this.sonarSpeed = UMI.getSpeed(20);
        this.currentSonarSpeed = UMI.getSpeed(20);
        this.sonarRadious = 0;
        this.sonarOpacity = 0.8;
        this.sound = new Sound("../js/sounds/sonar.wav", 0.5);
    }
    do() {
        this.sound.stop();
        this.sound.play();
        this.sonarActive = true;
        return true;
    }
    doing() {
        return this.sonarActive;
    }
    updateStatus(obj) {
        this.sonarRadious += this.currentSonarSpeed;
        this.currentSonarSpeed -= this.sonarSpeed / 45;
        this.sonarOpacity -= this.sonarSpeed / 1800;
        if (this.currentSonarSpeed <= 0.5) {
            this.sonarActive = false;
            this.currentSonarSpeed = this.sonarSpeed;
            this.sonarRadious = 0;
            this.sonarOpacity = 0.8;
        }
    }
    draw(ctx, x, y) {
        ctx.lineWidth = 5;
        ctx.strokeStyle = 'rgba(0, 196, 91,' + this.sonarOpacity;
        +')';
        ctx.beginPath();
        ctx.arc(UMI.getPX(x), UMI.getPX(y), UMI.getPX(this.sonarRadious), 0, 2 * Math.PI);
        ctx.stroke();
    }
}
