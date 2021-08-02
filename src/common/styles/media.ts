const size: any = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 2560,
};
const media: any = Object.keys(size).reduce((acc: any, cur: any) => {
  acc[cur] = `(min-width: ${size[cur]}px)`;
  return acc;
}, {});
export default media;
