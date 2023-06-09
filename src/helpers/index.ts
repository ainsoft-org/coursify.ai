const classNames = (...classes: (string | undefined)[]) => {
  return classes.filter(Boolean).join(' ');
};

export { classNames };
