import dayjs from "dayjs"
import { apiConfig } from "./api-cfg"

export async function scheduleFetchByDay({ date }) {
	try {
		// fazendo a requisicao
		const response = await fetch(`${apiConfig.baseURL}/schedules`)

		// converte para json
		const data = await response.json()

		// filtra os agendadmentos pelo dia selecionado
		const dailySchedules = data.filter((schedule) =>
			dayjs(date).isSame(schedule.when, "day")
		)

    return dailySchedules
	} catch (error) {
		console.log(error)
		alert("Nao foi possivel buscar os agendamentos do dia selecionado.")
	}
}
