import { Sparkles, Palette, ExternalLink, Leaf, Wind, Wand2, BookOpen, Camera, Cloud, Sun, Moon } from 'lucide-react';
import BannerAd from './Banner';
import Popup from './popup';

interface AITool {
  name: string;
  description: string;
  link: string;
  difficulty: string;
  price: string;
  tips: string[];
}

const prompts = [
  "Universal - Transform this photo into a Ghibli-style artwork.",
  "Spirit of the Forest – Add magical forest elements, floating spirit creatures, and glowing fireflies around the subject.",
  "Windy Fields Adventure – Place the subject in a vast, rolling field with golden wheat, blue skies, and a nostalgic breeze.",
];


const aiTools = [
  {
    name: "getimg.ai",
    description: "Platform that enables users to transform text prompts into Studio Ghibli-inspired images or apply the Ghibli style to photos.",
    link: "https://getimg.ai/models/ghibli-diffusion",
    difficulty: "Beginner",
    price: "Free (100 images/month) / Paid plans available",
    tips: prompts
  },
  {
    name: "OpenArt Studio Ghibli Generator",
    description: "AI tool that creates enchanting Studio Ghibli-inspired scenes from text prompts.",
    link: "https://openart.ai/generator/studio-ghibli",
    difficulty: "Beginner",
    price: "Free",
    tips: prompts
  },
  {
    name: "insMind Studio Ghibli Filter",
    description: "Free AI generator that converts photos into Ghibli-style artwork.",
    link: "https://www.insmind.com/studio-ghibli-filter/",
    difficulty: "Beginner",
    price: "Free",
    tips: prompts
  },
  {
    name: "Fotor Studio Ghibli Filter",
    description: "Online tool that applies a Studio Ghibli filter to images, transforming them into Ghibli-style art.",
    link: "https://www.fotor.com/features/studio-ghibli-filter/",
    difficulty: "Beginner",
    price: "Free",
    tips: prompts
  },
  {
    name: "Grok",
    description: "X (formerly Twitter) AI model designed for advanced text and image generation with a deep understanding of creative styles.",
    link: "https://grok.com",
    difficulty: "Intermediate",
    price: "Included with X Premium+",
    tips: prompts
  },
  {
    name: "ChatGPT (DALL-E 3)",
    description: "OpenAI’s advanced AI model capable of generating high-quality images based on detailed textual descriptions.",
    link: "https://openai.com/chatgpt",
    difficulty: "Beginner",
    price: "Free (with limitations) / Paid (Pro users get enhanced access)",
    tips: prompts
  },
  
  {
    name: "Deep Dream Generator",
    description: "A free AI image generator by Google that creates dreamlike, surreal images based on input photos.",
    link: "https://deepdreamgenerator.com",
    difficulty: "Beginner",
    price: "Free (limited features) / Paid plans available",
    tips: prompts
  },
  {
    name: "DeepAI Text-to-Image",
    description: "A free AI tool that generates images based on text descriptions.",
    link: "https://deepai.org/machine-learning-model/text2img",
    difficulty: "Beginner",
    price: "Free (with limited generations per day)",
    tips: prompts
  },
  {
    name: "Runway ML",
    description: "An AI-powered creative suite that offers text-to-image generation and video AI tools.",
    link: "https://runwayml.com",
    difficulty: "Intermediate",
    price: "Free (with limited features) / Paid plans available",
    tips: prompts
  },
  {
    name: "Canva Text to Image",
    description: "User-friendly AI image generator integrated into Canva, great for creating AI-generated social media content.",
    link: "https://www.canva.com",
    difficulty: "Beginner",
    price: "Included with Canva Pro",
    tips: prompts
  },
  {
    name: "Pixray",
    description: "A free AI art generator that allows users to create unique digital artwork from text descriptions.",
    link: "https://pixray.gob.io",
    difficulty: "Beginner",
    price: "Free",
    tips: prompts
  },
  {
    name: "Dream by Wombo",
    description: "A free AI-powered image generator that creates stunning digital paintings from text prompts.",
    link: "https://dream.ai",
    difficulty: "Beginner",
    price: "Free (with in-app purchases for extra features)",
    tips: prompts
  },
  {
    name: "Stable Diffusion",
    description: "Open-source AI model that can be fine-tuned for various artistic styles, including Ghibli-style images.",
    link: "https://stability.ai",
    difficulty: "Advanced",
    price: "Free (self-hosted) / Paid services available",
    tips: prompts
  },
  {
    name: "Leonardo.ai",
    description: "AI platform with custom models and fine-tuning capabilities, perfect for creating consistent digital artwork.",
    link: "https://leonardo.ai",
    difficulty: "Intermediate",
    price: "Free tier with paid options",
    tips: prompts
  },
];


function App() {
  return (
    <div className="min-h-screen bg-ghibli-cream font-ghibli">
      {/* Hero Section */}
      <header className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center"></div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center px-4 floating" style={{animationDelay: '0.3s'}}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-shadow-ghibli">
              Ghibli Style AI Guide
              <Sparkles className="inline-block ml-3 h-12 w-12 text-ghibli-yellow" />
            </h1>
            <p className="text-xl md:text-3xl text-white text-shadow-ghibli max-w-3xl mx-auto leading-relaxed">
              Transform your photos into magical Ghibli-inspired artwork using AI tools
            </p>
          </div>
        </div>
      </header>

      {/* Popup component with options */}
      <Popup 
        delay={2000} // Show popup after 2 seconds
        autoClose={15000} // Auto close after 15 seconds (optional)
      />

      <BannerAd/>

      {/* Introduction Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className="ghibli-card rounded-2xl p-10">
            <h2 className="text-4xl font-bold text-ghibli-navy mb-10 flex items-center">
              <BookOpen className="mr-3 h-8 w-8 text-ghibli-sage" />
              Understanding the Ghibli Style
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-ghibli-navy mb-6">Key Visual Elements</h3>
                <ul className="space-y-4 text-lg text-gray-700">
                  <li className="flex items-center">
                    <Sun className="h-5 w-5 mr-2 text-ghibli-rust" />
                    Soft, watercolor-like textures and backgrounds
                  </li>
                  <li className="flex items-center">
                    <Leaf className="h-5 w-5 mr-2 text-ghibli-sage" />
                    Attention to natural elements and environmental detail
                  </li>
                  <li className="flex items-center">
                    <Moon className="h-5 w-5 mr-2 text-ghibli-navy" />
                    Distinctive character designs with simple features
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-ghibli-navy mb-6">Common Themes</h3>
                <ul className="space-y-4 text-lg text-gray-700">
                  <li className="flex items-center">
                    <Wind className="h-5 w-5 mr-2 text-ghibli-sage" />
                    Connection between nature and technology
                  </li>
                  <li className="flex items-center">
                    <Sparkles className="h-5 w-5 mr-2 text-ghibli-yellow" />
                    Magical realism and fantastical elements
                  </li>
                  <li className="flex items-center">
                    <Cloud className="h-5 w-5 mr-2 text-ghibli-rust" />
                    Environmental messages and themes
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BannerAd/>
    {/* AI Tools Section */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-ghibli-navy mb-12 flex items-center">
            <Palette className="mr-3 h-8 w-8 text-ghibli-rust" />
            Available AI Tools
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiTools.map((tool) => (
              <div key={tool.name} className="ghibli-card rounded-2xl p-8">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-semibold text-ghibli-navy">{tool.name}</h3>
                  <a 
                    href={tool.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ghibli-sage hover:text-ghibli-navy transition-colors"
                  >
                    <ExternalLink className="h-6 w-6" />
                  </a>
                </div>
                <p className="text-gray-700 mb-6 text-lg">{tool.description}</p>
                <div className="mb-6 space-x-3">
                  <span className="inline-block bg-ghibli-yellow/20 text-ghibli-navy px-4 py-2 rounded-full text-sm font-medium">
                    {tool.difficulty}
                  </span>
                  <span className="inline-block bg-ghibli-rust/20 text-ghibli-rust px-4 py-2 rounded-full text-sm font-medium">
                    {tool.price}
                  </span>
                </div>
                <div className="border-t border-gray-200 pt-6">
                  <h4 className="font-semibold text-ghibli-navy mb-4 flex items-center text-lg">
                    <Leaf className="h-5 w-5 mr-2 text-ghibli-sage" />
                    Useful Prompts
                  </h4>
                  <ul className="space-y-3 text-gray-700">
                    {tool.tips.map((tip, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-ghibli-sage mr-2">•</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <BannerAd/>

        {/* Prompt Engineering Section */}
        <section className="ghibli-card rounded-2xl p-10 mb-20">
          <h2 className="text-4xl font-bold text-ghibli-navy mb-10 flex items-center">
            <Wand2 className="mr-3 h-8 w-8 text-ghibli-yellow" />
            Prompt Engineering Guide
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-ghibli-navy mb-6">Essential Keywords</h3>
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-center">
                  <Sparkles className="h-5 w-5 mr-2 text-ghibli-yellow" />
                  "Studio Ghibli art style"
                </li>
                <li className="flex items-center">
                  <Sparkles className="h-5 w-5 mr-2 text-ghibli-yellow" />
                  "Miyazaki-inspired artwork"
                </li>
                <li className="flex items-center">
                  <Sparkles className="h-5 w-5 mr-2 text-ghibli-yellow" />
                  "Hand-drawn animation"
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-ghibli-navy mb-6">Style Modifiers</h3>
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-center">
                  <Wind className="h-5 w-5 mr-2 text-ghibli-sage" />
                  "Cel shaded"
                </li>
                <li className="flex items-center">
                  <Wind className="h-5 w-5 mr-2 text-ghibli-sage" />
                  "Painterly style"
                </li>
                <li className="flex items-center">
                  <Wind className="h-5 w-5 mr-2 text-ghibli-sage" />
                  "Atmospheric lighting"
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Photo Selection Guide */}
        <section className="ghibli-card rounded-2xl p-10 mb-20">
          <h2 className="text-4xl font-bold text-ghibli-navy mb-10 flex items-center">
            <Camera className="mr-3 h-8 w-8 text-ghibli-rust" />
            Choosing the Right Photos
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-ghibli-navy mb-6">Best Photo Types</h3>
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-center">
                  <Sun className="h-5 w-5 mr-2 text-ghibli-yellow" />
                  Landscapes with natural elements
                </li>
                <li className="flex items-center">
                  <Sun className="h-5 w-5 mr-2 text-ghibli-yellow" />
                  Photos with strong lighting conditions
                </li>
                <li className="flex items-center">
                  <Sun className="h-5 w-5 mr-2 text-ghibli-yellow" />
                  Scenes with interesting architectural details
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-ghibli-navy mb-6">What to Avoid</h3>
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-center">
                  <Moon className="h-5 w-5 mr-2 text-ghibli-navy" />
                  Overly busy or cluttered scenes
                </li>
                <li className="flex items-center">
                  <Moon className="h-5 w-5 mr-2 text-ghibli-navy" />
                  Poor lighting conditions
                </li>
                <li className="flex items-center">
                  <Moon className="h-5 w-5 mr-2 text-ghibli-navy" />
                  Heavy digital effects or filters
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-ghibli-navy text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-xl mb-3">Created with love for Ghibli fans everywhere</p>
          <p className="text-ghibli-cream/60">© 2025 Ghibli Style AI Guide</p>
        </div>
      </footer>
    </div>
  );
}

export default App;