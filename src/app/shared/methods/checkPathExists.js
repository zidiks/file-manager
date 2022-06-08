import fs from "fs/promises";
import { constants } from "fs";

export function checkPathExists(file) {
    return fs.access(file, constants.F_OK)
        .then(() => true)
        .catch(() => false)
}
