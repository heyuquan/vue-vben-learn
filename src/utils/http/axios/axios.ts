import type { AxiosRequestConfig, AxiosInstance, AxiosResponse } from 'axios';

import axios from 'axios';
import { AxiosCanceler } from './axiosCancel';
import { isFunction } from '/@/utils/is';
import { cloneDeep } from 'lodash-es';

import type { RequestOptions, CreateAxiosOptions, Result, UploadFileParams } from './types';
import { errorResult } from './const';
import { ContentTypeEnum } from '/@/enums/httpEnum';

export * from './axiosTransform';
