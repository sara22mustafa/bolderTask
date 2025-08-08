import { colors } from '@/config/colors';
import { useResponsiveScale } from '@/config/useResponsiveScale';
import { StyleSheet } from 'react-native';

export const useStyles = ({
  height,
  colorsTheme,
}: {
  height: number;
  colorsTheme: any;
}) => {
  const { scaleHeight, scaleWidth, scale } = useResponsiveScale();

  return StyleSheet.create({
    container: {
      paddingHorizontal: scaleWidth(20),
      height: scale(390),
      backgroundColor: colorsTheme.background,
       paddingTop:6
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
      color: colorsTheme.text,
    },
    button: {
      backgroundColor: colorsTheme.bkgButton,
      borderRadius: scale(50),
      paddingVertical: scaleHeight(6),
      paddingHorizontal: scaleWidth(6),
     alignSelf: 'center',
    },
    buttonText: {
      fontFamily: 'Inter_24pt-Medium',
      color: colorsTheme.textButton,
      fontSize: 16,
      textAlign: 'center',
    },
    titleWrapper: {
      backgroundColor: colorsTheme.bkgButton2,
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
      color: colorsTheme.title,
    },
    subHeader: {
      fontFamily: 'Inter_28pt-Bold',
      fontSize: 20,
    },
    paragraph: {
      fontFamily: 'Inter_28pt-Medium',
      fontSize: 16,
      color: colorsTheme.desc,
      marginBottom: 12,
      textAlign: 'center',
      paddingHorizontal: scaleHeight(10),
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
      height: '100%',
    },
    imageButton: {
      position: 'absolute',
      top: scale(70),
      left: '50%',
      transform: [{ translateX: -50 }],
    },
    animatedImg: {
      width: 300,
      height: 300,
      zIndex: 1,
      position: 'absolute',
      bottom: 100,
      left: '50%',
    },
    iconContainer: {
      backgroundColor: colorsTheme.button,
      padding: 4,
      borderRadius: 8,
      alignSelf: 'flex-end',
    },
    row: {
      flexDirection: 'row',
      gap: scale(2),
    },
  });
};
