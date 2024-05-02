export const handleSort = (arr, direction) => {
  if (!Array.isArray(arr)) return [];

  if (direction === 'highToLow') {
    if (arr.some((obj) => !obj.price)) return arr;
    const sortedData = arr.toSorted((a, b) => b.price - a.price);
    return sortedData;
  } else if (direction === 'lowToHigh') {
    if (arr.some((obj) => !obj.price)) return arr;
    const sortedData = arr.toSorted((a, b) => a.price - b.price);
    return sortedData;
  }

  if (arr.some((obj) => !obj.make)) return arr;
  const sortedData = arr.toSorted((a, b) => {
    if (!a.make || !b.make) return 0;
    let fa = a.make.toLocaleLowerCase(),
      fb = b.make.toLocaleLowerCase();

    if (fa < fb) return direction === 'az' ? -1 : 1;
    if (fa > fb) return direction === 'az' ? 1 : -1;
    return 0;
  });

  return sortedData;
};
