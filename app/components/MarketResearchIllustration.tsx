"use client"

import { useEffect, useRef } from "react"
import { MapPin } from "lucide-react"

declare global {
  interface Window {
    initMap: () => void
    google: any // Add this line to declare the google variable
  }
}

export default function Map() {
  const mapRef = useRef<HTMLDivElement>(null)

  // Coordinates for Άρτα, Βασ. Πύρρου 30
  const coordinates = {
    lat: 39.1573,
    lng: 20.9855,
  }

  useEffect(() => {
    // Load Google Maps API script
    const script = document.createElement("script")
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBNLrJhOMz6idD05pzwk17mcLxJxX7hcCI&callback=initMap`
    script.async = true
    script.defer = true

    // Define the initMap function globally
    window.initMap = () => {
      if (!mapRef.current) return

      // Create the map with custom styling
      const map = new window.google.maps.Map(mapRef.current, {
        center: coordinates,
        zoom: 16,
        disableDefaultUI: true,
        styles: [
          {
            elementType: "geometry",
            stylers: [{ color: "#0A1A24" }],
          },
          {
            elementType: "labels.text.stroke",
            stylers: [{ color: "#0A1A24" }],
          },
          {
            elementType: "labels.text.fill",
            stylers: [{ color: "#01FFFF" }],
          },
          {
            featureType: "administrative.locality",
            elementType: "labels.text.fill",
            stylers: [{ color: "#01FFFF" }],
          },
          {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [{ color: "#01A9FF" }],
          },
          {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [{ color: "#071218" }],
          },
          {
            featureType: "poi.park",
            elementType: "labels.text.fill",
            stylers: [{ color: "#01A9FF" }],
          },
          {
            featureType: "road",
            elementType: "geometry",
            stylers: [{ color: "#071218" }],
          },
          {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [{ color: "#071218" }],
          },
          {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [{ color: "#01FFFF" }],
          },
          {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [{ color: "#071218" }],
          },
          {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [{ color: "#071218" }],
          },
          {
            featureType: "road.highway",
            elementType: "labels.text.fill",
            stylers: [{ color: "#01FFFF" }],
          },
          {
            featureType: "transit",
            elementType: "geometry",
            stylers: [{ color: "#071218" }],
          },
          {
            featureType: "transit.station",
            elementType: "labels.text.fill",
            stylers: [{ color: "#01A9FF" }],
          },
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#071218" }],
          },
          {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [{ color: "#01A9FF" }],
          },
          {
            featureType: "water",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#071218" }],
          },
        ],
      })

      // Add a custom marker
      const marker = new window.google.maps.Marker({
        position: coordinates,
        map: map,
        title: "adinfinity",
        icon: {
          path: window.google.maps.SymbolPath.CIRCLE,
          scale: 10,
          fillColor: "#01FFFF",
          fillOpacity: 1,
          strokeColor: "#FFFFFF",
          strokeWeight: 2,
        },
      })

      // Add info window
      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div style="color: #071218; padding: 8px; font-family: Arial, sans-serif;">
            <strong>adinfinity</strong><br>
            Βασ. Πύρρου 30, Άρτα 471 32
          </div>
        `,
      })

      marker.addListener("click", () => {
        infoWindow.open(map, marker)
      })
    }

    document.head.appendChild(script)

    return () => {
      // Clean up
      document.head.removeChild(script)
      delete window.initMap
    }
  }, [])

  return (
    <div className="relative w-full h-full rounded-lg overflow-hidden">
      {/* Map container */}
      <div ref={mapRef} className="w-full h-full rounded-lg"></div>

      {/* Overlay with pulsing effect */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#01FFFF]/30 rounded-full animate-ping"></div>
            <MapPin size={24} className="text-[#01FFFF] relative z-10" />
          </div>
        </div>
      </div>
    </div>
  )
}
