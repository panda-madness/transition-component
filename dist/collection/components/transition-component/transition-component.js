import { h, Host } from "@stencil/core";
export class TransitionComponent {
    constructor() {
        this.name = 'fade';
        this.show = true;
        this.transitionClasses = {
            enter: 'enter',
            enterActive: 'enter-active',
            enterTo: 'enter-to',
            leave: 'leave',
            leaveActive: 'leave-active',
            leaveTo: 'leave-to',
        };
        this.enterEndHandler = () => {
            this.$el.classList.remove(this.transitionClasses.enterTo);
            this.$el.classList.remove(this.transitionClasses.enterActive);
            this.$el.removeEventListener('transitionend', this.enterEndHandler);
        };
        this.leaveEndHandler = () => {
            this.$el.classList.remove(this.transitionClasses.leaveTo);
            this.$el.classList.remove(this.transitionClasses.leaveActive);
            this.$el.style.display = 'none';
            this.$el.removeEventListener('transitionend', this.leaveEndHandler);
        };
    }
    showHandler(val) {
        if (val === true) {
            this.runEnterSequence();
            return;
        }
        this.runLeaveSequence();
    }
    nameHandler(val) {
        this.updateTransitionClasses(val);
    }
    componentWillLoad() {
        if (this.show === false) {
            this.$el.style.display = 'none';
        }
        this.updateTransitionClasses(this.name);
    }
    updateTransitionClasses(name) {
        this.transitionClasses = {
            enter: `${name}-enter`,
            enterActive: `${name}-enter-active`,
            enterTo: `${name}-enter-to`,
            leave: `${name}-leave`,
            leaveActive: `${name}-leave-active`,
            leaveTo: `${name}-leave-to`,
        };
    }
    runEnterSequence() {
        this.$el.style.removeProperty('display');
        this.$el.classList.add(this.transitionClasses.enter);
        this.$el.classList.add(this.transitionClasses.enterActive);
        // console.log(getComputedStyle(this.$el).getPropertyValue('animation-name'));
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                this.$el.classList.remove(this.transitionClasses.enter);
                this.$el.classList.add(this.transitionClasses.enterTo);
            });
        });
        this.$el.addEventListener('transitionend', this.enterEndHandler);
    }
    runLeaveSequence() {
        this.$el.style.removeProperty('display');
        this.$el.classList.add(this.transitionClasses.leave);
        this.$el.classList.add(this.transitionClasses.leaveActive);
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                this.$el.classList.remove(this.transitionClasses.leave);
                this.$el.classList.add(this.transitionClasses.leaveTo);
            });
        });
        this.$el.addEventListener('transitionend', this.leaveEndHandler);
    }
    render() {
        return (h(Host, null,
            h("slot", null)));
    }
    static get is() { return "transition-component"; }
    static get properties() { return {
        "name": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "name",
            "reflect": false,
            "defaultValue": "'fade'"
        },
        "show": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "show",
            "reflect": false,
            "defaultValue": "true"
        }
    }; }
    static get elementRef() { return "$el"; }
    static get watchers() { return [{
            "propName": "show",
            "methodName": "showHandler"
        }, {
            "propName": "name",
            "methodName": "nameHandler"
        }]; }
}
