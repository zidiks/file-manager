import { FeatModule } from "../featuresModuleClass.js";
import { checkPathExists } from "../../shared/methods/checkPathExists.js";
import fs from "fs/promises";

export class NavigationLs extends FeatModule {
    command = 'ls';

    async exec() {
        return checkPathExists(this.state.currentPath).then((exists) => {
            if (exists) {
                return fs.readdir(this.state.currentPath).then((fileNames) => {
                    fileNames.forEach((name, index) => console.log(`${index+1}    ${name}`));
                })
            } else {
                throw new Error();
            }
        });
    }
}
