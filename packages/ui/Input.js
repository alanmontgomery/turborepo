export const Input = ({value, onChange}) => {

  return (

    <input type="text" value={value} onChange={onChange} className="p-2 text-black outline-none bg-gray-300 border-2 border-gray-800" />
  );
}