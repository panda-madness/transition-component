import { Component, Prop, h, Element, Watch, Host } from '@stencil/core';

@Component({
  tag: 'transition-component'
})
export class TransitionComponent {
  @Element() $el: HTMLElement;

  @Prop() name: string = 'fade';

  @Prop() show: boolean = true;

  @Watch('show')
  showHandler(val: boolean) {
    if (val === true) {
      this.runEnterSequence();
      return;
    }

    this.runLeaveSequence();
  }

  @Watch('name')
  nameHandler(val: string) {
    this.updateTransitionClasses(val);
  }

  private transitionClasses = {
    enter: 'enter',
    enterActive: 'enter-active',
    enterTo: 'enter-to',
    leave: 'leave',
    leaveActive: 'leave-active',
    leaveTo: 'leave-to',
  }

  componentWillLoad() {
    if (this.show === false) {
      this.$el.style.display = 'none';
    }

    this.updateTransitionClasses(this.name);
  }

  updateTransitionClasses(name: string) {
      this.transitionClasses = {
        enter: `${name}-enter`,
        enterActive: `${name}-enter-active`,
        enterTo: `${name}-enter-to`,
        leave: `${name}-leave`,
        leaveActive: `${name}-leave-active`,
        leaveTo: `${name}-leave-to`,
      }
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
      })
    });

    this.$el.addEventListener('transitionend', this.enterEndHandler)
  }

  runLeaveSequence() {
    this.$el.style.removeProperty('display');
    this.$el.classList.add(this.transitionClasses.leave);
    this.$el.classList.add(this.transitionClasses.leaveActive);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        this.$el.classList.remove(this.transitionClasses.leave);
        this.$el.classList.add(this.transitionClasses.leaveTo);
      })
    });

    this.$el.addEventListener('transitionend', this.leaveEndHandler)
  }

  enterEndHandler = () => {
    this.$el.classList.remove(this.transitionClasses.enterTo);
    this.$el.classList.remove(this.transitionClasses.enterActive);
    this.$el.removeEventListener('transitionend', this.enterEndHandler);
  }

  leaveEndHandler = () => {
    this.$el.classList.remove(this.transitionClasses.leaveTo);
    this.$el.classList.remove(this.transitionClasses.leaveActive);
    this.$el.style.display = 'none';
    this.$el.removeEventListener('transitionend', this.leaveEndHandler);
  }

  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
