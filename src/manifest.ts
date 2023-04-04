import { defineManifest } from '@crxjs/vite-plugin'

export default defineManifest({
  name: 'Twitter Shortcuts',
  version: '1.0',
  description: 'Adds keyboard shortcuts to like and retweet tweets on Twitter',
  manifest_version: 3,
  permissions: ['activeTab', 'tabs', 'storage', 'scripting'],
  host_permissions: ['https://twitter.com/**'],
  background: {
    service_worker: 'src/background/index.ts',
    type: 'module',
  },
  icons: { '16': 'img/logo.png', '32': 'img/logo.png', '48': 'img/logo.png', '128': 'img/logo.png' },
  content_scripts: [
    {
      matches: ['http://*/*', 'https://*/*'],
      js: ['src/content/index.ts'],
    },
  ],

  commands: {
    // 'like-tweet': {
    //   suggested_key: {
    //     default: 'Ctrl+Shift+X',
    //     mac: 'Command+Shift+X',
    //   },
    //   description: 'Like the current tweet',
    // },
    // 'retweet-tweet': {
    //   suggested_key: {
    //     default: 'Ctrl+Shift+I',
    //     mac: 'Command+Shift+I',
    //   },
    //   description: 'Retweet the current tweet',
    // },
    'like-retweet-tweet': {
      suggested_key: {
        default: 'Ctrl+Shift+Y',
        mac: 'Command+Shift+Y',
      },
      description: 'Like and Retweet the current tweet',
    },
    'unlike-unretweet-tweet': {
      suggested_key: {
        default: 'Ctrl+Shift+U',
        mac: 'Command+Shift+U',
      },
      description: 'Unlike and unRetweet the current tweet',
    },
  },
})
