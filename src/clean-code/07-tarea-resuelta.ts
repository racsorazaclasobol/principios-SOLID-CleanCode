// Tarea resuelta, ver diferencias con el archivo 07-tarea-sin-resolver.ts
// Aplicar el principio de responsabilidad única
// Priorizar la composición frente a la herencia

(()=>{

    type HtmlType = 'input'|'select'|'textarea'|'radio';

    // interface HtmlElementProperties {
    //     id  : string;
    //     type: HtmlType;
    // }
   
    class HtmlElement {

        public id   : string;
        public type : HtmlType;

        constructor( id: string, type: HtmlType ) {
            this.id     = id;
            this.type   = type;
        }
    }

    interface InputAttributesProperties { 
        placeholder : string;
        value       : string;
    }

    class InputAttributes {
        
        public placeholder  : string;
        public value        : string;

        constructor( { value, placeholder }: InputAttributesProperties ) {
            
            this.placeholder = placeholder;
            this.value       = value;
        
        }
    }

    class InputEvents {

        constructor(){}

        setFocus() {};
        getValue() {};
        isActive() {};
        removeValue() {};

    }

    //? Idea para la nueva clase InputElement
    class InputElement {
        
        public html     : HtmlElement;
        public attribute: InputAttributes;
        public events   : InputEvents;

        constructor( value: string, placeholder: string, id: string ){
            
            this.html       = new HtmlElement( id, 'input' );
            this.attribute  = new InputAttributes({ value, placeholder });
            this.events     = new InputEvents();

        }

    }

    const nameField = new InputElement('Oscar', 'Enter first name', 'txtName');


    console.log({ nameField });

})()