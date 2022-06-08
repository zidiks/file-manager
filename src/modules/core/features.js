import { featuresList } from "../features/featuresList.js";

export class Features {

    features = {};

    featuresKeys = [];

    constructor(state) {
        featuresList.forEach(feature => {
            const example = new feature(state);
            this.features[example.command] = example;
        });
        this.featuresKeys = Object.keys(this.features);
    }

}
