import { CommonComponent } from "../../core/prototypes/component.proto.js";
import os from 'os';

export class OsEolComponent extends CommonComponent {
    async exec() {
        return JSON.stringify(os.EOL);
    }
}
