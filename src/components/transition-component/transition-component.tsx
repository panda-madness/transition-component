import { Component, Prop, h, Element, Watch, Host } from '@stencil/core';

@Component({
  tag: 'transition-component',
  styleUrl: './transition-component.css',
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
    enter: null,
    enterActive: null,
    enterTo: null,
    leave: null,
    leaveActive: null,
    leaveTo: null,
  };

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
    this.display();
    this.$el.classList.add(this.transitionClasses.enter);
    this.$el.classList.add(this.transitionClasses.enterActive);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        this.$el.classList.remove(this.transitionClasses.enter);
        this.$el.classList.add(this.transitionClasses.enterTo);
      })
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
      })
    });

    this.$el.addEventListener('transitionend', this.cleanup);
    this.$el.addEventListener('animationend', this.cleanup);
  }

  hide = () => {
    this.$el.style.display = 'none';
  };

  display = () => {
    this.$el.style.removeProperty('display');
  };

  cleanup = () => {
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

  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
