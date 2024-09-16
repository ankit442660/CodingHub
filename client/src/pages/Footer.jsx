 export const Footer=()=>{
    const date=new Date().getFullYear();
    return(
        <>
        <footer className=" bg-violet-800 w-full mt-10 ">
<div className="flex justify-center items-center h-14 rounded">
              <p className="text-[18px] font-serif">@AnkitTechnical <span>{date}</span></p>  
            </div>
        </footer>
        </>
    )
 }