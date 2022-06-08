import { checkPathExists } from "../../shared/methods/checkPathExists.js";
import { FeatComponent } from "../../core/prototypes/component.proto.js";

export class NavigationUpComponent extends FeatComponent {
    command = 'up';

    async exec(props) {
        const newPath = this.state.currentPath.slice().split('/').slice(0, -1).join('/');
        return checkPathExists(newPath).then((exists) => {
            if (exists) {
                this.state.currentPath = newPath;
                console.log(`You are currently in ${this.state.currentPath}`);
            } else {
                throw new Error('Invalid path');
            }
        });
    }
}
