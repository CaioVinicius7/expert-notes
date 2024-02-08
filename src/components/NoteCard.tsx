export function NoteCard() {
  return (
    <button className="flex flex-col items-start space-y-3 overflow-hidden rounded-md bg-slate-800 p-5 text-left outline-none hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400">
      <span className="text-sm font-medium text-slate-200">Há 2 dias</span>

      <p className="text-sm leading-6 text-slate-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
        praesentium ad cupiditate fugiat quos! Nulla tenetur, modi, placeat
        nesciunt maiores est, praesentium dicta incidunt possimus minus animi ea
        aliquam magnam.
      </p>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0" />
    </button>
  );
}
