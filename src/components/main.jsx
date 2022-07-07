const myStyle={
    backgroundImage: 
"url('/generalBanner.jpg')",
    height:'100vh',
    marginTop:'',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    
};
const mySty={
    backgroundImage: 
"url('/video-image-2.jpg')",
    height:'100vh',
    
    
};
const Main = () =>{
    return(
    <div>
        <div className="d-flex p-4" style={myStyle}>
            <div className="mt-11">
               <h1 className="text-7xl text-white font-sans font-semibold ">Your Everything On-Demand</h1>
            </div>
                
            <div className=" mt-3">
                <h1 className="text-7xl  text-white font-sans font-semibold ">Delivery App </h1>
            </div>
            <div class="flex items-center mt-12">
                <input id="link-radio" type="radio" value="" className="w-8 h-6 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label for="link-radio" className="ml-2 text-xl font-medium text-gray-900 dark:text-gray-300">Email</label>


                <input id="phone" type="radio" value="" className="w-8 h-6 ml-3 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label for="link-radio" className="ml-2 text-xl font-medium text-gray-900 dark:text-gray-300">Phone</label>
            </div>
            <div className="flex mt-3">
                <input type="search"   className="block p-3 pl-10 mt-4  text-sm text-gray-900 bg-gray-50 rounded-full w-80 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="search" />
                
            </div>
                    
            
        </div>
        <div className="d-flex bg-neutral-800 justify-center" >
            <div className="basis-full" style={mySty}></div>
        </div>
    </div>
    );
}; 
export default Main;