import { defineClientConfig } from '@vuepress/client'

declare const __CURSOR_OPTIONS__: {
  showIcon?: string
  showText?: string
  hideIcon?: string
  hideText?: string
  recoverTime?: number
}

const defaultOptions = {
  showIcon: '/favicon.ico',
  showText: '(/≧▽≦/)咦！又好了！',
  hideIcon: '/favicon.ico',
  hideText: '(●—●)喔哟，崩溃啦！',
  recoverTime: 2000,
}

export default defineClientConfig({
  enhance({ app }) {
    if (typeof window !== 'undefined') {
      const options = {
        ...defaultOptions,
        ...__CURSOR_OPTIONS__,
      }

      // 修改网页标题
      let documentTitle = document.title

      // 监听页面可见性变化
      document.addEventListener('visibilitychange', function() {
        const favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement
        if (document.hidden) {
          document.title = options.hideText
          if (favicon) {
            favicon.href = options.hideIcon
          }
        } else {
          document.title = options.showText
          if (favicon) {
            favicon.href = options.showIcon
          }
          setTimeout(function() {
            document.title = documentTitle
          }, options.recoverTime)
        }
      })

      // 页面切换时保存新标题
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.target === document.querySelector('title')) {
            documentTitle = document.title
          }
        })
      })

      observer.observe(document.querySelector('title')!, {
        childList: true
      })
    }
  },
}) 