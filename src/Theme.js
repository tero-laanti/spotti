export const themeColors = {
  primary: '#478DD2',
  secondary: '#3D7EB8',
  tertiary: '#336D95',
  dark: '#27516B',
};

export const defaultDatetimeFormat = dateTime => {
  if (!dateTime) return '';
  const dateString = `${dateTime.getDate()}.${dateTime.getMonth() + 1}.`;
  const timeString = `${dateTime.getHours()}:${dateTime.getMinutes()}`;
  return `${dateString} ${timeString}`;
};

export const bottomButton = {
  container: {
    borderColor: 'white',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    backgroundColor: themeColors.primary,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
};

export default themeColors;
