import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },

  containerScroll: {
    flex: 1,
    minHeight: '100%',
    padding: 16,
    gap: 5,
  },

  text: {
    fontSize: 24,
    lineHeight: 24,
  },

  header: {
    alignItems: 'center',
  },

  button: {
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: '100%',
  },
});

export const useStyles = () => {
  return {
    ...styles,
    text: (color: string) => ({
      ...styles.text,
      color,
    }),
    button: (backgroundColor: string) => ({
      ...styles.button,
      backgroundColor,
    }),
  };
};
