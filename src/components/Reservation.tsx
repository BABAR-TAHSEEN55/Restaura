import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";

const Reservation = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");

  const Reservation = async (e: any) => {
    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/users",
        {
          email,
          name,
          phone,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success("Post without Issue");
      setName("");
      setPhone("");
      setEmail("");
    } catch (error) {
      console.log("error : ", error);
    }
  };
  //   const HandleInput = () => {
  //     set
  //   }; // Dynamic
  return (
    <div className="container min-h-[300px] flex items-center justify-center   mx-auto ">
      <div>
        <img src="" alt="" />
      </div>
      <div className="flex  flex-col items-center justify-center space-y-4 ">
        <input
          type="text"
          className="bg-red-200 rounded-xl text-center "
          placeholder="Email."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          className="bg-red-200 rounded-xl text-center "
          placeholder="name."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          className="bg-red-200 rounded-xl text-center "
          placeholder="phone."
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button
          className="px-2 hover:bg-blue-200 rounded-xl bg-purple-300"
          onClick={Reservation}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Reservation;
