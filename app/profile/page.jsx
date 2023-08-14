"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Profile from "@components/profile";

const MyProfile = () => {
  const { data: session } = useSession([]);
  const [myPosts, setMyPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session.user.id}/posts`);
      const data = await response.json();
      setMyPosts(data);
    };
    if (session?.user.id) fetchPosts();
  }, []);

  const handleEdit = async () => {};

  const handleDelete = () => {};

  return (
    <Profile
      name="My"
      desc="Welcome to your personalized profile page"
      data={myPosts}
      handleEdit={() => {}}
      handleDelete={() => {}}
    />
  );
};

export default MyProfile;
