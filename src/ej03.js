import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat.js'

function showtime(){
    dayjs.extend(customParseFormat);
    console.log(`Fecha actual: ${dayjs().format("DD-MM-YYYY")} \nHora Actual: ${dayjs().format("HH-MM-ss")}`);
}

showtime();