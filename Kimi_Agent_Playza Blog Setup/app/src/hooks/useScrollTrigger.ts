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

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;
    
    const st = ScrollTrigger.create({
      trigger: options.trigger || element,
      start: options.start || 'top 80%',
      end: options.end || 'bottom 20%',
      scrub: options.scrub ?? false,
      pin: options.pin ?? false,
      markers: options.markers ?? false,
      onUpdate: options.onUpdate,
      onEnter: options.onEnter,
      onLeave: options.onLeave,
      onEnterBack: options.onEnterBack,
      onLeaveBack: options.onLeaveBack,
    });

    scrollTriggerRef.current = st;
    callback(element, st);

    return () => {
      st.kill();
    };
  }, []);

  return elementRef as RefObject<T>;
};

export default useScrollTrigger;
