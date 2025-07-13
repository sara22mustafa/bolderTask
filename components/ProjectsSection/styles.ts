import { colors } from '@/config/colors';
import { Dimensions, StyleSheet } from 'react-native';
import { useResponsiveScale } from '../../config/useResponsiveScale';

export const useStyles = () => {
  const { scaleHeight, scaleWidth, scale } = useResponsiveScale();
  const { width } = Dimensions.get('window');

  return StyleSheet.create({
    container: {
      paddingHorizontal: scaleWidth(20),
      height: scaleHeight(350),
    },

    title: {
      fontFamily: 'Inter_28pt-Medium',
      fontSize: scale(10),
      color: colors.gray,
      paddingTop: scale(18),
      paddingBottom: scale(6),
      paddingHorizontal:scale(14)
    },

    secondTitle: {
      fontFamily: 'Inter-Regular',
      fontSize: scale(14),
      color: colors.lightGray,
      paddingBottom: scale(16),
            paddingHorizontal:scale(14)

    },

    card: {
      width: width - 70,
      borderRadius: 40,
      padding: scale(16),
      backgroundColor: 'white',
      flex: 1,
    },

    row: {
      flexDirection: 'row',
      paddingBottom: scale(14),
      alignItems: 'center',
      gap:scale(4)
      // justifyContent: 'space-between',
    },

    text: {
      color: colors.lightGray,
      fontFamily: 'Inter_28pt-Bold',
    },

    flag: {
      color: colors.black,
      marginRight: scale(8),
      paddingHorizontal: scale(10),
      paddingVertical: scale(2),
      backgroundColor: colors.lightServer,
      textAlign: 'center',
      fontFamily: 'Inter_28pt-Bold',
      borderRadius: scale(4),
    },

    cardTitle: {
      fontFamily: 'Inter_28pt-Bold',
      fontSize: 16,
      color: colors.gray,
      marginBottom: scale(10),
    },

    cardDesc: {
      marginBottom: 8,
      color: colors.textGray,
      fontFamily: 'Inter_28pt-Medium',
      fontSize: scale(12),
    },

    readMore: {
      color: colors.blue,
      marginLeft: 'auto',
      marginTop: 'auto',
    },

    arrowContainer: {
      flexDirection: 'row',
      paddingBottom: scale(18),
      alignItems: 'center',
      gap: scale(14),
      justifyContent: 'center',
    },

    arrow: {
      backgroundColor: colors.black,
      width: scale(30),
      height: scale(30),
      borderRadius: scale(15),
      justifyContent: 'center',
      alignItems: 'center',
    },
arrow1:{
backgroundColor:colors.darkServer,
      width: scale(30),
      height: scale(30),
      borderRadius: scale(15),
      justifyContent: 'center',
      alignItems: 'center',
},
    arrowText: {
      color: colors.white,
      fontSize: scale(12),
      fontFamily: 'Inter_24pt-Medium',
    },
    gradientBorder: {
  borderRadius: 40,
  paddingHorizontal: 1.5,
  paddingVertical: 1.5,
  overflow: 'hidden',
  marginHorizontal:scale(8),
  height: scaleHeight(200),
},

  });
};
