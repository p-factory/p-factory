const fontStyles = {
  '.JejuDoldam': { fontFamily: "'Jeju Doldam', 'sans- serif'" },
  '.Pretendard': { fontFamily: "'Pretendard', 'sans-serif'" },
};

const fontSizes = {
  '.--font-xl': { fontSize: 'var(--font-xl)' },
  '.--font-l': { fontSize: 'var(--font-l)' },
  '.--font-m': { fontSize: 'var(--font-m)' },
  '.--font-s': { fontSize: 'var(--font-s)' },
  '.--font-xs': { fontSize: 'var(--font-xs)' },
};

// weight 고정되는지 확인 필요
const fontWeight = {
  '.thin': { fontWeight: '100' },
  '.extralight': { fontWeight: '200' },
  '.light': { fontWeight: '300' },
  '.normal': { fontWeight: '400' },
  '.medium': { fontWeight: '500' },
  '.semibold': { fontWeight: '600' },
  '.bold': { fontWeight: '700' },
  '.extrabold': { fontWeight: '800' },
  '.black': { fontWeight: '900' },
};

export default { fontStyles, fontSizes, fontWeight };
