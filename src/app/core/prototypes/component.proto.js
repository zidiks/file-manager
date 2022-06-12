export class Component {
    injections;
    initSate = false;

    init() {}

    componentInit() {
        this.initSate = true;
        this.init();
    }
}

export class CommonComponent extends Component {

}

export class FeatComponent extends Component {
    command;
}
