import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting || submitStatus === 'success') return;

    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    const serviceID = 'service_uvwpelj';
    const templateID = 'template_8j2ypy5';
    const publicKey = 'Fyav02ide2XdYoqkk';

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_name: 'ArtistAppz',
      message: formData.message,
    };

    emailjs.send(serviceID, templateID, templateParams, { publicKey })
      .then(() => {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      }, (err) => {
        console.error('EmailJS FAILED...', err);
        setSubmitStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const getButtonText = () => {
    if (isSubmitting) return 'Transmitting...';
    if (submitStatus === 'success') return 'Transmission Complete';
    if (submitStatus === 'error') return 'Transmission Failed';
    return 'Transmit';
  };

  return (
    <section id="contact" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24">
          
          <div className="flex flex-col justify-between h-full">
            <div>
              <span className="font-mono text-accent text-sm tracking-widest mb-6 block">04 // CONNECT</span>
              <h2 className="text-7xl md:text-8xl font-bold tracking-tighter mb-12 text-white">
                START <br/> SEQUENCE.
              </h2>
            </div>
            
            <div>
              <p className="text-zinc-400 text-2xl leading-relaxed font-light max-w-md">
                More efficiency.<br/>
                Better decisions.<br/>
                Higher margins.<br/>
                Let’s put AI to work for<br/>your business.
              </p>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-16">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="NAME"
                  className="w-full bg-transparent border-b border-white/20 py-6 text-2xl text-white placeholder-zinc-700 focus:outline-none focus:border-accent transition-colors font-mono"
                />
              </div>
              
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="EMAIL"
                  className="w-full bg-transparent border-b border-white/20 py-6 text-2xl text-white placeholder-zinc-700 focus:outline-none focus:border-accent transition-colors font-mono"
                />
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={2}
                  placeholder="DIRECTIVE"
                  className="w-full bg-transparent border-b border-white/20 py-6 text-2xl text-white placeholder-zinc-700 focus:outline-none focus:border-accent transition-colors resize-none font-mono"
                ></textarea>
              </div>

              <div className="flex flex-col items-start gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting || submitStatus === 'success'}
                  className="group flex items-center gap-6 text-white text-xl font-bold tracking-widest uppercase hover:text-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{getButtonText()}</span>
                  <ArrowRight className={`w-6 h-6 ${submitStatus !== 'success' ? 'group-hover:translate-x-3' : ''} transition-transform`} />
                </button>
                {submitStatus === 'success' && <p className="text-green-400 font-mono text-sm">Success. We have received your transmission.</p>}
                {submitStatus === 'error' && <p className="text-accent font-mono text-sm">Error. Please try again later.</p>}
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;