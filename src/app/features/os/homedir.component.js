import { CommonComponent } from "../../core/prototypes/component.proto.js";
import os from "os";

export class OsHomedirComponent extends CommonComponent {
    async exec() {
        return JSON.stringify(os.homedir());
    }
}
