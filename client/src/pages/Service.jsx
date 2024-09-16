import { useAuth } from "../auth";

export const Service =()=>{
  const {service}=useAuth();
  if(service==""){
    return(
      <div className="flex justify-center text-2xl mx-10">
      <p className="text-red-800">Service not Available at this time Due to Server Problem</p>
      </div>
    );
  }

    
    return (
      <>
      <section className="w-full">
      <div className="text-white m-auto sm:mx-10 mx-2 md:mx-32 my-10 text-3xl font-serif  "> 
        <h1>Services</h1>
      </div>

      <div className=" flex  flext-row flex-wrap text-white justify-center ">
        {service.map((currElem,index)=>{
          return(
            <div key={index} className="border-2 border-white w-80 p-4 m-5 rounded-md">
              <div>
                <img src="./design.png" alt="" width="200px"/>
              </div>
              <div>
                <div className="flex py-5">
                  <p className="pr-4">{currElem.provider}</p>
                  <p className=" font-sans text-blue-700">{currElem.price}</p>
                </div>
                <h2 className="pb-5 text-2xl text-slate-700">{currElem.service}</h2>
                <p className="text-[18px] text-indigo-500">{currElem.description}</p>
              </div>

            </div>

          );
        })}
        </div>
      </section>
      </>

);
}

