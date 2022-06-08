import os from "os";

export class State {
    osUser = os.userInfo();
    currentPath = this.osUser.homedir;
    currentUser = this.osUser.username;
}
