import { FeatComponent } from "../../core/prototypes/component.proto.js";
import { checkPathExists } from "../../shared/methods/checkPathExists.js";
import { StateComponent } from "../../core/components/state.component.js";
import fs from "fs/promises";

export class FsCreateComponent extends FeatComponent {
    command = 'add';

    injections = {
        stateComponent: StateComponent,
    }

    async exec(props) {
        if (!props[0]) {
            throw new Error('Empty path');
        } else {
            const path = `${this.stateComponent.currentPath}/${props[0]}`;
            return checkPathExists(path).then((exists) => {
                if (!exists) {
                    return fs.writeFile(path, '')
                        .then((content) => console.log(`${props[0]} created.`))
                        .catch((err) => {
                            throw new Error(`Create file error: ${err}`);
                        });
                } else {
                    throw new Error('File already exists!');
                }
            });
        }
    }
}
