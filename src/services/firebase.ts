import remoteConfig from '@react-native-firebase/remote-config'

export const fetchConfig = async () => {
  await remoteConfig().setConfigSettings({
      //@ts-ignore
    isDeveloperModeEnabled: __DEV__,
    minimumFetchInterval: 0
  })
 const fetch=  await remoteConfig().fetch()

}

export const refreshConfig = async () => await remoteConfig().fetchAndActivate()
export const getVal = (key:any) => remoteConfig().getValue(key)