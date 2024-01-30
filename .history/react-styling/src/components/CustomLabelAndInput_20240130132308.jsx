function CustomLabelAndInput({ label, invalid, contains, entering, valid, ...props}) {

  let labelClasses =
    "block mb-2 text-xs font-bold tracking-wid text-stone-200 uppercase";

  if (invalid) {
    labelClasses =
      "block mb-2 text-xs font-bold tracking-wide uppercase text-red-400";
  }

  return (
    <p>
      <label  className="block mb-2 text-xs font-bold tracking-wide uppercase text-stone-300" >{label}</label>
      <input  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow bg-stone-300" {...props} />
    </p>
  );

}

export default CustomLabelAndInput;
