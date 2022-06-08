import { CommonComponent, FeatComponent } from "./component.proto.js";
import {FeaturesComponent} from "../components/features.component.js";

export class Module {
    components;
    bootstrap;

    commonComponents = {};
    featComponents = {};

    init() {
        this.components.forEach(component => {
            if (component.prototype instanceof CommonComponent) {
                this.commonComponents[component.name] = new component();
            } else if (component.prototype instanceof FeatComponent) {
                this.featComponents[component.name] = new component();
            } else {
                throw new Error(`Imported invalid component: ${component.name}!`);
            }
        });
        const allComponents = {
            ...this.commonComponents,
            ...this.featComponents
        };
        const  featureComponent = Object.values(this.commonComponents)
            .find(component => component instanceof FeaturesComponent);
        if (featureComponent) {
            featureComponent.features = Object.values(this.featComponents)
                .reduce((prev, curr) => {
                    prev[curr.command] = curr;
                    return prev;
                }, {});
        }
        Object.entries(allComponents).forEach(([key, component]) => {
            if (component.injections) {
                Object.entries(component.injections).forEach(([key, injection]) => {
                    const injectionInstance = allComponents[injection.name];
                    if (!injectionInstance) {
                        throw new Error('Undefined injection!');
                    }
                    component[key] = injectionInstance;
                    if (!injectionInstance.initSate) {
                        injectionInstance.componentInit();
                    }
                });
            }
        });
        this.bootstrap.forEach(component => {
            const componentInstance = allComponents[component.name];
            if (!componentInstance) {
                throw new Error('Undefined injection!');
            }
            if (!componentInstance.initSate) {
                componentInstance.componentInit();
            }
        });
    }
}
