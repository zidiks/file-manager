import { checkPathExists } from "../../shared/methods/checkPathExists.js";
import { FeatComponent } from "../../core/prototypes/component.proto.js";

export class NavigationCdComponent extends FeatComponent {
    command = 'cd';

    async exec(props) {
        if (!props[0]) {
            throw new Error('Empty path');
        } else {
            const newPath = this.generatePath(this.state.currentPath, props[0]);
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

    generatePath(currentPath, path) {
        let newPath = currentPath.slice().split('/');
        const pathArr = path.split('/');
        if (pathArr[0] === '..' || pathArr[0] === '.') {
            pathArr.forEach(pathItem => {
                switch (pathItem) {
                    case '..':
                        if (newPath.length > 1) {
                            newPath.pop();
                        }
                        break;
                    case '.':
                        break;
                    default:
                        newPath.push(pathItem);
                        break;
                }
            });
            return newPath.join('/');
        } else {
            return path;
        }
    }
}
