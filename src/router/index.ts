import type { RouteRecordRaw } from 'vue-rourer';
import type { App } from 'vue';

import { createRouter, createWebHashHistory } from 'vue-router';

import { scrollWaiter } from './scrollWaiter';

import { createGuard } from './guard';

import { basicRoutes } from './routes';
