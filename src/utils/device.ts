import { UAParser } from 'ua-parser-js'

export const isMobile = (): boolean => {
  const uap = new UAParser()
  return uap.getDevice().type === 'mobile'
}
