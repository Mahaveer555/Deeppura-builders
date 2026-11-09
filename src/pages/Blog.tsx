import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, User, BookOpen, ShieldCheck, Search, ChevronRight, Home } from 'lucide-react';
import { blogPosts, BlogPost } from '../data/blogPosts';

export const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Area Guide', 'Buying Guide', 'Investment', 'Home Advice'];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.keywords.some(k => k.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts[0];

  return (
    <div className="min-h-screen bg-[#FAF7F0] text-slate-800">
      
      {/* Breadcrumbs */}
      <div className="bg-[#F5EEDB] border-b border-[#E8D8B3] py-2.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-slate-600">
          <Link to="/" className="inline-flex items-center gap-1 hover:text-[#8A6632] transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="font-bold text-[#8A6632]">Blog &amp; Property Guides</span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-b from-[#18140E] via-[#241D14] to-[#18140E] text-white overflow-hidden border-b border-[#C5A46D]/30">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C5A46D_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C5A46D]/15 border border-[#C5A46D]/40 text-[#C5A46D] text-xs font-bold uppercase tracking-wider mb-4"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Kota Real Estate Knowledge Hub</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight max-w-4xl mx-auto"
          >
            Real Estate Insights, Buyer Guides &amp; Property Knowledge in Kota
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed"
          >
            Authentic, expert-curated guidance on choosing areas, verifying RERA &amp; UIT approvals, comparing flat configurations, and maximizing property investments across Kota, Rajasthan.
          </motion.p>

          {/* Search & Category Filter Bar */}
          <div className="mt-8 max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles by locality, keyword (e.g. 100 Ft Road, RERA, 2 BHK)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-[#C5A46D]/40 text-white placeholder-slate-400 focus:outline-none focus:border-[#C5A46D] focus:ring-2 focus:ring-[#C5A46D]/20 text-sm transition-all shadow-lg"
              />
              <Search className="w-5 h-5 text-[#C5A46D] absolute left-3.5 top-1/2 -translate-y-1/2" />
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#C5A46D] text-slate-950 shadow-md'
                      : 'bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-[#C5A46D]/50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Featured Post (shown if no search query and 'All' category) */}
        {selectedCategory === 'All' && searchQuery === '' && featuredPost && (
          <div className="mb-14">
            <div className="text-xs font-bold uppercase tracking-wider text-[#8A6632] mb-3 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#8A6632]" />
              <span>FEATURED KOTA REAL ESTATE GUIDE</span>
            </div>

            <Link
              to={`/blog/${featuredPost.slug}`}
              className="group block rounded-3xl overflow-hidden bg-white border border-[#E8D8B3] shadow-lg hover:shadow-2xl hover:border-[#C5A46D] transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-auto overflow-hidden bg-slate-900">
                  <img
                    src={featuredPost.featuredImage}
                    alt={featuredPost.imageAlt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1.5 rounded-full bg-[#18140E]/80 backdrop-blur-md border border-[#C5A46D]/40 text-[#C5A46D] text-xs font-bold uppercase tracking-wider">
                      {featuredPost.category}
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#8A6632]" />
                        {featuredPost.publishDate}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#8A6632]" />
                        {featuredPost.readTime}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-black text-slate-900 group-hover:text-[#8A6632] transition-colors leading-tight mb-4">
                      {featuredPost.title}
                    </h2>

                    <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                      {featuredPost.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#F5EEDB] flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                      <User className="w-3.5 h-3.5 text-[#8A6632]" />
                      <span>{featuredPost.author.name}</span>
                    </div>

                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8A6632] group-hover:translate-x-1 transition-transform">
                      <span>Read Full Guide</span>
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* All Posts Grid */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              {searchQuery ? `Search Results for "${searchQuery}"` : 'All Articles & Local Guides'}
            </h2>
            <span className="text-xs font-medium text-slate-500">
              Showing {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
            </span>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-[#E8D8B3] p-8">
              <BookOpen className="w-12 h-12 text-[#C5A46D] mx-auto mb-3 opacity-60" />
              <h3 className="text-lg font-bold text-slate-800">No articles matched your criteria</h3>
              <p className="text-slate-500 text-xs mt-1">Try searching for terms like "100 Ft Road", "1 BHK", "RERA", or "Raipura".</p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                className="mt-4 px-4 py-2 rounded-xl bg-[#8A6632] text-white text-xs font-bold hover:bg-[#6e5025] transition-colors"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="group flex flex-col rounded-2xl overflow-hidden bg-white border border-[#E8D8B3] hover:border-[#C5A46D] shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <Link to={`/blog/${post.slug}`} className="block relative h-52 overflow-hidden bg-slate-900">
                    <img
                      src={post.featuredImage}
                      alt={post.imageAlt}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full bg-[#18140E]/80 backdrop-blur-md border border-[#C5A46D]/40 text-[#C5A46D] text-[11px] font-bold uppercase tracking-wider">
                        {post.category}
                      </span>
                    </div>
                  </Link>

                  <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow">
                    <div>
                      <div className="flex items-center gap-3 text-[11px] text-slate-500 mb-2.5">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-[#8A6632]" />
                          {post.publishDate}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-[#8A6632]" />
                          {post.readTime}
                        </span>
                      </div>

                      <h3 className="text-lg font-black text-slate-900 group-hover:text-[#8A6632] transition-colors leading-snug mb-2.5 line-clamp-2">
                        <Link to={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h3>

                      <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#F5EEDB] flex items-center justify-between">
                      <span className="text-[11px] text-slate-500 font-medium truncate max-w-[150px]">
                        {post.author.name}
                      </span>

                      <Link
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#8A6632] group-hover:text-[#6e5025] transition-colors"
                      >
                        <span>Read</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}

        </div>

        {/* Real Estate Trust CTA Strip */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-[#241D14] via-[#382C1D] to-[#241D14] p-8 sm:p-10 border border-[#C5A46D]/40 text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C5A46D]/20 border border-[#C5A46D]/40 text-[#C5A46D] text-xs font-bold uppercase tracking-wider mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Looking to Buy a Flat in Kota?</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
              Explore Mukundra Prime on 100 Ft. Road, Raipura, Kota
            </h2>
            <p className="text-sm text-slate-300 mt-2 leading-relaxed">
              RERA Approved (RAJ/P/2025/3532) &amp; UIT Sanctioned luxury 1, 2 &amp; 3 BHK residences with 14+ resort amenities, swimming pool, on-site temple, and up to 90% pre-approved bank loans.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Link
                to="/projects/mukundra-prime"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#C5A46D] to-[#8A6632] text-slate-950 font-black text-xs uppercase tracking-wider hover:brightness-110 transition-all shadow-lg"
              >
                Explore Mukundra Prime
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs uppercase tracking-wider transition-all"
              >
                Book Guided Site Visit
              </Link>
            </div>
          </div>
        </div>

      </section>

    </div>
  );
};
