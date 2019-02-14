/**
 * 配置服务器地址
 * IP_DEV 本地服务器地址
 * IP_PRO 打包后服务器地址 http://106.15.91.40:8000
 */

;(function() {
  window.SITE_CONFIG = {}

  // api接口请求地址
  window.SITE_CONFIG['devUrl'] = '/proxyApi' // 开发环境

  window.SITE_CONFIG['proUrl'] = 'localhost:3000' // 测试环境

})()
