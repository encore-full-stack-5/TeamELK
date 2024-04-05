/* eslint-disable react/prop-types */
const Card = ({ imageUrl, name, uid }) => {
  return (
    <div className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
      <a href="/" className="z-20 absolute h-full w-full top-0 left-0 ">
        &nbsp;
      </a>
      <div className="h-auto overflow-hidden">
        <div className="h-44 overflow-hidden relative">
          <img src={imageUrl} alt="" />
        </div>
      </div>
      <div className="bg-white py-4 px-3">
        <h3 className="text-m mb-2 font-medium">{name}</h3>
        <div className="flex justify-between items-center">
          <p className="text-s text-gray-400">{uid}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
