import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function RoadMap() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-800 via-gray-900 to-black text-white relative overflow-hidden">
      {/* Twinkling Stars Background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
          />
        ))}
      </div>

      <h2 className="text-center text-4xl font-bold mb-12 relative z-10">My Journey</h2>

      <div className="relative w-full max-w-6xl mx-auto">
        <div
          className="absolute inset-0 left-1/2 transform -translate-x-1/2 h-full bg-gray-700"
          style={{ width: '6px' }}
        ></div>

        <div className="space-y-16 relative z-10">

          {/* School */}
          <div className="flex flex-col md:flex-row items-center justify-between relative">
            <div className="w-full md:w-1/2 text-right pr-8">
              <motion.div
                className="bg-blue-700 ml-10 p-6 rounded-lg shadow-2xl"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-2">School</h3>
                <p>Dr. Gujar Subhash High School, Devlali Camp</p>
                <p>SSC Percentage: <span className="font-bold">96.4%</span></p>
              </motion.div>
            </div>
            <div className="absolute hidden sm:block bg-blue-700 w-8 h-8 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>

          {/* HSC College */}
          <div className="flex flex-col md:flex-row-reverse items-center justify-between relative">
            <div className="w-full md:w-1/2 text-left pl-8">
              <motion.div
                className="bg-green-700 mr-10 p-6 rounded-lg shadow-2xl"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-2">HSC College</h3>
                <p>K.T.H.M. College, Nashik</p>
                <p>HSC Percentage: <span className="font-bold">87.5%</span></p>
              </motion.div>
            </div>
            <div className="absolute hidden sm:block bg-green-700 w-8 h-8 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>

          {/* Current Education */}
          <div className="flex flex-col md:flex-row items-center justify-between relative">
            <div className="w-full md:w-1/2 text-right pr-8">
              <motion.div
                className="bg-indigo-700 ml-10 p-6 rounded-lg shadow-2xl"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-2">Current Education</h3>
                <h3 className="text-xl font-semibold mb-2">K.K.W.I.E.E.R., Nashik</h3>
                <p className="font-bold">Bachelor of Technology (B.Tech)</p>
                <p>Specialization: Computer Engineering</p>
                <p>Current Semester: <span className="font-bold">4th</span></p>
              </motion.div>
            </div>
            <div className="absolute hidden sm:block bg-indigo-700 w-8 h-8 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>

          {/* Skills */}
          <div className="flex flex-col md:flex-row-reverse items-center justify-between relative">
            <div className="w-full md:w-1/2 text-left pl-8">
              <motion.div
                className="bg-yellow-700 mr-10 p-6 rounded-lg shadow-2xl"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-4">Current Skills</h3>
                <ul className="list-disc list-inside text-sm text-gray-100 space-y-1">
                  <li><span className="font-bold">Java Programming (Advanced):</span> Spring Boot, Hibernate</li>
                  <li><span className="font-bold">C/C++ (Intermediate)</span></li>
                  <li><span className="font-bold">Python (Intermediate):</span> Django</li>
                  <li><span className="font-bold">JavaScript (Advanced):</span> React.js, Node.js, Express.js</li>
                  <li><span className="font-bold">Frontend:</span> HTML, CSS</li>
                  <li><span className="font-bold">Databases:</span> MongoDB, MySQL, PostgreSQL</li>
                  <li><span className="font-bold">Tools & IDEs:</span> Git, GitHub, Postman, VS Code, IntelliJ IDEA</li>
                </ul>
              </motion.div>
            </div>
            <div className="absolute hidden sm:block bg-yellow-700 w-8 h-8 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>

          {/* App Development Learning */}
          <div className="flex flex-col md:flex-row items-center justify-between relative">
            <div className="w-full md:w-1/2 text-right pr-8">
              <motion.div
                className="bg-teal-700 ml-10 p-6 rounded-lg shadow-2xl"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-2">Learning App Development</h3>
                <p>Currently exploring <span className="font-bold">React Native</span> and <span className="font-bold">Flutter</span></p>
                <p>Building cross-platform mobile applications</p>
                <p>Focus on <span className="font-bold">UI/UX design principles</span> and <span className="font-bold">native performance</span></p>
              </motion.div>
            </div>
            <div className="absolute hidden sm:block bg-teal-700 w-8 h-8 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>

          {/* Projects */}
          <div className="flex flex-col md:flex-row items-center justify-between relative">
            <div className="w-full md:w-1/2 text-left pl-10">
              <motion.div
                className="bg-purple-700 p-6 rounded-lg shadow-2xl mr-10"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-2">Recent Projects</h3>
                <ul>
                  <li>
                    <p>Prescripto - Doctor Appointment Booking App</p>
                    <p>Technologies: <span className="font-bold">MongoDB, Express.js, Node.js, React.js, Tailwind CSS</span></p>
                    <br />
                  </li>
                  <li>
                    <p>InsightSphere - News Aggregator App</p>
                    <p>Technologies: <span className="font-bold">MongoDB, Express.js, Node.js, React.js, News API</span></p>
                    <br />
                  </li>
                  <Link to='/projects' onClick={() => scrollTo(0, 0)} className='py-2 px-3 hover:bg-white rounded border transition-all duration-300 text-stone-600 hover:text-zinc-700 bg-yellow-300'>View more</Link>
                </ul>
              </motion.div>
            </div>
            <div className="absolute hidden sm:block bg-purple-700 w-8 h-8 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/4"></div>
          </div>

          {/* Internship */}
          <div className="flex flex-col md:flex-row-reverse items-center justify-between relative">
            <div className="w-full md:w-1/2 text-left pl-8">
              <motion.div
                className="bg-pink-600 mr-10 p-6 rounded-lg shadow-2xl"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-2">Internship</h3>
                <p><span className="font-bold">XMEGA</span> – Web Development Intern</p>
                <p>Worked on the <span className="font-bold">Alumni Connect Platform</span> using the MERN stack, focusing on authentication, real-time interaction, and responsive UI.</p>
              </motion.div>
            </div>
            <div className="absolute hidden sm:block bg-pink-600 w-8 h-8 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>

          {/* Open Source Contribution */}
          <div className="flex flex-col md:flex-row items-center justify-between relative">
            <div className="w-full md:w-1/2 text-right pr-8">
              <motion.div
                className="bg-orange-600 ml-10 p-6 rounded-lg shadow-2xl"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-2">Open Source Contributor</h3>
                <p className="font-bold text-lg mb-2">GGSOC '25 Participant</p>
                <p>Contributing to open source projects</p>
                <p>Collaborating with global developers</p>
                <p>Building scalable and maintainable code</p>
              </motion.div>
            </div>
            <div className="absolute hidden sm:block bg-orange-600 w-8 h-8 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>

          {/* Future Goals */}
          <div className="flex flex-col md:flex-row-reverse items-center justify-between relative">
            <div className="w-full md:w-1/2 text-right pr-8">
              <motion.div
                className="bg-red-700 ml-10 p-6 rounded-lg shadow-2xl"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-2">Future Goals</h3>
                <p>Continue contributing to <span className="font-bold">Open Source Projects</span></p>
                <p>Specialize in <span className="font-bold">Cloud Engineering</span></p>
                <p>Master <span className="font-bold">Mobile App Development</span></p>
                <p>Explore <span className="font-bold">AI/ML Integration</span> in applications</p>
              </motion.div>
            </div>
            <div className="absolute hidden sm:block bg-red-700 w-8 h-8 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/4"></div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default RoadMap;