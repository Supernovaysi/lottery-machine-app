import React, {useContext, useEffect} from 'react';
import {BackHandler, StyleSheet, View} from 'react-native';
import RollHistoryContainer from '../containers/RollHistoryContainer';
import {GAMBannerAd, BannerAdSize} from 'react-native-google-mobile-ads';
import {AD_ID_BANNER} from '../../private/consts';
import RollHistoryContext from '../contexts/RollHistoryContext';

const LogScreen = () => {
  const unitId = AD_ID_BANNER;
  const {isEditMode, setIsEditMode, setSelectedRolls} =
    useContext(RollHistoryContext);

  useEffect(() => {
    const backAction = () => {
      if (isEditMode) {
        setIsEditMode(false);
        setSelectedRolls([]);
        return true;
      } else {
        return false;
      }
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, [isEditMode, setIsEditMode, setSelectedRolls]);

  return (
    <>
      <View style={styles.block}>
        <RollHistoryContainer />
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
  },
});

export default LogScreen;
