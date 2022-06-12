import { CommonComponent } from "../../core/prototypes/component.proto.js";
import os from "os";

export class OsCpusComponent extends CommonComponent {
    async exec() {
        let res = '';
        os.cpus().forEach((cpu) => {
            res += JSON.stringify(cpu) + '\n';
        })
        return res;
    }
}
