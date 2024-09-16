import { Analytics } from "../component/Analytics";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
export const Home = () => {
  return (
    <>
      <main className="w-full">
        <section className="md:m-28 ">
          <div className="flex flex-col-reverse md:flex-row   justify-between items-center">
            <div className="mx-4 sm:mx-0 px-2 sm:px-14  md:p-0 md:max-w-[500px]">
              <p className="text-slate-600 text-2xl  font-serif mb-4 md:text-slate-700 md:mb-7 md:text-3xl">
                We are the World Best IT Company
              </p>
              <h1 className="text-red-700 text-2xl  font-serif mb-4">
                Welcome to CodingHub
              </h1>
              <p className="text-slate-600 text-xl font-serif mb-4 md:text-indigo-600 md:mb-7 md:text-2xl">
                Are you ready to take your business to the next level with
                cutting-edge IT solutions? Look no further! At CodingHub,
                we specialize in providing innovative IT services and solutions
                tailored to meet your unique needs.
              </p>
              <div className="mb-14">
                <ButtonGroup
                  disableElevation
                  variant="contained"
                  aria-label="Disabled button group"
                >
                  <NavLink to="/contact">
                    <Button className="uppercase">connect now</Button>
                  </NavLink>
                  <NavLink to="/service">
                    <Button className="uppercase">learn more</Button>
                  </NavLink>
                </ButtonGroup>
              </div>
            </div>

            {/* hero images  */}
            <div className="flex justify-center mb-10 mt-7 md:mb-0 md:mt-0">
              <img
                src="home.png"
                alt="coding together"
                className="w-44 h-44  sm:w-96 sm:h-96 sm:min-w-80 sm:min-h-80"
              />
            </div>
          </div>
        </section>
      </main>

      {/* 2nd section  */}
      <Analytics />

      {/* 3rd section  */}
      <section className="w-full">
        <div className="flex flex-col md:flex-row md:mx-28 md:my-10  justify-between items-center">
          {/* hero images  */}
          <div className="flex justify-center mb-10 mt-7 md:mb-0 md:mt-0">
            <img
              src="/design.png"
              alt="coding together"
              className="w-44 h-44  sm:w-96 sm:h-96 sm:min-w-80 sm:min-h-80"
            />
          </div>

          <div className="px-2 mx-4 sm:mx-0 sm:px-14 md:p-0 md:max-w-96">
            <p className="text-slate-600 text-2xl   mb-4 md:text-slate-500 md:mb-7 md:text-3xl font-sans">
              We are here to help you
            </p>
            <h1 className="text-red-700 text-2xl  font-serif mb-4">
              Get Started Today
            </h1>
            <p className="text-slate-600 text-xl font-serif mb-4 md:text-indigo-300 md:mb-7 md:text-2xl ">
              Ready to take the first step towards a more efficient and secure
              IT infrastructure? Contact us today for a free consultation and
              lets discuss how CodingHub can help your business thrive in
              the digital age.
            </p>
            <div className="mb-14">
              <ButtonGroup
                disableElevation
                variant="contained"
                aria-label="Disabled button group"
              >
                <NavLink to="/contact">
                  <Button className="uppercase">connect now</Button>
                </NavLink>
                <NavLink to="/service">
                  <Button className="uppercase">learn more</Button>
                </NavLink>
              </ButtonGroup>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
