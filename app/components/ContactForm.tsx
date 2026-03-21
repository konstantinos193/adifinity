"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Send, Loader2, Upload, Plus, Minus } from "lucide-react"
import { useContactForm } from "@/hooks/useContactForm"
import { useState } from "react"

const projectTypes = [
  { value: "custom-website", label: "Custom Website", basePrice: "Contact for pricing" },
  { value: "e-commerce", label: "E-commerce Shop", basePrice: "Contact for pricing" },
  { value: "web-app", label: "Web Application", basePrice: "Contact for pricing" },
  { value: "landing-page", label: "Landing Page", basePrice: "Contact for pricing" },
  { value: "technical-seo", label: "Technical SEO", basePrice: "Contact for pricing" }
]

const premiumFeatures = [
  { id: "booking", name: "Σύστημα Κρατήσεων", price: "Contact for pricing", description: "Real-time booking engine" },
  { id: "dashboard", name: "Admin Dashboard", price: "Contact for pricing", description: "Analytics & management" },
  { id: "subscription", name: "Σύστημα Συνδρομών", price: "Contact for pricing", description: "Recurring revenue platform" },
  { id: "ai-chatbot", name: "AI Chatbot", price: "Contact for pricing", description: "Intelligent support automation" },
  { id: "analytics", name: "Advanced Analytics", price: "Contact for pricing", description: "Deep customer insights" },
  { id: "inventory", name: "Inventory Management", price: "Contact for pricing", description: "Real-time stock tracking" }
]

const supportPackages = [
  { id: "bronze", name: "Bronze Υποστήριξη", price: "Contact for pricing", description: "Basic maintenance & support" },
  { id: "silver", name: "Silver Υποστήριξη", price: "Contact for pricing", description: "Priority support & monitoring" },
  { id: "gold", name: "Gold Υποστήριξη", price: "Contact for pricing", description: "24/7 enterprise support" }
]

export default function ContactForm() {
  const [selectedProjectType, setSelectedProjectType] = useState("")
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([])
  const [selectedSupport, setSelectedSupport] = useState("")
  const [showPricing, setShowPricing] = useState(false)

  const {
    formData,
    isDragging,
    isSubmitting,
    submitStatus,
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    handleDrop,
    handleChange,
    handleFileChange,
    handleSubmit,
  } = useContactForm()

  const toggleFeature = (featureId: string) => {
    setSelectedFeatures(prev => 
      prev.includes(featureId) 
        ? prev.filter(id => id !== featureId)
        : [...prev, featureId]
    )
  }

  const calculateTotal = () => {
    let total = 0
    
    const project = projectTypes.find(p => p.value === selectedProjectType)
    if (project) {
      const price = parseInt(project.basePrice.replace(/[^0-9]/g, ''))
      total += price
    }
    
    selectedFeatures.forEach(featureId => {
      const feature = premiumFeatures.find(f => f.id === featureId)
      if (feature) {
        const price = parseInt(feature.price.replace(/[^0-9]/g, ''))
        total += price
      }
    })
    
    return total
  }

  const formatPrice = (price: number) => {
    return `€${price.toLocaleString()}`
  }

  return (
    <motion.div
      className="bg-gradient-to-br from-[#0A1A24] to-[#0D2436] p-6 rounded-xl shadow-lg border border-cyan-900/30"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-[#01FFFF] text-sm font-medium mb-1">
              Ονοματεπώνυμο *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-[#071218] border border-cyan-900/50 focus:border-[#01FFFF] rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-[#01FFFF]/50 transition-colors"
              placeholder="Το ονοματεπώνυμό σας"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-[#01FFFF] text-sm font-medium mb-1">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-[#071218] border border-cyan-900/50 focus:border-[#01FFFF] rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-[#01FFFF]/50 transition-colors"
              placeholder="Το email σας"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block text-[#01FFFF] text-sm font-medium mb-1">
              Τηλέφωνο
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-[#071218] border border-cyan-900/50 focus:border-[#01FFFF] rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-[#01FFFF]/50 transition-colors"
              placeholder="Το τηλέφωνό σας"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-[#01FFFF] text-sm font-medium mb-1">
              Θέμα
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full bg-[#071218] border border-cyan-900/50 focus:border-[#01FFFF] rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-[#01FFFF]/50 transition-colors"
            >
              <option value="" disabled>
                Επιλέξτε θέμα
              </option>
              <option value="Γενική Πληροφορία">Γενική Πληροφορία</option>
              <option value="Προσφορά">Ζήτηση Προσφοράς</option>
              <option value="Συνεργασία">Συνεργασία</option>
              <option value="Άλλο">Άλλο</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-[#01FFFF] text-sm font-medium mb-1">
            Μήνυμα *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full bg-[#071218] border border-cyan-900/50 focus:border-[#01FFFF] rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-[#01FFFF]/50 transition-colors resize-none"
            placeholder="Πώς μπορούμε να σας βοηθήσουμε;"
          ></textarea>
        </div>

        <div>
          <label className="block text-[#01FFFF] text-sm font-medium mb-1">
            Επισύναψη Αρχείου
          </label>
          <div
            className={`relative border-2 border-dashed rounded-lg p-6 transition-colors ${
              isDragging
                ? "border-[#01FFFF] bg-[#01FFFF]/5"
                : "border-cyan-900/50 hover:border-[#01FFFF]/50 hover:bg-[#01FFFF]/5"
            }`}
            onDragEnter={handleDragEnter}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <input
              type="file"
              onChange={handleFileChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <div className="text-center">
              <Upload className="mx-auto h-8 w-8 text-[#01FFFF] mb-2" />
              <p className="text-sm text-gray-300">
                Σύρετε ένα αρχείο εδώ ή κάντε κλικ για επιλογή
              </p>
              {formData.file && (
                <p className="mt-2 text-sm text-[#01FFFF]">
                  Επιλεγμένο: {formData.file.name}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="border-t border-cyan-900/30 pt-4">
          <div className="flex items-center justify-between mb-4">
            <label className="block text-[#01FFFF] text-sm font-medium">
              Επιλέξτε Υπηρεσίες & Features
            </label>
            <button
              type="button"
              onClick={() => setShowPricing(!showPricing)}
              className="text-[#01FFFF] text-sm hover:text-[#01A9FF] transition-colors"
            >
              {showPricing ? 'Απόκρυψη' : 'Εμφάνιση'} Τιμολόγησης
            </button>
          </div>

          {showPricing && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="space-y-4"
            >
              {/* Project Type Selection */}
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Τύπος Project
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {projectTypes.map((project) => (
                    <motion.button
                      key={project.value}
                      type="button"
                      onClick={() => setSelectedProjectType(project.value)}
                      className={`p-3 rounded-lg border text-left transition-all ${
                        selectedProjectType === project.value
                          ? 'border-[#01FFFF] bg-[#01FFFF]/10'
                          : 'border-cyan-900/30 hover:border-[#01FFFF]/50'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="text-white font-medium">{project.label}</div>
                          <div className="text-gray-400 text-xs">{project.basePrice}</div>
                        </div>
                        {selectedProjectType === project.value && (
                          <div className="w-5 h-5 rounded-full bg-[#01FFFF] flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-[#07141C]" />
                          </div>
                        )}
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Premium Features */}
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Premium Features
                </label>
                <div className="space-y-2">
                  {premiumFeatures.map((feature) => {
                    const isSelected = selectedFeatures.includes(feature.id)
                    return (
                      <motion.div
                        key={feature.id}
                        onClick={() => toggleFeature(feature.id)}
                        className={`p-3 rounded-lg border cursor-pointer transition-all ${
                          isSelected
                            ? 'border-[#01FFFF] bg-[#01FFFF]/10'
                            : 'border-cyan-900/30 hover:border-[#01FFFF]/50'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <div className="text-white font-medium">{feature.name}</div>
                            <div className="text-gray-400 text-xs">{feature.description}</div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-[#01FFFF] font-bold text-sm">{feature.price}</span>
                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                              isSelected ? 'border-[#01FFFF] bg-[#01FFFF]' : 'border-gray-500'
                            }`}>
                              {isSelected && (
                                <div className="w-2 h-2 rounded-full bg-[#07141C]" />
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>

              {/* Support Packages */}
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Μηνιαία Υποστήριξη (Προαιρετικό)
                </label>
                <div className="space-y-2">
                  {supportPackages.map((support) => (
                    <motion.div
                      key={support.id}
                      onClick={() => setSelectedSupport(selectedSupport === support.id ? "" : support.id)}
                      className={`p-3 rounded-lg border cursor-pointer transition-all ${
                        selectedSupport === support.id
                          ? 'border-[#01FFFF] bg-[#01FFFF]/10'
                          : 'border-cyan-900/30 hover:border-[#01FFFF]/50'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="text-white font-medium">{support.name}</div>
                          <div className="text-gray-400 text-xs">{support.description}</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[#01FFFF] font-bold text-sm">{support.price}</span>
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            selectedSupport === support.id ? 'border-[#01FFFF] bg-[#01FFFF]' : 'border-gray-500'
                          }`}>
                            {selectedSupport === support.id && (
                              <div className="w-2 h-2 rounded-full bg-[#07141C]" />
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Price Summary */}
              {(selectedProjectType || selectedFeatures.length > 0) && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gradient-to-r from-[#01FFFF]/10 to-[#01A9FF]/10 border border-[#01FFFF]/30 rounded-lg p-4"
                >
                  <div className="space-y-2">
                    {selectedProjectType && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-300">
                          {projectTypes.find(p => p.value === selectedProjectType)?.label}
                        </span>
                        <span className="text-[#01FFFF] font-medium">
                          {projectTypes.find(p => p.value === selectedProjectType)?.basePrice}
                        </span>
                      </div>
                    )}
                    {selectedFeatures.map(featureId => {
                      const feature = premiumFeatures.find(f => f.id === featureId)
                      return (
                        <div key={featureId} className="flex justify-between text-sm">
                          <span className="text-gray-300">{feature?.name}</span>
                          <span className="text-[#01FFFF] font-medium">{feature?.price}</span>
                        </div>
                      )
                    })}
                    {selectedSupport && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-300">
                          {supportPackages.find(p => p.id === selectedSupport)?.name}
                        </span>
                        <span className="text-[#01FFFF] font-medium">
                          {supportPackages.find(p => p.id === selectedSupport)?.price}
                        </span>
                      </div>
                    )}
                    <div className="border-t border-[#01FFFF]/30 pt-2 mt-2">
                      <div className="flex justify-between">
                        <span className="text-white font-bold">Συνολικό Κόστος:</span>
                        <span className="text-[#01FFFF] font-bold text-lg">
                          {formatPrice(calculateTotal())}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}
        </div>

        {submitStatus && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-3 rounded-lg ${
              submitStatus.isError
                ? "bg-red-900/20 border border-red-500/50 text-red-200"
                : "bg-green-900/20 border border-green-500/50 text-green-200"
            }`}
          >
            {submitStatus.message}
          </motion.div>
        )}

        <div className="flex justify-end">
          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#071218] font-bold py-2.5 px-6 rounded-lg shadow-lg shadow-cyan-500/20 flex items-center justify-center min-w-[140px] disabled:opacity-50"
            whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(1, 255, 255, 0.3)" }}
            whileTap={{ scale: 0.97 }}
          >
            {isSubmitting ? (
              <>
                <Loader2 size={18} className="mr-2 animate-spin" />
                Αποστολή...
              </>
            ) : (
              <>
                <Send size={18} className="mr-2" />
                Αποστολή
              </>
            )}
          </motion.button>
        </div>
      </form>
    </motion.div>
  )
}
