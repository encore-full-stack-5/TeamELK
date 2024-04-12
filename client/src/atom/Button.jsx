// eslint-disable-next-line react/prop-types
const Button = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="mt-6 block w-full select-none rounded-lg bg-green-500 py-3 px-6 text-center align-middle font-sans text-m font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    >
      {children}
    </button>
  );
};

export default Button;
