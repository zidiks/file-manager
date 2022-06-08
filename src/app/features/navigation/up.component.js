import { checkPathExists } from "../../shared/methods/checkPathExists.js";
import { FeatComponent } from "../../core/prototypes/component.proto.js";
import { StateComponent } from "../../core/components/state.component.js";

export class NavigationUpComponent extends FeatComponent {
    command = 'up';

    injections = {
        stateComponent: StateComponent,
    }

    async exec(props) {
        const newPath = this.stateComponent.currentPath.slice().split('/').slice(0, -1).join('/');
        console.log(this.stateComponent.currentPath);
        return checkPathExists(newPath).then((exists) => {
            if (exists) {
                this.stateComponent.currentPath = newPath;
                console.log(`You are currently in ${this.stateComponent.currentPath}`);
            } else {
                throw new Error('Invalid path');
            }
        });
    }
}
