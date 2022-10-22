export const fileObjectToLocalURL = (file) => {
  if (file) {
    return URL.createObjectURL(file)
  }
  return ''
}

export function getBase64 (
  file = {},
  successCallback = () => {},
  errorCallback = () => {}
) {
  const reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = function () {
    successCallback(reader.result)
  }
  reader.onerror = function (error) {
    errorCallback(error)
  }
}
