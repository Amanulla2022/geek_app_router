import React from "react";
import main1 from "../../Images/main-1.avif";
import avatar from "../../Images/avatar.avif";
import { Link } from "react-router-dom";

const Home = () => {
  let text = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim ad inventore laudantium est illum voluptatem quis.",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore vel quo deserunt quos expedita minima incidunt sed tempora, a architecto consectetur reprehenderit, in repellat voluptatum.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio beatae incidunt perferendis soluta facilis voluptas dicta repudiandae quasi asperiores libero, exercitationem molestiae autem sapiente dolore nulla non consequatur. Eaque, dolores.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloribus eius aut unde, dolores accusantium!",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi a voluptatum quidem nulla quisquam natus velit provident earum esse, odio numquam labore recusandae similique sunt.",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ut necessitatibus, repudiandae qui dolor minima.",
  ];
  return (
    <main className="w-full flex flex-col justify-center items-center">
      <section className="relative overflow-x-hidden w-full h-screen bg-images bg-center bg-no-repeat bg-cover">
        <div className="absolute top-[35%] left-10 flex flex-col justify-center items-center text-center w-full max-w-[36rem] z-10">
          <h1 className="text-3xl font-bold sm:text-5xl">
            Let us find your
            <strong className="block text-[rgb(190,18,60)] font-bold">
              Forever Food.
            </strong>
          </h1>
          <p className="text-lg leading-loose mt-4 w-full max-w-md">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>
          <div className="mt-8 flex gap-4 flex-wrap justify-center w-full max-w-md">
            <Link
              to="/restaruants"
              id="hero-search-btn"
              className="text-white font-medium text-sm py-3 px-12 bg-[rgb(225,29,72)] rounded-sm hover:bg-[rgb(190,18,60)] transition-colors"
            >
              Search now
            </Link>
            <a
              href="#"
              className="text-[rgb(225,29,72)] font-medium text-sm py-3 px-12 bg-white rounded-sm"
            >
              Know more
            </a>
          </div>
        </div>
      </section>
      <section className=" flex md:flex-col w-full px-2 md:px-4 max-w-screen-xl">
        <div className="flex flex-col  md:flex-row">
          <div className="summary-img-container relative h-full py-16 z-10">
            <img
              src={main1}
              alt="image-house"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="summary-text-container bg-gray-200 relative flex items-center">
            <span className="w-16 block bg-gray-200 absolute inset-0"></span>
            <div className="summary-text p-16 flex flex-col">
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold leading-6 md:leading-7 lg:leading-8 mb-4 md:mb-6 lg:mb-8">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempore, debitis.
              </h2>
              <p className="text-gray-600 mb-4 md:mb-6 lg:mb-8">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid, molestiae! Quidem est esse numquam odio deleniti,
                beatae, magni dolores provident quaerat totam eos, aperiam
                architecto eius quis quibusdam fugiat dicta.
              </p>
              <a
                href="/"
                className="mt-8 inline-block text-white font-medium text-sm py-2 px-12 bg-blue-700 border border-blue-700 hover:bg-transparent hover:text-blue-700  rounded-sm transition-colors md:w-1/2"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className=" w-full py-16 px-4 max-w-screen-xl">
        <div className="-container grid gap-8 md:grid-cols-3">
          {text.map((data, index) => (
            <div key={index} className=" break-inside-avoid mb-8">
              <blockquote className="p-6 bg-gray-200 rounded-md shadow-md">
                {data}
              </blockquote>
              <div className="user-data flex items-center mt-4">
                <img
                  src={avatar}
                  alt="avatar image"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="user-dels text-sm font-medium">
                  <p>Gladis Lennon</p>
                  <p>Head of SEO</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
