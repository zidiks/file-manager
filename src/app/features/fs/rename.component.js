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
            const oldPath = generatePath(this.stateComponent.currentPath, props[0]);
            const newPath =  generatePath(oldPath, `../${props[1]}`);
            return Promise.all([
                checkPathExists(oldPath),
                checkPathExists(newPath),
            ]).then((res) => {
                if (res[0] && !res[1]) {
                    fs.rename(oldPath, newPath).then(() => console.log(`Renamed to ${res[1]}`));
                } else {
                    throw new Error('Rename error');
                }
            });
        }
    }
}
