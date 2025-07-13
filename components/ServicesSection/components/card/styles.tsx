import { StyleSheet } from 'react-native';
import { colors } from '@/config/colors';
import { useResponsiveScale } from '@/config/useResponsiveScale';

export const useStyles = () => {
  const { scaleHeight, scaleWidth, scale } = useResponsiveScale();

  return StyleSheet.create({
    // Card container
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
      alignItems: 'center',
      gap: scale(50),
    },

    // Logo and gradient box
    logo: {
      color: '#fff',
      fontFamily: 'Cairo-Bold',
      fontSize: 18,
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
    logoGradient: {
      borderRadius: 9,
    },
    wrapper: {
      padding: scale(2),
      borderRadius: 9,
      marginBottom: scale(10),
      borderColor: colors.darkGray,
      borderWidth: 0.3,
      height: scale(40),
    },

    // Icon wrapper
    icon: {
      width: scale(36),
      height: scale(36),
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: scale(9),
      backgroundColor: 'transparent',
      overflow: 'hidden',
    },

    // Tag section
    tagContainer: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-end',
      gap: scale(4),
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

    // Card content
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

    borderWrapper: {
      padding: scale(9),
    },
  });
};
