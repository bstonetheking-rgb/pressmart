import React, { useState } from 'react';
import { blogPostsData } from '../data/mockData';
import { BlogPost } from '../types';
import { BookOpen, ArrowUpRight, Calendar, Clock, X, User } from 'lucide-react';

export const BlogsSection: React.FC = () => {
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  return (
    <section id="blogs" className="py-20 bg-neutral-50/80 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-neutral-800 text-xs font-semibold uppercase tracking-wider mb-2.5 shadow-2xs">
              <BookOpen className="w-3.5 h-3.5 text-[#FDD835]" />
              Pressmart Journal & Insights
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
              Latest Architecture & Market Trends
            </h2>
            <p className="mt-2 text-neutral-600 text-sm sm:text-base max-w-xl">
              Curated perspectives on sustainable construction, waterfront acquisition, and global luxury markets.
            </p>
          </div>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPostsData.map((post) => (
            <article
              key={post.id}
              id={`blog-post-${post.id}`}
              className="bg-white rounded-3xl overflow-hidden border border-neutral-200 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              onClick={() => setActivePost(post)}
            >
              <div>
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/95 backdrop-blur-md text-neutral-900 shadow-xs">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-neutral-500 font-medium mb-2.5">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-neutral-400" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-neutral-950 tracking-tight group-hover:text-neutral-700 transition-colors line-clamp-2 mb-2">
                    {post.title}
                  </h3>

                  <p className="text-xs text-neutral-600 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Author & Read Action */}
              <div className="p-6 pt-0 flex items-center justify-between border-t border-neutral-100 mt-2">
                <div className="flex items-center gap-2.5">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    referrerPolicy="no-referrer"
                    className="w-6 h-6 rounded-full object-cover"
                  />
                  <span className="text-xs font-medium text-neutral-700">{post.author.name}</span>
                </div>

                <span className="inline-flex items-center gap-1 text-xs font-bold text-neutral-950 group-hover:underline">
                  <span>Read Article</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Blog Detail Reader Modal */}
      {activePost && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn">
          <div className="relative bg-white w-full max-w-3xl rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col">
            <div className="p-4 sm:p-6 border-b border-neutral-100 flex items-center justify-between sticky top-0 bg-white z-10">
              <span className="px-3 py-1 bg-neutral-100 text-neutral-800 text-xs font-bold rounded-full">
                {activePost.category}
              </span>
              <button
                onClick={() => setActivePost(null)}
                className="p-2 rounded-full hover:bg-neutral-100 text-neutral-500 hover:text-neutral-950 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden">
                <img src={activePost.image} alt={activePost.title} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
              </div>

              <div className="flex items-center gap-4 text-xs text-neutral-500">
                <span>Published on {activePost.date}</span>
                <span>•</span>
                <span>{activePost.readTime}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-950">
                {activePost.title}
              </h2>

              <div className="flex items-center gap-3 py-3 border-y border-neutral-100">
                <img src={activePost.author.avatar} alt="Author" referrerPolicy="no-referrer" className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <div className="text-xs font-bold text-neutral-900">{activePost.author.name}</div>
                  <div className="text-xs text-neutral-500">Pressmart Research & Intelligence Team</div>
                </div>
              </div>

              <div className="text-neutral-700 text-sm sm:text-base leading-relaxed space-y-4 whitespace-pre-line">
                {activePost.content}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
