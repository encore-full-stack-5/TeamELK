/* eslint-disable react/prop-types */
const Card = ({ imageUrl, name, content, onClick }) => {
  return (
    <div
      className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm"
      onClick={onClick}
    >
      <div className="h-auto overflow-hidden">
        <div className="bg-green-400 h-44 overflow-hidden relative">
          <img src={imageUrl} alt="" />
        </div>
      </div>
      <div className="bg-white py-4 px-3">
        <h3 className="text-m mb-2 font-medium">{name}</h3>
        <div className="flex justify-between items-center">
          <p className="text-s text-gray-400">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
