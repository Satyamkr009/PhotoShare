/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {Fragment, useEffect, type PropsWithChildren} from 'react';
import remoteConfig from '@react-native-firebase/remote-config';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { fetchConfig, getVal, refreshConfig } from './src/services/firebase';
import Banner1 from './src/components/banner1';
import Banner2 from './src/components/banner2';

const Section: React.FC<
  PropsWithChildren<{
    title: string;
  }>
> = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = () => {
  const [val, setVal] = React.useState(false)
  const isDarkMode = useColorScheme() === 'dark';
 
useEffect(()=>{
  remoteConfig().setDefaults({
    nVar:'TTT'
  }).then(()=>{
    console.log('hadbjda',remoteConfig().lastFetchStatus)
    remoteConfig().fetch(0).then(()=>{
      remoteConfig().activate().then(()=>{
        setVal(remoteConfig().getValue('showBanner').asBoolean())
        console.log(val)
      })
    })
  })

  refreshConfig()

},[val])
  

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={{flex: 1}}>
      {
        val ? <Banner1/> : <Banner2/>
}

    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
