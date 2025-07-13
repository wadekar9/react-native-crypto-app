import { Image, StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
import { Colors, Fonts, moderateScale } from '$utils/theme'

const ProfileContainer: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 0.48, alignItems: 'center', justifyContent: 'flex-end' }}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29uYXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80'
            }}
            style={{
              height: '100%',
              width: '100%'
            }}
            resizeMode={'cover'}
          />
        </View>
      </View>
      <View style={{ flex: 0.52, justifyContent: 'space-evenly', alignItems: 'center' }}>
        <Text style={{ fontFamily: Fonts.CIRCULAR_STD_BOLD, fontSize: moderateScale(20), color: Colors.WHITE }}>John Don</Text>
        <Text style={{ fontFamily: Fonts.CIRCULAR_STD_MEDIUM, fontSize: moderateScale(14), color: Colors.WHITE }}>johndon123@hotmail.com</Text>
        <Text style={{ fontFamily: Fonts.CIRCULAR_STD_MEDIUM, fontSize: moderateScale(14), color: Colors.WHITE }}>+91 039493243249</Text>
      </View>
    </View>
  )
}

export default memo(ProfileContainer);

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.PRIMARY_COLOR,
    width: '100%',
    height: moderateScale(210),
    overflow: 'hidden',
    borderRadius: moderateScale(12),
    elevation: 2,
    shadowColor: Colors.BLACK
  },
  imageContainer: {
    width: moderateScale(90),
    height: moderateScale(90),
    borderRadius: moderateScale(45),
    overflow: 'hidden'
  }
})