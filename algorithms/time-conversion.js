function timeConversion(s) {
  let stringArray = s.split(":");

  let hour = stringArray[0];
  let minute = stringArray[1];
  let second = String(stringArray[2]).replace("AM", "").replace("PM", "");

  if (parseInt(hour) < 12 && s.includes("PM")) {
    return `${(hour = parseInt(hour) + 12)}:${minute}:${second}`;
  } else if (parseInt(hour) >= 12 && s.includes("AM")) {
    return `0${parseInt(hour) - 12}:${minute}:${second}`;
  }
  return s.replace("AM", "").replace("PM", "");
}

console.log(timeConversion("13:10:54AM"));

