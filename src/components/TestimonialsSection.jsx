import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Coming Soon",
      position: "Client Testimonials",
      content:
        "Real client testimonials will be displayed here as I complete more projects and gather feedback from satisfied customers.",
      isHighlighted: true,
      image: null, // Using SVG placeholder instead
    },
    {
      name: "Future Client",
      position: "Web Development",
      content:
        "Looking forward to working with you on future projects. Your portfolio shows great attention to detail and modern design principles.",
      isHighlighted: false,
      image: null,
    },
  ];

  // Auto-advance slides for mobile
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <>
      <style jsx>{`
        .testimonial-scroll::-webkit-scrollbar {
          height: 8px;
        }
        .testimonial-scroll::-webkit-scrollbar-track {
          background: #e5e7eb;
          border-radius: 4px;
        }
        .testimonial-scroll::-webkit-scrollbar-thumb {
          background: #3b82f6;
          border-radius: 4px;
        }
        .testimonial-scroll::-webkit-scrollbar-thumb:hover {
          background: #2563eb;
        }
      `}</style>
      <motion.section
        id="testimonials"
        className="py-24 px-4 lg:px-20 bg-gray-200 flex flex-col justify-start items-center gap-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Header Section */}
        <motion.div
          className="flex flex-col justify-start items-center gap-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="text-center text-blue-600 text-xl font-semibold uppercase tracking-widest"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Testimonials
          </motion.div>
          <motion.div
            className="max-w-[684px] text-center text-neutral-800 text-3xl lg:text-5xl font-bold leading-tight lg:leading-[50px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            The Trust From Clients
          </motion.div>
        </motion.div>

        {/* Mobile Layout with Dots Navigation */}
        <div className="lg:hidden w-full max-w-[400px] flex flex-col items-center gap-6">
          {/* Testimonial Card */}
          <motion.div
            key={currentSlide}
            className="w-full px-5 py-7 rounded-2xl flex flex-col justify-start items-center gap-5 bg-white border border-neutral-200"
            initial={{ opacity: 0, x: 30, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -30, scale: 0.9 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            whileHover={{
              scale: 1.02,
              y: -2,
              boxShadow: "0 10px 30px rgba(37, 99, 235, 0.15)",
              transition: { duration: 0.15, ease: "easeOut" },
            }}
            style={{
              transformOrigin: "center",
              margin: "10px 0",
              overflow: "visible",
            }}
          >
            {/* Profile Image */}
            <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
              <svg
                className="w-12 h-12 text-gray-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>

            {/* Star Rating */}
            <div className="flex justify-center items-center gap-1">
              {[...Array(5)].map((_, starIndex) => (
                <div
                  key={starIndex}
                  className="w-5 h-5 bg-yellow-400 rounded-sm flex items-center justify-center"
                >
                  <svg
                    className="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              ))}
            </div>

            {/* Testimonial Content */}
            <div className="flex items-center justify-center min-h-[100px]">
              <p className="text-sm leading-relaxed text-center text-gray-700">
                "{testimonials[currentSlide].content}"
              </p>
            </div>

            {/* Client Info */}
            <div className="flex flex-col justify-start items-center gap-1">
              <h4 className="text-center text-base font-semibold text-gray-900">
                {testimonials[currentSlide].name}
              </h4>
              <p className="text-center text-sm text-gray-500">
                {testimonials[currentSlide].position}
              </p>
            </div>
          </motion.div>

          {/* Dots Navigation */}
          <div className="flex justify-center items-center gap-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-blue-600 scale-110"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => goToSlide(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
              />
            ))}
          </div>
        </div>

        {/* Desktop Layout (hidden on mobile, visible on lg and up) */}
        <motion.div
          className="hidden lg:flex w-full max-w-[1200px] overflow-x-auto flex-row justify-center gap-7 px-4 pb-6 testimonial-scroll"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          style={{
            scrollbarWidth: "auto",
            scrollbarColor: "#3b82f6 #9ca3af",
            paddingTop: "20px",
            paddingBottom: "40px",
            marginTop: "-10px",
            marginBottom: "-20px",
          }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="min-w-[320px] w-[320px] px-5 py-7 rounded-2xl flex flex-col justify-start items-center gap-5 bg-white border border-neutral-200"
              initial={{ opacity: 0, x: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.7 + index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                y: -5,
                boxShadow: "0 20px 40px rgba(37, 99, 235, 0.2)",
                transition: { duration: 0.15, ease: "easeOut" },
              }}
              animate={{
                scale: 1,
                y: 0,
                boxShadow: "0 0px 0px rgba(37, 99, 235, 0)",
                transition: { duration: 0.1, ease: "easeOut" },
              }}
              style={{
                transformOrigin: "center",
                margin: "10px 0",
                overflow: "visible",
              }}
            >
              {/* Profile Image */}
              <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>

              {/* Star Rating */}
              <div className="flex justify-center items-center gap-1">
                {[...Array(5)].map((_, starIndex) => (
                  <div
                    key={starIndex}
                    className="w-5 h-5 bg-yellow-400 rounded-sm flex items-center justify-center"
                  >
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                ))}
              </div>

              {/* Testimonial Content */}
              <div className="flex items-center justify-center min-h-[100px]">
                <p className="text-sm leading-relaxed text-center text-gray-700">
                  "{testimonial.content}"
                </p>
              </div>

              {/* Client Info */}
              <div className="flex flex-col justify-start items-center gap-1">
                <h4 className="text-center text-base font-semibold text-gray-900">
                  {testimonial.name}
                </h4>
                <p className="text-center text-sm text-gray-500">
                  {testimonial.position}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </>
  );
}

export default TestimonialsSection;
