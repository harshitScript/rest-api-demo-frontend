export const fileObjectToLocalURL = (file) => {
  if (file) {
    return URL.createObjectURL(file);
  }
  return "";
};
