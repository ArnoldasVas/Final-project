export const handleSort = (arr, direction) => {
  if (!Array.isArray(arr)) return [];

  const sortedData = arr.toSorted((a, b) => {
    let fa = a.make.toLocaleLowerCase(),
      fb = b.make.toLocaleLowerCase();

    if (fa < fb) return direction === 'az' ? -1 : 1;
    if (fa > fb) return direction === 'az' ? 1 : -1;
    return 0;
  });

  return sortedData;
};
