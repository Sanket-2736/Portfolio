import React from 'react';

function RoadMap() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-800 via-gray-900 to-black text-white relative">
      <h2 className="text-center text-4xl font-bold mb-12">My Journey</h2>

      {/* Road */}
      <div className="relative w-full max-w-6xl mx-auto">
        <div
          className="absolute inset-0 left-1/2 transform -translate-x-1/2 h-full bg-gray-700"
          style={{ width: '6px' }}
        ></div>

        <div className="space-y-16">
          {/* Box 1 */}
          <div className="flex flex-col md:flex-row items-center justify-between relative">
            <div className="w-full md:w-1/2 text-right pr-8">
              <div className="bg-blue-700 ml-10 p-6 rounded-lg shadow-2xl transition-transform transform hover:scale-105 hover:shadow-2xl">
                <h3 className="text-xl font-semibold mb-2">School</h3>
                <p>Dr. Gujar Subhash High School, Devlali Camp</p>
                <p>SSC Percentage: <span className="font-bold">96.4%</span></p>
              </div>
            </div>
            <div className="absolute hidden sm:block bg-blue-700 w-8 h-8 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>

          {/* Box 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center justify-between relative">
            <div className="w-full md:w-1/2 text-left pl-8">
              <div className="bg-green-700 mr-10 p-6 rounded-lg shadow-2xl transition-transform transform hover:scale-105 hover:shadow-2xl">
                <h3 className="text-xl font-semibold mb-2">HSC College</h3>
                <p>K.R.T Arts, B. H. Commerce, A. M. Science (K.T.H.M.) College, Nashik</p>
                <p>HSC Percentage: <span className="font-bold">87.5%</span></p>
              </div>
            </div>
            <div className="absolute hidden sm:block bg-green-700 w-8 h-8 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>

          {/* Current Education Box */}
          <div className="flex flex-col md:flex-row items-center justify-between relative">
            <div className="w-full md:w-1/2 text-right pr-8">
              <div className="bg-indigo-700 ml-10 p-6 rounded-lg shadow-2xl transition-transform transform hover:scale-105 hover:shadow-2xl">
                <h3 className="text-xl font-semibold mb-2">Current Education</h3>
                <h3 className="text-xl font-semibold mb-2">K.K.W.I.E.E.R., Nashik</h3>
                <p className="font-bold">Bachelor of Technology (B.Tech)</p>
                <p>Specialization: Computer Engineering</p>
                <p>Current Semester: <span className="font-bold">4th</span></p>
              </div>
            </div>
            <div className="absolute hidden sm:block bg-indigo-700 w-8 h-8 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>

          {/* Box 3 - Flipped to right */}
          <div className="flex flex-col md:flex-row-reverse items-center justify-between relative">
            <div className="w-full md:w-1/2 text-left pl-8">
              <div className="bg-yellow-700 mr-10 p-6 rounded-lg shadow-2xl transition-transform transform hover:scale-105 hover:shadow-2xl">
                <h3 className="text-xl font-semibold mb-2">Current Skills</h3>
                <p className="font-bold">Python, C++, Java, DSA, Full Stack Developer (MERN)</p>
              </div>
            </div>
            <div className="absolute hidden sm:block bg-yellow-700 w-8 h-8 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>

          {/* Box 4 */}
          <div className="flex flex-col md:flex-row items-center justify-between relative">
            <div className="w-full md:w-1/2 text-left pl-10">
              <div className="bg-purple-700 p-6 rounded-lg shadow-2xl mr-10 transition-transform transform hover:scale-105 hover:shadow-2xl">
                <h3 className="text-xl font-semibold mb-2">Projects</h3>
                <ul>
                  <li>
                    <p>GradeGuru - The Answersheet Analyser</p>
                    <p>Technologies: <span className="font-bold">Python, TensorFlow, OpenCV</span></p>
                    <br />
                  </li>
                  <li>
                    <p>InsightSphere - The News Aggregator App</p>
                    <p>Technologies: <span className="font-bold">MERN Stack, News API</span></p>
                    <br />
                  </li>
                </ul>
              </div>
            </div>
            <div className="absolute hidden sm:block bg-purple-700 w-8 h-8 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/4"></div>
          </div>

          {/* Box 5 - Flipped to right */}
          <div className="flex flex-col md:flex-row-reverse items-center justify-between relative">
            <div className="w-full md:w-1/2 text-left pr-8">
              <div className="bg-red-700 ml-10 p-6 rounded-lg shadow-2xl transition-transform transform hover:scale-105 hover:shadow-2xl">
                <h3 className="text-xl font-semibold mb-2">Future Goals</h3>
                <p>Contribute to <span className="font-bold">Open Source Projects</span></p>
                <p>Specialize in <span className="font-bold">Cloud Engineering</span></p>
              </div>
            </div>
            <div className="absolute hidden sm:block bg-red-700 w-8 h-8 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/4"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RoadMap;
