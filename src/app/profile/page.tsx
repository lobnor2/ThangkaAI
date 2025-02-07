"use client";
import { Post } from "@prisma/client";
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

      <div className="w-full min-h-dvh flex justify-center items-center p-2">
        {loading ? (
          "loading..."
        ) : (
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {posts.map((post: any) => {
              return (
                <div key={post.id} className="   mb-6 p-1">
                  <img
                    src={post.url}
                    alt={post.prompt}
                    className="w-full mb-2 rounded-lg"
                  />
                  <p className="text-gray-500">"{post.prompt}"</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
