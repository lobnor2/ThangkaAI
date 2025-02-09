"use client";
import { Button } from "@/components/ui/button";
import { Post } from "@prisma/client";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Profile = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await fetch("api/image");
      const data = await response.json();
      setPosts(data);
      //   console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div>
      <h1 className="text-4xl text-center my-5 text-gray-600 font-normal">
        Your Generated Images
      </h1>
      <div>
        {posts.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[80vh]">
            <p className="text-3xl mb-5 text-gray-500">
              😢 Sorry your gallery is empty
            </p>
            <Link href={"/create"}>
              <Button>Go to Create</Button>
            </Link>
          </div>
        ) : (
          <div className="w-full min-h-dvh flex justify-center items-center p-2">
            {loading ? (
              "loading..."
            ) : (
              <div className=" grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                <AnimatePresence mode="wait">
                  {posts.map((post, index) => {
                    return (
                      <motion.div
                        key={post.id}
                        className="mb-6 p-1"
                        initial={{
                          opacity: 0,
                          scale: 0.9,
                          filter: "blur(10px)",
                        }}
                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        transition={{ duration: 0.2, delay: index * 0.05 }}
                      >
                        <Image
                          src={post.url}
                          alt={post.prompt}
                          width={250}
                          height={250}
                          className="w-full mb-2 rounded-lg"
                        />
                        <p className="text-gray-500">
                          &quot;{post.prompt}&quot;
                        </p>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
