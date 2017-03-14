const removeLineBreaks = convo =>
  convo.split('\n').filter(e => e.length > 0).join('\n');

export default removeLineBreaks;
