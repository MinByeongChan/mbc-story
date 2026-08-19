export const useAnchor = (id: string) => {
  const handleClickAnchor = () => {
    const element = document.querySelector('.' + id);
    if (element) {
      const refRect = element.getBoundingClientRect().top;
      const bodyRect = document.body.getBoundingClientRect().top;
      const navRect = 66 + 16;
      const top = refRect - bodyRect - navRect;

      window.scrollTo({
        top,
        behavior: 'smooth',
      });
    }
  };
  return { handleClickAnchor };
};
