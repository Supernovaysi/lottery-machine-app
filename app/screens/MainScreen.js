import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import RollButton from '../components/RollButton';
import LottoBallContainer from '../containers/LottoBallContainer';
import {GAMBannerAd, BannerAdSize} from 'react-native-google-mobile-ads';
import {AD_ID_BANNER} from '../../private/consts';

const MainScreen = () => {
  const unitId = AD_ID_BANNER;

  return (
    <>
      <View style={styles.block}>
        <Image
          source={require('../../assets/images/MainPicture.png')}
          style={styles.image}
        />
        <Text style={styles.text}>행운의 숫자</Text>
        <LottoBallContainer />
        <RollButton />
      </View>
      <GAMBannerAd
        unitId={unitId}
        sizes={[BannerAdSize.ANCHORED_ADAPTIVE_BANNER]}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
    borderRadius: 100,
  },
});

export default MainScreen;
