import type { Menu as MenuType } from '/@/router/types';
import type { MenuState } from './types';
import type { Ref } from 'vue';

import { isString } from '/@/utils/is';
import { unref } from 'vue';
import { es6Unique } from '/@/utils';
import { getAllParentPath } from '/@/utils/helper/menuHelper';

interface UseSearchInputOptions {
  menuState: MenuState;
  flatMenusRef: Ref<MenuType[]>;
  emit: EmitType;
  handleMenuChange: Fn;
}

export function useSearchInput({
  menuState,
  flatMenusRef,
  handleMenuChange,
  emit,
}: UseSearchInputOptions) {}
