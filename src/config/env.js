/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 */

let baseUrl = "";

if (process.env.NODE_ENV == "development") {
  // 本地环境 npm run dev
  baseUrl = window.SITE_CONFIG["devUrl"];
} else if (process.env.NODE_ENV == "production") {
  // 打包之后 npm run build
  baseUrl = window.SITE_CONFIG["proUrl"];
}

export { baseUrl };
