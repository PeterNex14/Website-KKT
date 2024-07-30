import Image from "next/image";
import { GrStatusPlaceholderSmall } from "react-icons/gr";
import { FaCircleArrowRight } from "react-icons/fa6";




export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex w-full p-4 justify-center">
        <Image
          src="/vercel.svg"
          width={150}
          height={150}
        />
      </div>
      <div className="p-4 w-full">
        <div className="bg-[#161818] p-[80px] flex flex-col rounded-[24px]">
          <p className="flex w-full h-auto text-white text-[60px] font-semibold leading-[80px]">Lorem ipsum dolor sit amet, <br />consectetur adipiscing</p>
          <p className="text-white mb-12">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, </p>
          <button className="p-3 bg-white w-[150px] rounded-lg">
            Explore Now
          </button>
        </div>
        <div className="h-[80px]"></div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-[70px] font-semibold">Heading 1</p>
          <p className="text-gray-400">Description</p>
        </div>
        <div className="h-[80px]"></div>
        <div className="px-[100px] flex flex-row justify-between items-center">
          <div className="w-full p-10 bg-slate-200 flex flex-col justify-center items-center rounded-[14px]">
            <GrStatusPlaceholderSmall className="w-[80px] h-[80px]" />
            <p className="text-[36px] font-semibold">Title</p>
            <p className="text-gray-400">Description</p>
          </div>
          <div className="w-[100px]"></div>
          <div className="w-full p-10 bg-slate-200 flex flex-col justify-center items-center rounded-[14px]">
            <GrStatusPlaceholderSmall className="w-[80px] h-[80px]" />
            <p className="text-[36px] font-semibold">Title</p>
            <p className="text-gray-400">Description</p>
          </div>
          <div className="w-[100px]"></div>
          <div className="w-full p-10 bg-slate-200 flex flex-col justify-center items-center rounded-[14px]">
            <GrStatusPlaceholderSmall className="w-[80px] h-[80px]" />
            <p className="text-[36px] font-semibold">Title</p>
            <p className="text-gray-400">Description</p>
          </div>
          <div className="w-[100px]"></div>
          <div className="w-full p-10 bg-slate-200 flex flex-col justify-center items-center rounded-[14px]">
            <GrStatusPlaceholderSmall className="w-[80px] h-[80px]" />
            <p className="text-[36px] font-semibold">Title</p>
            <p className="text-gray-400">Description</p>
          </div>
        </div>
        <div className="h-[80px]"></div>
        <div className="px-[100px] flex flex-row">
          <p className="w-full font-semibold text-[60px] leading-[70px]">Title In <br />Here</p>
          <div className="w-full ">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <div className="h-[30px]"></div>
            <button className="p-3 bg-white w-[150px] rounded-lg border border-black">
              Explore Now
            </button>
          </div>
        </div>
        <div className="h-[80px]"></div>
        <div className="mb-[40px] px-[100px] flex flex-row justify-between items-center">
          <div className="w-full flex flex-col justify-center rounded-[14px] border ">
            <img src="/placeholder.png" alt="" className="w-full rounded-[14px]" />
            <div className="p-3 flex flex-row items-center justify-between">
              <div>
                <p className="text-[36px] font-semibold">Title</p>
                <p className="text-gray-400">Description</p>
              </div>
              <FaCircleArrowRight className="w-[35px] h-[35px]" />
            </div>
          </div>
          <div className="w-[100px]"></div>
          <div className="w-full flex flex-col justify-center rounded-[14px] border ">
            <img src="/placeholder.png" alt="" className="w-full rounded-[14px]" />
            <div className="p-3 flex flex-row items-center justify-between">
              <div>
                <p className="text-[36px] font-semibold">Title</p>
                <p className="text-gray-400">Description</p>
              </div>
              <FaCircleArrowRight className="w-[35px] h-[35px]" />
            </div>
          </div>
        </div>
        <div className="w-[100px]"></div>
        <div className="px-[100px] flex flex-row justify-between items-center">
          <div className="w-full flex flex-col justify-center rounded-[14px] border ">
            <img src="/placeholder.png" alt="" className="w-full rounded-[14px]" />
            <div className="p-3 flex flex-row items-center justify-between">
              <div>
                <p className="text-[36px] font-semibold">Title</p>
                <p className="text-gray-400">Description</p>
              </div>
              <FaCircleArrowRight className="w-[35px] h-[35px]" />
            </div>
          </div>
          <div className="w-[100px]"></div>
          <div className="w-full flex flex-col justify-center rounded-[14px] border ">
            <img src="/placeholder.png" alt="" className="w-full rounded-[14px]" />
            <div className="p-3 flex flex-row items-center justify-between">
              <div>
                <p className="text-[36px] font-semibold">Title</p>
                <p className="text-gray-400">Description</p>
              </div>
              <FaCircleArrowRight className="w-[35px] h-[35px]" />
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
