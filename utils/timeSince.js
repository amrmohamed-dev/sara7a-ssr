function timeSince(date) {
  const seconds = Math.floor((new Date() - date) / 1000);

  const intervals = [
    { label: 'year', seconds: 31536000 },
    { label: 'month', seconds: 2592000 },
    { label: 'day', seconds: 86400 },
    { label: 'hour', seconds: 3600 },
    { label: 'minute', seconds: 60 },
  ];

  let result = 'just now';
  intervals.forEach((interval) => {
    const value = Math.floor(seconds / interval.seconds);
    if (value >= 1) {
      result = `${value} ${interval.label}${value > 1 ? 's' : ''} ago`;
    }
  });

  return result;
}

export default timeSince;
