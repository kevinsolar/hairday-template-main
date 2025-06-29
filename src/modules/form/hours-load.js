import dayjs from "dayjs"

import { openingHours } from "../../utils/opening-hours.js"
import { hoursClick } from "./hours-click.js"

const hours = document.getElementById("hours")

export function hoursLoad({ date, dailySchedules }) {
	// limpa a lista
	hours.innerHTML = ""

	// obtem a lista de horarios ocupados.
	const unavailablesHours = dailySchedules.map((schedule) =>
		dayjs(schedule.when).format("HH:mm")
	)

	const opening = openingHours.map((hour) => {
		// recupera somente a hora
		const [scheculeHour] = hour.split(":")

		// add a hora na data e verifica se esta no passado
		const isHourPast = dayjs(date).add(scheculeHour, "hour").isBefore(dayjs())

		const available = !unavailablesHours.includes(hour) && !isHourPast

		// define se o horario esta disponivel
		return {
			hour,
			available,
		}
	})

	// renderiza os horarios
	opening.forEach(({ hour, available }) => {
		const li = document.createElement("li")
		li.classList.add("hour")
		li.classList.add(available ? "hour-available" : "hour-unavailable")

		li.textContent = hour

		if (hour === "09:00") return hourHeaderAdd("Manhã")
		if (hour === "12:00") return hourHeaderAdd("Tarde")

		hours.append(li)
	})

	// add event de clique nos horarios
	hoursClick()
}

function hourHeaderAdd(title) {
	const header = document.createElement("li")
	header.classList.add("hour-period")
	header.textContent = title

	hours.append(header)
}
