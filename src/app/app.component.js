import { CommonComponent } from "./core/prototypes/component.proto.js";
import { CommandsComponent } from "./core/components/commands.component.js";
import { FeaturesComponent } from "./core/components/features.component.js";
import { StateComponent } from "./core/components/state.component.js";
import { UserComponent } from "./core/components/user.component.js";
import { SpinnerComponent } from "./core/components/spinner.component.js";

export class AppComponent extends CommonComponent {

    injections = {
        stateComponent: StateComponent,
        featuresComponent: FeaturesComponent,
        commandsComponent: CommandsComponent,
        userComponent: UserComponent,
        spinnerComponent: SpinnerComponent,
    }

    init() {
        this.userComponent.initUserName();
        this.commandsComponent.listen();
        console.log(`You are currently in ${this.stateComponent.currentPath}`);
        this.commandsComponent.subscribe((command, props) => {
            this.spinnerComponent.showSpinner();
            this.featuresComponent.features[command]
                .exec(props)
                .then(() => this.spinnerComponent.hideSpinner())
                .catch((e) => {
                    this.spinnerComponent.hideSpinner();
                    console.log('Operation failed: ', e);
                });
        });
    }

}
