import Component, { ComponentProps } from '@/base/component';

export default class Spoiler extends Component {

    head?: HTMLElement;
    collapse?: HTMLElement;
    isOpen: boolean;
    
    constructor(element: ComponentProps) {
        super(element);
        
        this.head = this.getElement('head');
        this.collapse = this.getElement('collapse');
        this.isOpen = false;
        
        if(this.head)this.head.addEventListener('click', this.clickHandler);
    }
    
    clickHandler = () => {
        this.isOpen ? this.close() : this.open();
    }
    
    open = () => {
        this.nRoot.classList.add("is-open");
        if(this.collapse)this.collapse.style.height = `${this.collapse.scrollHeight}px`;
        this.isOpen = true;
    }

    close = () => {
        this.nRoot.classList.remove("is-open");
        if(this.collapse)this.collapse.style.height = '0px';
        this.isOpen = false;
    }





}
