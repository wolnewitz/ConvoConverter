const getNameRegex = (nameString) => {
  nameString =
    nameString
    .split(' ')
    .filter(el => el.length > 0)
    .join('\\s+');
  return(new RegExp(`${nameString}`, 'g'));
}

export default getNameRegex;
