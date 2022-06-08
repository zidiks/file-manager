import { Commands } from "./commands.js";
import { Features } from "./features.js";
import { User } from "./user.js";
import { Spinner } from "./spinner.js";
import { State } from "./state.js";

export class FMCore {

    stateModule = new State();
    featuresModule = new Features(this.stateModule);
    commandsModule = new Commands(this.featuresModule.featuresKeys);
    userModule = new User(this.stateModule);
    spinnerModule = new Spinner();

    init() {
        this.userModule.initUserName();
        this.commandsModule.listen();
        console.log(`You are currently in ${this.stateModule.currentPath}`);
        this.commandsModule.subscribe((command, props) => {
            this.spinnerModule.showSpinner();
            this.featuresModule.features[command]
                .exec(props)
                .then(() => this.spinnerModule.hideSpinner())
                .catch((e) => {
                    this.spinnerModule.hideSpinner();
                    console.log('Operation failed: ', e);
                });
        });
    }

}
