import extractName from './extractName'

const insertLineBreaks = (convo, timeStampsRemoved) => {
  const splitConvo = convo.split('\n');
  console.log('splitConvo', splitConvo);
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
    let extractedName = extractName(line, timeStampsRemoved);
    if (extractedName && !line.match(previousLineName)) {
      memo.push('');
    }
    memo.push(line);
    console.log('line', line, 'nameextrace', extractedName, previousLineName);
    // handle messages with line breaks
    previousLineName = extractedName ? extractedName : previousLineName;
    return memo;
  }, [])
  return lineArrayWithBreaks.join('\n');
}

export default insertLineBreaks;
