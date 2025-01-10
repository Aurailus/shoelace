interface SnapFunctionOpts {
    pos: number;
    size: number;
    snapThreshold: number;
    isRtl: boolean;
    vertical: boolean;
    pixelsToPercent: (px: number) => number;
    percentToPixels: (percent: number) => number;
}
export type SnapFunction = (opt: SnapFunctionOpts) => number | null;
export declare const SNAP_NONE: () => null;
export declare function toSnapFunction(snap: string): SnapFunction;
export {};
