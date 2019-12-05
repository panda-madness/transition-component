import { r as registerInstance, h, H as Host, g as getElement } from './core-e117382b.js';

const TransitionComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Host, null, h("slot", null)));
    }
    get $el() { return getElement(this); }
    static get watchers() { return {
        "show": ["showHandler"],
        "name": ["nameHandler"]
    }; }
};

export { TransitionComponent as transition_component };
