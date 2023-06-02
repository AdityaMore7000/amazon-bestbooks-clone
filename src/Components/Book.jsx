const Book = (props) => {
  return (
    <div className=" border-gray-200 border-[0.1px]">
      <div
        style={{
          fontFamily:
            "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif",
        }}
        className="bg-[#C45500] w-fit px-2 text-white font-mono"
      >
        #{props.id}
      </div>
      <img
        className=" h-64 mx-auto mt-3"
        src={props.imgUrl}
        alt="image"
        height={100}
      />
      <h1 className="text-left font-sans font-semibold pl-2 text-sm text-[#0C778A]">
        {props.title}
      </h1>
      <h4 className="font-sans font-bold text-xs text-left pl-2 text-[#0C778A]">
        {">"}
        {props.author}
      </h4>
    </div>
  );
};

export default Book;
