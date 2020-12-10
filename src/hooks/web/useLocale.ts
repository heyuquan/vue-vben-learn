/**
 * Multi-language related operations
 */
import type { LocaleType } from '/@/locales/types';

import { unref, ref } from 'vue';

import { getI18n } from '/@/setup/i18n';

import { useLocaleSetting } from '/@/hooks/setting/useLocaleSetting';

import moment from 'moment';

import 'moment/dist/locale/zh-cn';

moment.locale('zh-cn');
