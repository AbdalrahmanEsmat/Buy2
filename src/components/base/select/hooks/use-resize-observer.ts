import type { RefObject } from "react";
import { useEffect } from "react";

interface UseResizeObserverOptions<T extends Element> {
    ref: RefObject<T | null>;
    box?: ResizeObserverBoxOptions;
    onResize: () => void;
}

export const useResizeObserver = <T extends Element>({ ref, box = "content-box", onResize }: UseResizeObserverOptions<T>) => {
    useEffect(() => {
        const element = ref.current;

        if (!element || typeof ResizeObserver === "undefined") {
            return;
        }

        const observer = new ResizeObserver(() => {
            onResize();
        });

        observer.observe(element, { box });
        onResize();

        return () => {
            observer.disconnect();
        };
    }, [box, onResize, ref]);
};
