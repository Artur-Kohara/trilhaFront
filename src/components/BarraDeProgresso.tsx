import Tarefa from "./Tarefa";

interface BarraDeProgressoProps {
    tarefas: Tarefa[];
    status: "todas" | "completas" | "incompletas";
  }
  
  const BarraDeProgresso = ({ tarefas, status }: BarraDeProgressoProps) => {
    const tarefasCompletas = tarefas.filter((tarefa) => tarefa.completa).length;
    if (tarefas.length === 0) {
      return null; // Return null if there are no tasks
    }
    const progresso = (tarefasCompletas / tarefas.length) * 100;
  
    return (
      <div className="h-10 w-full flex items-center px-3">
        <div className="h-2 w-full border border-terracota rounded-3xl">
          <div
            className="h-2 bg-terracota"
            style={{ width: `${progresso}%` }}
          ></div>
        </div>
      </div>
    );
  }

  export default BarraDeProgresso