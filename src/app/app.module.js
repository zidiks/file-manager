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
    ];

    bootstrap = [
        AppComponent,
    ];
}
