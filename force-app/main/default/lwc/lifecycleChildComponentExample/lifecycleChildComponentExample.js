import { LightningElement } from 'lwc';

export default class LifecycleChildComponentExample extends LightningElement {

    constructor() {
        super();
        console.log("Call received from child component constructor ");
        
    }

    connectedCallback() {
        console.log("Call received from child component ConnectCallback ");
        
    }

    renderedCallback(){
        console.log("Call received from child component RenderCallback");
        
    }

    disconnectedCallback() {
        console.log("Call received from child component disconnectedcallback");
        
    }
}