export default function ViewportUnitPage() {
  return (
    <div className="w-screen h-screen flex flex-row">
      <div
        style={{ writingMode: "vertical-rl" }}
        className="rotate-180 flex justify-center items-center text-4xl px-5 font-bold bg-sky-600 text-white"
      >
        Test Viewport Unit Page
      </div>
      <div className="flex w-full flex-col justify-center items-center">
        {new Array(10).fill(null).map((_, idx) => {
          return (
            <div
              key={idx}
              className={`h-[10vh] w-full flex flex-col justify-center items-center ${
                idx % 2 === 0 ? "bg-black text-white" : "bg-white text-black"
              } text-4xl font-semibold`}
            >
              {`${10 * (idx + 1)} vh`}
            </div>
          );
        })}
      </div>
    </div>
  );
}
