import "../index.css";

const HoverImg = ({ imageUrl, text }) => {
  return (
    <div className="relative group">
      <img
        src={imageUrl}
        alt="Image"
        className="w-full h-auto object-cover group-hover:opacity-30"
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-sm text-center">{text}</p>
      </div>
    </div>
  );
};

export default HoverImg;
