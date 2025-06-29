import { scheduleCacel } from "../../services/schedule-cancel"
import { schedulesDay } from "./load"

const periods = document.querySelectorAll(".period")

periods.forEach((period) => {
	period.addEventListener("click", async (event) => {
		if (event.target.classList.contains("cancel-icon")) {
			// obtem a "li" pai do elemento clicado
			const item = event.target.closest("li")

			// pega o id do agendamento para remover
			const { id } = item.dataset

			// confirma que o id oif selecionado
			if (id) {
				// confirma se o user quer remover ou cancelar
				const isConfirm = confirm("Tem certeza disso?")

				// faz a requisicao para api deletar/cencelar
				if (isConfirm) {
					// faz a requisicao para a api
					await scheduleCacel({ id })

					// recarrega os agendamentos
					schedulesDay()
				}
			}
		}
	})
})
