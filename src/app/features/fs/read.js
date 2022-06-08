import { FeatComponent } from "../../core/prototypes/component.proto.js";
import { checkPathExists } from "../../shared/methods/checkPathExists.js";
import { generatePath } from "../../shared/methods/generatePath.js";
import { StateComponent } from "../../core/components/state.component.js";

export class FsReadComponent extends FeatComponent {
    command = 'cat';

    injections = {
        stateComponent: StateComponent,
    }

    async exec(props) {
        if (!props[0]) {
            throw new Error('Empty path');
        } else {
            const path = generatePath(this.stateComponent.currentPath, props[0]);
            return checkPathExists(path).then((exists) => {
                if (exists) {
                   
                } else {
                    throw new Error('Invalid path');
                }
            });
        }
    }
}
