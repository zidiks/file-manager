import { FeatComponent } from "../../core/prototypes/component.proto.js";
import { checkPathExists } from "../../shared/methods/checkPathExists.js";
import { StateComponent } from "../../core/components/state.component.js";
import fs from "fs/promises";
import { generatePath } from "../../shared/methods/generatePath.js";
import crypto from 'crypto';

export class HashComponent extends FeatComponent {
    command = 'hash';

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
                    return fs.readFile(path, { encoding: 'utf8' }).then((content) => {
                        return console.log(this.hash(content));
                    });
                } else {
                    throw new Error('File not exists');
                }
            });
        }
    }

    hash(data) {
        return crypto.createHash('sha256').update(data).digest('hex');
    }
}
