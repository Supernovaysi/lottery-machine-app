import React from 'react';
import {StyleSheet, View} from 'react-native';
import RollHistoryContainer from '../containers/RollHistoryContainer';
import {GAMBannerAd, BannerAdSize} from 'react-native-google-mobile-ads';
import {AD_ID_BANNER} from '../private/consts';

const LogScreen = () => {
  const unitId = AD_ID_BANNER;

  return (
    <>
      <View style={styles.block}>
        <RollHistoryContainer />
      </View>
      <GAMBannerAd
        unitId={unitId}
        sizes={[BannerAdSize.FULL_BANNER]}
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
  },
});

export default LogScreen;
