import React from 'react';

const articles = [
  {
    date: 'September 5, 2022',
    title: 'Crafting a design system for a multiplanetary future',
    description: 'Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.',
    readingTime: '9 min read',
  },
  {
    date: 'September 2, 2022',
    title: 'Introducing Animaginary: High performance web animations',
    description: 'When you\'re building a website for a company as ambitious as Planetaria, you need to make an impression. I wanted people to visit our website and see animations that looked more realistic than reality itself.',
    readingTime: '7 min read',
  },
  {
    date: 'July 14, 2022',
    title: 'Rewriting the cosmOS kernel in Rust',
    description: 'When we released the first version of cosmOS last year, it was written in Go. Go is a wonderful programming language, but it\'s been a while since I\'ve seen an article on the front page of Hacker News about rewriting some important tool in Go and I see articles on there about rewriting things in Rust every single week.',
    readingTime: '12 min read',
  },
];

const Articles = () => {
  return (
    <div className="py-16 sm:py-20">
      <h1 className="text-4xl sm:text-5xl font-bold mb-8">
        Writing on software design, company building, and the aerospace industry.
      </h1>
      
      <div className="mt-16 sm:mt-20">
        <div className="space-y-20">
          {articles.map((article) => (
            <article key={article.title} className="group relative flex flex-col items-start">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#" className="hover:text-teal-500 dark:hover:text-teal-400">
                  {article.title}
                </a>
              </h2>
              
              <time className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                {article.date}
              </time>
              
              <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
                {article.description}
              </p>
              
              <div className="mt-4 flex items-center gap-4">
                <a
                  href="#"
                  className="text-sm font-medium text-teal-500 dark:text-teal-400 hover:text-teal-600 dark:hover:text-teal-500"
                >
                  Read article →
                </a>
                <span className="text-sm text-gray-500 dark:text-gray-400">{article.readingTime}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;