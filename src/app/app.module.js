import { Module } from "./core/prototypes/module.proto.js";
import { NavigationCdComponent } from "./features/navigation/cd.component.js";
import { NavigationLsComponent } from "./features/navigation/ls.component..js";
import { NavigationUpComponent } from "./features/navigation/up.component.js";
import { CommandsComponent } from "./core/components/commands.component.js";
import { SpinnerComponent } from "./core/components/spinner.component.js";
import { StateComponent } from "./core/components/state.component.js";
import { UserComponent } from "./core/components/user.component.js";
import { FeaturesComponent } from "./core/components/features.component.js";
import { AppComponent } from "./app.component.js";
import { FsReadComponent } from "./features/fs/read.component.js";
import { FsCreateComponent } from "./features/fs/create.component.js";
import { FsRenameComponent } from "./features/fs/rename.component.js";
import { FsCopyComponent } from "./features/fs/copy.component.js";
import { FsMoveComponent } from "./features/fs/move.component.js";
import { FsDeleteComponent } from "./features/fs/delete.component.js";
import { OsComponent} from "./features/os/os.component.js";
import { OsUsernameComponent } from "./features/os/username.component.js";
import { OsHomedirComponent } from "./features/os/homedir.component.js";
import { OsEolComponent } from "./features/os/eol.component.js";
import { OsCpusComponent } from "./features/os/cpus.component.js";
import { OsArchitectureComponent } from "./features/os/architecture.component.js";
import { HashComponent } from "./features/hash/hash.component.js";
import { CompressComponent } from "./features/archives/compress.component.js";
import { DecompressComponent } from "./features/archives/decompress.component.js";

export class AppModule extends Module {
    components = [
        NavigationCdComponent,
        NavigationLsComponent,
        NavigationUpComponent,
        CommandsComponent,
        SpinnerComponent,
        FeaturesComponent,
        StateComponent,
        UserComponent,
        AppComponent,
        FsReadComponent,
        FsCreateComponent,
        FsRenameComponent,
        FsCopyComponent,
        FsMoveComponent,
        FsDeleteComponent,
        OsComponent,
        OsUsernameComponent,
        OsHomedirComponent,
        OsEolComponent,
        OsCpusComponent,
        OsArchitectureComponent,
        HashComponent,
        CompressComponent,
        DecompressComponent,
    ];

    bootstrap = [
        AppComponent,
    ];
}
