import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function RoadMap() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-800 via-gray-900 to-black text-white relative">
      <h2 className="text-center text-4xl font-bold mb-12">My Journey</h2>

      <div className="relative w-full max-w-6xl mx-auto">
        <div
          className="absolute inset-0 left-1/2 transform -translate-x-1/2 h-full bg-gray-700"
          style={{ width: '6px' }}
        ></div>

        <div className="space-y-16">

          {/* Each Section is wrapped in motion.div */}
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

          {/* Future Goals */}
          <div className="flex flex-col md:flex-row items-center justify-between relative">
            <div className="w-full md:w-1/2 text-right pr-8">
              <motion.div
                className="bg-red-700 ml-10 p-6 rounded-lg shadow-2xl"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-2">Future Goals</h3>
                <p>Contribute to <span className="font-bold">Open Source Projects</span></p>
                <p>Specialize in <span className="font-bold">Cloud Engineering</span></p>
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
