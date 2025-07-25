import { StyleSheet } from 'react-native';
import { useResponsiveScale } from '../../config/useResponsiveScale';
import { colors } from '@/config/colors';

export const useStyles = () => {
  const { scaleHeight, scaleWidth, scale } = useResponsiveScale();

  return StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: scaleHeight(24),
      paddingHorizontal: scaleWidth(20),
      backgroundColor: colors.black,
      justifyContent: 'space-evenly',
    },

    // Titles
    title: {
      color: colors.babyGray,
      fontFamily: 'Inter_28pt-Medium',
      fontSize: scale(10),
      paddingBottom: scaleHeight(6),
      width: scaleWidth(300),
    },
    secondTitle: {
      color: colors.babyGray,
      fontSize: scale(14),
      fontFamily: 'InterRegular',
      paddingBottom: scaleHeight(8),
    },
    desc: {
      color: colors.babyGray,
      fontFamily: 'Inter_28pt-Medium',
      fontSize: scale(10),
      paddingBottom: scaleHeight(12),
      width: scaleWidth(300),
    },

    // Cards
    card: {
      borderRadius: scale(12),
      padding: scale(4),
      marginBottom: scaleHeight(20),
      width: scale(280),
      alignSelf: 'center',
      backgroundColor: '#1a1a1a',
    },
    innerCard: {
      padding: scale(12),
      borderColor: colors.darkServer,
      borderWidth: 0.3,
      borderRadius: scale(10),
    },
    innerContainer: {
      flexDirection: 'row',
    },

    // Logo and Wrappers
    logo: {
      color: '#fff',
      fontSize: scale(18),
      fontWeight: 'bold',
    },
    logoGradient: {
      padding: scale(2),
      borderRadius: 9,
    },
    logoBox: {
      padding: scale(6),
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 6,
    },
    wrapper: {
      padding: scale(4),
      borderRadius: 9,
      marginBottom: scale(10),
      borderColor: colors.darkGray,
      borderWidth: 0.3,
    },

    // Tags
    tagContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: scaleWidth(200),
      gap: scale(30),
      marginBottom: scale(10),
    },
    tag: {
      backgroundColor: '#222',
      color: '#fff',
      paddingHorizontal: scale(8),
      paddingVertical: scale(4),
      borderRadius: scale(10),
      margin: scale(4),
      fontSize: scale(12),
    },
    oneTag: {
      backgroundColor: '#222',
      color: '#fff',
      paddingHorizontal: scale(8),
      paddingVertical: scale(4),
      borderRadius: scale(10),
      margin: scale(4),
      fontSize: scale(12),
      height: scaleHeight(25),
      justifyContent: 'center',
    },
    tagWrapper: {
      marginBottom: scale(10),
    },
    tagRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: scale(130),
      alignSelf: 'center',
    },
    tagRowCenter: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginVertical: scale(6),
    },

    // 🔷 Card content
    cardTitle: {
      color: colors.white,
      fontFamily: 'Inter-Regular',
      fontSize: scale(14),
      marginBottom: scale(6),
    },
    description: {
      color: colors.white,
      fontFamily: 'Inter-Regular',
      fontSize: scale(10),
    },

    // Border
    borderWrapper: {
      padding: scale(9),
    },
  });
};
