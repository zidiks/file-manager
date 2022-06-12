import { FeatComponent } from "../../core/prototypes/component.proto.js";
import { checkPathExists } from "../../shared/methods/checkPathExists.js";
import { StateComponent } from "../../core/components/state.component.js";
import fs from "fs/promises";
import { generatePath } from "../../shared/methods/generatePath.js";

export class FsDeleteComponent extends FeatComponent {
    command = 'rm';

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
                    return fs.unlink(path);
                } else {
                    throw new Error('File not exists!');
                }
            });
        }
    }
}
