"use client"

import { useState } from "react";

const initialPosts = [
  {
    id: 1,
    name: "Jane Doe",
    title: "Product Designer at Figma",
    avatar: "https://i.pravatar.cc/100?img=1",
    time: "2h",
    content: "Excited to share a sneak peek of the new design system we're building at Figma!",
    image: "https://source.unsplash.com/800x400/?design",
    likes: 120,
    comments: 14,
    tags: ["All", "insurance"],
  },
  {
    id: 2,
    name: "Michael Smith",
    title: "Frontend Developer at Vercel",
    avatar: "https://i.pravatar.cc/100?img=2",
    time: "4h",
    content: "Just deployed a new Next.js app using Vercel Edge Functions 🚀 #nextjs #vercel",
    image: null,
    likes: 98,
    comments: 23,
    tags: ["side-effects", "meal", "exercise"],
  },
];

const allTags = ["All", "whats new?", "Nutrition", "side-effects", "insurance", "meal", "exercise", "Byetta, Bydureon (exenatide)", "Trulicity (dulaglutide)", "Victoza, Saxenda, Xultophy (liraglutide)","Ozempic, Rybelsus, Wegovy (semaglutide)","Mounjaro, Zepbound (tirzepatide)", "Alternatives"];

export default function LinkedInFeedWithTagSidebar() {
  const [posts, setPosts] = useState(initialPosts);
  const [newPost, setNewPost] = useState("");
  const [imageURL, setImageURL] = useState("");
  //const [selectedTags, setSelectedTags] = useState([]);
  //const [selectedTags] = useState([]);
  const [sortBy, setSortBy] = useState("recent");

  const handlePost = () => {
    if (!newPost.trim()) return;

    const post = {
      id: Date.now(),
      name: "You",
      title: "Software Engineer",
      avatar: "https://i.pravatar.cc/100?img=5",
      time: "Just now",
      content: newPost,
      image: imageURL || null,
      likes: 0,
      comments: 0,
      tags: [], // You could add UI for adding tags if needed
    };

    setPosts([post, ...posts]);
    setNewPost("");
    setImageURL("");
  };

  /*
  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag)
        ? prev.filter((t) => t !== tag)
        : [...prev, tag]
    )
  };*/

  const filteredPosts = posts
    /*
    .filter((post) => {
      
      if (selectedTags.length === 0) return true;
        return post.tags?.some((tag) => selectedTags.includes(tag));
    })*/
    .sort((a, b) => {
      if (sortBy === "popular") return b.likes - a.likes;
      return b.id - a.id;
    });

  return (
    <div className="flex max-w-6xl mx-auto px-4 mt-8 gap-6">
      {/* Sidebar */}
      <div className="w-84 bg-white rounded-2xl shadow-md p-4 h-fit">
        <h2 className="text-lg font-semibold mb-4">Filter & Sort</h2>

        {/* Tags */}
        <div className="mb-4">
          <p className="text-sm font-medium mb-2">Filter by Tags</p>
          <div className="space-y-1">
            {allTags.map((tag) => (
              <label key={tag} className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  //checked={selectedTags.includes(tag)}
                  //onChange={() => toggleTag(tag)}
                />
                {tag}
              </label>
            ))}
          </div>
        </div>

        {/* Sort */}
        <div>
          <label className="block text-sm font-medium mb-1">Sort by</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full p-2 border rounded-md text-sm"
          >
            <option value="recent">Most Recent</option>
            <option value="popular">Most Liked</option>
          </select>
        </div>
      </div>

      {/* Feed */}
      <div className="flex-1 space-y-4">
        {/* Post Composer */}
        <div className="bg-white rounded-2xl shadow-md p-4">
          <div className="flex gap-3 items-start">
            <img
              src="https://i.pravatar.cc/100?img=5"
              alt="You"
              className="w-12 h-12 rounded-full"
            />
            <div className="flex-1">
              <textarea
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                placeholder="Start a post..."
                className="w-full p-2 border rounded-md resize-none min-h-[80px]"
              />
              {imageURL && (
                <img
                  src={imageURL}
                  alt="Preview"
                  className="mt-2 w-full h-60 object-cover rounded-xl"
                />
              )}
              <div className="flex justify-between items-center mt-3">
                <div className="flex gap-2 items-center text-sm">
                  <span>🖼️</span>
                  <input
                    type="url"
                    placeholder="Paste image URL"
                    value={imageURL}
                    onChange={(e) => setImageURL(e.target.value)}
                    className="border p-1 rounded w-48 text-sm"
                  />
                </div>
                <button
                  onClick={handlePost}
                  disabled={!newPost.trim()}
                  className="bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 disabled:opacity-50"
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Posts Feed */}
        {filteredPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-2xl shadow-md p-4">
            <div className="flex gap-3">
              <img
                src={post.avatar}
                alt={post.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-semibold">{post.name}</p>
                <p className="text-sm text-gray-500">{post.title} · {post.time}</p>
              </div>
            </div>

            <p className="mt-4 text-base whitespace-pre-wrap">{post.content}</p>

            {post.image && (
              <img
                src={post.image}
                alt="Post content"
                className="w-full h-60 object-cover mt-4 rounded-xl"
              />
            )}

            <div className="flex justify-between items-center text-sm text-gray-600 mt-4">
              <span>👍 {post.likes} Likes</span>
              <span>💬 {post.comments} Comments</span>
            </div>

            <div className="flex justify-around border-t mt-4 pt-2 text-sm">
              <button className="flex items-center gap-1 text-gray-700 hover:text-blue-600">
                👍 Like
              </button>
              <button className="flex items-center gap-1 text-gray-700 hover:text-blue-600">
                💬 Comment
              </button>
            </div>

            {post.tags && (
              <div className="mt-3 flex flex-wrap gap-2 text-xs text-blue-600">
                {post.tags.map((tag) => (
                  <span key={tag} className="bg-blue-100 px-2 py-0.5 rounded">
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
