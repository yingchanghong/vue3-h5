/**
 * @description: 获取数据类型
 * @param {unknown} data
 * @return {string}
 */
export const getType = (data: unknown): string => {
  const result = Object.prototype.toString.call(data);
  const type = result.replace(/^\[object (\w+)\]$/, '$1');
  return type.toLowerCase();
};

/**
 * @description 图片压缩
 * @param {File} file
 * @param {number} quality 0-1
 * @return {file}
 */
export const compressImage = (file: File, quaity = 1): Promise<File> => {
  return new Promise((resolve, reject) => {
    const dataType = getType(file);
    if (dataType !== 'file')
      return reject(
        new Error(`Expected parameter type is file, You passed in ${dataType}`)
      );
    if (file.type.indexOf('image') === -1) return file;
    const fillReader = new FileReader();
    fillReader.readAsDataURL(file);
    fillReader.onload = () => {
      const img = new Image();
      img.src = fillReader.result as string;
      img.onload = () => {
        const { width, height } = img;
        const canvas = window.document.createElement('canvas');
        const ctx = <CanvasRenderingContext2D>canvas.getContext('2d');
        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(img, 0, 0, width, height);
        canvas.toBlob(
          blob =>
            resolve(
              new window.File([<BlobPart>blob], file.name, { type: file.type })
            ),
          'image/webp',
          quaity
        );
      };
    };
  });
};

/**
 * @description 存session
 * @param {string} key
 * @param {unknown} value
 * @return {*}
 */
export const setSessionStorage = (key: string, value: unknown): void => {
  sessionStorage.setItem(key, JSON.stringify(value));
};

/**
 * @description 取session
 * @param {string} key
 * @return {*}
 */
export const getSessionStorage = (key: string): any => {
  if (!key) return null;
  const temp = sessionStorage.getItem(key);
  if (temp) {
    return JSON.parse(temp);
  }
  return null;
};
