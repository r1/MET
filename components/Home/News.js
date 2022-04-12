export default function News() {
  return (
    <>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
          <div>
            <h2 className="ogg-regular pl-5 text-[3rem] text-[#2d2d2d] lg:mb-0 lg:pl-0 lg:text-[4.1rem] ">
              What&apos;s new
            </h2>
          </div>
          <div>1</div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div>1</div>
          <div>2</div>
          <div className="hidden lg:block">3</div>
          <div className="hidden lg:block">4</div>
        </div>
      </div>
    </>
  );
}
