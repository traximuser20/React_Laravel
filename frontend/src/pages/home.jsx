import React from "react";
import "../App.css";
import Highlight1 from "../assets/Highlight1.svg";
import Highlight2 from "../assets/Highlight1.svg"; 
import MacBook_Pro from "../assets/MacBook_Pro.png";
import Heart from "../assets/logos/Heart.svg";
import CheckedBox from "../assets/logos/CheckedBox.svg";
import Footer from "../components/footer/footer";


const Home = () => {
  return (
    <div className="h-full w-full App">
      {/* <!-- Hero --> */}
      <section className="pt-24 md:mt-0 md:h-screen flex flex-col justify-center text-center md:text-left md:flex-row md:justify-between md:items-center lg:px-48 md:px-12 px-4 bg-secondary">
        <div className="md:flex-1 md:mr-10">
          <h1 className="font-pt-serif text-5xl font-bold mb-7">
            A headline for your
            <span className="bg-underline1 bg-left-bottom bg-no-repeat pb-2 bg-100%">
              cool website
            </span>
          </h1>
          <p className="font-pt-serif font-normal mb-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            harum tempore consectetur voluptas, cumque nobis laboriosam
            voluptatem.
          </p>
          <div className="font-montserrat">
            <button className="bg-black px-6 py-4 rounded-lg border-2 border-black border-solid text-white mr-2 mb-2">
              Call to action
            </button>
            <button className="px-6 py-4 border-2 border-black border-solid rounded-lg">
              Secondary action
            </button>
          </div>
        </div>
        <div className="flex justify-around md:block mt-8 md:mt-0 md:flex-1">
          <div className="relative">
            <img
              src={Highlight1}
              alt=""
              className="absolute -top-16 -left-10"
            />
          </div>
          <img src={MacBook_Pro} alt="Macbook" />
          <div className="relative">
            <img
              src={Highlight2}
              alt=""
              className="absolute -bottom-10 -right-6"
            />
          </div>
        </div>
      </section>

      {/* <!-- How it works --> */}
      <section className="bg-black text-white sectionSize">
        <div>
          <h2 className="text-4xl pt-4 pb-4 underline underline-offset-8 bg-underline2 bg-100%">How it works</h2>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 mx-8 flex flex-col items-center my-4">
            <div className="border-2 rounded-full bg-secondary text-white h-12 w-12 flex justify-center items-center mb-3">
              1
            </div>
            <h3 className="font-montserrat font-medium text-xl mb-2">Eat</h3>
            <p className="text-center font-montserrat">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="flex-1 mx-8 flex flex-col items-center my-4">
            <div className="border-2 rounded-full bg-secondary text-white h-12 w-12 flex justify-center items-center mb-3">
              2
            </div>
            <h3 className="font-montserrat font-medium text-xl mb-2">Sleep</h3>
            <p className="text-center font-montserrat">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="flex-1 mx-8 flex flex-col items-center my-4">
            <div className="border-2 rounded-full bg-secondary text-white h-12 w-12 flex justify-center items-center mb-3">
              3
            </div>
            <h3 className="font-montserrat font-medium text-xl mb-2">Rave</h3>
            <p className="text-center font-montserrat">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </section>

      {/* <!-- Features --> */}
      <section className="sectionSize bg-secondary">
        <div>
          <h2 className="text-4xl pt-4 pb-4 underline underline-offset-8 bg-underline3 bg-100%">Features</h2>
        </div>
        <div className="md:grid md:grid-cols-2 md:grid-rows-2">
          <div className="flex items-start font-montserrat my-6 mr-10">
            <img src={Heart} alt="" className="h-7 mr-4" />
            <div>
              <h3 className="font-semibold text-2xl">Feature #1</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quisquam voluptate praesentium tenetur earum repellendus! Dicta
                culpa consequuntur saepe quibusdam labore, est ex ducimus
                tempore, quos illum officiis, pariatur ea placeat.
              </p>
            </div>
          </div>

          <div className="flex items-start font-montserrat my-6 mr-10">
            <img src={Heart} alt="" className="h-7 mr-4" />
            <div>
              <h3 className="font-semibold text-2xl">Feature #2</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quisquam voluptate praesentium tenetur earum repellendus! Dicta
                culpa consequuntur saepe quibusdam labore, est ex ducimus
                tempore, quos illum officiis, pariatur ea placeat.
              </p>
            </div>
          </div>

          <div className="flex items-start font-montserrat my-6 mr-10">
            <img src={Heart} alt="" className="h-7 mr-4" />
            <div>
              <h3 className="font-semibold text-2xl">Feature #3</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quisquam voluptate praesentium tenetur earum repellendus! Dicta
                culpa consequuntur saepe quibusdam labore, est ex ducimus
                tempore, quos illum officiis, pariatur ea placeat.
              </p>
            </div>
          </div>

          <div className="flex items-start font-montserrat my-6 mr-10">
            <img src={Heart} alt="" className="h-7 mr-4" />
            <div>
              <h3 className="font-semibold text-2xl">Feature #4</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quisquam voluptate praesentium tenetur earum repellendus! Dicta
                culpa consequuntur saepe quibusdam labore, est ex ducimus
                tempore, quos illum officiis, pariatur ea placeat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Pricing --> */}
      <section className="sectionSize bg-secondary py-0">
        <div>
          <h2 className="text-4xl pt-4 pb-4 underline underline-offset-auto bg-underline4 mb-0 bg-100%">Pricing</h2>
        </div>
        <div className="flex w-full flex-col md:flex-row">
          <div className="flex-1 flex flex-col mx-6 shadow-2xl relative bg-secondary rounded-2xl py-5 px-8 my-8 md:top-24">
            <h3 className="font-pt-serif font-normal text-2xl mb-4">The Good</h3>
            <div className="font-montserrat font-bold text-2xl mb-4">
              $25
              <span className="font-normal text-base"> / month</span>
            </div>

            <div className="flex">
              <img src={CheckedBox} alt="" className="mr-1" />
              <p>Benefit #1</p>
            </div>
            <div className="flex">
              <img src={CheckedBox} alt="" className="mr-1" />
              <p>Benefit #2</p>
            </div>
            <div className="flex">
              <img src={CheckedBox} alt="" className="mr-1" />
              <p>Benefit #3</p>
            </div>

            <button className=" border-2 border-solid border-black rounded-xl text-lg py-3 mt-4">
              Choose plan
            </button>
          </div>

          <div className="flex-1 flex flex-col mx-6 shadow-2xl relative bg-secondary rounded-2xl py-5 px-8 my-8 md:top-12">
            <h3 className="font-pt-serif font-normal text-2xl mb-4">The Bad</h3>
            <div className="font-montserrat font-bold text-2xl mb-4">
              $40
              <span className="font-normal text-base"> / month</span>
            </div>

            <div className="flex">
              <img src={CheckedBox} alt="" className="mr-1" />
              <p>Benefit #1</p>
            </div>
            <div className="flex">
              <img src={CheckedBox} alt="" className="mr-1" />
              <p>Benefit #2</p>
            </div>
            <div className="flex">
              <img src={CheckedBox} alt="" className="mr-1" />
              <p>Benefit #3</p>
            </div>

            <button className=" border-2 border-solid border-black rounded-xl text-lg py-3 mt-4">
              Choose plan
            </button>
          </div>

          <div className="flex-1 flex flex-col mx-6 shadow-2xl relative bg-secondary rounded-2xl py-5 px-8 my-8 md:top-24">
            <h3 className="font-pt-serif font-normal text-2xl mb-4">The Ugly</h3>
            <div className="font-montserrat font-bold text-2xl mb-4">
              $50
              <span className="font-normal text-base"> / month</span>
            </div>

            <div className="flex">
              <img src={CheckedBox} alt="" className="mr-1" />
              <p>Benefit #1</p>
            </div>
            <div className="flex">
              <img src={CheckedBox} alt="" className="mr-1" />
              <p>Benefit #2</p>
            </div>
            <div className="flex">
              <img src={CheckedBox} alt="" className="mr-1" />
              <p>Benefit #3</p>
            </div>

            <button className="border-2 border-solid border-black rounded-xl text-lg py-3 mt-4">
              Choose plan
            </button>
          </div>
        </div>
      </section>

      <Footer />
     
    </div>
  );
};

export default Home;
