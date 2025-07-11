import { StyleSheet } from 'react-native';
import { useResponsiveScale } from '../../config/useResponsiveScale';

export const useStyles = () => {
  const { scaleHeight, scaleWidth, scale } = useResponsiveScale();

 return StyleSheet.create({
    container: {

  },
 
})

}