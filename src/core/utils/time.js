import moment from 'moment/moment';

export const getTodayDateFormat = (date) => moment(date).format('MMM Do YY');
