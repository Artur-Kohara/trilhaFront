"use client";

import { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import Tarefa from '@/components/Tarefa';
import BarraDeProgresso from '@/components/BarraDeProgresso';

export default function PraFaze() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  const [uncheckedTarefas, setUncheckedTarefas] = useState(0);
  const [status, setStatus] = useState<"todas" | "completas" | "incompletas">("todas");
  const [lastAddedTarefaIndex, setLastAddedTarefaIndex] = useState(-1);

  const handleAdicionaTarefa = (texto: string) => {
    setTarefas([...tarefas, { texto, completa: false }]);
    setUncheckedTarefas(uncheckedTarefas + 1);
    setLastAddedTarefaIndex(tarefas.length);
    toast(`Nova tarefa adicionada!`, {
      position: 'top-center',
      style: {
        background: 'white',
        color: '#DE6C5C',
        borderColor: '#DE6C5C',
        borderStyle: 'solid',
        borderWidth: '2px',
      },
    });
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleAdicionaTarefa(event.currentTarget.value);
      event.currentTarget.value = '';
    }
  };

  const handleDeleteLastTask = () => {
    if (tarefas.length > 0) {
      setTarefas([]);
      setUncheckedTarefas(0);
      setLastAddedTarefaIndex(-1);
    }
  };

  const tarefasCompletas = tarefas.filter((tarefa) => tarefa.completa).length;

  const handleCheckboxChange = (index: number) => {
    setTarefas((prevTarefas) => {
      const novaTarefa = prevTarefas.map((tarefa, i) =>
        i === index? {...tarefa, completa:!tarefa.completa } : tarefa
      );
      const newUncheckedTarefas = novaTarefa.filter((tarefa) =>!tarefa.completa).length;
      setUncheckedTarefas(newUncheckedTarefas);
      return novaTarefa;
    });
  };

  return (
    <div className="bg-white h-screen">
      <div className="flex flex-col justify-center items-center h-full">
        <Toaster />
        <div className="flex justify-start w-1/3"> {/* Titulo */}
          <div className="text-terracota text-5xl font-normal">PraFazê!</div>
          <div className="text-terracota">
            <span className="icon-[akar-icons--clipboard] w-12 h-12 ml-2"></span>
          </div>
        </div>
        <div className="w-1/3 h-2/3 border rounded-2xl border-terracota"> {/* Interface */}
          <div className="h-16 border-b border-terracota flex items-center justify-between"> {/* Criar e excluir tarefas */}
            <input
              type="text"
              placeholder="Nova tarefa"
              className="h-10 w-2/3 ml-3 pl-3 border-2 rounded-lg border-terracota focus:outline-none focus:border-terracota text-terracota"
              onKeyDown={handleKeyDown}
            />
            <button
            className='bg-terracota text-white text-xl border-0 rounded-lg p-2 mr-3 transition-transform transform hover:scale-110 active:scale-95'
            onClick={handleDeleteLastTask}
            >Excluir
            </button>
          </div>
          <div className="h-4/5 overflow-y-auto"> {/* Local das tarefas */}
          <BarraDeProgresso tarefas={tarefas} status={status} />
          {tarefas.length === 0? (
            <div className="text-terracota text-2xl h-4/5 flex justify-center items-center">Todas as tarefas foram feitas</div>
          ) : (
            tarefas.map((tarefa, index) => (
              <Tarefa
                key={index}
                tarefa={tarefa}
                onClick={() => handleCheckboxChange(index)}
                style={{
                  display:
                    (tarefa.completa && status === "incompletas") ||
                    (!tarefa.completa && status === "completas")
                  ? "none"
                    : "flex",
                }}
              />
            ))
          )}
          </div>
          <div className="flex justify-around items-center border-t border-terracota pt-4"> {/* Navbar */}
            <div className="text-terracota">{uncheckedTarefas} itens restantes</div>
              <div>
                <button
                  className="text-terracota px-3 transition-transform transform hover:scale-110 active:scale-95"
                  onClick={() => setStatus("todas")}
                >
                  Tudo
                </button>
                <button
                  className="text-terracota px-3 transition-transform transform hover:scale-110 active:scale-95"
                  onClick={() => setStatus("incompletas")}
                >
                  Pendentes
                </button>
                <button
                  className="text-terracota pl-3 pr-6 transition-transform transform hover:scale-110 active:scale-95"
                  onClick={() => setStatus("completas")}
                >
                  Finalizadas
                </button>
              </div>
              <button
                className="text-terracota transition-transform transform hover:scale-110 active:scale-95"
                onClick={() => {
                  setTarefas(tarefas.filter((tarefa) =>!tarefa.completa));
                }}
              >
                Limpar finalizadas
              </button>
              </div>
            </div>
          </div>
        </div>
  );
}