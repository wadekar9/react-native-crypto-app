import React, { useEffect, useRef, useState } from 'react';
import { ScrollView } from 'react-native';
import { BaseLayout } from '$components/common';
import { BottomTabsScreenProps } from '$types/navigation';
import { EBottomTabScreens } from '$constants/screens.constants';
import { IGlobalMarketData } from '$types/api-types';
import apiService from '$utils/api';
import { showErrorFlashMessage } from '$utils/helpers';
import { MarketPageContent, MarketPageHeader, MarketPageTabNavigator } from '$components/layouts';

const Market: React.FC<BottomTabsScreenProps<EBottomTabScreens.MARKET>> = () => {

  const [marketDetails, setMarketDetails] = useState<IGlobalMarketData | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await apiService.fetchGlobalMarketDataApi();
        if (response) {
          setMarketDetails(response.data);
        }
      } catch (error) {
        showErrorFlashMessage(error);
      }
    })();
  }, []);

  return (
    <BaseLayout>
      <MarketPageHeader marketDetails={marketDetails} />
      <MarketPageTabNavigator
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        scrollViewRef={scrollViewRef}
      />
      <MarketPageContent currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
    </BaseLayout>
  );
};

export default Market;