import { FeatComponent } from "../../core/prototypes/component.proto.js";
import { checkPathExists } from "../../shared/methods/checkPathExists.js";
import { generatePath } from "../../shared/methods/generatePath.js";
import { StateComponent } from "../../core/components/state.component.js";
import fs from "fs/promises";
import path from "path";

export class FsCopyComponent extends FeatComponent {
    command = 'cp';

    injections = {
        stateComponent: StateComponent,
    }

    async exec(props) {
        if (!props[0] || !props[1]) {
            throw new Error('Empty path or name');
        } else {
            const oldPath = generatePath(this.stateComponent.currentPath, props[0]);
            const newPath =  path.join(generatePath(this.stateComponent.currentPath, props[1]), path.basename(oldPath));
            return Promise.all([
                checkPathExists(oldPath),
                checkPathExists(newPath),
            ]).then((res) => {
                console.log(res);
                console.log(oldPath);
                console.log(newPath);
                if (res[0] && !res[1]) {
                    fs.copyFile(oldPath, newPath).then(() => console.log('Copying completed.'));
                } else {
                    throw new Error('Copy error');
                }
            });
        }
    }
}
