import { useState } from "react";
import { Mail, MessageSquare, Send, CheckCircle, MapPin, Phone } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "Gurleenrajputofficial@gmail.com",
      href: "mailto:Gurleenrajputofficial@gmail.com",
      gradient: "bg-gradient-primary"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Punjab, India",
      href: null,
      gradient: "bg-gradient-secondary"
    },
    {
      icon: Phone,
      label: "Reach Me At",
      value: "📞 +91-79866-89665",
      href: "tel:+919876543210",
      gradient: "bg-gradient-accent"
    }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "#",
      color: "text-blue-600"
    },
    {
      name: "Instagram", 
      url: "#",
      color: "text-pink-600"
    },
    {
      name: "Behance",
      url: "#", 
      color: "text-blue-500"
    },
    {
      name: "YouTube",
      url: "#",
      color: "text-red-600"
    }
  ];

  return (
    <div className="section-container py-20">
      {/* Header */}
      <div className="text-center mb-16 fade-in-up">
        <h1 className="text-4xl lg:text-5xl font-playfair font-bold mb-6">
          Get In <span className="text-gradient-primary">Touch</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Ready to bring your creative vision to life? Let's discuss your project and explore how we can work together.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8 fade-in-up">
          <div>
            <h2 className="text-2xl lg:text-3xl font-playfair font-semibold mb-6">
              Let's <span className="text-gradient-accent">Connect</span>
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I'm always excited to discuss new projects and creative opportunities. 
              Whether you need graphic design, video editing, or AI-enhanced creative solutions, 
              I'm here to help bring your ideas to life.
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card key={index} className="card-glass p-6 hover:shadow-medium transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 ${info.gradient} rounded-xl flex items-center justify-center`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-muted-foreground">{info.label}</p>
                      {info.href ? (
                        <a 
                          href={info.href}
                          className="text-lg font-semibold text-primary hover:text-primary/80 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-lg font-semibold">{info.value}</p>
                      )}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow My Work</h3>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className={`px-4 py-2 bg-muted hover:bg-muted/80 rounded-lg font-medium transition-colors ${social.color}`}
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="fade-in-up">
          <Card className="card-gradient p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                <MessageSquare className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-2xl font-playfair font-semibold">Send a Message</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                    className="bg-white/50"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                    className="bg-white/50"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="What's this about?"
                  required
                  className="bg-white/50"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project, timeline, and any specific requirements..."
                  rows={5}
                  required
                  className="bg-white/50 resize-none"
                />
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full btn-hero group"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending Message...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-20">
        <Card className="card-gradient p-8 lg:p-12 max-w-4xl mx-auto fade-in-up">
          <h3 className="text-2xl lg:text-3xl font-playfair font-semibold mb-8 text-center">
            Frequently Asked <span className="text-gradient-accent">Questions</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                What's your typical turnaround time?
              </h4>
              <p className="text-muted-foreground">
                Most graphic design projects are completed within 3-5 business days, 
                while video editing projects typically take 5-7 days depending on complexity.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                Do you offer revisions?
              </h4>
              <p className="text-muted-foreground">
                Yes! I include up to 3 rounds of revisions in all projects to ensure 
                the final result perfectly matches your vision.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                What file formats do you provide?
              </h4>
              <p className="text-muted-foreground">
                I deliver all source files plus optimized versions for web, print, 
                and social media in formats like PNG, JPG, PDF, and MP4.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                Can you handle rush projects?
              </h4>
              <p className="text-muted-foreground">
                Absolutely! I offer expedited services for urgent projects. 
                Contact me to discuss timeline and pricing for rush orders.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
