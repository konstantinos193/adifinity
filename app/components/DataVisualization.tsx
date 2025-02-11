"use client"

import { motion } from "framer-motion"
import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const chartData = {
  labels: ["Ιαν", "Φεβ", "Μαρ", "Απρ", "Μαι", "Ιουν"],
  datasets: [
    {
<<<<<<< HEAD
      label: "Πωλήσεις",
      data: [45000, 48000, 52000, 49000, 54000, 57000],
=======
      label: "Έτος",
      data: [2013, 2015, 2017, 2019, 2022, 2025],
>>>>>>> 89be38c (Fixed syntax errors in projects data and added random sorting)
      backgroundColor: "rgba(1, 255, 255, 0.6)",
      borderColor: "rgba(1, 255, 255, 1)",
      borderWidth: 1,
    },
  ],
}

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "Παράδειγμα Οπτικοποίησης Δεδομένων",
    },
  },
<<<<<<< HEAD
=======
  scales: {
    y: {
      min: 2012,
      max: 2026,
      ticks: {
        stepSize: 2,
        callback: function(value) {
          return Math.round(value) // This ensures whole numbers
        }
      }
    }
  }
>>>>>>> 89be38c (Fixed syntax errors in projects data and added random sorting)
}

export function DataVisualization() {
  return (
    <div className="bg-gradient-to-br from-[#0A1A24] to-[#0D2436] p-6 rounded-lg shadow-lg">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Line data={chartData} options={options} />
      </motion.div>
    </div>
  )
}

