const TextArea = (props) => {
  return (
    <textarea
      {...props}
      className="m-2 peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-m font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-green-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
      style={{ color: "black" }} // 텍스트 색상을 검은색으로 지정
    />
  );
};

export default TextArea;
