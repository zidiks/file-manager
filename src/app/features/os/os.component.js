import { FeatComponent } from "../../core/prototypes/component.proto.js";
import { OsHomedirComponent } from "./homedir.component.js";
import { OsUsernameComponent } from "./username.component.js";
import { OsEolComponent } from "./eol.component.js";
import { OsCpusComponent } from "./cpus.component.js";
import { OsArchitectureComponent } from "./architecture.component.js";

export class OsComponent extends FeatComponent {
    command = 'os';

    injections = {
        homedir: OsHomedirComponent,
        username: OsUsernameComponent,
        eol: OsEolComponent,
        cpus: OsCpusComponent,
        architecture: OsArchitectureComponent,
    }

    async exec(props) {
        if (!props[0]) {
            throw new Error('Empty props');
        } else {
            let target;
            switch (props[0]) {
                case '--EOL':
                    target = this.eol;
                    break;
                case '--cpus':
                    target = this.cpus;
                    break;
                case '--homedir':
                    target = this.homedir;
                    break;
                case '--username':
                    target = this.username;
                    break;
                case '--architecture':
                    target = this.architecture;
                    break;
            }
            if (target) {
                target.exec()
                    .then((res) => console.log(res))
                    .catch((err) => console.log(`OS Error: ${err}`));
            }
        }
    }
}
