<!--
 * @Author: Vben
 * @Description: Multi-language switching component
-->

<script lang="ts">
import { defineComponent, ref, watchEffect, unref, computed } from "vue";
import { Dropdown, DropMenu } from "/@/components/Dropdown";
import { GlobalOutlined } from "@ant-design/icons-vue";

import { useLocale } from "/@/hooks/web/useLocale";
import { useLocaleSetting } from "/@/hooks/setting/useLocaleSetting";
</script>
