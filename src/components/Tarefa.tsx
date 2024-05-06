interface Tarefa {
    texto: string;
    completa: boolean;
  }
  
  interface TarefaProps {
    tarefa: Tarefa;
    onClick: () => void;
    style?: React.CSSProperties;
  }
  
  const Tarefa = ({ tarefa, onClick, style }: TarefaProps) => {
    return (
      <div
        className={`flex items-center p-3 rounded-lg text-terracota ${
          tarefa.completa? "bg-white line-through" : "bg-white"
        }`}
        style={style}
      >
        <div className="w-5 h-5 mr-3">
          <input
            type="checkbox"
            className="w-5 h-5 cursor-pointer"
            style={{ accentColor: 'var(--checkbox-color)'}}
            checked={tarefa.completa}
            onClick={onClick}
            onChange={() => {}}
          />
        </div>
        <div className="flex">
          <p className="text-sm font-medium text-terracota">{tarefa.texto}</p>
        </div>
      </div>
    );
  };

  export default Tarefa