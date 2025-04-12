import React from 'react';

const articles = [
  {
    date: 'September 5, 2022',
    title: 'Crafting a design system for a multiplanetary future',
    description: 'Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.',
  },
  // Add more articles as needed
];

const Articles = () => {
  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold mb-8">
        Writing on software design,<br />
        company building, and the<br />
        aerospace industry.
      </h2>
      <div className="space-y-12">
        {articles.map((article) => (
          <article key={article.title} className="group">
            <time className="text-gray-500 text-sm">{article.date}</time>
            <h3 className="text-xl font-semibold mt-2 group-hover:text-[#10b981]">
              {article.title}
            </h3>
            <p className="text-gray-400 mt-2">{article.description}</p>
            <a href="#" className="text-[#10b981] mt-4 inline-block">
              Read article →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Articles;