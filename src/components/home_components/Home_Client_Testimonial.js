
import { useState } from "react";



const testimonials = [
  {
    id: 1,
    video:
      "https://www.timesindiatravels.com/wp-content/uploads/2023/06/David-and-Carol-from-UK-.mp4",
  },
  {
    id: 2,
    video: "https://www.timesindiatravels.com/wp-content/uploads/2023/06/John-and-Audrey-from-Scottland-.mp4",
  },
  {
    id: 3,
    video: "https://www.timesindiatravels.com/wp-content/uploads/2023/06/Jackie-Keith-from-UK-.mp4",
  },
  {
    id: 4,
    video: "https://www.timesindiatravels.com/wp-content/uploads/2023/06/David-and-Linda-Valdes-USA-from-Hollywood-.mp4",
  },
  {
    id: 5,
    video: "https://www.timesindiatravels.com/wp-content/uploads/2019/07/memed-io-output-1.webm",
  },
  
];

export default function Home_Client_Testimonials() {
    const [currentVideo, setCurrentVideo] = useState(0);
    
    const nextVideo = () => {
        setCurrentVideo((prev) => (prev + 1) % testimonials.length);
    };

    const prevVideo = () => {
        setCurrentVideo((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

  return (
    <>
      <section className="overflow-hidden w-full py-20 border-y border-[#C9A24B]/25 bg-[#F2FAFB] px-6 md:px-14">
       
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 pt-10">
            <span className="font-['Inter'] text-xl tracking-[0.28em] uppercase text-cyan-500 font-semibold">
              A True Story
            </span>
          </div>

        
          <div className=" relativerounded-2xl overflow-hidden shadow-2xl shadow-black/40 border border-[#1EA5BE]/20 relative">
            
            <div className="absolute inset-y-0 left-4 flex items-center ">
                <button
                    onClick={prevVideo}
                    className=" cursor-pointer w-11 h-11 rounded-full bg-black/35 backdrop-blur-md border border-white/20 text-white text-xl hover:bg-[#F58634] transition-all duration-300"
                >
                    ❮
                </button>
                </div>

                <div className="absolute inset-y-0 right-4 flex items-center">
                <button
                    onClick={nextVideo}
                    className="cursor-pointer w-11 h-11 rounded-full bg-black/35 backdrop-blur-md border border-white/20 text-white text-xl hover:bg-[#F58634] transition-all duration-300"
                >
                    ❯
                </button>
            </div>

            <div className="aspect-video rounded-2xl">
              <video key={testimonials[currentVideo].id} className="w-full h-full object-cover rounded-2xl" controls autoPlay playsInline muted onEnded={nextVideo}>
                <source 
                    src={testimonials[currentVideo].video}
                    type="video/mp4"
                />
                </video>
            </div>
          </div>
          <div className="flex justify-center gap-3 mt-6">
                {testimonials.map((_, index) => (
                    <button
                    key={index}
                    onClick={() => setCurrentVideo(index)}
                    className={`transition-all duration-300 rounded-full cursor-pointer ${
                        currentVideo === index
                        ? "w-3.5 h-2.5 bg-[#F58634]"
                        : "w-2.5 h-2.5 bg-black/30 hover:bg-black/60"
                    }`}
                    />
                ))}
            </div>
        </div>
      </section>
    </>
  );
}