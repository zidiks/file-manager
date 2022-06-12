import { CommonComponent } from "../../core/prototypes/component.proto.js";
import os from "os";

export class OsUsernameComponent extends CommonComponent {
    async exec() {
        return os.userInfo().username;
    }
}
