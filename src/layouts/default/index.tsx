import { defineComponent, unref, computed } from 'vue';
import { Layout, BackTop } from 'ant-design-vue';
//import LayoutHeader from './header/LayoutHeader';

//import {appStore} from '/@/store/modules/app';
//import LayoutContent from './LayoutContent';
//import LayoutSideBar from './LayoutSideBar';
//import SettingBtn from './setting/index.vue';
//import MultipleTabs from './multitabs/index';

import { MenuModeEnum, MenuTypeEnum } from '/@/enums/menuEnum';
//import { useFullContent } from '/@/hooks/web/useFullContent';

//import LockPage from '/@/views/sys/lock/index.vue';
import { registerGlobalComp } from '/@/components/registerGlobComp';

import './index.less';
export default defineComponent({
  name: 'DefaultLayout',
  setup() {},
});
