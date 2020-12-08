import type { MenuState } from './types';
import type { Menu as MenuType } from '/@/router/types';

import { computed, defineComponent, unref, reactive, watch, onMounted, ref, toRefs } from 'vue';
import { Menu } from 'ant-design-vue';
import SearchInput from './SearchInput.vue';
import MenuContent from './MenuContent';

import { MenuModeEnum, MenuTypeEnum } from '/@/enums/menuEnum';
import { ThemeEnum } from '/@/enums/appEnum';

import { menuStore } from '/@/store/modules/menu';
import { appStore } from '/@/store/modules/app';

import { useSearchInput } from './useSearchInput';
import { useOpenKeys } from './useOpenKeys';
import { useRouter } from 'vue-router';
