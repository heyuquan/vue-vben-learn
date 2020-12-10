import type { PropType } from 'vue';
import type { DropMenu } from './types';

export const dropdownProps = {
  trigger: {
    type: [Array] as PropType<string[]>,
    default: () => {
      return ['contextmenu'];
    },
  },
};

export const basicDropdownProps = Object.assign({}, dropdownProps, {
  dropMenuList: {
    type: Array as PropType<DropMenu[]>,
    default: () => [],
  },
  selectedKeys: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
});
