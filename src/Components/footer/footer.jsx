import React from "react";
import "./footer.css"; 
import LogoFooter from "../../assets/img/logo-footer.png"
const Footer = () => {
  return (
 
   
<>


<footer class="bg-white rounded-t-xl bg-white w-full mt-[2rem]">
    <div class="w-full mx-auto max-w-screen-xl p-6 flex flex-col md:flex-row lg:flex-row items-center justify-center">
      <img src={LogoFooter} alt="" className="mr-[12px] w-[10rem]" />
      <p className="text-blue-txt text-center text-lg md:text-sm lg:text-sm">Lextus. All Rights Reserved - Designed by Web Inform·tica S.A. de C.V.</p>

    
    </div>
</footer>

</>

  );
};

export default Footer;
