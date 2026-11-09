import React, { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  Calendar, Clock, ArrowLeft, Share2, Check, 
  ChevronRight, Home, ShieldCheck, Phone, 
  Sparkles 
} from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

export const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [copied, setCopied] = useState(false);

  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [slug]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  // Structured Data JSON-LD for BlogPosting
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    'headline': post.title,
    'description': post.metaDescription,
    'image': `https://deppura.vercel.app${post.featuredImage}`,
    'author': {
      '@type': 'Organization',
      'name': 'DEEPPURA GROUP',
      'url': 'https://deppura.vercel.app'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'DEEPPURA GROUP',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://deppura.vercel.app/assets/logo/deeppura-logo.png'
      }
    },
    'datePublished': '2026-11-01T08:00:00+05:30',
    'dateModified': '2026-11-09T08:00:00+05:30',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': `https://deppura.vercel.app/blog/${post.slug}`
    },
    'keywords': post.keywords.join(', ')
  };

  const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 3);

  // Simple Markdown-to-HTML parser for standard elements (headings, bold, lists, tables, links)
  const renderMarkdown = (content: string) => {
    const lines = content.trim().split('\n');
    const elements: React.ReactNode[] = [];
    let inTable = false;
    let tableRows: string[][] = [];
    let tableHeader: string[] = [];

    const flushTable = (key: string) => {
      if (tableHeader.length > 0) {
        elements.push(
          <div key={key} className="my-6 overflow-x-auto rounded-xl border border-[#E8D8B3] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#FAF7F0] border-b border-[#E8D8B3] text-[#8A6632] uppercase tracking-wider font-black">
                <tr>
                  {tableHeader.map((th, idx) => (
                    <th key={idx} className="p-3 sm:p-4 font-black">
                      {th.trim()}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F5EEDB]">
                {tableRows.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-amber-50/40 transition-colors">
                    {row.map((td, cIdx) => (
                      <td key={cIdx} className="p-3 sm:p-4 text-slate-700">
                        {renderInlineFormatted(td.trim())}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
      inTable = false;
      tableHeader = [];
      tableRows = [];
    };

    const renderInlineFormatted = (text: string) => {
      // Bold text **...**
      const parts = text.split(/(\*\*.*?\*\*)/g);
      return parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={i} className="font-bold text-slate-950">{part.slice(2, -2)}</strong>;
        }
        return part;
      });
    };

    lines.forEach((line, index) => {
      const trimmed = line.trim();

      // Check if table row
      if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
        const cells = trimmed.split('|').slice(1, -1);
        if (!inTable) {
          inTable = true;
          tableHeader = cells;
        } else if (trimmed.includes('---')) {
          // delimiter row, skip
        } else {
          tableRows.push(cells);
        }
        return;
      } else if (inTable) {
        flushTable(`table-${index}`);
      }

      if (trimmed === '') {
        return;
      }

      if (trimmed.startsWith('## ')) {
        const headingText = trimmed.replace('## ', '');
        elements.push(
          <h2 key={index} className="text-2xl sm:text-3xl font-black text-slate-900 mt-10 mb-4 pb-2 border-b border-[#E8D8B3]/60 leading-tight">
            {headingText}
          </h2>
        );
      } else if (trimmed.startsWith('### ')) {
        const subHeadingText = trimmed.replace('### ', '');
        elements.push(
          <h3 key={index} className="text-xl sm:text-2xl font-black text-slate-900 mt-6 mb-3 text-[#8A6632] leading-snug">
            {subHeadingText}
          </h3>
        );
      } else if (trimmed.startsWith('- ')) {
        const listItem = trimmed.replace('- ', '');
        elements.push(
          <li key={index} className="ml-5 list-disc text-sm sm:text-base text-slate-700 mb-2 leading-relaxed">
            {renderInlineFormatted(listItem)}
          </li>
        );
      } else if (trimmed.startsWith('---')) {
        elements.push(<hr key={index} className="my-8 border-[#E8D8B3]" />);
      } else {
        elements.push(
          <p key={index} className="text-sm sm:text-base text-slate-700 mb-4 leading-relaxed font-normal">
            {renderInlineFormatted(trimmed)}
          </p>
        );
      }
    });

    if (inTable) {
      flushTable('table-end');
    }

    return elements;
  };

  return (
    <div className="min-h-screen bg-[#FAF7F0] text-slate-800">
      
      {/* Inject Article JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify(articleSchema)}
      </script>

      {/* Breadcrumb Navigation */}
      <div className="bg-[#F5EEDB] border-b border-[#E8D8B3] py-2.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex items-center gap-2 text-xs text-slate-600 flex-wrap">
          <Link to="/" className="inline-flex items-center gap-1 hover:text-[#8A6632] transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link to="/blog" className="hover:text-[#8A6632] transition-colors">
            Blog &amp; Property Guides
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="font-bold text-[#8A6632] truncate max-w-xs">{post.title}</span>
        </div>
      </div>

      {/* Article Header & Main Container */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        
        {/* Top Back Link & Category */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8A6632] hover:text-[#6e5025] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Guides</span>
          </Link>

          <span className="px-3 py-1 rounded-full bg-[#8A6632]/10 border border-[#8A6632]/30 text-[#8A6632] text-xs font-bold uppercase tracking-wider">
            {post.category}
          </span>
        </div>

        {/* Article H1 Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.15] mb-6">
          {post.title}
        </h1>

        {/* Metadata Bar & Share Button */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[#E8D8B3] text-xs text-slate-600">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#241D14] text-[#C5A46D] flex items-center justify-center font-bold text-xs">
                DG
              </div>
              <div>
                <div className="font-bold text-slate-900">{post.author.name}</div>
                <div className="text-[11px] text-slate-500">{post.author.role}</div>
              </div>
            </div>

            <span className="hidden sm:inline text-slate-300">•</span>

            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#8A6632]" />
              {post.publishDate}
            </span>

            <span className="hidden sm:inline text-slate-300">•</span>

            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#8A6632]" />
              {post.readTime}
            </span>
          </div>

          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-[#E8D8B3] hover:border-[#8A6632] text-slate-700 hover:text-[#8A6632] transition-colors cursor-pointer text-xs font-semibold shadow-xs"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-600">Link Copied!</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5" />
                <span>Share Guide</span>
              </>
            )}
          </button>
        </div>

        {/* Featured Hero Image */}
        <div className="rounded-3xl overflow-hidden mb-10 shadow-xl border border-[#E8D8B3] bg-slate-900 relative">
          <img
            src={post.featuredImage}
            alt={post.imageAlt}
            className="w-full h-72 sm:h-96 md:h-[420px] object-cover"
          />
          <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white text-xs">
            {post.imageAlt}
          </div>
        </div>

        {/* Key Takeaways Callout Box */}
        <div className="mb-10 p-5 sm:p-6 rounded-2xl bg-[#F5EEDB] border border-[#E8D8B3] text-slate-800 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#8A6632] mb-2">
            <Sparkles className="w-4 h-4 text-[#8A6632]" />
            <span>Executive Summary</span>
          </div>
          <p className="text-sm leading-relaxed text-slate-700">
            {post.excerpt}
          </p>
        </div>

        {/* Rendered Article Body */}
        <div className="prose prose-slate max-w-none">
          {renderMarkdown(post.content)}
        </div>

        {/* Verified Keywords Tag Cloud */}
        <div className="mt-12 pt-6 border-t border-[#E8D8B3]">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
            Topics &amp; Local Keywords Covered:
          </div>
          <div className="flex flex-wrap gap-2">
            {post.keywords.map((kw, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg bg-white border border-[#E8D8B3] text-slate-600 text-xs font-medium"
              >
                #{kw}
              </span>
            ))}
          </div>
        </div>

        {/* Builder Author Bio Card */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-white border border-[#E8D8B3] shadow-md flex flex-col sm:flex-row items-center sm:items-start gap-5">
          <div className="w-16 h-16 rounded-2xl bg-[#18140E] border-2 border-[#C5A46D] flex items-center justify-center text-[#C5A46D] font-black text-xl shrink-0">
            DG
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-black text-slate-900">DEEPPURA GROUP</h3>
              <span className="px-2 py-0.5 rounded bg-amber-100 text-[#8A6632] text-[10px] font-black uppercase">
                Verified Builder
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Founded by Prakash Jain (Deeppura) • Directed by Animesh Jain
            </p>
            <p className="text-xs text-slate-600 mt-3 leading-relaxed">
              DEEPPURA GROUP is Kota's premier real estate developer committed to architectural excellence, legal clarity, and transparent customer relationships. Developers of landmark projects including Mukundra Prime (Raipura 100 Ft. Road), Mukundra Heights (R.K. Puram), Ashiyana Homes (Thekra), and Mahalaxmi Apartment (Chawani).
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-bold text-[#8A6632]">
              <Link to="/about" className="hover:underline flex items-center gap-1">
                <span>About DEEPPURA GROUP</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
              <Link to="/projects/mukundra-prime" className="hover:underline flex items-center gap-1">
                <span>Explore Mukundra Prime</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* In-Article Conversion Banner */}
        <div className="mt-12 rounded-3xl bg-gradient-to-br from-[#18140E] via-[#241D14] to-[#18140E] p-8 sm:p-10 border border-[#C5A46D]/40 text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C5A46D]/20 border border-[#C5A46D]/40 text-[#C5A46D] text-xs font-bold uppercase tracking-wider mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Direct Developer Allotment Desk</span>
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
              Looking for 1, 2 or 3 BHK Flats in Kota?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-2xl leading-relaxed">
              Explore <strong>Mukundra Prime</strong> on 100 Ft. Road, Raipura. Starting at ₹15 Lakhs* with swimming pool, temple, gym, and 14+ resort amenities. 100% RERA &amp; UIT approved.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="tel:7357690111"
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-[#C5A46D] to-[#8A6632] text-slate-950 font-black text-xs uppercase tracking-wider hover:brightness-110 transition-all flex items-center gap-2 shadow-lg"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Sales: 73576 90111</span>
              </a>
              <Link
                to="/projects/mukundra-prime"
                className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs uppercase tracking-wider transition-all"
              >
                View Mukundra Prime
              </Link>
            </div>
          </div>
        </div>

        {/* Related Articles Section */}
        {relatedPosts.length > 0 && (
          <div className="mt-16 pt-10 border-t border-[#E8D8B3]">
            <h3 className="text-2xl font-black text-slate-900 mb-6">
              More Property Guides in Kota
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((rel) => (
                <Link
                  key={rel.id}
                  to={`/blog/${rel.slug}`}
                  className="group block rounded-2xl overflow-hidden bg-white border border-[#E8D8B3] hover:border-[#C5A46D] shadow-sm hover:shadow-lg transition-all p-4"
                >
                  <div className="h-36 rounded-xl overflow-hidden bg-slate-900 mb-3">
                    <img
                      src={rel.featuredImage}
                      alt={rel.imageAlt}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <span className="text-[10px] font-bold text-[#8A6632] uppercase tracking-wider">
                    {rel.category}
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#8A6632] transition-colors leading-snug line-clamp-2 mt-1">
                    {rel.title}
                  </h4>
                  <div className="mt-2 text-[11px] text-slate-500">
                    {rel.readTime}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </article>

    </div>
  );
};
