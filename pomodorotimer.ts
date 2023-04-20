class PorodomoTimer {
    private timerIntervals: number;
    private isBreak: Boolean;
    private timer: number;
    private pomodoroLength: number;
    private breakLength: number;


    constructor(pomodoroLength: number,  breakLength: number) {
        this.timerIntervals = 1000;
        this.isBreak = false;
        this.timer = 0;
        this.pomodoroLength = pomodoroLength;
        this.breakLength = breakLength;


    }
    startTimer() {
        this.timer = this.isBreak ? this.breakLength : this.pomodoroLength;
        setInterval(() => {
            this.timer--;
            if (this.timer <= 0) {
              this.isBreak = !this.isBreak; // Wechseln zwischen Pomodoro und Pause
              this.timer = this.isBreak ? this.breakLength : this.pomodoroLength;
              // Hier können Sie eine Alarmfunktion hinzufügen, um den Benutzer zu benachrichtigen
              const alarmSound = new Audio('path/to/alarm/sound.mp3');
              alarmSound.play();
              navigator.vibrate(3000); // Vibriert das Gerät für 3 Sekunde
            }
          }, this.timerIntervals);
        }
      }
