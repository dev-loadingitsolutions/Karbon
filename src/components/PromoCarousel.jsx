import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import Slide1 from '../assets/images/meal-1.png'
import Slide2 from '../assets/images/meal-2.jpg'
import Slide3 from '../assets/images/meal-3.jpg'

const slides = [
  {
    id: 1,
    image: Slide1,
    tag: 'DIET HOUSE',
    title: 'Healthy Meals Delivered Daily',
    description:
      'Fuel your fitness journey with fresh, balanced meals made for active lifestyles.',
    button: 'GET 20% OFF',
  },

  {
    id: 2,
    image: Slide2,
    tag: 'FITNESS PLAN',
    title: 'Train Smarter Every Day',
    description:
      'Join premium fitness programs designed for your personal goals.',
    button: 'START NOW',
  },

  {
    id: 3,
    image: Slide3,
    tag: 'HEALTHY LIFE',
    title: 'Fresh Food For Better Results',
    description:
      'Balanced nutrition and fitness together for long-term performance.',
    button: 'EXPLORE',
  },
]

export default function PromoCarousel() {
  const navigate = useNavigate()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full mt-6">
      {/* Slider */}
      <div className="relative overflow-hidden rounded-[24px] h-[166px]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-700 ${
              current === index
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-10'
            }`}
            onClick={() => navigate('/gymDetails')}
            role="button"
            tabIndex={0}
          >
            {/* Background Image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/55" />

            {/* Content */}
            <div className="absolute inset-0  flex items-center">
              <div className="max-w-[60%]  gap-[10px] px-8 py-4 text-white">
                <p className="text-[10px] font-bold tracking-wider uppercase">
                  {slide.tag}
                </p>

                <h2 className="text-[14px] font-bold leading-tight ">
                  {slide.title}
                </h2>

                <p className="text-[10px] text-white/90 leading-relaxed mb-2">
                  {slide.description}
                </p>

                <button className="bg-white text-black font-semibold px-6 text-[8px] py-3 rounded-xl hover:bg-gray-100 transition">
                  {slide.button}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-2 mt-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              current === index
                ? 'bg-black scale-110'
                : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  )
}