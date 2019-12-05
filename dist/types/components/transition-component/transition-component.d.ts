export declare class TransitionComponent {
    $el: HTMLElement;
    name: string;
    show: boolean;
    showHandler(val: boolean): void;
    nameHandler(val: string): void;
    private transitionClasses;
    componentWillLoad(): void;
    updateTransitionClasses(name: string): void;
    runEnterSequence(): void;
    runLeaveSequence(): void;
    enterEndHandler: () => void;
    leaveEndHandler: () => void;
    render(): any;
}
