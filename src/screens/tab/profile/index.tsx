import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import React from 'react';
import BaseLayout from '$components/BaseLayout';
import { BottomTabsScreenProps } from '$types/navigation';
import { EColors, EFonts, moderateScale } from '$constants/styles.constants';
import ProfileContainer from '$components/ProfileContainer';
import { ProfileMenus } from '$mock/index';
import { RightChevron } from '$assets/icons';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

const Profile: React.FC<BottomTabsScreenProps<'Profile'>> = () => {

  const navigation = useNavigation();

  return (
    <BaseLayout>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, padding: moderateScale(10) }}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}>
        <ProfileContainer />

        <View style={{ paddingTop: moderateScale(12) }}>
          {ProfileMenus.map((ele, index) => {
            let TabIcon = ele.icon;

            return (
              <TouchableHighlight
                activeOpacity={0.8}
                accessibilityRole={'button'}
                underlayColor={EColors.LIGHT_SKY}
                key={`${index}`}
                style={[styles.tabContainer]}
                onPress={() => ele?.screenName && navigation.navigate('HistoryScreen')}
              >
                <>
                  <View
                    style={{
                      flex: 0.12,
                      alignItems: 'flex-end',
                      justifyContent: 'center',
                    }}>
                    <TabIcon />
                  </View>
                  <View
                    style={{
                      flex: 0.88,
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingHorizontal: moderateScale(15),
                    }}>
                    <Text style={styles.tabLabelStyle}>{ele.label}</Text>
                    <RightChevron />
                  </View>
                </>
              </TouchableHighlight>
            );
          })}
        </View>
      </ScrollView>
    </BaseLayout>
  );
};

export default Profile;