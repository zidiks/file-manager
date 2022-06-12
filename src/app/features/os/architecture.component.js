import { CommonComponent } from "../../core/prototypes/component.proto.js";
import os from "os";

export class OsArchitectureComponent extends CommonComponent {
    async exec() {
        return os.arch();
    }
}
