import moment from "moment";

export const cuttentDate = () => moment().format("DD-MM-YYYY")

export const monthDayYear = () => moment().format("MMM Do YY")

export const day = () => moment().format("dddd")

console.log(cuttentDate())

console.log(monthDayYear())

console.log(day())