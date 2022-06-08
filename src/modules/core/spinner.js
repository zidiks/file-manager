export class Spinner {

    sprites = [ '⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏' ];
    count = 0;
    interval;

    showSpinner() {
        if (this.interval) {
            return;
        }
        process.stdin.pause();
        this.interval = setInterval(() => {
            this.count++;
            process.stdout.write(" " + this.sprites[  (this.count+1) % this.sprites.length ] + "\r");
        }, 100);

    }

    hideSpinner() {
        process.stdin.resume();
        clearInterval(this.interval);
        this.count = 0;
    }

}
