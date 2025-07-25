import { ArrowRight, Download, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/gurleen-profile.jpg";

const Home = () => {
  return (
    <div className="section-container py-20">
      {/* Hero Section */}
      <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
        {/* Content */}
        <div className="space-y-8 fade-in-up">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-primary font-medium">
              <Sparkles className="h-5 w-5" />
              <span>Creative Professional</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-playfair font-bold leading-tight">
              Hi, I'm{" "}
              <span className="text-gradient-primary">Gurleen Singh</span>
            </h1>
            <h2 className="text-2xl lg:text-3xl font-semibold text-muted-foreground">
              Graphic Designer & Video Editor
            </h2>
            <p className="text-lg text-muted-foreground max-w-lg">
              Passionate about creating visually compelling designs and engaging video content. 
              I combine creativity with cutting-edge AI tools to deliver exceptional results 
              that communicate clearly and captivate audiences.
            </p>
          </div>

          {/* Skills Tags */}
          <div className="flex flex-wrap gap-3">
            {[
              "Adobe Photoshop",
              "CorelDRAW", 
              "Illustrator",
              "Premiere Pro",
              "AI Tools",
              "Creative Design"
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/portfolio">
              <Button className="btn-hero group">
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="btn-outline-hero">
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>

        {/* Profile Image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-primary rounded-3xl blur-2xl opacity-30 float-animation"></div>
            <img
              src={profileImage}
              alt="Gurleen Singh - Graphic Designer & Video Editor"
              className="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-2xl shadow-medium"
            />
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-secondary rounded-full opacity-80 float-animation"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-accent rounded-full opacity-70 float-animation" style={{ animationDelay: "2s" }}></div>
          </div>
        </div>
      </div>

      {/* Services Preview */}
      <div className="mt-32">
        <div className="text-center mb-16 fade-in-up">
          <h3 className="text-3xl lg:text-4xl font-playfair font-bold mb-4">
            What I <span className="text-gradient-accent">Offer</span>
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Combining traditional design expertise with modern AI-enhanced workflows
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 stagger-children">
          {[
            {
              title: "Graphic Design",
              description: "Creating stunning visual identities, posters, and marketing materials that capture attention and communicate effectively.",
              gradient: "bg-gradient-primary"
            },
            {
              title: "Video Editing",
              description: "Crafting engaging video content for YouTube and social media with professional editing and creative storytelling.",
              gradient: "bg-gradient-secondary"
            },
            {
              title: "AI-Enhanced Workflows",
              description: "Leveraging AI tools like ChatGPT and Perplexity for research, ideation, and optimizing creative processes.",
              gradient: "bg-gradient-accent"
            }
          ].map((service, index) => (
            <div key={index} className="card-gradient p-8 text-center hover:shadow-medium transition-all duration-300 hover:-translate-y-2">
              <div className={`w-16 h-16 ${service.gradient} rounded-2xl mx-auto mb-6 flex items-center justify-center`}>
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-4">{service.title}</h4>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;