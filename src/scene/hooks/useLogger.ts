import throttle from "@/utils/throttle";

interface Logger {
  subscribe(value: unknown, delay?: number): void;
  tick(): void;
}

const useLogger = (): Logger => {
  const subscribers: { log: () => void }[] = [];

  const subscribe = (value: unknown, delay = 500): void => {
    //TODO расширяемо
    let logFn = () => console.log(value);
    if (delay > 0) {
      logFn = throttle(logFn, delay);
    }
    subscribers.push({ log: logFn });
  };

  const tick = (): void => {
    for (const { log } of subscribers) {
      log();
    }
  };

  return {
    subscribe,
    tick,
  };
};

export default useLogger;