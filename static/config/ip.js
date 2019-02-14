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

  // 代账宝app下载路径
  window.SITE_CONFIG['khPath'] =
    'http://101.132.72.159:8080/filestp/appversion/exstar_dzb_kh_00018.apk' // 客户版APK

  window.SITE_CONFIG['ygPath'] =
    'http://101.132.72.159:8080/filestp/appversion/exstar_dzb_yg_00018.apk' // 员工+boss版APK

  // RSA 公私钥
  window.SITE_CONFIG['privateKey'] =
    'MIICdwIBADANBgkqhkiG9w0BAQEFAASCAmEwggJdAgEAAoGBAMxcIVh4YkytTQ3b7iaNJkAoUlCDU4DT3lOsTOv7OyrbiSP9OvHHEKkCwb/jdyU2/Cs8Ube0vgHnKcI+lXtCtCok1SLiIDQX3Bytxvdw7p2NJ2UBUy+B0JfaNBR9WK955qyg5/12ivlmaerxk2N8tF+Q1dKBqiepEVCfSe+sN78fAgMBAAECgYALyw1Jk7jof9/Aev6lTuP0M998MffxqUhdP8Y4oAjsEjs5znVGWpyFhFk1/6Ryi1fGDvcQSOfmKDbqtL3fnRvUcD338KpOdZk3uPm1aH+jDWXpKyNvSbbz26x9mdIfEqRKQi0P3DT3+d4M/eMDtAuUlnur2e6nYEe7mrNDnVCZ4QJBAP1tJ8UCKLhJ6TC0SpctkSZ10l56md+S0BzPH6cH+m9H5wzgVkFGejaQ8nUA63gM8NXce2d0soFAGtbG9V+E9VcCQQDOb2oUtQzecTb+zb3k63PCjNjTipPucWNh2ut5mZ2RxUsqNdCMQnQqKOvD6n4J2M19oVJkF1Cs9EflBINl/995AkEA1JtvotrF2J3BMWf/r8a9oBt2ambGkoczawfk0RdjZVpYHzhRhJ+gxghiMACeiu+oWHKJYOjJHJ/wJEFz9zevLwJAdy01Fc1MJ6M+t615go43n0qG5uFq8848LMMhDGuV3xECitTUmBTJUYmcSte2eeLTB0M5+JTJO4AvfVS0sw8cKQJBAIBQ1q0lo2g3qtLGHIYICqDWBINbYqd8DPBZor6IKJZEyHhSIiDbeabDrieMUpRmNmm7gEcPCg1k7fjl3O0hYSg='

  window.SITE_CONFIG['jsePublicKey'] =
    'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDA7lwPGPnPoz9zB7auO1TlCmhwR0YOO6/ZT376zwfCsD0yiefHk2178JPgR/khVZ2L2ouPHu8uOFt+Cr4zmekuzqIrd/ClMP3lZV21Qppn2kLrttPnnEuN7tTmOdCa85B6IbFJXX4OKzlVgltf/Ul78aAC  bk6V0ZOsnPx68LyBQwIDAQAB'
})()
