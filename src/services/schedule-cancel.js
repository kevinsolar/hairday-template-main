import { apiConfig } from "./api-cfg.js"

export async function scheduleCacel({ id }) {
	try {
		await fetch(`${apiConfig.baseURL}/schedules/${id}`, {
			method: "DELETE",
		})
	} catch (error) {
		console.log(error)
		alert("Nao foi possivel cancelar o agendamento")
	}
}
