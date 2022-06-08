import { checkPathExists } from "../../shared/methods/checkPathExists.js";
import fs from "fs/promises";
import { FeatComponent } from "../../core/prototypes/component.proto.js";
import { StateComponent } from "../../core/components/state.component.js";

export class NavigationLsComponent extends FeatComponent {
    command = 'ls';

    injections = {
        stateComponent: StateComponent,
    }

    async exec() {
        return checkPathExists(this.stateComponent.currentPath).then((exists) => {
            if (exists) {
                return fs.readdir(this.stateComponent.currentPath).then((fileNames) => {
                    fileNames.forEach((name, index) => console.log(`${index+1}    ${name}`));
                })
            } else {
                throw new Error();
            }
        });
    }
}
