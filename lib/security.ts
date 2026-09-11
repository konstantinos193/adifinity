// Security utilities for NIS2 compliance

export interface SecurityEvent {
  timestamp: string
  type: 'suspicious_request' | 'rate_limit' | 'invalid_input' | 'auth_failure'
  ip: string
  userAgent: string
  path: string
  details: string
}

export class SecurityMonitor {
  private static events: SecurityEvent[] = []
  private static readonly MAX_EVENTS = 1000

  static logEvent(event: Omit<SecurityEvent, 'timestamp'>): void {
    const securityEvent: SecurityEvent = {
      ...event,
      timestamp: new Date().toISOString()
    }

    this.events.push(securityEvent)
    
    // Keep only recent events
    if (this.events.length > this.MAX_EVENTS) {
      this.events = this.events.slice(-this.MAX_EVENTS)
    }

    // Log to console in production
    if (process.env.NODE_ENV === 'production') {
      console.warn('Security Event:', JSON.stringify(securityEvent))
    }

    // In production, send to security monitoring service
    this.sendToSecurityService(securityEvent)
  }

  private static sendToSecurityService(_event: SecurityEvent): void {
    // TODO: Integrate with security monitoring service
    // Examples: Datadog, Sentry, or custom security service
  }

  static getRecentEvents(hours: number = 24): SecurityEvent[] {
    const cutoff = new Date(Date.now() - hours * 60 * 60 * 1000)
    return this.events.filter(event => new Date(event.timestamp) > cutoff)
  }

  static detectSuspiciousActivity(ip: string): boolean {
    const recentEvents = this.getRecentEvents(1)
    const ipEvents = recentEvents.filter(event => event.ip === ip)
    
    // Detect if IP has more than 10 events in the last hour
    return ipEvents.length > 10
  }

  static sanitizeInput(input: string): string {
    if (!input) return ''
    
    return input
      .replace(/[<>]/g, '') // Remove HTML tags
      .replace(/javascript:/gi, '') // Remove JavaScript URLs
      .replace(/on\w+=/gi, '') // Remove event handlers
      .trim()
  }

  static validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  static validatePhone(phone: string): boolean {
    const phoneRegex = /^\+?[\d\s\-()]{10,}$/
    return phoneRegex.test(phone)
  }

  static rateLimitExceeded(ip: string, limit: number = 10, windowMs: number = 60000): boolean {
    const now = Date.now()
    const windowStart = now - windowMs
    
    const recentEvents = this.events.filter(event => 
      event.ip === ip && 
      event.type === 'suspicious_request' && 
      new Date(event.timestamp).getTime() > windowStart
    )
    
    return recentEvents.length >= limit
  }
}

// Input validation schemas
// Messages are shown to the visitor, so they are in Greek like the rest of the
// contact form feedback (see useContactForm).
export const validationSchemas = {
  name: {
    label: '\u039F\u03BD\u03BF\u03BC\u03B1\u03C4\u03B5\u03C0\u03CE\u03BD\u03C5\u03BC\u03BF',
    minLength: 2,
    maxLength: 100,
    // Any script's letters (Greek with tonos/dialytika, Latin with accents, ...)
    // plus combining marks; the old [\u0391-\u03C9] range rejected \u00AB\u039A\u03CE\u03C3\u03C4\u03B1\u03C2\u00BB.
    pattern: /^[\p{L}\p{M}\s'.-]+$/u,
    errorMessage: '\u03A4\u03BF \u03BF\u03BD\u03BF\u03BC\u03B1\u03C4\u03B5\u03C0\u03CE\u03BD\u03C5\u03BC\u03BF \u03C0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03AD\u03C7\u03B5\u03B9 2-100 \u03C7\u03B1\u03C1\u03B1\u03BA\u03C4\u03AE\u03C1\u03B5\u03C2 (\u03BC\u03CC\u03BD\u03BF \u03B3\u03C1\u03AC\u03BC\u03BC\u03B1\u03C4\u03B1, \u03BA\u03B5\u03BD\u03AC, \u03C0\u03B1\u03CD\u03BB\u03B5\u03C2)'
  } as const,
  email: {
    label: 'Email',
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    errorMessage: '\u03A0\u03B1\u03C1\u03B1\u03BA\u03B1\u03BB\u03CE \u03B5\u03B9\u03C3\u03AC\u03B3\u03B5\u03C4\u03B5 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03B4\u03B9\u03B5\u03CD\u03B8\u03C5\u03BD\u03C3\u03B7 email'
  } as const,
  phone: {
    label: '\u03A4\u03B7\u03BB\u03AD\u03C6\u03C9\u03BD\u03BF',
    optional: true,
    pattern: /^\+?[\d\s\-()]{10,}$/,
    errorMessage: '\u03A0\u03B1\u03C1\u03B1\u03BA\u03B1\u03BB\u03CE \u03B5\u03B9\u03C3\u03AC\u03B3\u03B5\u03C4\u03B5 \u03AD\u03B3\u03BA\u03C5\u03C1\u03BF \u03B1\u03C1\u03B9\u03B8\u03BC\u03CC \u03C4\u03B7\u03BB\u03B5\u03C6\u03CE\u03BD\u03BF\u03C5'
  } as const,
  message: {
    label: '\u039C\u03AE\u03BD\u03C5\u03BC\u03B1',
    minLength: 10,
    maxLength: 2000,
    errorMessage: '\u03A4\u03BF \u03BC\u03AE\u03BD\u03C5\u03BC\u03B1 \u03C0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03AD\u03C7\u03B5\u03B9 10-2000 \u03C7\u03B1\u03C1\u03B1\u03BA\u03C4\u03AE\u03C1\u03B5\u03C2'
  } as const
}

export function validateInput(data: Record<string, string>): { isValid: boolean; errors: string[] } {
  const errors: string[] = []

  for (const [field, value] of Object.entries(data)) {
    const schema = validationSchemas[field as keyof typeof validationSchemas]
    if (!schema) continue

    // Check required fields
    if (!value || value.trim() === '') {
      if (!('optional' in schema && schema.optional)) {
        errors.push(`\u03A4\u03BF \u03C0\u03B5\u03B4\u03AF\u03BF \u00AB${schema.label}\u00BB \u03B5\u03AF\u03BD\u03B1\u03B9 \u03C5\u03C0\u03BF\u03C7\u03C1\u03B5\u03C9\u03C4\u03B9\u03BA\u03CC`)
      }
      continue
    }

    // Check min/max length
    if ('minLength' in schema && schema.minLength && value.length < schema.minLength) {
      errors.push(`\u03A4\u03BF \u03C0\u03B5\u03B4\u03AF\u03BF \u00AB${schema.label}\u00BB \u03C0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03AD\u03C7\u03B5\u03B9 \u03C4\u03BF\u03C5\u03BB\u03AC\u03C7\u03B9\u03C3\u03C4\u03BF\u03BD ${schema.minLength} \u03C7\u03B1\u03C1\u03B1\u03BA\u03C4\u03AE\u03C1\u03B5\u03C2`)
    }

    if ('maxLength' in schema && schema.maxLength && value.length > schema.maxLength) {
      errors.push(`\u03A4\u03BF \u03C0\u03B5\u03B4\u03AF\u03BF \u00AB${schema.label}\u00BB \u03B4\u03B5\u03BD \u03C0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03BE\u03B5\u03C0\u03B5\u03C1\u03BD\u03AC \u03C4\u03BF\u03C5\u03C2 ${schema.maxLength} \u03C7\u03B1\u03C1\u03B1\u03BA\u03C4\u03AE\u03C1\u03B5\u03C2`)
    }

    // Check pattern
    if ('pattern' in schema && schema.pattern && !schema.pattern.test(value)) {
      errors.push(schema.errorMessage)
    }

    // Sanitize input
    data[field] = SecurityMonitor.sanitizeInput(value)
  }

  return {
    isValid: errors.length === 0,
    errors
  }
}

// CSRF Protection
export function generateCSRFToken(): string {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function validateCSRFToken(token: string, sessionToken: string): boolean {
  return token === sessionToken
}

// Rate limiting for API routes
export class RateLimiter {
  private static requests: Map<string, number[]> = new Map()

  static isAllowed(ip: string, limit: number = 10, windowMs: number = 60000): boolean {
    const now = Date.now()
    const windowStart = now - windowMs
    
    // Get existing requests for this IP
    const requests = this.requests.get(ip) || []
    
    // Filter out old requests
    const recentRequests = requests.filter(timestamp => timestamp > windowStart)
    
    // Check if limit exceeded
    if (recentRequests.length >= limit) {
      return false
    }
    
    // Add current request
    recentRequests.push(now)
    this.requests.set(ip, recentRequests)
    
    return true
  }

  static cleanup(): void {
    const now = Date.now()
    const windowMs = 60000 // 1 minute
    
    for (const [ip, requests] of this.requests.entries()) {
      const recentRequests = requests.filter(timestamp => timestamp > now - windowMs)
      
      if (recentRequests.length === 0) {
        this.requests.delete(ip)
      } else {
        this.requests.set(ip, recentRequests)
      }
    }
  }
}

// Cleanup rate limiter every 5 minutes
if (typeof setInterval !== 'undefined') {
  setInterval(() => RateLimiter.cleanup(), 5 * 60 * 1000)
}
