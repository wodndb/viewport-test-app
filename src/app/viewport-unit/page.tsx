export default function ViewportUnitPage() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      {new Array(10).fill(null).map((_, idx) => {
        return (
          <div
            key={idx}
            className={`h-[10vh] w-full flex flex-col justify-center items-center ${
              idx % 2 === 0 ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            {`${10 * (idx + 1)}vh`}
          </div>
        );
      })}
    </div>
  );
}
