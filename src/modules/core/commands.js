export class Commands {

    constructor(featuresKeys) {
        this.featuresKeys = featuresKeys;
    }

    listen() {
        process.stdin.on('data', chunkData => {
            const chunk = chunkData.toString().trim().split(' ');
            const command = chunk.shift();
            switch (command) {
                case '.exit':
                    process.exit();
                    break;
                default:
                    if (this.featuresKeys.includes(command)) {
                        if (this.cb) {
                            this.cb(command, chunk);
                        }
                    } else {
                        console.log('Invalid input');
                    }
                    break;
            }
        });
    }

    subscribe(cb) {
        this.cb = cb;
    }

}
