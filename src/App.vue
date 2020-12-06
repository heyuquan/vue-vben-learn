<template>
  <ConfigProvider v-bind="lockEvent" :locale="zhCN" :transform-cell-text="transformCellText"></ConfigProvider>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ConfigProvider } from "ant-design-vue";
import { createBreakpointListen } from "/@/hooks/event/useBreakpoint";

import zhCN from "ant-design-vue/es/locale/zh_cn";
import moment from "moment";
import "moment/dist/locale/zh-cn";

import { getConfigProvider, initAppConfigStore } from "/@/setup/App";
import { useLockPage } from "/@/hooks/web/useLockPage";

moment.locale("zh-cn");

export default defineComponent({
  name: "App",
  components: { ConfigProvider },
  setup() {
    // initialize vuex internal system configuration
    initAppConfigStore();

    // create a global breakpoint monitor
    createBreakpointListen();

    // get ConfigProvider configuration
    const { transformCellText } = getConfigProvider();

    // create a lock screen monitor
    const lockEvent = useLockPage();

    return {
      transformCellText,
      zhCN,
      lockEvent,
    };
  },
});
</script>
