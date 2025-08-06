import React from "react";

const teamMembers = [
  {
    name: "Adv. Siddharth Garg",
    avatar: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
    description:
      "Practising since 1996 at Allahabad High Court, specializes in Criminal law, Matrimonial disputes, and Civil Law.",
  },
  {
    name: "Adv. Sandeep Kumar Mishra",
    avatar: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
    description:
      "Practising since 2002 at District & Sessions Court Kanpur Nagar, Specializes in Criminal law, Family Law and Property Law.",
  },
  {
    name: "Adv. Ravendra Kumar Mishra",
    avatar: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
    description:
      "Practising since 2012 at District & Sessions Court Kanpur Nagar, Specializes in Criminal law and Cyber Law.",
  },
  {
    name: "Adv. Akshita Tiwari",
    avatar: "https://cdn-icons-png.flaticon.com/512/4140/4140051.png",
    description:
      "Practising since 2015 at Allahabad High Court, Specialising in Company law, Human rights law and Women’s Law.",
  },
];

const TeamSection = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-10 font-['Inter']">
      <h2 className="text-3xl font-bold text-center mb-10 text-[#2b354f]">
        OUR TEAM
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left: Member List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex gap-4 items-start">
              <img
                src={member.avatar}
                alt={member.name}
                className="w-14 h-14 sm:w-16 sm:h-16"
              />
              <div>
                <h3 className="font-bold text-[#2b354f]">{member.name}</h3>
                <p className="text-sm text-gray-700">{member.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Image */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6"
            alt="Law Justice"
            className="w-full max-w-sm rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
