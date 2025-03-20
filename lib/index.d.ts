export default class SVGAPlayer {
    constructor(props: any);
    state: {};
    load(source: any): void;
    startAnimation(): void;
    pauseAnimation(): void;
    stopAnimation(): void;
    stepToFrame(toFrame: any, andPlay: any): void;
    stepToPercentage(toPercentage: any, andPlay: any): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
