const clock = {
    
    init() {
        this.hours = 0,
        this.minutes = 0,
        this.seconds = 0,
        this.angles = {
            hours: 0,
            minutes: 0,
            seconds: 0
        }
    },

    setTime(hours = 0, minutes = 0, seconds = 0) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
        this.render();
    },
    
    render() {
        this.angles.hours = this.hours / 12 * 360;    
        this.angles.minutes = this.minutes / 60 * 360;    
        this.angles.seconds = this.seconds / 60 * 360;    
    },
}

const handler = {

    init() {
        clock.init();
        view.init();
    },

    setDate() {
        const now = new Date();
        clock.setTime(now.getHours(), now.getMinutes(), now.getSeconds());    
        view.render();
    },

    getAngles() {
        return clock.angles;
    },

    render() {
        clock.render();
        view.render();
    },

    removeTransition () {
        if(angle === 0){
            view.removeTransition();
        }
    }
}

const view = {
    init() {
        this.hourHand = document.querySelector('.hour-hand');       
        this.minuteHand = document.querySelector('.minute-hand');       
        this.secondsHand = document.querySelector('.seconds-hand');       
        this.hands = {
            hours: this.hourHand, 
            minutes: this.minutehand,
            seconds: this.secondsHand
        }
    },

    render() {
        const angles = handler.getAngles();
        this.hourHand.style.transform = `rotate(${angles.hours + 90}deg)`;
        this.minuteHand.style.transform = `rotate(${angles.minutes + 90}deg)`;
        this.secondsHand.style.transform = `rotate(${angles.seconds + 90}deg)`;
    }
}


handler.init();

setInterval(handler.setDate, 1000);