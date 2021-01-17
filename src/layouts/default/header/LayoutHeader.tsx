import './index.less';

import type { FunctionalComponent } from 'vue';
import type { Component } from '/@/components/types';

import {
  defineComponent,
  unref,
  computed,
  ref,
  nextTick,
  watchEffect,
  // nextTick
} from 'vue';

import { Layout, Tooltip, Badge } from 'ant-design-vue';
import { AppLogo } from '/@/components/Application';
import UserDropdown from './UserDropdown';
import LayoutMenu from '../menu';
import LayoutBreadcrumb from './LayoutBreadcrumb.vue';
import LockAction from '../lock/LockAction';
import LayoutTrigger from '../LayoutTrigger';
import NoticeAction from './notice/NoticeActionItem.vue';
import {
  RedoOutlined,
  FullscreenExitOutlined,
  FullscreenOutlined,
  LockOutlined,
  BugOutlined,
} from '@ant-design/icons-vue';
import { useModal } from '/@/components/Modal';

import { useFullscreen } from '/@/hooks/web/useFullScreen';
import { useTabs } from '/@/hooks/web/useTabs';
import { useWindowSizeFn } from '/@/hooks/event/useWindowSizeFn';
import { useHeaderSetting } from '/@/hooks/setting/useHeaderSetting';
import { useMenuSetting } from '/@/hooks/setting/useMenuSetting';
import { useRootSetting } from '/@/hooks/setting/useRootSetting';
import { useLocaleSetting } from '/@/hooks/setting/useLocaleSetting';

import { useRouter } from 'vue-router';

import { errorStore } from '/@/store/modules/error';

import { PageEnum } from '/@/enums/pageEnum';
import { MenuModeEnum, MenuSplitTyeEnum } from '/@/enums/menuEnum';
import { AppLocalePicker } from '/@/components/Application';
import { useI18n } from '/@/hooks/web/useI18n';
import { propTypes } from '/@/utils/propTypes';
import { useLayoutContext } from '../useLayoutContext';

interface TooltipItemProps {
  title: string;
}

const TooltipItem: FunctionalComponent<TooltipItemProps> = (props, { slots }) => {
  return (
    <Tooltip>
      {{
        title: () => props.title,
        default: () => slots.default?.(),
      }}
    </Tooltip>
  );
};

export default defineComponent({
  name: 'LayoutHeader',
  props: {
    fixed: propTypes.bool,
  },
  setup(props) {
    let logoEl: Element | null | undefined;

    const logoWidthRef = ref(200);
    const logoRef = ref<ComponentRef>(null);

    const injectValue = useLayoutContext();

    const { refreshPage } = useTabs();
    const { t } = useI18n();

    const { getShowTopMenu, getShowHeaderTrigger, getSplit, getIsHorizontal } = useMenuSetting();

    const { getShowLocale } = useLocaleSetting();
    const { getUseErrorHandle, getShowBreadCrumbIcon } = useRootSetting();

    const {
      getHeaderTheme,
      getShowRedo,
      getUseLockPage,
      getShowFullScreen,
      getShowNotice,
      getShowContent,
      getShowBread,
      getShowHeaderLogo,
    } = useHeaderSetting();

    const { push } = useRouter();
    const [register, { openModal }] = useModal();
    const { toggleFullscreen, isFullscreenRef } = useFullscreen();

    useWindowSizeFn(
      () => {
        calcTopMenuWidth();
      },
      100,
      { immediate: false }
    );

    const headerClass = computed(() => {
      const theme = unref(getHeaderTheme);
      return theme ? `layout-header__header--${theme}` : '';
    });

    const isPc = computed(() => {
      return !unref(injectValue.isMobile);
    });

    const getSplitType = computed(() => {
      return unref(getSplit) ? MenuSplitTyeEnum.TOP : MenuSplitTyeEnum.NONE;
    });

    const getMenuMode = computed(() => {
      return unref(getSplit) ? MenuModeEnum.HORIZONTAL : null;
    });

    watchEffect(() => {
      if (unref(getIsHorizontal)) {
        calcTopMenuWidth();
      }
    });

    function calcTopMenuWidth() {
      nextTick(() => {
        if (!unref(getShowTopMenu)) return;
        let width = 0;
        if (!logoEl) {
          logoEl = unref(logoRef)?.$el;
        }
        if (!logoEl) return;
        width += logoEl.clientWidth;
        logoWidthRef.value = width + 80;
      });
    }

    function handleToErrorList() {
      push(PageEnum.ERROR_LOG_PAGE).then(() => {
        errorStore.commitErrorListCountState(0);
      });
    }

    function handleLockPage() {
      openModal(true);
    }
  },
});
