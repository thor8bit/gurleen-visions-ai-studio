import { GraduationCap, Briefcase, User, Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const education = [
    {
      degree: "BCA (Bachelor of Computer Applications)",
      institution: "Punjab University",
      year: "Currently pursuing - 2nd Semester",
      percentage: "In Progress"
    },
    {
      degree: "ICTSM ITI",
      institution: "NCVT",
      year: "Completed",
      percentage: "75%"
    },
    {
      degree: "COPA ITI",
      institution: "NCVT", 
      year: "2019",
      percentage: "84%"
    },
    {
      degree: "12th Arts",
      institution: "PSEB",
      year: "2017",
      percentage: "80.44%"
    },
    {
      degree: "10th Class",
      institution: "PSEB",
      year: "2015", 
      percentage: "75.23%"
    }
  ];

  const experience = [
    {
      title: "Graphic Designer & Video Editor",
      company: "Kamdhenu Gaushala",
      duration: "2024 - 2025",
      description: "Creating visual content and video materials for social media campaigns and organizational communications."
    },
    {
      title: "Data Entry Clerk & Graphic Designer",
      company: "Madhu Vatika DJJS",
      duration: "2021 - 2024",
      description: "Managed data operations while developing graphic design skills and creating marketing materials."
    },
    {
      title: "CSC VLE",
      company: "Balwinder Telecom",
      duration: "2017 - 2019",
      description: "Provided digital services to rural communities and gained experience in technology solutions."
    }
  ];

  return (
    <div className="section-container py-20">
      {/* Header */}
      <div className="text-center mb-16 fade-in-up">
        <h1 className="text-4xl lg:text-5xl font-playfair font-bold mb-6">
          About <span className="text-gradient-primary">Me</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          A passionate creative professional dedicated to visual storytelling and innovative design solutions
        </p>
      </div>

      {/* Personal Bio */}
      <div className="mb-20 fade-in-up">
        <Card className="card-gradient p-8 lg:p-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
              <User className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-2xl lg:text-3xl font-playfair font-semibold">Personal Bio</h2>
          </div>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm Gurleen Singh, a versatile creative professional who thrives at the intersection of 
              traditional design and cutting-edge technology. My journey in the creative field has been 
              driven by an insatiable curiosity and a passion for clear visual communication.
            </p>
            <p>
              What sets me apart is my ability to combine time-tested design principles with modern 
              AI-enhanced workflows. I believe in the power of continuous learning and staying ahead 
              of industry trends. My problem-solving approach focuses on understanding the core message 
              and translating it into compelling visual narratives.
            </p>
            <p>
              Beyond technical skills, I pride myself on being a fast learner with excellent communication 
              abilities. I enjoy collaborating with clients to bring their visions to life while adding 
              my own creative insights to enhance the final result.
            </p>
          </div>
        </Card>
      </div>

      {/* Education Section */}
      <div className="mb-20">
        <div className="flex items-center gap-4 mb-12 fade-in-up">
          <div className="w-12 h-12 bg-gradient-secondary rounded-xl flex items-center justify-center">
            <GraduationCap className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-2xl lg:text-3xl font-playfair font-semibold">Education</h2>
        </div>
        
        <div className="space-y-6 stagger-children">
          {education.map((edu, index) => (
            <Card key={index} className="card-glass p-6 hover:shadow-medium transition-all duration-300">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                  <p className="text-muted-foreground">{edu.institution}</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2 text-primary font-medium mb-1">
                    <Star className="h-4 w-4" />
                    <span>{edu.percentage}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{edu.year}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Work Experience */}
      <div>
        <div className="flex items-center gap-4 mb-12 fade-in-up">
          <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center">
            <Briefcase className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-2xl lg:text-3xl font-playfair font-semibold">Work Experience</h2>
        </div>

        <div className="space-y-8 stagger-children">
          {experience.map((job, index) => (
            <Card key={index} className="card-gradient p-6 lg:p-8 hover:shadow-medium transition-all duration-300">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                  <p className="text-primary font-medium mb-3">{job.company}</p>
                  <p className="text-muted-foreground leading-relaxed">{job.description}</p>
                </div>
                <div className="lg:text-right">
                  <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    {job.duration}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;