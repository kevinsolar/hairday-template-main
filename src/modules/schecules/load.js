import { hoursLoad } from "../form/hours-load.js"

// Seleciona o input de data
const selectedDate = document.getElementById("date")
export function schedulesDay() {
  // obtem a dara do input
  const date = selectedDate.value

	// renderiza as horas disponiveis
	hoursLoad({ date })
}
