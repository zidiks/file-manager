import { CommonComponent } from "../prototypes/component.proto.js";
import { StateComponent } from "./state.component.js";

export class FeaturesComponent extends CommonComponent {

    injections = {
        stateComponent: StateComponent,
    };

    features = {};
    featuresKeys = [];

    init() {
        this.featuresKeys = Object.keys(this.features);
    }

}
