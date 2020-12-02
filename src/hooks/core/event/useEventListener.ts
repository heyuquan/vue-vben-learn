import type { Ref } from 'vue';

import { ref, watch, unref } from 'vue';
import { useDebounce } from '/@/hooks/core/useDebounce';
import { useThrottle } from '/@/hooks/core/useThrottle';

export type RemoveEventFn = () => void;

export interface UseEventParams {
  el?: Element | Ref<Element | undefined> | Window | any;
  name: string;
  listener: EventListener;
  options?: boolean | AddEventListenerOptions;
  autoRemove?: boolean;
  isDebounce?: boolean;
  wait?: number;
}

export function useEventListener({
  el = window,
  name,
  listener,
  options,
  autoRemove = true,
  isDebounce = true,
  wait = 80,
}: UseEventParams): { removeEvent: RemoveEventFn } {
  let remove: RemoveEventFn = () => {};
  const isAddRef = ref(false);

  if (el) {
    const element: Ref<Element> = ref(el as Element);
    const [handler] = isDebounce ? useDebounce(listener, wait) : useThrottle(listener, wait);
  }
}
