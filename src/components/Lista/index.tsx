import { ITarefa } from '../../types/Tarefa';
import style from './Lista.module.scss';
import Item from "./item";

interface Props {
  tarefas: ITarefa[],
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void,
}

function Lista({ tarefas, selecionaTarefa }: Props) {

  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do Dia</h2>
      <ul>
        {tarefas.map((item) => (
          <Item
          selecionaTarefa = {selecionaTarefa}
            key={item.id}
            {...item}
          />
        ))}
      </ul>
    </aside>
  )

}

export default Lista;