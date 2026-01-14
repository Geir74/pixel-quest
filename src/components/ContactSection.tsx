import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [charIndex, setCharIndex] = useState(0);
  
  const npcDialogue = "Greetings, traveler! What message would you like to send?";

  React.useEffect(() => {
    if (charIndex < npcDialogue.length) {
      const timeout = setTimeout(() => {
        setCharIndex(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [charIndex]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Your quest request has been received.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 px-4 bg-mossy/30 relative">
      {/* Decorative corner pieces */}
      <div className="absolute top-4 left-4 w-8 h-8 border-t-4 border-l-4 border-tan" />
      <div className="absolute top-4 right-4 w-8 h-8 border-t-4 border-r-4 border-tan" />
      <div className="absolute bottom-4 left-4 w-8 h-8 border-b-4 border-l-4 border-tan" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-b-4 border-r-4 border-tan" />

      <div className="max-w-2xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <div className="inline-block bg-saddle px-6 py-2 mb-4">
            <h2 className="font-pixel text-lg text-gold text-shadow-dark">
              {'< CONTACT >'} 
            </h2>
          </div>
          <p className="font-body text-xl text-tan">
            Send a message to start a new quest
          </p>
        </div>

        {/* NPC Dialogue Box */}
        <div className="dialogue-box p-6 mb-8">
          <div className="flex items-start gap-4">
            {/* NPC Avatar */}
            <div className="w-16 h-16 bg-primary pixel-border-sm flex items-center justify-center shrink-0">
              <span className="font-pixel text-xl text-gold">NPC</span>
            </div>
            
            <div className="flex-1">
              <div className="font-pixel text-xs text-gold mb-2">MESSENGER</div>
              <p className="font-body text-xl text-foreground">
                {npcDialogue.slice(0, charIndex)}
                <span className="blink">▌</span>
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="quest-card">
          <div className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="font-pixel text-xs text-gold block mb-2">
                {'>'} YOUR NAME
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name..."
                className="w-full bg-bark font-body text-xl text-foreground p-4 
                         border-4 border-saddle focus:border-gold outline-none
                         placeholder:text-muted-foreground transition-colors"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="font-pixel text-xs text-gold block mb-2">
                {'>'} YOUR EMAIL
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email..."
                className="w-full bg-bark font-body text-xl text-foreground p-4 
                         border-4 border-saddle focus:border-gold outline-none
                         placeholder:text-muted-foreground transition-colors"
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="font-pixel text-xs text-gold block mb-2">
                {'>'} YOUR MESSAGE
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Describe your quest..."
                className="w-full bg-bark font-body text-xl text-foreground p-4 
                         border-4 border-saddle focus:border-gold outline-none
                         placeholder:text-muted-foreground transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center pt-4">
              <button
                type="submit"
                className="retro-btn px-8 py-4 text-sm text-primary-foreground"
              >
                {'>>>'} SEND MESSAGE {'<<<'}
              </button>
            </div>
          </div>
        </form>

        {/* Footer Message */}
        <div className="text-center mt-8">
          <p className="font-body text-lg text-muted-foreground italic">
            [Response time may vary based on current quests...]
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
