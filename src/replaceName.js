const replaceName = (convo, originalText, replaceText) => {
  if (!convo.length) { return ''; }
  originalText =
    originalText
    .split(' ')
    .filter(el => el.length > 0)
    .join('\\s+');
  const nameRegex = new RegExp(`${originalText}:`, 'g')
  const replaced = convo.replace(nameRegex, `${replaceText}:`);
  return replaced;
}

export default replaceName;
