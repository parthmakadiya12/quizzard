enum Days {
  Sunday = 0,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

enum Months {
  January = 0,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}

function jsDateToFormat(now: Date): string {
  const date = (now.getDate() < 10 ? "0" : "") + now.getDate();

  const today = `${Days[now.getDay()]}, ${
    Months[now.getMonth()]
  } ${date}, ${now.getFullYear()}`;

  return today;
}

export { jsDateToFormat };
