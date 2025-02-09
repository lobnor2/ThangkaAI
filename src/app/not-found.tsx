import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className=" h-[calc(100vh-110px)] flex justify-center items-center flex-col">
      <h2 className="text-5xl">Not Found</h2>
      <p>Could not find request resource</p>
      <Link href={"/"} className="mt-5">
        <Button>Return Home</Button>
      </Link>
    </div>
  );
};

export default NotFound;
