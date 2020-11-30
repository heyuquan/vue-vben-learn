/**
 * Application configuration
 */

import type { ProjectConfig } from '/@/types/config';
import type { App } from 'vue';
import { computed, ref } from 'vue';

import { ThemeModeEnum } from '/@/enums/appEnum';
import { PROJ_CFG_KEY } from '/@/enums/cacheEnum';

// import projectSetting from '/@/settings/projectSetting';
// import { getLocal } from '/@/utils/helper/persistent';
// import { isUnDef, isNull } from '/@/utils/is';
// import {
//   updateGrayMode,
//   updateColorWeak,
//   updateHeaderBgColor,
//   updateSidebarBgColor,
// } from '/@/setup/theme';

// import { appStore } from '/@/store/modules/app';

// Used to share global app instances
let app: App;

export function setApp(_app: App): void {
  app = _app;
}

export function getApp(): App {
  return app;
}

export function useThemeMode(mode: ThemeModeEnum) {
  const modeRef = ref(mode);
  const html = document.documentElement;
  const clsList = html.classList;

  const change = () => {
    clsList.contains(mode) ? clsList.remove(mode) : clsList.add(mode);
  };

  return {
    runChangeThemeMode: change,
    mode: computed(() => modeRef.value),
  };
}
