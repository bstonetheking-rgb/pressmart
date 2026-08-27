import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPostsData } from '../data/mockData';
import { BlogPost } from '../types';
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  Sparkles,
  BookOpen,
  X,
  Share2,
  CheckCircle2,
  Mail
} from 'lucide-react';
import { WhatsAppIcon } from '../components/WhatsAppWidget';

export const BlogsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);
  const [subscribed, setSubscribed] = useState(false);
  const [emailInput, setEmailInput] = useState('');

  const categories = ['All', 'Market Analysis', 'Legal & Titles', 'Investment Guide', 'Architecture & Design'];

  const filteredPosts = blogPostsData.filter((post) => {
    if (selectedCategory === 'All') return true;
    return post.category.toLowerCase().includes(selectedCategory.toLowerCase().split(' ')[0]);
  });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
      setEmailInput('');
    }
  };

  return (
    <div className="pt-24 pb-20 bg-[#F8F9FA] min-h-screen">
      {/* Hero Header */}
      <section className="bg-neutral-950 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-neutral-400">
            <Link to="/" className="hover:text-[#FDD835]">Home</Link>
            <span>/</span>
            <span className="text-[#FDD835]">Market Intelligence & Insights</span>
          </div>

          <div className="max-w-3xl space-y-3">
            <span className="px-3.5 py-1.5 rounded-full bg-[#FDD835] text-neutral-950 text-xs font-extrabold uppercase tracking-wider inline-block">
              Nigeria Real Estate Intelligence
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Market Reports, Legal Guides & Investment Analysis
            </h1>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              Actionable research on land title regularizations, rental yields in Banana Island and Maitama, infrastructure expansion, and diaspora investment strategies.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 space-y-8">
        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 p-2 bg-white rounded-2xl border border-neutral-200/80 shadow-xs">
          <span className="text-xs font-bold text-neutral-500 px-3">Filter Topics:</span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-neutral-950 text-white shadow-xs'
                  : 'text-neutral-600 hover:bg-neutral-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => setActiveArticle(post)}
              className="group bg-white rounded-2xl overflow-hidden border border-neutral-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              {/* Image & Category Pill */}
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-3.5 left-3.5 px-3 py-1 bg-neutral-950/85 backdrop-blur-md text-[#FDD835] text-[11px] font-extrabold rounded-full">
                  {post.category}
                </span>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-xs text-neutral-500">
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

                  <h3 className="text-lg font-bold text-neutral-950 group-hover:text-neutral-700 transition-colors leading-snug line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-600 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-neutral-900 group-hover:underline flex items-center gap-1">
                    <span>Read Full Analysis</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="text-xs text-neutral-400 font-medium">By {post.author.name}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Subscription Banner */}
        <div className="bg-[#0B2545] text-white rounded-3xl p-8 sm:p-12 border border-blue-900 shadow-lg relative overflow-hidden">
          <div className="max-w-2xl space-y-4 relative z-10">
            <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs font-bold uppercase tracking-wider border border-emerald-500/30">
              Pressmart Private Intelligence
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Receive Quarterly Lagos & Abuja Real Estate Valuation Reports
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Get institutional capital appreciation benchmarks, infrastructure updates, and new off-market opportunities delivered directly to your inbox.
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 pt-2">
              <input
                type="email"
                required
                placeholder="Enter your corporate or personal email..."
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-xs sm:text-sm text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#FDD835]"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#FDD835] hover:bg-[#FBC02D] text-neutral-950 font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md cursor-pointer shrink-0"
              >
                Subscribe to Reports
              </button>
            </form>

            {subscribed && (
              <div className="flex items-center gap-2 text-xs text-emerald-300 pt-2 animate-fadeIn">
                <CheckCircle2 className="w-4 h-4" />
                <span>Thank you! You are subscribed to Pressmart Market Intelligence.</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Article Detail Reading Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-neutral-200 shadow-2xl p-6 sm:p-8 space-y-6 relative">
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="px-3 py-1 bg-neutral-950 text-[#FDD835] text-xs font-bold rounded-full">
                {activeArticle.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 leading-tight">
                {activeArticle.title}
              </h2>
              <div className="flex items-center gap-4 text-xs text-neutral-500 pt-1">
                <span>By {activeArticle.author.name}</span>
                <span>•</span>
                <span>{activeArticle.date}</span>
                <span>•</span>
                <span>{activeArticle.readTime}</span>
              </div>
            </div>

            <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-neutral-100">
              <img
                src={activeArticle.image}
                alt={activeArticle.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-neutral max-w-none text-xs sm:text-sm text-neutral-700 space-y-4 leading-relaxed">
              <p className="font-semibold text-neutral-900 text-sm sm:text-base">
                {activeArticle.excerpt}
              </p>
              <p>
                Nigeria’s luxury real estate landscape continues to demonstrate remarkable resilience and capital growth, anchored by rapid urban infrastructure development, rising institutional diaspora inflows, and strong demand for secure, title-verified assets in prime enclaves like Banana Island, Ikoyi, Eko Atlantic City, and the Maitama Diplomatic Zone in Abuja.
              </p>
              <h4 className="text-base font-bold text-neutral-950 pt-2">Key Strategic Takeaways:</h4>
              <ul className="list-disc pl-5 space-y-1.5 text-neutral-800">
                <li>Prioritize properties with verifiable Governor’s Consent and Federal/State Certificates of Occupancy (C of O).</li>
                <li>Waterfront properties in Lagos Island have recorded a consistent 18-24% annualized capital appreciation.</li>
                <li>Smart automation and solar hybrid power systems add an immediate 12-15% premium to rental yields.</li>
              </ul>
              <p>
                For personalized guidance on deploying capital or structuring real estate investments in Nigeria, connect directly with our advisory specialists.
              </p>
            </div>

            <div className="pt-4 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-3">
              <a
                href="https://wa.me/2347086429976?text=Hello%20Pressmart%2C%20I%20read%20your%20market%20intelligence%20article%20and%20would%20like%20to%20discuss%20investment%20opportunities."
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-[#25D366] text-white text-xs font-bold rounded-xl flex items-center gap-2"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Discuss with an Advisor on WhatsApp</span>
              </a>

              <button
                onClick={() => setActiveArticle(null)}
                className="px-5 py-2.5 bg-neutral-950 text-white text-xs font-bold rounded-xl"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
