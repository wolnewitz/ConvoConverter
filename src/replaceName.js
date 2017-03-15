import getNameRegex from './getNameRegex';

const replaceName = (convo, originalText, replaceText) => {
  if (!convo.length) { return ''; }
  const nameRegex = getNameRegex(originalText);
  console.log('nameRegex', nameRegex)
  const replaced = convo.replace(nameRegex, `${replaceText}`);
  return replaced;
}

export default replaceName;
