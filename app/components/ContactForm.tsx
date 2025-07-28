import { useState } from 'react';
import { Button } from './figma/button';
import { Input } from './figma/input';
import { Textarea } from './figma/textarea';
import { Label } from './figma/label';
import { Send, Check, AlertCircle, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error('Please fix the errors in the form');
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In a real app, you would send the data to your backend here
      console.log('Form submitted:', formData);
      
      setIsSubmitted(true);
      toast.success('Message sent successfully! I\'ll get back to you soon.');
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitted(false);
      }, 3000);
      
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="p-8 rounded-2xl backdrop-blur-md bg-white/5 border border-[#00D1FF]/30 text-center animate-fade-in">
        <div className="w-16 h-16 bg-[#00D1FF]/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="w-8 h-8 text-[#00D1FF]" />
        </div>
        <h3 className="text-white text-xl mb-2">Message Sent!</h3>
        <p className="text-gray-400">Thank you for reaching out. I'll get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
    <div className="p-8 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#00D1FF]/30 transition-all duration-300 group">
      {/* Form Header */}
      <div className="mb-6">
        <h3 className="text-white text-xl mb-2">Send me a message</h3>
        <p className="text-gray-400 text-sm">I'd love to hear about your project ideas</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div className="space-y-2">
          <Label htmlFor="name" className="text-white">
            Name *
          </Label>
          <Input
            id="name"
            type="text"
            placeholder="Your full name"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            className={`bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-[#00D1FF] focus:ring-[#00D1FF]/20 transition-all duration-300 ${
              errors.name ? 'border-red-400 focus:border-red-400' : ''
            }`}
          />
          {errors.name && (
            <div className="flex items-center gap-1 text-red-400 text-sm">
              <AlertCircle className="w-3 h-3" />
              {errors.name}
            </div>
          )}
        </div>

        {/* Email Field */}
        <div className="space-y-2">
          <Label htmlFor="email" className="text-white">
            Email *
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="your.email@example.com"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className={`bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-[#00D1FF] focus:ring-[#00D1FF]/20 transition-all duration-300 ${
              errors.email ? 'border-red-400 focus:border-red-400' : ''
            }`}
          />
          {errors.email && (
            <div className="flex items-center gap-1 text-red-400 text-sm">
              <AlertCircle className="w-3 h-3" />
              {errors.email}
            </div>
          )}
        </div>

        {/* Message Field */}
        <div className="space-y-2">
          <Label htmlFor="message" className="text-white">
            Message *
          </Label>
          <Textarea
            id="message"
            placeholder="Tell me about your project, timeline, and any specific requirements..."
            value={formData.message}
            onChange={(e) => handleChange('message', e.target.value)}
            rows={5}
            className={`bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-[#00D1FF] focus:ring-[#00D1FF]/20 resize-none transition-all duration-300 ${
              errors.message ? 'border-red-400 focus:border-red-400' : ''
            }`}
          />
          {errors.message && (
            <div className="flex items-center gap-1 text-red-400 text-sm">
              <AlertCircle className="w-3 h-3" />
              {errors.message}
            </div>
          )}
          <div className="text-right text-xs text-gray-500">
            {formData.message.length}/500
          </div>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#00D1FF] hover:bg-[#00B8E6] text-black transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Sending Message...
            </>
          ) : (
            <>
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </>
          )}
        </Button>
      </form>

      {/* Form Footer */}
      <div className="mt-6 pt-6 border-t border-white/10">
        <p className="text-gray-500 text-xs text-center">
          Your information is secure and will never be shared with third parties.
        </p>
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#00D1FF]/0 via-[#00D1FF]/5 to-[#00D1FF]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
}