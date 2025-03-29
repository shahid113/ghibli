import React from 'react';
import { Sparkles, Palette, ExternalLink, Leaf, Wind, Wand2, BookOpen, Camera, Cloud, Sun, Moon } from 'lucide-react';

interface AITool {
  name: string;
  description: string;
  link: string;
  difficulty: string;
  price: string;
  tips: string[];
}

const aiTools: AITool[] = [
  {
    name: "Midjourney",
    description: "One of the most popular AI image generators that can create Ghibli-style artwork using specific prompts. Known for its high-quality artistic outputs.",
    link: "https://www.midjourney.com",
    difficulty: "Intermediate",
    price: "Paid (Starting at $10/month)",
    tips: [
      "Use prompts like 'Studio Ghibli style, anime watercolor, Miyazaki inspired'",
      "Add keywords like 'painterly, soft lighting, whimsical'",
      "Include nature elements like 'floating islands, magical forest'",
      "Specify 'hand-drawn animation style, cel shaded'"
    ]
  },
  {
    name: "Stable Diffusion",
    description: "Open-source AI model that can be fine-tuned for Ghibli-style generation. Offers great flexibility and control over the output.",
    link: "https://stability.ai",
    difficulty: "Advanced",
    price: "Free (self-hosted) / Paid services available",
    tips: [
      "Use the 'anything-v4.5' or 'Waifu Diffusion' model",
      "Experiment with negative prompts to avoid unwanted styles",
      "Try LoRA models specifically trained on Ghibli artwork",
      "Use the 'Studio Ghibli' checkpoint for better results"
    ]
  },
  {
    name: "PhotoRoom",
    description: "AI photo editor with anime and Ghibli-style filters. Perfect for beginners wanting to transform existing photos.",
    link: "https://www.photoroom.com",
    difficulty: "Beginner",
    price: "Free tier available",
    tips: [
      "Start with high-quality, well-lit photos",
      "Use the anime filter as a base",
      "Adjust colors to match Ghibli's pastel palette",
      "Fine-tune the watercolor effects"
    ]
  },
  {
    name: "DALL-E 3",
    description: "OpenAI's latest image generation model with excellent understanding of the Ghibli art style and composition.",
    link: "https://openai.com/dall-e-3",
    difficulty: "Beginner",
    price: "Paid (Credits system)",
    tips: [
      "Use detailed descriptions of Ghibli-specific elements",
      "Mention 'hand-painted animation style'",
      "Reference specific Ghibli movies for style",
      "Include atmospheric details like 'morning mist' or 'golden hour'"
    ]
  },
  {
    name: "Leonardo.ai",
    description: "AI platform with custom models and fine-tuning capabilities, perfect for creating consistent Ghibli-style artwork.",
    link: "https://leonardo.ai",
    difficulty: "Intermediate",
    price: "Free tier with paid options",
    tips: [
      "Use the anime-specific models as a base",
      "Combine with watercolor and traditional animation styles",
      "Experiment with the custom model feature",
      "Focus on lighting and color grading"
    ]
  },
  {
    name: "Canva Text to Image",
    description: "User-friendly AI image generator integrated into Canva, great for creating Ghibli-inspired social media content.",
    link: "https://www.canva.com",
    difficulty: "Beginner",
    price: "Included with Canva Pro",
    tips: [
      "Combine with Canva's editing tools",
      "Use the 'Anime' and 'Watercolor' style options",
      "Add text overlays in Ghibli-inspired fonts",
      "Export in high resolution for best quality"
    ]
  }
];

function App() {
  return (
    <div className="min-h-screen bg-ghibli-cream font-ghibli">
      {/* Hero Section */}
      <header className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center">
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="absolute top-0 left-0 w-full h-full">
          <Cloud className="text-white/30 w-24 h-24 absolute top-20 left-[10%] floating" style={{animationDelay: '0s'}} />
          <Cloud className="text-white/30 w-16 h-16 absolute top-40 right-[20%] floating" style={{animationDelay: '0.5s'}} />
          <Cloud className="text-white/30 w-20 h-20 absolute top-60 left-[30%] floating" style={{animationDelay: '1s'}} />
        </div>
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

      {/* Introduction Section */}
      <section className="py-20 relative overflow-hidden">
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

      {/* AI Tools Section */}
      <main className="max-w-6xl mx-auto px-4 py-12">
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
                    Tips
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