import { useState, type FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import { motion, AnimatePresence } from 'framer-motion'
import { HiCheckCircle } from 'react-icons/hi'
import { budgetOptions, serviceOptions, siteConfig } from '@/data/site.config'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/cn'

interface ContactFormProps {
  compact?: boolean
}

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  service: string
  budget: string
  message: string
}

const initialForm: FormData = {
  name: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  budget: '',
  message: '',
}

export function ContactForm({ compact = false }: ContactFormProps) {
  const [form, setForm] = useState<FormData>(initialForm)
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {}
    if (!form.name.trim()) newErrors.name = 'Name is required'
    if (!form.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Invalid email address'
    }
    if (!form.message.trim()) newErrors.message = 'Message is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setLoading(true)
    setSubmitError(null)

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('Contact form is not configured yet. Please try again later.')
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: form.name,
          email: form.email,
          phone: form.phone || 'Not provided',
          company: form.company || 'Not provided',
          service: form.service || 'Not specified',
          budget: form.budget || 'Not specified',
          message: form.message,
        },
        { publicKey },
      )

      setSubmitted(true)
      setForm(initialForm)
    } catch (err) {
      setSubmitError(
        err instanceof Error
          ? err.message
          : `Failed to send message. Please email us at ${siteConfig.email}`,
      )
    } finally {
      setLoading(false)
    }
  }

  const update = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  const inputClass = (field: keyof FormData) =>
    cn(
      'input-field w-full rounded-xl px-4 py-3 transition-colors focus:border-violet-500/50 focus:outline-none focus:ring-2 focus:ring-violet-500/20',
      errors[field] ? 'border-red-500/50' : 'border-border-subtle',
    )

  if (submitted) {
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass rounded-2xl p-8 text-center"
        >
          <HiCheckCircle className="mx-auto mb-4 h-16 w-16 text-accent-cyan" />
          <h3 className="mb-2 text-2xl font-bold">Thank You!</h3>
          <p className="text-muted-foreground">
            We&apos;ve received your message and will get back to you within 24 hours.
          </p>
          <Button className="mt-6" variant="secondary" onClick={() => setSubmitted(false)}>
            Send Another Message
          </Button>
        </motion.div>
      </AnimatePresence>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 md:p-8" noValidate>
      <div className={cn('grid gap-4', compact ? 'grid-cols-1' : 'md:grid-cols-2')}>
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground/80">
            Name *
          </label>
          <input
            id="name"
            type="text"
            value={form.name}
            onChange={(e) => update('name', e.target.value)}
            className={inputClass('name')}
            placeholder="John Doe"
          />
          {errors.name && <p className="mt-1 text-xs text-error">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground/80">
            Email *
          </label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
            className={inputClass('email')}
            placeholder="john@company.com"
          />
          {errors.email && <p className="mt-1 text-xs text-error">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-foreground/80">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={(e) => update('phone', e.target.value)}
            className={inputClass('phone')}
            placeholder="+1 (555) 000-0000"
          />
        </div>

        <div>
          <label htmlFor="company" className="mb-2 block text-sm font-medium text-foreground/80">
            Company
          </label>
          <input
            id="company"
            type="text"
            value={form.company}
            onChange={(e) => update('company', e.target.value)}
            className={inputClass('company')}
            placeholder="Your Company"
          />
        </div>

        <div>
          <label htmlFor="service" className="mb-2 block text-sm font-medium text-foreground/80">
            Service Needed
          </label>
          <select
            id="service"
            value={form.service}
            onChange={(e) => update('service', e.target.value)}
            className={inputClass('service')}
          >
            <option value="" className="bg-surface">
              Select a service
            </option>
            {serviceOptions.map((opt) => (
              <option key={opt} value={opt} className="bg-surface">
                {opt}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="budget" className="mb-2 block text-sm font-medium text-foreground/80">
            Budget Range
          </label>
          <select
            id="budget"
            value={form.budget}
            onChange={(e) => update('budget', e.target.value)}
            className={inputClass('budget')}
          >
            <option value="" className="bg-surface">
              Select budget range
            </option>
            {budgetOptions.map((opt) => (
              <option key={opt} value={opt} className="bg-surface">
                {opt}
              </option>
            ))}
          </select>
        </div>

        <div className={compact ? '' : 'md:col-span-2'}>
          <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground/80">
            Message *
          </label>
          <textarea
            id="message"
            rows={compact ? 4 : 5}
            value={form.message}
            onChange={(e) => update('message', e.target.value)}
            className={cn(inputClass('message'), 'resize-none')}
            placeholder="Tell us about your project..."
          />
          {errors.message && <p className="mt-1 text-xs text-error">{errors.message}</p>}
        </div>
      </div>

      {submitError && (
        <p className="mt-4 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-error">
          {submitError}
        </p>
      )}

      <Button type="submit" className="mt-6 w-full sm:w-auto" disabled={loading}>
        {loading ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  )
}
