export default function PraFaze() {
  return (
    <div className="bg-white h-screen">
      <div className="flex flex-col justify-center items-center h-full">
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
            />
            <button
            className='bg-terracota text-white text-xl border-0 rounded-lg p-2 mr-3 transition-transform transform hover:scale-110 active:scale-95'
            >Excluir
            </button>
          </div>
          <div className="h-4/5 overflow-y-auto"> {/* Local das tarefas */}

          </div>
          <div className="flex justify-around items-center border-t border-terracota pt-4"> {/* Navbar */}
            <div className="text-terracota"> itens restantes</div>
              <div>
                <button
                  className="text-terracota px-3 transition-transform transform hover:scale-110 active:scale-95"
                >
                  Tudo
                </button>
                <button
                  className="text-terracota px-3 transition-transform transform hover:scale-110 active:scale-95"
                >
                  Pendentes
                </button>
                <button
                  className="text-terracota pl-3 pr-6 transition-transform transform hover:scale-110 active:scale-95"
                >
                  Finalizadas
                </button>
              </div>
              <button
                className="text-terracota transition-transform transform hover:scale-110 active:scale-95"
              >
                Limpar finalizadas
              </button>
              </div>
            </div>
          </div>
        </div>
  );
}