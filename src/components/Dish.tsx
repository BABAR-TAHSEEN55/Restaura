import DishCard from "./DishCards";
import { DISHES } from "../constants/constants.tsx";
const Dish = () => {
  return (
    <section className="container mx-auto py-16" id="dishes">
      <h2 className="text-5xl text-center text-white mb-8 tracking-tighter lg:text-8xl italic ">
        Our Dishes
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-5 text-white">
        {DISHES.map((project, index) => (
          <DishCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Dish;
