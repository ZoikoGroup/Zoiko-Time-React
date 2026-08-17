import React from "react";

interface Article {
  title: string;
  category: string;
  excerpt: string;
  publishDate: string;
  reviewDate: string;
  author: string;
  linkText: string;
  image?: string;
  typeBadge?: "Example" | "Opinion";
}

interface ArticlesGridProps {
  articles: Article[];
}

export default function ArticlesGrid({ articles }: ArticlesGridProps) {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 font-sans">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article, idx) => (
          <div
            key={idx}
            className="bg-white  rounded-2xl shadow-[0px_6px_18px_0px_rgba(14,31,61,0.03)] overflow-hidden dark:bg-slate-900 dark:border-slate-800 flex flex-col justify-between min-h-[440px] hover:shadow-md transition-shadow duration-155"
          >
            <div>
              {/* Card Image */}
              <div className="h-36 w-full overflow-hidden border-b border-gray-200 dark:border-slate-800">
                {article.image ? (
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="h-full w-full bg-slate-100 dark:bg-slate-850 flex items-center justify-center text-slate-400 text-xs font-medium select-none">
                    [Image Placeholder]
                  </div>
                )}
              </div>
              
              {/* Content */}
              <div className="p-5 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">
                    {article.category}
                  </span>
                  {article.typeBadge && (
                    <span className="bg-orange-100 text-yellow-750 dark:bg-orange-950/30 dark:text-yellow-400 rounded-md px-1.5 py-0.5 text-[9px] font-bold">
                      {article.typeBadge}
                    </span>
                  )}
                </div>
                <h3 className="text-base font-bold text-slate-850 dark:text-white leading-snug">
                  {article.title}
                </h3>
                <p className="text-xs text-slate-505 dark:text-slate-400 leading-relaxed">
                  {article.excerpt}
                </p>
              </div>
            </div>

            {/* Card Footer */}
            <div className="px-5 pb-5">
              <div className="border-t border-gray-100 dark:border-slate-855/50 pt-3.5 mb-3 flex flex-wrap items-center gap-1 text-[10px] text-slate-405 dark:text-slate-500 font-medium">
                <span>Published {article.publishDate}</span>
                <span>·</span>
                <span>{article.author}</span>
                <span>·</span>
                <span className="text-teal-705 dark:text-teal-450 font-bold">{article.reviewDate}</span>
              </div>
              <div className="text-teal-700 dark:text-teal-400 text-xs font-semibold flex items-center gap-1 select-none hover:underline cursor-pointer">
                <span>{article.linkText}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
