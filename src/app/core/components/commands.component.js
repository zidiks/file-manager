import { CommonComponent } from "../prototypes/component.proto.js";
import { FeaturesComponent } from "./features.component.js";
import {featuresList} from "../../features/featuresList.js";

export class CommandsComponent extends CommonComponent{

    injections = {
        featuresComponent: FeaturesComponent,
    }

    listen() {
        process.stdin.on('data', chunkData => {
            const chunk = chunkData.toString().trim().split(' ');
            const command = chunk.shift();
            switch (command) {
                case '.exit':
                    process.exit();
                    break;
                default:
                    if (this.featuresComponent.featuresKeys.includes(command)) {
                        if (this.cb) {
                            this.cb(command, chunk);
                        }
                    } else {
                        console.log('Invalid input');
                    }
                    break;
            }
        });
    }

    subscribe(cb) {
        this.cb = cb;
    }

}
