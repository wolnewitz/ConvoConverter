const extractName = (line, timeStampsRemoved) => {
  if (timeStampsRemoved) {
    return line.match(/^.*?:/)[0];
  }
  return line.match(/](.*?:)/)[1];
}

export default extractName;
