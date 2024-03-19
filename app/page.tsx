import { BiStar } from "react-icons/bi";

export default function Home() {
  return (
    <main>
      <p className="w-full bg-primary text-white p-2 flex justify-between items-center">
        <span>
          <BiStar className="w-5 h-5 m-2" />
        </span>
        <span>ساخته شده برای شما | Made For You</span>
        <span>
          <BiStar className="w-5 h-5 m-2" />
        </span>
      </p>

    </main>
  );
}
