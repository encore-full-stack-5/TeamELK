/* eslint-disable react/prop-types */
const Label = (props) => {
  return (
    <label
      // eslint-disable-next-line react/prop-types
      htmlFor={props.htmlFor}
      className="block text-sm font-medium leading-6 text-gray-900"
    >
      {props.children}
    </label>
  );
};

export default Label;
