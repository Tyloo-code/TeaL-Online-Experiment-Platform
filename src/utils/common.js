import dayjs from "dayjs";
/**
 * 时间转字符串
 * @param {Date} date 时间
 * @param {String} format 时间格式
 */
export function parseDate2Str(date, format) {
  format = format || "YYYY-MM-DD HH:mm:ss";
  return dayjs(date).format(format);
}