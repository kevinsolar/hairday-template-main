import { schedulesDay } from "../schecules/load.js"

// select input date
const selectedDate = document.getElementById("date")

// recarrega a lista de horarios
selectedDate.onchange = () => schedulesDay()