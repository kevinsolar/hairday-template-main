import dayjs from "dayjs"

// seleciona as secoes manha e tarde
const periodMorning = document.getElementById("period-morning")
const periodAfternoon = document.getElementById("period-afternoon")

export function schedulesShow({ dailySchedules}) {
  try {
    // limpa as listas
    periodMorning.innerHTML = ""
    periodAfternoon.innerHTML = ""

    // renderiza os agendamentos
    dailySchedules.forEach(schedule => {
      const item = document.createElement("li")
      const time = document.createElement("strong")
      const name = document.createElement("span")

      // add o id do agendameto
      item.setAttribute("data-id", schedule.id)

      time.textContent = dayjs(schedule.when).format("HH:mm")
      name.textContent = schedule.name

      // cria um icone de excluir
      const cancelIcon = document.createElement("img")
      cancelIcon.classList.add("cancel-icon")
      cancelIcon.src = './src/assets/cancel.svg'
      cancelIcon.alt = "Cancelar"

      // add o tempo, nome e o icone no item
      item.append(time, name, cancelIcon)

      // obtem somente a hora
      const hour = dayjs(schedule.when).hour()

      // renderiza o agendamento na sessao, com a abordagem de early return
      if (hour <= 12)
        return periodMorning.appendChild(item)
      if (hour > 12)
        return periodAfternoon.appendChild(item)

      // renderiza o nome do cliente

    });
  } catch (error) {
    alert("Nao foi possivel exbibir os agendamentos")
    console.log(error)
  }
}