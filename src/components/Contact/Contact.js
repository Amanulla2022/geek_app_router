import React, { useState } from "react";
import { GoHome } from "react-icons/go";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
  const details = [
    {
      icon: <GoHome />,
      title: "Our Location",
      desc: "#838 Mulla Galli, Ainapur 591303, India ",
    },
    {
      icon: <TbDeviceLandlinePhone />,
      title: "Phone Number",
      desc: "(+91) 9590397339",
    },
    {
      icon: <MdOutlineEmail />,
      title: "Email Address",
      desc: "amanmulla167@gmail.com",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };
  return (
    <div className="container mx-auto mt-20 md:flex-row flex flex-col ">
      <div className="mt-8 md:w-1/2">
        <div className=" flex gap-16 flex-col">
          <h3 className="font-semibold">Contact Us</h3>
          <h1 className="font-bold uppercase text-5xl ">
            Get in touch with us
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius
            tempor incididunt ut labore et dolore magna aliqua. Ut enim adiqua
            minim veniam quis nostrud exercitation ullamco
          </p>
        </div>

        {details.map((individual) => {
          return (
            <div className="flex mt-8">
              <div className="text-4xl py-4 pr-12">{individual.icon}</div>
              <div className="flex flex-col gap-2">
                <h4 className="text-md font-bold">{individual.title}</h4>
                <p>{individual.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="md:w-1/2  mt-8 pl-28">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-8 border p-4 rounded-xl"
        >
          <div className="flex gap-8">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border w-full rounded-md h-12"
              placeholder="  Your Name"
              required
            />
          </div>
          <div className="flex gap-8">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border w-full rounded-md h-12"
              placeholder="  Your Email"
              required
            />
          </div>
          <div className="flex gap-8">
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="border w-full rounded-md h-12"
              placeholder="  Your Phone"
              required
            />
          </div>
          <div className="flex gap-8">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="border w-full rounded-md "
              rows="5"
              maxLength="500"
              placeholder="  Your Message"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white hover:bg-blue-800 rounded-md w-full h-12 "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
