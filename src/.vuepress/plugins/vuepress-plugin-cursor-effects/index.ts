import type { Plugin } from '@vuepress/core'
import { path } from '@vuepress/utils'

export interface CursorEffectsOptions {
  showIcon?: string
  showText?: string
  hideIcon?: string
  hideText?: string
  recoverTime?: number
}

export const effectsPlugin = (options: CursorEffectsOptions): Plugin => {
  return {
    name: 'vuepress-plugin-cursor-effects',
    
    clientConfigFile: path.resolve(__dirname, './client.ts'),

    define: {
      __CURSOR_OPTIONS__: options,
    },
  }
} 