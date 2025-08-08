import { useResponsiveScale } from '@/config/useResponsiveScale';
import { StyleSheet } from 'react-native';

export const useStyles = () => {
  const { scale } = useResponsiveScale();

  return StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  });
};
