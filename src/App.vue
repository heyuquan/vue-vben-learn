

<script lang="ts">
  import {defineComponent} from 'vue';
  import {ConfigProvider} from 'ant-design-vue';
  // import { createBreakpointListen } from '/@/hooks/event/useBreakpoint';

  import zhCN from 'ant-design-vue/es/locale/zh_cn';
  import moment from 'moment';
  import 'moment/dist/locale/zh-cn';

  import { getConfigProvider, initAppConfigStore } from '/@/setup/App';
  import { useLockPage } from '/@/hooks/web/useLockPage';

  moment.locale('zh-cn');

  export default defineComponent({
    name:'App',
    components:{ConfigProvider},
    setup(){

      return{
        zhCN
      }
    }
  });
</script>
