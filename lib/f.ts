export default {
  classNames: (...classes: any) => classes.filter(Boolean).join(' '),
};
