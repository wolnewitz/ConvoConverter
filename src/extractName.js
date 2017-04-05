const extractName = (line, timeStampsRemoved) => {
  if (timeStampsRemoved) {
    let matched = line.match(/^.*?: /)
    return matched ? matched[0] : false;
  }
  let matched = line.match(/]\s?(.*?:)/);
  return matched ? matched[1] : false;
}

export default extractName;
