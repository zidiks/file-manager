import { CommonComponent } from "../prototypes/component.proto.js";
import { StateComponent } from "./state.component.js";

export class UserComponent extends CommonComponent {

    injections = {
        stateComponent: StateComponent,
    }

    args = process.argv.slice(2);

    setUser(name) {
        this.stateComponent.currentUser = name;
    }

    initUserName() {
        const userNameArg = this.args.find(arg => arg.includes('--username'));
        if (userNameArg) {
            const userName = userNameArg.slice(11);
            this.setUser(userName);
        }
        console.log(`Welcome to the File Manager, ${this.stateComponent.currentUser}`);
        process.on('exit',() => {
            console.log(`Thank you for using File Manager, ${this.stateComponent.currentUser}`);
        });
    }
}
