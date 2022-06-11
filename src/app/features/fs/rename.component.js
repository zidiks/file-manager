import { FeatComponent } from "../../core/prototypes/component.proto.js";
import { checkPathExists } from "../../shared/methods/checkPathExists.js";
import { generatePath } from "../../shared/methods/generatePath.js";
import { StateComponent } from "../../core/components/state.component.js";
import fs from "fs/promises";

export class FsRenameComponent extends FeatComponent {
    command = 'rn';

    injections = {
        stateComponent: StateComponent,
    }

    async exec(props) {
        if (!props[0] || !props[1]) {
            throw new Error('Empty path or name');
        } else {
            const path = generatePath(this.stateComponent.currentPath, props[0]);
            const newPath = generatePath(path, `../${props[1]}`);
            return checkPathExists(path).then((exists) => {
                if (exists) {
                    return fs.readFile(path, { encoding: 'utf8' })
                        .then((content) => console.log(content))
                        .catch((err) => {
                            throw new Error(`Read file error: ${err}`);
                        });
                } else {
                    throw new Error('Invalid path');
                }
            });
        }
    }
}
