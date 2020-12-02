import {format as formatDate,parseISO, parse} from 'date-fns';


export const formatDateFunc= (date)=>{
    return formatDate(parseISO(date), 'MM/dd/yyyy');
}