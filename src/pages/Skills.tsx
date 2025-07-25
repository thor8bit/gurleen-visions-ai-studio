import { Palette, Video, Bot, Star, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const primarySkills = [
    {
      category: "Graphic Designing",
      icon: Palette,
      gradient: "bg-gradient-primary",
      skills: [
        { name: "Adobe Photoshop", level: 90 },
        { name: "Adobe Illustrator", level: 85 },
        { name: "CorelDRAW", level: 88 },
        { name: "Brand Identity Design", level: 82 },
        { name: "Print Design", level: 85 }
      ]
    },
    {
      category: "Video Editing",
      icon: Video,
      gradient: "bg-gradient-secondary",
      skills: [
        { name: "Adobe Premiere Pro", level: 87 },
        { name: "Adobe After Effects", level: 80 },
        { name: "Video Storytelling", level: 85 },
        { name: "Motion Graphics", level: 75 },
        { name: "Color Grading", level: 80 }
      ]
    },
    {
      category: "AI Platform Research",
      icon: Bot,
      gradient: "bg-gradient-accent",
      skills: [
        { name: "ChatGPT", level: 92 },
        { name: "Perplexity", level: 88 },
        { name: "Gemini", level: 85 },
        { name: "Content Research", level: 90 },
        { name: "AI-Enhanced Workflows", level: 87 }
      ]
    }
  ];

  const services = [
    {
      title: "Brand Identity Design",
      description: "Complete brand packages including logos, color schemes, typography, and brand guidelines.",
      features: ["Logo Design", "Brand Guidelines", "Color Palette", "Typography Selection"]
    },
    {
      title: "Digital Marketing Materials",
      description: "Eye-catching social media graphics, web banners, and digital advertisements.",
      features: ["Social Media Posts", "Web Banners", "Digital Ads", "Infographics"]
    },
    {
      title: "Print Design",
      description: "Professional print materials including brochures, flyers, posters, and business cards.",
      features: ["Brochures & Flyers", "Posters & Banners", "Business Cards", "Print Layouts"]
    },
    {
      title: "Video Content Creation",
      description: "Engaging video content for YouTube, social media, and promotional campaigns.",
      features: ["YouTube Videos", "Social Media Content", "Promotional Videos", "Motion Graphics"]
    },
    {
      title: "Data Collection & Research",
      description: "Comprehensive research services using AI tools for content creation and market analysis.",
      features: ["Market Research", "Content Research", "Data Analysis", "Trend Analysis"]
    },
    {
      title: "AI-Enhanced Design Process",
      description: "Leveraging AI tools to optimize creative workflows and enhance design ideation.",
      features: ["Creative Ideation", "Workflow Optimization", "Content Generation", "Design Automation"]
    }
  ];

  return (
    <div className="section-container py-20">
      {/* Header */}
      <div className="text-center mb-16 fade-in-up">
        <h1 className="text-4xl lg:text-5xl font-playfair font-bold mb-6">
          Skills & <span className="text-gradient-primary">Services</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Combining traditional design expertise with cutting-edge AI tools to deliver exceptional creative solutions
        </p>
      </div>

      {/* Primary Skills */}
      <div className="mb-20">
        <h2 className="text-2xl lg:text-3xl font-playfair font-semibold mb-12 text-center">
          Primary <span className="text-gradient-accent">Skills</span>
        </h2>
        
        <div className="grid lg:grid-cols-3 gap-8 stagger-children">
          {primarySkills.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="card-gradient p-6 hover:shadow-medium transition-all duration-300">
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 ${category.gradient} rounded-2xl mx-auto mb-4 flex items-center justify-center`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.category}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Services Offered */}
      <div>
        <h2 className="text-2xl lg:text-3xl font-playfair font-semibold mb-12 text-center">
          Services <span className="text-gradient-secondary">Offered</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
          {services.map((service, index) => (
            <Card key={index} className="card-glass p-6 hover:shadow-medium transition-all duration-300 hover:-translate-y-2">
              <div className="mb-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
              </div>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>

      {/* Versatility Statement */}
      <div className="mt-20 text-center">
        <Card className="card-gradient p-8 lg:p-12 max-w-4xl mx-auto fade-in-up">
          <h3 className="text-2xl lg:text-3xl font-playfair font-semibold mb-6">
            Versatility & <span className="text-gradient-accent">Innovation</span>
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            My unique approach combines traditional design principles with modern AI-enhanced workflows. 
            This allows me to deliver faster turnarounds without compromising on quality, while staying 
            ahead of industry trends and continuously expanding my creative capabilities.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Skills;