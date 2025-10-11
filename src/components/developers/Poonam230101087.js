import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSpring, animated } from "react-spring";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faCode, faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import Poonam from '../assets/poonam.png';

const Poonam230101087 = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Cursor tracking
  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  // Floating animation for profile card
  const floatingAnimation = useSpring({
    transform: isHovered 
      ? `translateY(-20px) rotateX(5deg) rotateY(5deg)` 
      : `translateY(0px) rotateX(0deg) rotateY(0deg)`,
    config: { tension: 300, friction: 10 }
  });

  // Background animation to match existing style
  const backgroundAnimation = useSpring({
    background: isHovered
      ? `radial-gradient(circle, #7775D6 0%, #E935C1 100%)`
      : `radial-gradient(circle, #1f2937 0%, #111827 100%)`,
    config: { duration: 800 }
  });

  // Particle system for background
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 3 + 2
  }));

  return (
    <div className="pt-16 min-h-screen relative overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-white opacity-20"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Cursor Tracker */}
      <motion.div
        className="fixed w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-zinc-500 pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x-12,
          y: mousePosition.y-12,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />

      {/* Main Content */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-8 lg:px-8">
          <div 
            className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* SVG Background  */}
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
              aria-hidden="true"
            >
              <motion.circle
                cx={512}
                cy={512}
                r={512}
                fill="url(#mesmerizing-gradient)"
                fillOpacity="0.7"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.7, 0.9, 0.7]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <defs>
                <radialGradient id="mesmerizing-gradient">
                  <stop stopColor="#7775D6" />
                  <stop offset={0.5} stopColor="#E935C1" />
                  <stop offset={1} stopColor="#4facfe" />
                </radialGradient>
              </defs>
            </svg>

            {/* Floating elements */}
            <motion.div
              className="absolute top-10 right-10 w-8 h-8 bg-white/20 rounded-full"
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-20 left-10 w-6 h-6 bg-white/15 rounded-full"
              animate={{
                x: [0, 15, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Profile Content */}
            <motion.div 
              className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h2 
                className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                Poonam Mahawar
                <br />
                <motion.span 
                  className="text-2xl text-gray-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <FontAwesomeIcon icon={faStar} className="mr-2 text-yellow-400" />
                  Roll No: 230101087
                </motion.span>
              </motion.h2>
              
              <motion.p 
                className="mt-6 text-lg leading-8 text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <FontAwesomeIcon icon={faCode} className="mr-2 text-blue-400" />
                Computer Science Engineering Student
                <br />
                <FontAwesomeIcon icon={faHeart} className="mr-2 text-pink-400" />
                Passionate Full Stack Developer & UI/UX Designer
                <br />
                <span className="text-sm text-gray-400">
                  Creating mesmerizing digital experiences with modern technologies
                </span>
              </motion.p>

              {/* Animated Skills Tags */}
              <motion.div 
                className="mt-8 flex flex-wrap gap-2 justify-center lg:justify-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {[
                  { name: 'React.js', color: 'from-blue-400 to-blue-600' },
                
                  { name: 'Python', color: 'from-yellow-400 to-yellow-600' },
                  { name: 'Next.js', color: 'from-green-500 to-green-700' },
                  { name: 'UI/UX Design', color: 'from-purple-400 to-purple-600' },
                  { name: 'JavaScript', color: 'from-orange-400 to-orange-600' },
                  { name: 'CSS3', color: 'from-pink-400 to-pink-600' },
                  { name: 'Git', color: 'from-red-400 to-red-600' }
                ].map((skill, index) => (
                  <motion.span
                    key={skill.name}
                    className={`px-3 py-1.5 bg-gradient-to-r ${skill.color} rounded-full text-xs font-semibold text-white shadow-lg`}
                    whileHover={{ 
                      scale: 1.1,
                      y: -2,
                      boxShadow: "0 10px 20px rgba(0,0,0,0.3)"
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </motion.div>

              {/* Social Links matching existing style */}
              <motion.div 
                className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <motion.button
                  type="button"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  CSE
                </motion.button>
                
                <motion.a
                  href="https://www.linkedin.com/in/poonam-mahawar"
                  className="text-sm font-semibold leading-6 text-white"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <FontAwesomeIcon icon={faLinkedinIn} size="2xl" style={{ color: "#ffffff" }} />
                </motion.a>
                
                <motion.a
                  href="https://github.com/poonam146"
                  className="text-sm font-semibold leading-6 text-white"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  Github <span aria-hidden="true">→</span>
                </motion.a>
                
                <motion.a
                  href="https://twitter.com/thepoonam0914"
                  className="text-sm font-semibold leading-6 text-white"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <FontAwesomeIcon icon={faTwitter} size="xl" style={{ color: "#1da1f2" }} />
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Enhanced Profile Image Container */}
            <motion.div 
              className="relative mt-16 h-80 lg:mt-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.div
                className="relative"
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 5
                }}
                transition={{ duration: 0.4 }}
                style={{ perspective: "1000px" }}
              >
                {/* Profile Image */}
                <img
                  className="absolute left-0 top-0 w-[32rem] max-w-none "
                  src={Poonam}
                  alt="Poonam Profile"
                  width={1824}
                  height={1080}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Poonam230101087;
