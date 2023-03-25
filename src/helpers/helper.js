export const searchCountry = (term, itemsArr) => {
  if (term.length > 3) {
    const newArr = itemsArr.filter((item) => item.country.includes(term));
    return newArr;
  }
  return itemsArr;
};

export const searchContinent = (term, itemsArr) => {
  if (term.length > 3) {
    const newArr = itemsArr.filter((item) => item.country.includes(term));
    return newArr;
  }
  return itemsArr;
};
