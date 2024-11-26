import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: "John Anderson",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
    bio: "With over 20 years of experience in retail, John leads our vision for sustainable grocery shopping."
  },
  {
    name: "Sarah Mitchell",
    role: "COO",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    bio: "Sarah oversees our operations and ensures we deliver excellence in every aspect of our service."
  },
  {
    name: "Michael Chang",
    role: "Head of Procurement",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80",
    bio: "Michael works directly with local farmers to bring you the freshest produce."
  }
];

const familyTeam = [
  {
    name: "Emma Thompson",
    role: "Customer Relations",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
    bio: "Creating exceptional customer experiences through dedicated service."
  },
  {
    name: "David Wilson",
    role: "Quality Assurance",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
    bio: "Ensuring the highest standards in product quality and safety."
  },
  {
    name: "Lisa Chen",
    role: "Sustainability Director",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80",
    bio: "Leading our initiatives for environmental responsibility."
  },
  {
    name: "James Rodriguez",
    role: "Tech Innovation",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    bio: "Driving digital transformation in grocery shopping."
  },
  {
    name: "Anna Kim",
    role: "Community Outreach",
    image: "https://images.unsplash.com/photo-1573497019236-17f8177b81e8?auto=format&fit=crop&w=800&q=80",
    bio: "Building strong connections with our local communities."
  }
];

const About = () => {
  return (
    <div className="py-12 bg-gradient-to-b from-primary-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Story & Mission
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Founded with a vision to revolutionize grocery shopping, we're committed to bringing fresh, sustainable produce to your doorstep.
          </p>
        

        </motion.div>

        {/* Leadership Team */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Extended Team */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Extended Family</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {familyTeam.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality First",
                description: "We never compromise on the quality of our products, ensuring you get the best every time.",
                image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "Sustainability",
                description: "Our commitment to the environment drives every decision we make.",
                image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "Community",
                description: "We believe in growing together with our local communities.",
                image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=600&q=80"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={value.image}
                  alt={value.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;