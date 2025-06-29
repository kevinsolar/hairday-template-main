import dayjs from "dayjs"

import { scheduleNew } from "../../services/schedule-new.js"
import { schedulesDay } from "../schedules/load.js"

const form = document.querySelector("form")
const clientName = document.getElementById("client")
const selectDate = document.getElementById("date")

// data atual
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

//carrega data atual
selectDate.value = inputToday

// data minima
selectDate.min = inputToday

form.onsubmit = async (event) => {
	//previne o comportamento padrão do form
	event.preventDefault()

	try {
		//recuperando o nome do cliente
		const name = clientName.value.trim()

		if (!name) {
			return alert("Informe o nome do cliente!")
		}

		//recupera o horario
		const hourSelected = document.querySelector(".hour-selected")

		if (!hourSelected) {
			return alert("Selecione a hora.")
		}

		// recupera somente a hora
		const [hour] = hourSelected.innerText.split(":")

		// insere a hora na data
		const when = dayjs(selectDate.value).add(hour, "hour")

		// gera um id
		const id = new Date().getTime().toString()

    // faz o agendamento
		await scheduleNew({ id, name, when })

    // recarrega os agendamentos
    schedulesDay()

    clientName.value = ""
	} catch (error) {
		alert("Não foi possivel realizar o agendamento")
		console.log(error)
	}
}
