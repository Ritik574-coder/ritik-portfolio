import { useEffect, useRef } from 'react';
import type { RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollTriggerOptions {
  trigger?: string | Element;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  pin?: boolean;
  markers?: boolean;
  onUpdate?: (self: ScrollTrigger) => void;
  onEnter?: () => void;
  onLeave?: () => void;
  onEnterBack?: () => void;
  onLeaveBack?: () => void;
}

export const useScrollTrigger = <T extends HTMLElement>(
  callback: (element: T, scrollTrigger: ScrollTrigger) => void,
  options: ScrollTriggerOptions = {}
): RefObject<T> => {
  const elementRef = useRef<T>(null);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);
  const {
    trigger,
    start = 'top 80%',
    end = 'bottom 20%',
    scrub = false,
    pin = false,
    markers = false,
    onUpdate,
    onEnter,
    onLeave,
    onEnterBack,
    onLeaveBack,
  } = options;

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;

    const st = ScrollTrigger.create({
      trigger: trigger || element,
      start,
      end,
      scrub,
      pin,
      markers,
      onUpdate,
      onEnter,
      onLeave,
      onEnterBack,
      onLeaveBack,
    });

    scrollTriggerRef.current = st;
    callback(element, st);

    return () => {
      st.kill();
    };
  }, [
    callback,
    end,
    markers,
    onEnter,
    onEnterBack,
    onLeave,
    onLeaveBack,
    onUpdate,
    pin,
    scrub,
    start,
    trigger,
  ]);

  return elementRef as RefObject<T>;
};

export default useScrollTrigger;
