import os from "os";
import { CommonComponent } from "../prototypes/component.proto.js";

export class StateComponent extends CommonComponent {
    osUser = os.userInfo();
    currentPath = this.osUser.homedir;
    currentUser = this.osUser.username;
}
