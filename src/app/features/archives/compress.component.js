import { FeatComponent } from "../../core/prototypes/component.proto.js";
import { checkPathExists } from "../../shared/methods/checkPathExists.js";
import { generatePath } from "../../shared/methods/generatePath.js";
import { StateComponent } from "../../core/components/state.component.js";
import { createReadStream, createWriteStream } from "fs";
import { pipeline } from "stream/promises";
import { createGzip } from "zlib";

export class CompressComponent extends FeatComponent {
    command = 'compress';

    injections = {
        stateComponent: StateComponent,
    }

    async exec(props) {
        if (!props[0] || !props[1]) {
            throw new Error('Empty path or name');
        } else {
            const filePath = generatePath(this.stateComponent.currentPath, props[0]);
            const destPath =  generatePath(this.stateComponent.currentPath, props[1]);
            return Promise.all([
                checkPathExists(filePath),
                checkPathExists(destPath),
            ]).then((res) => {
                if (res[0] && !res[1]) {
                    const writeStream = createWriteStream(destPath);
                    const readStream = createReadStream(filePath);
                    const gzip = createGzip();

                    return pipeline(readStream, gzip, writeStream);
                } else {
                    throw new Error('Compress error');
                }
            });
        }
    }
}
