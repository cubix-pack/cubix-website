import React from "react";

const CTA: React.FC = () => {
  return (
    <section className="py-20 px-8 bg-black text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-black uppercase italic tracking-tighter text-[clamp(40px,7vw,80px)] leading-none mb-6">
          READY TO FOCUS?
        </h2>
        <p className="text-[18px] font-medium leading-relaxed mb-16 text-[#dadada] max-w-2xl mx-auto">
          The digital world is designed to steal your attention. CUBIX is the
          tool to take it back. Flip the cube, and enter the flow state.
        </p>

        {/* <div className="inline-block border-4 border-white p-2">
          <button className="bg-white text-black font-black text-2xl uppercase px-16 py-6 hover:bg-yellow-400 transition-colors tracking-tighter">
            Initialize SYNC
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default CTA;
