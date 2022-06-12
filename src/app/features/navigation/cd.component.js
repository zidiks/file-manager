import { checkPathExists } from "../../shared/methods/checkPathExists.js";
import { FeatComponent } from "../../core/prototypes/component.proto.js";
import { StateComponent } from "../../core/components/state.component.js";
import { generatePath } from "../../shared/methods/generatePath.js";

export class NavigationCdComponent extends FeatComponent {
    command = 'cd';

    injections = {
        stateComponent: StateComponent,
    }

    async exec(props) {
        if (!props[0]) {
            throw new Error('Empty path');
        } else {
            const newPath = generatePath(this.stateComponent.currentPath, props[0]);
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
}
