import type { ModalProps, ModalMethods } from './types';

import { defineComponent, computed, ref, watch, unref, watchEffect, toRef } from 'vue';

import Modal from './Modal';
import { Button } from '/@/components/Button';
import ModalWrapper from './ModalWrapper';
import { BasicTitle } from '/@/components/Basic';
import { FullscreenExitOutlined, FullscreenOutlined, CloseOutlined } from '@ant-design/icons-vue';

import { getSlot, extendSlots } from '/@/utils/helper/tsxHelper';
import { isFunction } from '/@/utils/is';
import { deepMerge } from '/@/utils';
import { tryTsxEmit } from '/@/utils/helper/vueHelper';

import { basicProps } from './props';
import { useFullScreen } from './useFullScreen';

export default defineComponent({
  name: 'BasicModal',
  props: basicProps,
  emits: ['visible-change', 'height-change', 'cancel', 'ok', 'register'],
});
