import React from 'react';

const categories = [
  {
    name: 'Workstation',
    items: [
      {
        title: 'MacBook Pro 16" M1 Max',
        description: 'I was using an Intel-based 16" MacBook Pro prior to this and the difference is night and day. I\'ve never heard the fans turn on a single time, even under the incredibly heavy loads I put it through with our various build processes.',
      },
      {
        title: 'Apple Pro Display XDR',
        description: 'The only display on the market if you want something HiDPI and bigger than 27". When you\'re working at planetary scale, every pixel you can get counts.',
      },
      {
        title: 'Herman Miller Aeron Chair',
        description: 'If you\'re going to sit for long periods, this is the chair to sit in. I\'ve had mine for over a decade and it\'s still as comfortable as the day I got it.',
      },
    ],
  },
  {
    name: 'Development Tools',
    items: [
      {
        title: 'VSCode',
        description: 'My editor of choice. The extensibility and community support make it unbeatable for web development.',
      },
      {
        title: 'iTerm2',
        description: 'I\'m honestly not even sure what features I get with this that aren\'t just part of the macOS Terminal but it\'s what I use.',
      },
      {
        title: 'TablePlus',
        description: 'Great software for working with databases. Has saved me from building about a thousand admin interfaces for my various projects over the years.',
      },
    ],
  },
];

const Uses = () => {
  return (
    <div className="py-16 sm:py-20">
      <h1 className="text-4xl sm:text-5xl font-bold mb-8">
        Software I use, gadgets I love, and other things I recommend.
      </h1>
      
      <p className="mt-4 text-gray-600 dark:text-gray-400">
        I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I'm being productive when I'm really just procrastinating. Here's a big list of all of my favorite stuff.
      </p>
      
      <div className="mt-16 space-y-20">
        {categories.map((category) => (
          <div key={category.name}>
            <h2 className="text-2xl font-bold mb-8">{category.name}</h2>
            <div className="space-y-12">
              {category.items.map((item) => (
                <div key={item.title} className="group relative">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Uses;