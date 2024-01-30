function Button({children, ...props}) {
  return <button className="text-xl font-semibold uppercase rounded m-2 p-2 text-stone-900 bg-amber-400 hover:bg-amber-500"  {...props}>{children}</button>
}
export default Button