import { NavLink } from "react-router-dom";
import { Analytics } from "../component/Analytics";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import { useAuth } from "../auth";

export const About = () => {
  const { user }=useAuth();
  
  return (
    <>
      <main>
        <section className="w-full">
          <div className="flex flex-col-reverse md:flex-row md:mx-32 md:my-16  justify-between items-center">
            <div className="mx-4 sm:mx-0 px-2 sm:px-14 md:p-0 md:max-w-[550px]">
              {/* <p>We care to cure your Health</p> */}
              
               <p className="text-blue-600 text-2xl  font-serif mb-4 uppercase">Welcome, {user ? ` ${user.username}  to our website ` :`to Our Website`}  </p> 
             
              <h1 className="text-red-700 text-2xl  font-serif mb-4">Why Choose Us? </h1>
              <p className="text-slate-600 text-xl font-serif mb-1 md:text-indigo-300 md:mb-7 md:text-1xl ">
                Expertise: Our team consists of experienced IT professionals who
                are passionate about staying up-to-date with the latest industry
                trends.
              </p>
              <p className="text-slate-600 text-xl font-serif mb-1 md:text-indigo-300 md:mb-7 md:text-1xl ">
                Customization: We understand that every business is unique.
                Thats why we create solutions that are tailored to your specific
                needs and goals.
              </p>
              <p className="text-slate-600 text-xl font-serif mb-1 md:text-indigo-300 md:mb-7 md:text-1xl ">
                Customer-Centric Approach: We prioritize your satisfaction and
                provide top-notch support to address your IT concerns.
              </p>
              <p className="text-slate-600 text-xl font-serif mb-1 md:text-indigo-300 md:mb-7 md:text-1xl ">
                Affordability: We offer competitive pricing without compromising
                on the quality of our services.
              </p>
              <p className="text-slate-600 text-xl font-serif mb-1 md:text-indigo-300 md:mb-7 md:text-1xl ">
                Reliability: Count on us to be there when you need us. We are
                committed to ensuring your IT environment is reliable and
                available 24/7.
              </p>
              <div className="mb-10">
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
            <div className="flex justify-center mb-10 mt-7 md:mb-0 md:mt-0">
              <img
                src="/about.png"
                alt="coding buddies "
                className="w-44 h-44  sm:w-96 sm:h-96 sm:min-w-80 sm:min-h-80"
                
              />
            </div>
          </div>
        </section>
      </main>

      <Analytics />
    </>
  );
};

