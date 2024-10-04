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
const primaryFlexComponents = {
  //root
  '.--root-flex': {
    '@apply flex flex-col items-center justify-center h-screen': {},
  },
  //primary-row
  '.--primary-flex': {
    '@apply flex items-center justify-center': {},
    boxSizing: 'border-box',
    // width: '1500px',
    // width: '100%',
    // height: '100vh',
    backgroundColor: 'white',
  },
  //primary-colum
  '.--primary-flex-col': {
    '@apply flex flex-col items-center justify-center': {},
    boxSizing: 'border-box',
    // width: '1500px',
    // width: '100%',
    // height: '100vh',
    backgroundColor: 'white',
  },
};

// margin 관련된 custom styles

export default { buttonComponents, primaryFlexComponents };
