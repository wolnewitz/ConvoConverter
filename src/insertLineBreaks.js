import extractName from './extractName'

const insertLineBreaks = (convo, timeStampsRemoved) => {
  const splitConvo = convo.split('\n');
  let previousLineName;
  const lineArrayWithBreaks = splitConvo.reduce((memo, line) => {
    if (!line.length) { return memo; }
    // first line
    if (!previousLineName) {
      memo.push(line);
      previousLineName = extractName(line, timeStampsRemoved);
      return memo;
    }
    // if line is a quote
    if (line[0] === '>') {
      memo.push(line);
      return memo;
    }
    // A new person so insert a break
    if (!line.match(previousLineName)) {
      memo.push('');
    }
    memo.push(line);
    let extractedName = extractName(line, timeStampsRemoved);
    // handle messages with line breaks
    previousLineName = extractedName ? extractedName : previousLineName;
    return memo;
  }, [])
  return lineArrayWithBreaks.join('\n');
}

export default insertLineBreaks;
