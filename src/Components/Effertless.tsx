
import image from "../assets/image.png";
function Effertless() {
  return (
    <section className="w-full bg-white  py-12  sm:py-14 md:py-[88px]">
      <div className="mx-auto flex w-full max-w-[700px] flex-col items-center text-center">
        <h2
          className="
           
            text-[25px]
            font-bold
            leading-tight
            text-[#111111]
            sm:text-[25px]
            md:text-[30px]
          "
        >
          Effortless from start to finish
        </h2>

        <p
          className="
            mt-2
            max-w-[650px]
            text-[11px]
            font-normal
            leading-7
            text-[#2C2C2C]
            sm:text-[20px]
            md:text-[19px]
          "
        >
          Zero friction. Zero confusion. Just three simple steps Discover,
          Select, and Book for flawless results.
        </p>

        <div
          className="
            mt-10
            flex
            flex-col
            items-center
            justify-center
            gap-[12px]
            sm:flex-row
            sm:gap-2
          "
        >
          <button
            type="button"
            className="
              h-[38px]
              min-w-[130px]
              rounded-[6px]
              bg-black
              cursor-pointer
              px-4
              text-[15px]
              font-medium
              text-white
              transition
              duration-200
              hover:bg-[#222]
            "
          >
            Browse Now
          </button>
          <button
            type="button"
            className="
              h-[38px]
              min-w-[150px]
              rounded-[6px]
              border
              border-[#999]
              bg-white
              px-4
              text-[15px]
              font-medium
              text-[#222]
              cursor-pointer
              transition
              duration-200
              hover:bg-[#f5f5f5]
            "
          >
            Learn the Process
          </button>
        </div>
      </div>


<div className="mt-[80px] w-full overflow-hidden">
  <img
    src={image}
    alt="Effortless booking process"
    className="
      block
      h-auto
      w-[calc(100%+40px)]
      max-w-none
      -ml-[20px]
      object-cover
      sm:w-[calc(100%+60px)]
      sm:-ml-[30px]
      md:w-[calc(100%+80px)]
      md:-ml-[40px]
      lg:w-[calc(100%+100px)]
      lg:-ml-[50px]"/>
</div>
    </section>
  );
}

export default Effertless;