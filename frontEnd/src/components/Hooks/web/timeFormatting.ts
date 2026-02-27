export const data = (dateString: string) => {
  const date: Date = new Date(dateString);
  const timestampMs: number = date.getTime();
  return timestampMs;
};
export const display = (dateString: string) => {

  const start: Date = new Date(dateString);
  const end: Date = new Date(start.getTime() + 90 * 60 * 1000);
  const formatEventRange = (d1: Date, d2: Date): string => {
    const jst = (date: Date) => ({
      month:  date.toLocaleDateString('ja-JP', { month: '2-digit', timeZone: 'Asia/Tokyo' }),
      day:    date.toLocaleDateString('ja-JP', { day: '2-digit', timeZone: 'Asia/Tokyo' }),
      hour:   date.toLocaleTimeString('ja-JP', { hour: '2-digit', hour12: false, timeZone: 'Asia/Tokyo' }),
      minute: date.toLocaleTimeString('ja-JP', { minute: '2-digit', timeZone: 'Asia/Tokyo' }).padStart(2, '0')
    });
    const t1 = jst(d1);
    const t2 = jst(d2);
    return `${t1.month}${t1.day} ${t1.hour}${t1.minute}〜${t2.hour}${t2.minute}`;
  };

  return formatEventRange(start, end);
};