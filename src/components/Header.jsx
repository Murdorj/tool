"use client";
import { useRouter } from "next/navigation";

const names = ["bidnii tuhai", "taniltsuulga", "buteegdehuun"];

export const Header = () => {
  const router = useRouter();
  return (
    <div className="w-full h-[300px] flex justify-center bg-green-300">
      <div className="w-[80%] bg-slate-700 flex justify-between">
        <div></div>
        <div className="flex gap-[30px] w-full">
          {names.map((e) => {
            return (
              <div
                onClick={() => router.push("/products")}
                className="cursor-pointer"
                key="lalar"
              >
                {e}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
