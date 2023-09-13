import moment from 'moment/moment';

export const getDateFormat = (date) => moment(date).format('MMM Do YY');
