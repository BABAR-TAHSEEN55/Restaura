import mission from "../../restaura-assets/assets/mission.mp4";

import missionImg from "../../restaura-assets/assets/mission.jpeg";
const Mission = () => {
  return (
    <section id="mission">
      <div className=" text-white container mx-auto text-center">
        <h2 className="text-4xl lg:text-8xl tracking-tighter mb-8">Mission </h2>
        <div className="relative items-center justify-center flex mb-5">
          <video
            className="w-full rounded-lg"
            autoPlay
            loop
            muted
            playsInline
            poster={missionImg}
          >
            <source src={mission} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default Mission;
