// Botón de selección basado en un radio nativo: funciona con teclado y lector de pantalla.
export default function Opcion({ name, value, checked, onChange, children }) {
  return (
    <label className="relative cursor-pointer">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="peer sr-only"
      />
      <span className="flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-lg border border-stone-500 bg-white px-3 text-sm font-semibold peer-checked:border-marca peer-checked:bg-marca peer-checked:text-white peer-focus-visible:outline-3 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-marca">
        {children}
      </span>
    </label>
  );
}
