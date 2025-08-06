import React from "react";

const ResultsSection = () => {
  const stats = [
    { label: "Criminal Law", value: "99%" },
    { label: "Civil Law", value: "95%" },
    { label: "Family Law", value: "96%" },
    { label: "Cyber Law", value: "97%" },
    { label: "Property Cases", value: "97%" },
  ];

  return (
    <section
      className="relative text-white bg-cover bg-center bg-no-repeat h-screen"
      style={{
        backgroundImage:
          "url('https://static.vecteezy.com/system/resources/thumbnails/027/105/968/small/legal-law-and-justice-concept-open-law-book-with-a-wooden-judges-gavel-in-a-courtroom-or-law-enforcement-office-free-photo.jpg')", // Replace with your image path
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Centered Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Why Choose Us?</h2>
        <p className="text-lg md:text-xl mb-10">We have created Results…</p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {stats.map((item, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl font-extrabold">{item.value}</p>
              <p className="mt-2 font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
