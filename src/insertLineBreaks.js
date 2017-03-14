import extractName from './extractName'

const insertLineBreaks = (convo, timeStampsRemoved) => {
  const splitConvo = convo.split('\n');
  const lineArrayWithBreaks = splitConvo.reduce((memo, line) => {
    if (!line.length) { return memo; }
    if (!previousLineName) {
      memo.push(line);
      return memo;
    }
    if (!line.match(previousLineName)) {
      memo.push('');
    }
    memo.push(line);
    let previousLineName = extractName(line, timeStampsRemoved);
  }, [])
  return lineArrayWithBreaks.join('\n');
}

export default insertLineBreaks;
