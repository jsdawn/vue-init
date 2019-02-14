/**
 * 配置api接口服务
 * param-请求参数对象{id:"xxx"}
 *
 * post/get返回一个 Promise 对象 ,即api也返回这个 Promise 对象
 * getCom -  await getCom(param)
 * await - 等待Promise对象 resolve，得到 resolve 的值，作为 await 表达式的运算结果。
 */
import { baseUrl } from "./env";
import req from "./http";

// 获取主题列表
export const getThemeList = param => {
  const url = baseUrl + "/mp/theme/list";
  return req.get(url, param);
};

// 获取主题内菜单列表
export const getMenuList = param => {
  const url = baseUrl + "/mp/menu/list";
  return req.post(url, param);
};
