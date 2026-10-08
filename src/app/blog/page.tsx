"use client";

import { motion } from "framer-motion";
import { Search, ArrowRight, Clock, User, Share2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const CATEGORIES = ["All", "Study Tips", "Visa Updates", "Scholarships", "University News", "Student Life"];

const POSTS = [
  {
    id: 1,
    title: "How to Secure a Fully Funded Scholarship in the USA",
    excerpt: "A comprehensive guide to understanding merit-based vs need-based aid, and how to craft a winning application for top American universities.",
    category: "Scholarships",
    author: "Sarah Jenkins",
    date: "Oct 12, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "UK Student Visa Changes for 2027",
    excerpt: "Everything you need to know about the latest policy updates regarding the Graduate Route and dependent visas in the United Kingdom.",
    category: "Visa Updates",
    author: "David Chen",
    date: "Oct 10, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Top 10 Affordable Cities for International Students in Australia",
    excerpt: "Discover the hidden gems of Australia where world-class education meets an affordable cost of living and vibrant student culture.",
    category: "Student Life",
    author: "Emma Watson",
    date: "Oct 05, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Navigating the Canadian University Application System",
    excerpt: "Step-by-step breakdown of how to apply for Fall 2027 intakes across top Canadian provinces, including standard requirements.",
    category: "Study Tips",
    author: "Michael Ross",
    date: "Sep 28, 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1550133730-695473e544be?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Ivy League Admission Trends: What Changed This Year",
    excerpt: "An in-depth analysis of acceptance rates, test-optional policies, and what admissions officers are really looking for right now.",
    category: "University News",
    author: "Jessica Pearson",
    date: "Sep 20, 2026",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Balancing Part-Time Work and Studies in Europe",
    excerpt: "Practical advice on managing your time effectively while taking advantage of post-study work opportunities across the EU.",
    category: "Student Life",
    author: "Luis Harvey",
    date: "Sep 15, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2000&auto=format&fit=crop"
  }
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = POSTS.filter(post => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50/50 pt-32 pb-24 selection:bg-black selection:text-white">
      {/* Hero Section */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center space-x-2 bg-white px-3 py-1 rounded-full ring-1 ring-black/5 mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            <span className="text-xs font-medium uppercase tracking-wider text-gray-900">
              News & Insights
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-light tracking-tight text-gray-900 mb-6 leading-[1.1]">
            Global Education <br />
            <span className="font-medium">Blog</span>
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed max-w-2xl">
            Stay updated with the latest news on international education, university admissions, scholarships, and student life abroad.
          </p>
        </motion.div>
      </section>

      {/* Filters & Search */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto mb-16">
        <div className="flex flex-col lg:flex-row gap-6 justify-between items-start lg:items-center">
          
          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-black text-white"
                    : "bg-white text-gray-600 ring-1 ring-black/5 hover:bg-gray-50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full lg:w-80 shrink-0">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white pl-11 pr-4 py-3 rounded-full text-sm outline-none ring-1 ring-black/5 focus:ring-2 focus:ring-black/10 transition-all placeholder:text-gray-400"
            />
          </div>

        </div>
      </section>

      {/* Blog Grid */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-white rounded-[2rem] overflow-hidden ring-1 ring-black/5 flex flex-col hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-60 w-full overflow-hidden bg-gray-100">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-gray-900">
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center text-xs text-gray-500 mb-4 space-x-4">
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <User className="w-3 h-3 mr-1" />
                    {post.author}
                  </div>
                </div>

                <h2 className="text-xl font-medium text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-sm text-gray-500 leading-relaxed mb-6 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-gray-100 mt-auto">
                  <Link href={`#`} className="inline-flex items-center text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors">
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                  <button className="text-gray-400 hover:text-gray-900 transition-colors">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        
        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-xl font-medium text-gray-900 mb-2">No articles found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </section>
    </div>
  );
}
