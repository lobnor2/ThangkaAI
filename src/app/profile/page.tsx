"use client";
import React, { useEffect, useState } from "react";

const Profile = () => {
  const [loading, setLoading] = useState<boolean>(true);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await fetch("api/image");
      const data = await response.json();
      console.log(data);
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
    <div className="w-full min-h-dvh flex justify-center items-center p-3 pt-[72px]">
      {loading ? "loading..." : "Profile"}
    </div>
  );
};

export default Profile;
