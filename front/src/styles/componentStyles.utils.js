const buttonComponents = {
  '.btn-primary': {
    '@apply text-white font-bold py-2 px-4 rounded': {},
    backgroundColor: 'var(--primary-color)', // primaryColor 사용
  },
  '.btn-secondary': {
    '@apply text-white font-medium py-2 px-4 rounded': {},
    backgroundColor: 'var(--sub-color)', // subColor 사용
  },
};

// display 관련된 custom styles
//row
const displayFlexComponents = {
  '.flex': {
    '@apply text-center': {},
  },
};
//colum

// margin 관련된 custom styles

export default { buttonComponents, displayFlexComponents };
