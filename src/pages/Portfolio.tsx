import { useState } from "react";
import { ExternalLink, Play, Image as ImageIcon, Video, Palette } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "YouTube Channel Branding",
      category: "video",
      type: "Video Editing",
      description: "Complete branding and video editing for a lifestyle YouTube channel including intro animations and thumbnail designs.",
      tags: ["Premiere Pro", "After Effects", "Branding"],
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
      featured: true
    },
    {
      id: 2,
      title: "Social Media Campaign",
      category: "design",
      type: "Graphic Design",
      description: "Multi-platform social media graphics for a local business including Instagram posts, stories, and Facebook banners.",
      tags: ["Photoshop", "Social Media", "Marketing"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      featured: true
    },
    {
      id: 3,
      title: "Event Poster Design",
      category: "print",
      type: "Print Design",
      description: "Eye-catching poster design for cultural events with vibrant colors and traditional motifs.",
      tags: ["CorelDRAW", "Print Design", "Cultural"],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      featured: false
    },
    {
      id: 4,
      title: "Product Showcase Video",
      category: "video",
      type: "Video Editing",
      description: "Professional product demonstration video with motion graphics and engaging transitions.",
      tags: ["Premiere Pro", "Motion Graphics", "Commercial"],
      image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=600&h=400&fit=crop",
      featured: true
    },
    {
      id: 5,
      title: "Brand Identity Package",
      category: "design",
      type: "Brand Design",
      description: "Complete brand identity including logo, business cards, letterhead, and brand guidelines.",
      tags: ["Illustrator", "Branding", "Identity"],
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop",
      featured: false
    },
    {
      id: 6,
      title: "Marketing Flex Banners",
      category: "print",
      type: "Print Design",
      description: "Large format flex banners for retail promotion with bold typography and attractive layouts.",
      tags: ["Photoshop", "Large Format", "Retail"],
      image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=600&h=400&fit=crop",
      featured: false
    }
  ];

  const categories = [
    { key: "all", label: "All Projects", icon: Palette },
    { key: "design", label: "Graphic Design", icon: ImageIcon },
    { key: "video", label: "Video Editing", icon: Video },
    { key: "print", label: "Print Design", icon: Palette }
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="section-container py-20">
      {/* Header */}
      <div className="text-center mb-16 fade-in-up">
        <h1 className="text-4xl lg:text-5xl font-playfair font-bold mb-6">
          My <span className="text-gradient-primary">Portfolio</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          A showcase of creative projects spanning graphic design, video editing, and print media
        </p>
      </div>

      {/* Featured Projects */}
      <div className="mb-20">
        <h2 className="text-2xl lg:text-3xl font-playfair font-semibold mb-12 text-center">
          Featured <span className="text-gradient-accent">Projects</span>
        </h2>
        
        <div className="grid lg:grid-cols-3 gap-8 stagger-children">
          {featuredProjects.map((project) => (
            <Card key={project.id} className="card-glass overflow-hidden group hover:shadow-medium transition-all duration-300 hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <Button variant="outline" size="sm" className="text-white border-white hover:bg-white hover:text-black">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Project
                    </Button>
                  </div>
                </div>
                {project.category === "video" && (
                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 bg-primary/90 rounded-full flex items-center justify-center">
                      <Play className="h-5 w-5 text-white fill-current" />
                    </div>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary">{project.type}</Badge>
                </div>
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* All Projects with Filter */}
      <div>
        <h2 className="text-2xl lg:text-3xl font-playfair font-semibold mb-8 text-center">
          All <span className="text-gradient-secondary">Projects</span>
        </h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 fade-in-up">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Button
                key={category.key}
                variant={filter === category.key ? "default" : "outline"}
                onClick={() => setFilter(category.key)}
                className={filter === category.key ? "btn-hero" : "btn-outline-hero"}
              >
                <IconComponent className="h-4 w-4 mr-2" />
                {category.label}
              </Button>
            );
          })}
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="card-gradient overflow-hidden group hover:shadow-medium transition-all duration-300 hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <Button variant="outline" size="sm" className="text-white border-white hover:bg-white hover:text-black">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                  </div>
                </div>
                {project.category === "video" && (
                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 bg-primary/90 rounded-full flex items-center justify-center">
                      <Play className="h-5 w-5 text-white fill-current" />
                    </div>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary">{project.type}</Badge>
                  {project.featured && (
                    <Badge className="bg-gradient-primary text-white">Featured</Badge>
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-20 text-center">
        <Card className="card-gradient p-8 lg:p-12 max-w-4xl mx-auto fade-in-up">
          <h3 className="text-2xl lg:text-3xl font-playfair font-semibold mb-6">
            Ready to Start Your <span className="text-gradient-accent">Project?</span>
          </h3>
          <p className="text-lg text-muted-foreground mb-8">
            Let's collaborate to bring your creative vision to life with professional design and video editing services.
          </p>
          <Button className="btn-hero">
            Get Started Today
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Portfolio;