const removeTimestamps = (convo) =>
  convo.replace(/\[.*[AM|PM]\]\s?/g, '');

export default removeTimestamps;
