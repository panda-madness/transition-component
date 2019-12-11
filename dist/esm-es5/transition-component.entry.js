import { r as registerInstance, h, H as Host, g as getElement } from './core-3a30336c.js';
var TransitionComponent = /** @class */ (function () {
    function TransitionComponent(hostRef) {
        var _this = this;
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
        this.hide = function () {
            _this.$el.style.display = 'none';
        };
        this.display = function () {
            _this.$el.style.removeProperty('display');
        };
        this.cleanup = function () {
            _this.$el.classList.remove(_this.transitionClasses.enterTo);
            _this.$el.classList.remove(_this.transitionClasses.enterActive);
            _this.$el.classList.remove(_this.transitionClasses.leaveTo);
            _this.$el.classList.remove(_this.transitionClasses.leaveActive);
            _this.$el.removeEventListener('transitionend', _this.cleanup);
            _this.$el.removeEventListener('animationend', _this.cleanup);
            if (_this.show === false) {
                _this.hide();
            }
        };
    }
    TransitionComponent.prototype.showHandler = function (val) {
        if (val === true) {
            this.runEnterSequence();
            return;
        }
        this.runLeaveSequence();
    };
    TransitionComponent.prototype.nameHandler = function (val) {
        this.updateTransitionClasses(val);
    };
    TransitionComponent.prototype.componentWillLoad = function () {
        if (this.show === false) {
            this.$el.style.display = 'none';
        }
        this.updateTransitionClasses(this.name);
    };
    TransitionComponent.prototype.updateTransitionClasses = function (name) {
        this.transitionClasses = {
            enter: name + "-enter",
            enterActive: name + "-enter-active",
            enterTo: name + "-enter-to",
            leave: name + "-leave",
            leaveActive: name + "-leave-active",
            leaveTo: name + "-leave-to",
        };
    };
    TransitionComponent.prototype.runEnterSequence = function () {
        var _this = this;
        this.display();
        this.$el.classList.add(this.transitionClasses.enter);
        this.$el.classList.add(this.transitionClasses.enterActive);
        requestAnimationFrame(function () {
            requestAnimationFrame(function () {
                _this.$el.classList.remove(_this.transitionClasses.enter);
                _this.$el.classList.add(_this.transitionClasses.enterTo);
            });
        });
        this.$el.addEventListener('transitionend', this.cleanup);
        this.$el.addEventListener('animationend', this.cleanup);
    };
    TransitionComponent.prototype.runLeaveSequence = function () {
        var _this = this;
        this.display();
        this.$el.classList.add(this.transitionClasses.leave);
        this.$el.classList.add(this.transitionClasses.leaveActive);
        requestAnimationFrame(function () {
            requestAnimationFrame(function () {
                _this.$el.classList.remove(_this.transitionClasses.leave);
                _this.$el.classList.add(_this.transitionClasses.leaveTo);
            });
        });
        this.$el.addEventListener('transitionend', this.cleanup);
        this.$el.addEventListener('animationend', this.cleanup);
    };
    TransitionComponent.prototype.render = function () {
        return (h(Host, null, h("slot", null)));
    };
    Object.defineProperty(TransitionComponent.prototype, "$el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TransitionComponent, "watchers", {
        get: function () {
            return {
                "show": ["showHandler"],
                "name": ["nameHandler"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TransitionComponent, "style", {
        get: function () { return "transition-component{display:block}"; },
        enumerable: true,
        configurable: true
    });
    return TransitionComponent;
}());
export { TransitionComponent as transition_component };
