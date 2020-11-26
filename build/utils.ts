import fs from 'fs';
import path from 'path';
import { networkInterfaces } from 'os';
import dotenv from 'dotenv';
import chalk from 'chalk';

export const isFunction = (arg: unknown): arg is (...args: any[]) => any =>
  typeof arg === 'function';

export const isRegExp = (arg: unknown): arg is RegExp =>
  Object.prototype.toString.call(arg) === '[object RegExp]';

/*
 * Read all files in the specified folder, filter through regular rules, and return file path array
 * @param root Specify the folder path
 * [@param] reg Regular expression for filtering files, optional parameters
 * Note: It can also be deformed to check whether the file path conforms to regular rules. The path can be a folder or a file. The path that does not exist is also fault-tolerant.
 */
export function readAllFile(root: string, reg: RegExp) {
  let resultArr: string[] = [];
  try {
    if (fs.existsSync(root)) {
      const stat = fs.lstatSync(root);
      if (stat.isDirectory()) {
        const files = fs.readdirSync(root);
        files.forEach(function (file) {
          const t = readAllFile(root + '/' + file, reg);
          resultArr = resultArr.concat(t);
        });
      } else {
        if (reg !== undefined) {
          if (isFunction(reg.test) && reg.test(root)) {
            resultArr.push(root);
          } else {
            resultArr.push(root);
          }
        }
      }
    }
  } catch (error) {}

  return resultArr;
}

/*
 * get client ip address
 */
export function getIPAddress() {
  let interfaces = networkInterfaces();
  for (let devName in interfaces) {
    let iFace = interfaces[devName];
    if (!iFace) return;
    for (let i = 0; i < iFace.length; i++) {
      let alias = iFace[i];
      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
        return alias.address;
      }
    }
  }

  return '';
}

export function isDevFn(): boolean {
  return process.env.NODE_ENV === 'development';
}

export function isProdFn(): boolean {
  return process.env.NODE_ENV === 'production';
}

/**
 * Whether to generate package preview
 */
export function isReportMode(): boolean {
  return process.env.REPORT === 'true';
}

/**
 * Whether to generate gzip for packaging
 */
export function isBuildGzip(): boolean {
  return process.env.VITE_BUILD_GZIP === 'true';
}

/**
 *  Whether to generate package site
 */
export function isSiteMode(): boolean {
  return process.env.SITE === 'true';
}

export interface ViteEnv {
  VITE_PORT: number;
  VITE_USE_MOCK: boolean;
  VITE_USE_PWA: boolean;
  VITE_PUBLIC_PATH: string;
  VITE_PROXY: [string, string][];
  VITE_GLOB_APP_TITLE: string;
  VITE_USE_CDN: boolean;
  VITE_DROP_CONSOLE: boolean;
  VITE_BUILD_GZIP: boolean;
}
