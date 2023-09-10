import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import BaseLayout from '@components/BaseLayout';
import { BottomTabsScreenProps } from '@utils/navigation'
import { Colors, Fonts, moderateScale } from '@utils/theme';
import ProfileContainer from '@components/ProfileContainer';
import { ProfileMenus } from '@mock/index';
import { RightChevron } from '@assets/icons';

const ProfileScreen : React.FC<BottomTabsScreenProps<'ProfileScreen'>> = () => {
  return (
    <BaseLayout>
      <ScrollView
        contentContainerStyle={{flexGrow : 1,padding : moderateScale(10)}}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
      >
        <ProfileContainer />

        <View style={{paddingTop: moderateScale(12)}}>
          {
            ProfileMenus.map((ele, index) => {

              let TabIcon = ele.icon

              return(
                <TouchableOpacity
                  accessibilityRole={'tab'}
                  accessible={true}
                  activeOpacity={0.7}
                  key={`${index}`}
                  style={[styles.tabContainer]}
                >
                  <View style={{flex : 0.12,alignItems:'flex-end',justifyContent:'center'}}>
                    <TabIcon />
                  </View>
                  <View style={{flex : 0.88,flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingHorizontal : moderateScale(15)}}>
                    <Text style={styles.tabLabelStyle}>{ele.label}</Text>
                    <RightChevron />
                  </View>
                </TouchableOpacity>
              )
            })
          }
        </View>
      </ScrollView>
    </BaseLayout>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  tabContainer : {
    flexDirection : 'row',
    alignItems : 'stretch',
    marginVertical : moderateScale(2),
    height : moderateScale(58),
    overflow : 'hidden',
    borderColor : '#DFE2E4',
    borderBottomWidth : 1.5
  },
  tabLabelStyle : {
    fontFamily : Fonts.CIRCULAR_STD_BOOK,
    fontSize : moderateScale(18),
    color : Colors.DARK_GREY
  }
})