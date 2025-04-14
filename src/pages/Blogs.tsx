import { useState, useEffect, useRef } from 'react';
import { X, ExternalLink, Share2, Copy, Check } from 'lucide-react';

type Blog = {
  id: string;
  date: string;
  title: string;
  description: string;
  readingTime: string;
  content: string;
};

// Component for rendering code blocks with syntax highlighting
const CodeBlock = ({ code }: { code: string }) => {
  const [copied, setCopied] = useState(false);
  const processedCode = code.trim();
  
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(processedCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  // Detect language based on code content (simplified version)
  const detectLanguage = () => {
    if (processedCode.includes('import React') || processedCode.includes('useState')) {
      return 'JavaScript/React';
    } else if (processedCode.includes('import {')) {
      return 'JavaScript';
    } else if (processedCode.startsWith('#')) {
      return 'Bash';
    }
    return 'JavaScript'; // Default
  };

  // Simple syntax highlighting as a fallback
  const highlightSyntax = (code: string) => {
    return code
      // Keywords
      .replace(
        /\b(const|let|var|function|return|import|export|from|if|else|for|while|try|catch|async|await)\b/g,
        '<span style="color: #c678dd;">$1</span>'
      )
      // Strings
      .replace(
        /(['"`])(.*?)\1/g, 
        '<span style="color: #e5c07b;">$1$2$1</span>'
      )
      // Comments
      .replace(
        /\/\/(.*)/g,
        '<span style="color: #7f848e;">//\$1</span>'
      )
      // Numbers
      .replace(
        /\b(\d+)\b/g,
        '<span style="color: #d19a66;">$1</span>'
      );
  };

  return (
    <div className="relative my-6 rounded-lg overflow-hidden bg-gray-900 dark:bg-gray-950 shadow-md">
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800 dark:bg-gray-900 text-xs text-gray-200">
        <span>{detectLanguage()}</span>
        <button
          onClick={copyToClipboard}
          className="text-gray-400 hover:text-white focus:outline-none transition-colors"
          aria-label="Copy code"
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
        </button>
      </div>
      <pre className="p-4 m-0 overflow-x-auto text-sm font-mono">
        <code 
          dangerouslySetInnerHTML={{ __html: highlightSyntax(processedCode) }} 
          className="text-gray-300"
        />
      </pre>
    </div>
  );
};

const genAIBlogs: Blog[] = [
  {
    id: 'building-genai-with-gemini',
    date: 'June 15, 2023',
    title: 'Building GenAI Applications with Google Gemini API',
    description: 'A comprehensive guide to creating powerful AI applications using Google\'s Gemini API. From setup to deployment, learn everything you need to know to build your first GenAI app today.',
    readingTime: '12 min read',
    content: `
      <h2>Building GenAI Applications with Google Gemini API</h2>
      
      <p>Hey there, fellow developer! 👋 I still remember the first time I used Google's Gemini API. I'd been experimenting with different AI models for weeks, but when I saw what Gemini could do, I knew the game had changed. In this guide, I'll walk you through my journey of setting up and creating your first Gemini-powered application—mistakes and all!</p>
      
      <h3>The Promise of Gemini</h3>
      
      <p>Before we dive into code, let's talk about why Gemini is exciting. Unlike earlier models I've worked with, Gemini offers multimodal capabilities right out of the box. This means it can understand text <em>and</em> images together, opening up possibilities I hadn't even considered before.</p>
      
      <p>But enough theory—let's get our hands dirty with some actual code!</p>
      
      <h3>Setting Up Your Environment</h3>
      
      <p>First things first: you'll need an API key. Head over to <a href="https://aistudio.google.com/" target="_blank">Google AI Studio</a> and create a new project. The process is straightforward, but I'll admit I got stuck here for about 30 minutes my first time because I missed the verification email in my spam folder. So check there if you don't see it right away!</p>
      
      <div class="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg my-4">
        <h4 class="font-bold text-blue-700 dark:text-blue-300 mb-2">💡 Pro Tip</h4>
        <p>Create a dedicated API key for each project you're working on. This makes it easier to manage usage limits and revoke access if needed.</p>
      </div>
      
      <p>Once you have your API key, it's time to install the SDK:</p>
      
      <pre><code>
      # Using npm
      npm install @google/generative-ai
      
      # Or using yarn
      yarn add @google/generative-ai
      </code></pre>
      
      <p>Now let's set up the basic configuration in your project:</p>
      
      <pre><code>
      // Basic setup in your app
      import { GoogleGenerativeAI } from "@google/generative-ai";
      
      // Initialize the API with your key
      const genAI = new GoogleGenerativeAI("YOUR_API_KEY");
      </code></pre>
      
      <p>I always create a separate config file to keep my API keys out of the main codebase—a lesson I learned the hard way after accidentally pushing keys to a public repo once! Here's how I structure it now:</p>
      
      <pre><code>
      // config.js - Add this file to .gitignore!
      export const GEMINI_API_KEY = "your-api-key-here";
      
      // main.js
      import { GEMINI_API_KEY } from './config.js';
      const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
      </code></pre>
      
      <h3>Making Your First API Call</h3>
      
      <p>Now for the exciting part! Let's create a simple text generation function. The first time I tried this, I expected it to be complicated, but it was surprisingly straightforward:</p>
      
      <pre><code>
      async function generateText(prompt) {
        // For text-only input, use the gemini-pro model
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        
        try {
          const result = await model.generateContent(prompt);
          const response = await result.response;
          return response.text();
        } catch (error) {
          console.error("Something went wrong:", error);
          return "Sorry, I encountered an error generating a response.";
        }
      }
      </code></pre>
      
      <div class="bg-amber-50 dark:bg-amber-900/30 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <h4 class="font-bold text-amber-700 dark:text-amber-300 mb-2">🛑 Common Pitfall</h4>
        <p>I spent hours debugging why my API calls weren't working, only to realize I had exceeded my free tier quota! Keep an eye on your usage in the Google AI Studio dashboard.</p>
      </div>
      
      <h3>Try It Yourself</h3>
      
      <p>Let's put our function to work with some prompts I've found particularly effective:</p>
      
      <div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
        <h4 class="font-bold mb-2">Interactive Example</h4>
        <p>Try these prompts in your application:</p>
        <ul class="list-disc ml-6 space-y-2">
          <li>"Write a function in JavaScript that finds the longest palindrome in a string"</li>
          <li>"Explain how React's useEffect hook works to a junior developer"</li>
          <li>"Generate a creative product description for a smart water bottle that tracks hydration"</li>
        </ul>
        <p class="mt-2"><em>What happens if you modify these prompts slightly? How does adding specific constraints affect the output?</em></p>
      </div>
      
      <p>When I first tried the palindrome prompt, I was blown away by not just getting a working function, but also comments explaining the algorithm's approach. That's when I realized how valuable Gemini could be for pair programming sessions.</p>
      
      <h3>Beyond the Basics: Adding Parameters</h3>
      
      <p>The real power comes when you start customizing your requests. Here's how I fine-tune responses for different needs:</p>
      
      <pre><code>
      async function generateCreativeText(prompt) {
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        
        // Configuration for more creative responses
        const generationConfig = {
          temperature: 0.9,  // Higher temperature = more creative
          topP: 0.8,
          topK: 40,
          maxOutputTokens: 2048,
        };
        
        const result = await model.generateContent({
          contents: [{ role: "user", parts: [{ text: prompt }]}],
          generationConfig,
        });
        
        return result.response.text();
      }
      </code></pre>
      
      <p>I use this function when creating marketing copy for clients—the higher temperature setting gives it just the right amount of creative flair without going off-topic.</p>
      
      <h3>Building a Chatbot with Context Memory</h3>
      
      <p>One of the most powerful features of Gemini is its ability to maintain context through conversations. Here's how I built a simple chatbot:</p>
      
      <pre><code>
      import { GoogleGenerativeAI } from "@google/generative-ai";
      
      const genAI = new GoogleGenerativeAI("YOUR_API_KEY");
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      
      // Initialize a chat session
      const chat = model.startChat({
        history: [
          {
            role: "system",
            parts: "You are a helpful assistant who provides concise, accurate information about web development."
          },
          {
            role: "user",
            parts: "I want to learn React.js",
          },
          {
            role: "model",
            parts: "That's a great choice! React is a popular JavaScript library for building user interfaces. What specific aspect of React would you like to learn about first?",
          },
        ],
        generationConfig: {
          maxOutputTokens: 500,
          temperature: 0.7,
        },
      });
      
      async function sendMessage(userInput) {
        try {
          const result = await chat.sendMessage(userInput);
          const response = await result.response;
          return response.text();
        } catch (error) {
          console.error("Error sending message:", error);
          return "Sorry, I encountered an error.";
        }
      }
      </code></pre>
      
      <p>I was amazed at how well the chatbot remembered previous messages. For example, I could ask "What is React?" and then follow up with "How does it compare to Angular?" without explicitly mentioning React again. The model understood from context what I was referring to.</p>
      
      <h3>Working with Images in Gemini Pro Vision</h3>
      
      <p>Now, let's explore one of Gemini's most impressive features: the ability to analyze images. I built a simple code review tool that can analyze screenshots of code and provide suggestions:</p>
      
      <pre><code>
      async function analyzeImage(imagePath, prompt) {
        // For text-and-image input, use the gemini-pro-vision model
        const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });
        
        // Prepare the image data
        const imageData = await readImageAsBase64(imagePath);
        
        const result = await model.generateContent([
          prompt,
          {
            inlineData: {
              data: imageData,
              mimeType: "image/jpeg"
            }
          }
        ]);
        
        return result.response.text();
      }
      
      // Helper function to read an image file as base64
      async function readImageAsBase64(filePath) {
        // For browser:
        const response = await fetch(filePath);
        const blob = await response.blob();
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result.split(',')[1]);
          reader.onerror = reject;
          reader.readAsDataURL(blob);
        });
      }
      </code></pre>
      
      <p>I tested this with a screenshot of a React component that had some performance issues, and Gemini accurately identified the unnecessary re-renders and suggested using React.memo and useCallback. I was genuinely impressed!</p>
      
      <h3>A Real-World Example: Building a Coding Assistant</h3>
      
      <p>Let me share a practical example from my own work. I built a simple coding assistant for my team that helps us document our functions better. Here's a simplified version:</p>
      
      <pre><code>
      // A real helper I use almost daily
      async function generateFunctionDocumentation(functionCode) {
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        
        const prompt = \`
          Given this JavaScript function:
          
          \${functionCode}
          
          Please provide:
          1. A clear description of what this function does
          2. Documentation for each parameter
          3. An explanation of the return value
          4. A simple example of how to use this function
          5. Any potential edge cases to consider
          
          Format the output as JSDoc comments that I can add directly above the function.
        \`;
        
        const result = await model.generateContent(prompt);
        return result.response.text();
      }
      
      // Example usage
      const myFunction = \`
      function calculateDiscountedPrice(originalPrice, discountPercentage, applyAdditionalDiscount = false) {
        const discountMultiplier = 1 - (discountPercentage / 100);
        let finalPrice = originalPrice * discountMultiplier;
        
        if (applyAdditionalDiscount && finalPrice > 100) {
          finalPrice -= 10;
        }
        
        return finalPrice;
      }
      \`;
      
      generateFunctionDocumentation(myFunction)
        .then(docs => console.log(docs));
      </code></pre>
      
      <p>This saved our team countless hours of documentation work, and the quality is surprisingly good—sometimes better than what we would have written ourselves!</p>
      
      <h3>Integrating Gemini with React Applications</h3>
      
      <p>Now, let's see how to integrate Gemini into a React application. Here's a simple component that allows users to generate text:</p>
      
      <pre><code>
      // TextGenerator.jsx
      import { useState } from 'react';
      import { GoogleGenerativeAI } from '@google/generative-ai';
      
      export default function TextGenerator() {
        const [prompt, setPrompt] = useState('');
        const [result, setResult] = useState('');
        const [loading, setLoading] = useState(false);
        const [error, setError] = useState(null);
        
        const generateAIResponse = async () => {
          if (!prompt) return;
          
          setLoading(true);
          setError(null);
          
          try {
            // Initialize the API with your key
            const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);
            const model = genAI.getGenerativeModel({ model: "gemini-pro" });
            
            const result = await model.generateContent(prompt);
            const response = await result.response;
            setResult(response.text());
          } catch (err) {
            console.error('Error generating content:', err);
            setError('Failed to generate content. Please try again.');
          } finally {
            setLoading(false);
          }
        };
        
        return (
          <div className="max-w-lg mx-auto p-4 bg-white rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Gemini Text Generator</h2>
            
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">Your Prompt:</label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="w-full p-3 border rounded-md"
                rows={4}
                placeholder="Enter your prompt here..."
              />
            </div>
            
            <button
              onClick={generateAIResponse}
              disabled={loading || !prompt}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400"
            >
              {loading ? 'Generating...' : 'Generate Response'}
            </button>
            
            {error && (
              <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
                {error}
              </div>
            )}
            
            {result && (
              <div className="mt-4">
                <h3 className="font-medium mb-2">Generated Response:</h3>
                <div className="p-3 bg-gray-50 rounded-md whitespace-pre-wrap">
                  {result}
                </div>
              </div>
            )}
          </div>
        );
      }
      </code></pre>
      
      <p>Remember to store your API key in an environment variable! For React applications, you'll need to prefix it with <code>REACT_APP_</code> to make it accessible.</p>
      
      <h3>Responsible AI Development</h3>
      
      <p>With great power comes great responsibility. Always consider these best practices when building AI applications:</p>
      
      <ol>
        <li><strong>Content Safety:</strong> Use Gemini's built-in safety filters and implement additional safeguards for your specific use case.</li>
        <li><strong>User Consent:</strong> Always inform users when they're interacting with AI-generated content.</li>
        <li><strong>Privacy Protection:</strong> Don't store or process sensitive user data without explicit permission.</li>
        <li><strong>Human Oversight:</strong> For critical applications, keep humans in the loop for reviewing AI outputs.</li>
      </ol>
      
      <div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
        <h4 class="font-bold mb-2">Quick Exercise</h4>
        <p>Think about the application you want to build. What potential ethical concerns might arise? How can you address them proactively in your design?</p>
      </div>
      
      <h3>What's Next?</h3>
      
      <p>Congratulations! You now have the foundational knowledge to build powerful GenAI applications with Google's Gemini API. As you develop your projects, remember that the field is constantly evolving. Keep experimenting, stay curious, and share what you learn with others.</p>
      
      <p>Next steps you might want to explore:</p>
      <ul>
        <li>Fine-tuning your prompts for better results</li>
        <li>Combining Gemini with other APIs for more powerful applications</li>
        <li>Exploring Gemini's capabilities in other programming languages</li>
        <li>Building domain-specific assistants for your industry</li>
      </ul>
      
      <p>Have you started experimenting with Gemini yet? I'd love to hear about your experiences! Feel free to reach out with questions or share your projects.</p>
      
      <div class="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg my-4">
        <h4 class="font-bold text-green-700 dark:text-green-300 mb-2">📚 Resources</h4>
        <ul class="list-disc ml-6">
          <li><a href="https://ai.google.dev/docs/gemini_api" target="_blank">Official Gemini API Documentation</a></li>
          <li><a href="https://github.com/google/generative-ai-js" target="_blank">Google's JavaScript SDK on GitHub</a></li>
          <li><a href="https://aistudio.google.com/" target="_blank">Google AI Studio</a> - Create and test prompts before coding</li>
          <li><a href="https://github.com/google-gemini/cookbook" target="_blank">Gemini Cookbook</a> - Collection of example implementations</li>
        </ul>
      </div>
      
      <p>Until next time, happy coding! Remember, the best way to learn is by doing—so open up your editor and start building something amazing with Gemini today.</p>
    `
  }
];

const Blogs = () => {
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [shareSuccess, setShareSuccess] = useState<boolean | null>(null);
  const blogContentRef = useRef<HTMLDivElement>(null);

  const openBlog = (blog: Blog) => {
    setSelectedBlog(blog);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  const handleShare = async (e: React.MouseEvent, blog: Blog) => {
    e.stopPropagation(); // Prevent opening the blog when clicking share
    
    const shareData = {
      title: blog.title,
      text: blog.description,
      url: window.location.href,
    };

    try {
      if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
        // Use Web Share API if available
        await navigator.share(shareData);
        setShareSuccess(true);
      } else {
        // Fallback to clipboard
        await navigator.clipboard.writeText(window.location.href);
        setShareSuccess(true);
      }
      setTimeout(() => setShareSuccess(null), 2000);
    } catch (error) {
      console.error('Error sharing:', error);
      setShareSuccess(false);
      setTimeout(() => setShareSuccess(null), 2000);
    }
  };

  // Process the blog content to replace code blocks with our React component
  useEffect(() => {
    if (isModalOpen && blogContentRef.current && selectedBlog) {
      const preElements = blogContentRef.current.querySelectorAll('pre');
      
      preElements.forEach((preElement) => {
        // Skip already processed elements
        if (preElement.classList.contains('processed')) return;
        
        // Mark as processed
        preElement.classList.add('processed');
        
        // Extract the code content
        const codeElement = preElement.querySelector('code');
        if (!codeElement) return;
        
        // Add proper styles to the pre element
        preElement.classList.add('relative', 'rounded-lg', 'overflow-hidden');
        
        // Add monospace and proper styling to code element
        codeElement.classList.add('font-mono', 'text-sm');
      });
    }
  }, [isModalOpen, selectedBlog]);
  
  // Function to process blog content
  const processContent = (content: string) => {
    // Replace code blocks with our custom component
    return content.replace(
      /<pre><code>([\s\S]*?)<\/code><\/pre>/g, 
      (_, code) => `<div class="code-block-container">${code}</div>`
    );
  };

  return (
    <div className="py-16 sm:py-20">
      <div>
        <div className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 border border-teal-100 dark:border-teal-800/50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
          {genAIBlogs.map((blog) => (
            <article 
              key={blog.id} 
              className="cursor-pointer p-6"
              onClick={() => openBlog(blog)}
            >
              <div className="sm:flex items-start justify-between">
                <div className="sm:flex-1">
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                    {blog.title}
                  </h2>
                  
                  <div className="mt-3 flex items-center text-sm">
                    <time className="text-gray-500 dark:text-gray-400">{blog.date}</time>
                    <span className="mx-2 text-gray-500 dark:text-gray-400">•</span>
                    <span className="text-gray-500 dark:text-gray-400">{blog.readingTime}</span>
                  </div>
                  
                  <p className="mt-4 text-base text-gray-600 dark:text-gray-300">
                    {blog.description}
                  </p>
                </div>
              </div>
              
              <div className="mt-6 flex items-center">
                <button
                  className="inline-flex items-center text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 font-medium"
                  onClick={(e) => {
                    e.stopPropagation();
                    openBlog(blog);
                  }}
                >
                  Read full article
                  <ExternalLink className="ml-1 h-4 w-4" />
                </button>
                
                <div className="ml-auto">
                  <button 
                    className="inline-flex items-center text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                    onClick={(e) => handleShare(e, blog)}
                    aria-label="Share this article"
                  >
                    <Share2 className="mr-1.5 h-4 w-4" />
                    <span className="text-sm">Share</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Share success/error message */}
      {shareSuccess !== null && (
        <div 
          className={`fixed bottom-4 right-4 px-4 py-2 rounded-lg shadow-lg transition-opacity duration-300 ${
            shareSuccess 
              ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100' 
              : 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100'
          }`}
        >
          {shareSuccess 
            ? 'Link copied to clipboard!' 
            : 'Failed to share. Please try again.'}
        </div>
      )}

      {/* Modal for displaying blog content */}
      {isModalOpen && selectedBlog && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-start overflow-y-auto p-4 backdrop-blur-sm">
          <div className="bg-white dark:bg-gray-900 rounded-xl max-w-4xl w-full my-8 max-h-[90vh] overflow-hidden shadow-xl">
            <div className="sticky top-0 bg-white dark:bg-gray-900 p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center z-10">
              <h2 className="text-xl font-bold truncate pr-4">{selectedBlog.title}</h2>
              <div className="flex items-center space-x-3">
                <button 
                  onClick={(e) => handleShare(e, selectedBlog)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors rounded-full p-1 hover:bg-gray-100 dark:hover:bg-gray-800"
                  aria-label="Share this article"
                >
                  <Share2 size={20} />
                </button>
                <button 
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors rounded-full p-1 hover:bg-gray-100 dark:hover:bg-gray-800"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
            
            <div className="overflow-y-auto max-h-[calc(90vh-68px)]">
              <div className="p-6">
                {/* Blog metadata */}
                <div className="flex justify-between items-center mb-6">
                  <time className="text-sm text-gray-500 dark:text-gray-400">
                    {selectedBlog.date}
                  </time>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {selectedBlog.readingTime}
                  </span>
                </div>
                
                {/* Blog content */}
                <div 
                  ref={blogContentRef}
                  className="prose dark:prose-invert max-w-none prose-headings:scroll-mt-20 prose-a:text-teal-600 dark:prose-a:text-teal-400 hover:prose-a:text-teal-500 dark:hover:prose-a:text-teal-300 prose-pre:p-0 prose-pre:bg-transparent prose-pre:overflow-hidden"
                  dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
                />

                {/* Add CSS for code blocks */}
                <style jsx global>{`
                  /* VS Code-inspired code block styles */
                  pre {
                    background-color: #282c34;
                    border-radius: 6px;
                    margin: 1.5rem 0;
                    position: relative;
                  }
                  
                  pre::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 2rem;
                    background-color: #21252b;
                    border-top-left-radius: 6px;
                    border-top-right-radius: 6px;
                    z-index: 0;
                  }
                  
                  pre code {
                    display: block;
                    padding: 2.5rem 1.5rem 1.5rem;
                    overflow-x: auto;
                    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
                    font-size: 0.875rem;
                    line-height: 1.6;
                    color: #abb2bf;
                  }
                  
                  /* Add a language indicator */
                  pre::after {
                    content: 'JavaScript';
                    position: absolute;
                    top: 0.5rem;
                    left: 1rem;
                    font-size: 0.75rem;
                    color: #abb2bf;
                    z-index: 1;
                  }
                  
                  /* Add a copy button */
                  pre:hover .copy-button {
                    opacity: 1;
                  }
                  
                  .copy-button {
                    position: absolute;
                    top: 0.5rem;
                    right: 1rem;
                    opacity: 0;
                    transition: opacity 0.2s;
                    background: transparent;
                    border: none;
                    color: #abb2bf;
                    z-index: 2;
                    cursor: pointer;
                  }
                  
                  .copy-button:hover {
                    color: white;
                  }
                  
                  /* Syntax highlighting */
                  .token-keyword { color: #c678dd; }
                  .token-string { color: #e5c07b; }
                  .token-comment { color: #7f848e; }
                  .token-number { color: #d19a66; }
                  .token-function { color: #61afef; }
                  .token-operator { color: #56b6c2; }
                  .token-punctuation { color: #abb2bf; }
                  
                  /* Dark mode adjustments */
                  .dark pre {
                    background-color: #1e1e1e;
                  }
                  
                  .dark pre::before {
                    background-color: #252525;
                  }
                `}</style>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blogs;