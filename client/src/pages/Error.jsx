import { NavLink } from "react-router-dom";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
export const Error = () => {
    return (
      <>
        <section className="w-full">
          <div className="my-10 flex flex-col mx-10 ">
            <h2 className="text-center text-7xl transition-shadow ease-in-out shadow-indigo-700 text-slate-500 animate-pulse ">404</h2>
            <h4 className="text-3xl text-center text-indigo-500 ">Sorry! Page not found</h4>
            <p className="text-2xl text-center text-gray-500">
              Oops! It seems like the page you are trying to access does not exist.
              If you believe there is an issue, feel free to report it, and we will
              look into it.
            </p>
            <div className="mt-5 ">
              <ButtonGroup
                disableElevation
                variant="contained"
                aria-label="Disabled button group"
              >
                <NavLink to="/">
                  <Button className="uppercase">retrun home</Button>
                </NavLink>
                <NavLink to="/contact">
                  <Button className="uppercase">report problem</Button>
                </NavLink>
              </ButtonGroup>
            </div>
           
          </div>
        </section>
      </>
    );
  };