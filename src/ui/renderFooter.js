export const renderFooter = () => {
  const year = new Date().getFullYear();
  console.log({ year });
  $('footer #copyrightYear').html(year);
};
