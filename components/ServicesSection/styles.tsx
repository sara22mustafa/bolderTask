import { StyleSheet } from 'react-native';
import { useResponsiveScale } from '../../config/useResponsiveScale';

export const useStyles = () => {
  const { scaleHeight, scaleWidth, scale } = useResponsiveScale();

  return StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: scaleHeight(24),
      paddingHorizontal: scaleWidth(20),
      backgroundColor: '#000',
      justifyContent: 'space-evenly',
    },
    title: {
      color: '#E9EFFD',
      fontFamily: 'Inter_28pt-Medium',
      fontSize: scale(14),
      paddingBottom: scaleHeight(18),
      width: scaleWidth(300),
    },
    secondTitle: {
      color: '#E9EFFD',
      fontSize: scale(25),
      fontFamily: 'InterRegular',
      width: scaleWidth(300),
      paddingBottom: scaleHeight(18),
    },
    card: {
      borderRadius: scale(12),
      padding: scale(6),
      marginBottom: scaleHeight(20),
      width: scaleWidth(300),
      alignSelf: 'center',
      backgroundColor: '#1a1a1a',
    },
    innerCard: {
      padding: scale(20),
      borderColor: 'white',
      borderWidth: 0.2,
      borderRadius: scale(10),
    },
    innerContainer: {
      flexDirection: 'row',
    },
    logoBox: {
      backgroundColor: '#333',
      padding: scale(10),
      alignSelf: 'flex-start',
      borderRadius: scale(10),
      marginBottom: scale(10),
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 6,
    },
    logo: {
      color: '#fff',
      fontSize: scale(18),
      fontWeight: 'bold',
    },
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
    tagWrapper: {
      marginBottom: scale(10),
    },
    tagRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: scale(90),
      alignSelf: 'center',
    },
    tagRowCenter: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginVertical: scale(6),
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
    text: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: scale(14),
      marginBottom: scale(4),
    },
    description: {
      color: '#bbb',
      fontSize: scale(12),
    },
    borderWrapper: {
      padding: scale(2),
    },
  });
};
