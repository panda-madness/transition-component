import { r as registerInstance, h, H as Host, g as getElement } from './core-3a30336c.js';

const TransitionComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.name = 'fade';
        this.show = true;
        this.transitionClasses = {
            enter: null,
            enterActive: null,
            enterTo: null,
            leave: null,
            leaveActive: null,
            leaveTo: null,
        };
        this.hide = () => {
            this.$el.style.display = 'none';
        };
        this.display = () => {
            this.$el.style.removeProperty('display');
        };
        this.cleanup = () => {
            this.$el.classList.remove(this.transitionClasses.enterTo);
            this.$el.classList.remove(this.transitionClasses.enterActive);
            this.$el.classList.remove(this.transitionClasses.leaveTo);
            this.$el.classList.remove(this.transitionClasses.leaveActive);
            this.$el.removeEventListener('transitionend', this.cleanup);
            this.$el.removeEventListener('animationend', this.cleanup);
            if (this.show === false) {
                this.hide();
            }
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
        this.display();
        this.$el.classList.add(this.transitionClasses.enter);
        this.$el.classList.add(this.transitionClasses.enterActive);
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                this.$el.classList.remove(this.transitionClasses.enter);
                this.$el.classList.add(this.transitionClasses.enterTo);
            });
        });
        this.$el.addEventListener('transitionend', this.cleanup);
        this.$el.addEventListener('animationend', this.cleanup);
    }
    runLeaveSequence() {
        this.display();
        this.$el.classList.add(this.transitionClasses.leave);
        this.$el.classList.add(this.transitionClasses.leaveActive);
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                this.$el.classList.remove(this.transitionClasses.leave);
                this.$el.classList.add(this.transitionClasses.leaveTo);
            });
        });
        this.$el.addEventListener('transitionend', this.cleanup);
        this.$el.addEventListener('animationend', this.cleanup);
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
    get $el() { return getElement(this); }
    static get watchers() { return {
        "show": ["showHandler"],
        "name": ["nameHandler"]
    }; }
    static get style() { return "transition-component{display:block}"; }
};

export { TransitionComponent as transition_component };
