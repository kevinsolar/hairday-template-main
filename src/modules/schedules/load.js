import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js"
import { schedulesShow } from "../schedules/show.js"
import { hoursLoad } from "../form/hours-load.js"

// Seleciona o input de data
const selectedDate = document.getElementById("date")
export async function schedulesDay() {
	// obtem a dara do input
	const date = selectedDate.value

	// busca na API, os agendamentos
	const dailySchedules = await scheduleFetchByDay({ date })

	// exibe os agendamentos
	schedulesShow({ dailySchedules })

	// renderiza as horas disponiveis
	hoursLoad({ date, dailySchedules })
}
