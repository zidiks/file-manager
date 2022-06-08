import { FeatModule } from "../features/featuresModuleClass.js";

export class User extends FeatModule {

    args = process.argv.slice(2);

    setUser(name) {
        this.state.currentUser = name;
    }

    initUserName() {
        const userNameArg = this.args.find(arg => arg.includes('--username'));
        if (userNameArg) {
            const userName = userNameArg.slice(11);
            this.setUser(userName);
        }
        console.log(`Welcome to the File Manager, ${this.state.currentUser}`);
        process.on('exit',() => {
            console.log(`Thank you for using File Manager, ${this.state.currentUser}`);
        });
    }
}
