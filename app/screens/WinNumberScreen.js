import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {AD_ID_BANNER} from '../../private/consts';
import {GAMBannerAd, BannerAdSize} from 'react-native-google-mobile-ads';

const WinNumberScreen = () => {
  const unitId = AD_ID_BANNER;

  return (
    <>
      <View style={styles.block}>
        <Text style={styles.text}>준비중...</Text>
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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default WinNumberScreen;
