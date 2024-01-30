function CustomLabelAndInput({ label, invalid, contains, entering, valid, ...props}) {

  // let labelClasses =
  //   "block mb-2 text-xs font-bold tracking-wide uppercase text-stone-300";

  // if (invalid) {
  //   labelClasses =
  //     "block mb-2 text-xs font-bold tracking-wide uppercase text-red-400";
  // }

  let labelClasses = "block mb-2 text-xs font-bold tracking-wide uppercase text-stone-300";
  let inputClasses = "w-full px-3 py-2 leading-tight border rounded shadow"

  if (invalid) {
    labelClasses += " text-red-400";
    inputClasses += " text-red-500 bg-red-100 border-red-300";
  } else {
    labelClasses += " text-stone-300";
    inputClasses += " text-gray-700 bg-stone-300"
  }

  return (
    <p>
      <label  className={labelClasses} >{label}</label>
      <input  className={inputClasses} {...props} />
    </p>
  );

}

export default CustomLabelAndInput;
