import { motion } from "framer-motion";
import { Lightbulb, PenTool, Eye, Rocket } from "lucide-react";

const steps = [
  { icon: Lightbulb, title: "Ιδέα", description: "Συλλέγουμε πληροφορίες και εμπνεόμαστε" },
  { icon: PenTool, title: "Σχεδιασμός", description: "Δημιουργούμε μοναδικά σχέδια" },
  { icon: Eye, title: "Αναθεώρηση", description: "Βελτιώνουμε και τελειοποιούμε" },
  { icon: Rocket, title: "Παράδοση", description: "Παραδίδουμε το τελικό αποτέλεσμα" },
];

export function CreativeProcess() {
  return (
    <div className="mb-16 px-4">
      <motion.h3 
        className="text-4xl md:text-5xl font-bold mb-10 md:mb-20 text-center text-[#01FFFF]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Η Δημιουργική μας Διαδικασία
      </motion.h3>

      <div className="relative">
        {/* Animated gradient line (hidden on mobile) */}
        <motion.div 
          className="absolute top-[40px] left-0 right-0 h-[1px] bg-[#01FFFF] hidden lg:block"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />

        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="bg-[#01FFFF] w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <step.icon className="w-8 h-8 sm:w-10 sm:h-10 text-[#07141C]" />
              </div>

              <h4 className="text-[#01FFFF] text-lg sm:text-xl font-medium mb-2">
                {step.title}
              </h4>

              <p className="text-gray-300 text-sm sm:text-base text-center">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
