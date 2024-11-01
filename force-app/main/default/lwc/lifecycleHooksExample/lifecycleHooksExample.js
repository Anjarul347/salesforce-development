import { LightningElement } from 'lwc';

export default class LifecycleHooksExample extends LightningElement {

    isVisible=true;

    constructor(){
        super();
        console.log("Call received from constructor");
    }

    connectedCallback(){
        console.log("call receive from connectedCallback");

    }

    renderedCallback(){
        console.log("Cal receive from renderedCallback");
        
        
    }

    errorCallback() {
        console.log("Call received from errorCallback");
        

        
    }


    handleClick(){

        if(this.isVisible==true){
            this.isVisible=false;
        }else{
            this.isVisible=true;
        }

    }

}