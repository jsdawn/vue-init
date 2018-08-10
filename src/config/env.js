/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 */
import { IP_DEV, IP_PRO } from "./ip";

let baseUrl = "";

if (process.env.NODE_ENV == "development") {
  // 本地环境 npm run dev
  baseUrl = IP_DEV;
} else if (process.env.NODE_ENV == "production") {
  // 打包之后 npm run build
  baseUrl = IP_PRO;
}

export { baseUrl };
