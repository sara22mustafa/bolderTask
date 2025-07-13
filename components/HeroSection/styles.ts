import { colors } from '@/config/colors';
import { useResponsiveScale } from '@/config/useResponsiveScale';
import { StyleSheet } from 'react-native';

export const useStyles = ({ height }: { height: number }) => {
  const { scaleHeight, scaleWidth, scale } = useResponsiveScale();

  return StyleSheet.create({
    container: {
      paddingHorizontal: scaleWidth(20),
      //minHeight: height,
       maxHeight: scaleHeight(320),
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    rightSection: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    logo: {
      fontFamily: 'Cairo-Bold',
      backgroundColor: colors.primaryBlue,
      borderRadius: scale(13),
      paddingVertical: scale(5),
      paddingHorizontal: scaleWidth(10),
      marginRight: scale(14),
      color: colors.white,
    },
    brandName: {
      fontFamily: 'Cairo-Bold',
      fontSize: 20,
      color: colors.primaryBlue,
      marginRight: scale(2),
    },
    brandSuffix: {
      fontFamily: 'Cairo-Regular',
      fontSize: 20,
    },
    button: {
      backgroundColor: colors.secondaryBlack,
      borderRadius: scale(50),
      paddingVertical: scaleHeight(6),
      paddingHorizontal: scaleWidth(6),
      width: scaleWidth(100),
      alignSelf: 'center',
    },
    buttonText: {
      fontFamily: 'Inter_24pt-Medium',
      color: colors.white,
      fontSize: 16,
      textAlign:'center'
    },
    titleWrapper: {
      backgroundColor: colors.lightBlueBackground,
      paddingVertical: scaleHeight(4),
      paddingHorizontal: scaleWidth(2),
      width: scaleWidth(120),
      borderWidth: scale(1),
      borderColor: colors.lightBlueBorder,
      borderRadius: 70,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      marginVertical: scaleHeight(20),
    },
    title: {
      color: colors.gradientPink,
      fontFamily: 'Inter_24pt-Medium',
    },
    sectionTitle: {
      fontFamily: 'Inter_28pt-Bold',
      fontSize: 20,
    },
    subHeader: {
      fontFamily: 'Inter_28pt-Bold',
      fontSize: 20,
    },
    paragraph: {
      fontFamily: 'Inter_28pt-Medium',
      fontSize: 16,
      color: colors.textGray,
      marginBottom: 12,
      textAlign: 'center',
      width: scaleWidth(350),
    },
    secondButton: {
      alignSelf: 'center',
    },
    inlineTextRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: scale(12),
    },
    transformLine: {
      alignSelf: 'center',
    },
    background: {
      justifyContent: 'center',
      alignItems: 'center',
      height: scale(220),
    },
    imageButton: {
      position: 'absolute',
      top: scaleHeight(25),
      left: '50%',
      transform: [{ translateX: -50 }],
    },
    animatedImg:{
            width: 300,
            height: 300,
                  zIndex: 1,
                        position: 'absolute',
      bottom:1800,
      left: '50%',
    }
  });
};
