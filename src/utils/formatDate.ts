function formatIsoDate(isoDateString: string) {
    const date = new Date(isoDateString);
    const options : Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
  
    const formattedDate = date.toLocaleString('en-US', options);
    const dayWithOrdinal = addOrdinalSuffix(date.getDate());
  
    return formattedDate.replace(String(date.getDate()), dayWithOrdinal);
  }
  
  function addOrdinalSuffix(day: number) {
    if (day >= 11 && day <= 13) {
      return day + 'th';
    } else {
      switch (day % 10) {
        case 1:
          return day + 'st';
        case 2:
          return day + 'nd';
        case 3:
          return day + 'rd';
        default:
          return day + 'th';
      }
    }
  }
  
  export default formatIsoDate;
  