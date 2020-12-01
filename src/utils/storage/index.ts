import { getStorageShortName } from '/@/utils/helper/envHelper';
import { createStorage as create } from './storage';

const createOptions = (storage = sessionStorage) => {
  return {
    storage,
    prefixkey: getStorageShortName,
  };
};

export const WebStorage = create(createOptions());

export const createStorage = (storage: Storage = sessionStorage) => {
  return create(createOptions(storage))!;
};
export default WebStorage;
