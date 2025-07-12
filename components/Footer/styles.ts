import { colors } from '@/config/colors';
import { StyleSheet } from 'react-native';
import { useResponsiveScale } from '../../config/useResponsiveScale';

export const useStyles = () => {
  const { scaleHeight, scaleWidth, scale } = useResponsiveScale();

  return StyleSheet.create({
    container: {
      backgroundColor: colors.secondaryBlack,
      alignItems: 'center',
      paddingVertical: scale(24),
    },

    firstTitle: {
      fontFamily: 'Inter_28pt-Medium',
      color: colors.babyGray,
      fontSize: scale(20),
      textAlign: 'center',
      paddingBottom: scale(14),
    },

    secondTitle: {
      fontFamily: 'Inter_24pt-Medium',
      color: colors.white,
      fontSize: scale(10),
      textAlign: 'center',
      paddingHorizontal: scale(20),
      paddingBottom: scale(14),
    },

    button: {
      backgroundColor: colors.white,
      borderRadius: scale(50),
      paddingVertical: scaleHeight(6),
      paddingHorizontal: scaleWidth(12),
      width: scaleWidth(300),
      justifyContent: 'center',
      marginBottom: scale(14),
    },

    secondButton: {
      width: scaleWidth(90),
      backgroundColor: colors.lightGray,
    },

    secondButtonText: {
      color: colors.white,
      textAlign: 'center',
    },

    buttonText: {
      fontFamily: 'Inter_28pt-Medium',
      color: colors.darkGray,
      fontSize: 16,
    },

    copyright: {
      fontFamily: 'Inter-Regular',
      color: colors.white,
      textAlign: 'center',
      marginBottom: scale(4),
    },

    underline: {
      textDecorationLine: 'underline',
      fontFamily: 'Inter-Regular',
      color: colors.white,
    },

    row: {
      flexDirection: 'row',
      gap: 10,
      paddingBottom: scale(12),
    },
  });
};
