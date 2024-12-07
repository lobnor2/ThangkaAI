import React from "react";

const Page = () => {
  return (
    <div className="border border-red-500 w-full h-dvh flex flex-col">
      <div className="w-full flex flex-col items-center">
        <h1 className="text-3xl">Create</h1>
        <p className="text-gray-500 text-lg">
          Generate Stunning Images from Text
        </p>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="border lg:flex-[2]  border-green-500">
          left more space
        </div>
        <div className="border lg:flex-[1] border-yellow-500">
          right less space
        </div>
      </div>
    </div>
  );
};

export default Page;
