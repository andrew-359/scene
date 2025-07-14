// Универсальный throttle
// Использование: const throttledFn = throttle(fn, delay)

export default function throttle<T extends (...args: any[]) => void>(fn: T, delay: number): T {
  let last = 0;
  let timeout: ReturnType<typeof setTimeout> | null = null;
  let lastArgs: any[];

  const throttled = function(this: any, ...args: any[]) {
    const now = Date.now();
    lastArgs = args;
    if (now - last >= delay) {
      last = now;
      fn.apply(this, args);
    } else if (!timeout) {
      timeout = setTimeout(() => {
        last = Date.now();
        timeout = null;
        fn.apply(this, lastArgs);
      }, delay - (now - last));
    }
  } as T;

  return throttled;
} 