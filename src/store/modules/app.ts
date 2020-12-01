import type { ProjectConfig } from '/@/types/config';

import { VuexModule, getModule, Module, Mutation, Action } from 'vuex-module-decorators';
import store from '/@/store';

import { PROJ_CFG_KEY, LOCK_INFO_KEY } from '/@/enums/cacheEnum';

import { hotModuleUnregisterModule } from '/@/utils/helper/vuexHelper';
import { setLocal, getLocal, removeLocal } from '/@/utils/helper/persistent';
import { deepMerge } from '/@/utils';

//import { userStore } from './user';
