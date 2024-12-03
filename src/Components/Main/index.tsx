import React from "react";
import "./style.css";
import "./tailwind.css";

interface MainProps {
  title: string;
  title2: string;
  image: string;
  description: string;
  description2: string;
  title3: String;
  title4: String;
}

  const Main: React.FC<MainProps> = ({ title,title2, image, description,title3,title4,description2}) => {
  
  return (
    <>
      {/* component */}
      <div className="bg-gray-100">
      <div className="flex items-start bg-gray-100 " >
      <div className="relative flex max-w-[48rem] flex-col rounded-xl bg-gray-100 text-gray-700 shadow-md  bg-gray-100  ml-10 p-4 ">
      <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased bg-gray-100 ">
           <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased bg-gray-100 ">
           {title} </h4>
          </p><br />
          <p className="text-red-600">{title2}</p>

        <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
          <img
            src={image}
            alt="ui/ux review check"
          />
        </div>
        <div className="p-6">
          <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
          {description}
          </p>
        </div>

        <div className="flex justify-between mt-4 bg-gray-100 ">
        <a className="inline-block" href="#">
        <button
          className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          <p className="text-red-600">Read More </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            aria-hidden="true"
            className="h-4 w-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            ></path>
          </svg>
        </button>
      </a>
       <br /><br />
        
          </div>
  <main className="">
  <div className="mt-6 md:flex space-x-6 bg-gray-100 ">
  <div className="relative flex max-w-[20rem] flex-col rounded-xl bg-gray-100 text-gray-700 shadow-md bg-gray-100">
    <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased bg-gray-100 ">
    {title3} <br /></h4> 
    <div className="bg-gray-100 ">
    <br /><p className="text-red-600 bg-gray-100 ">{title4}</p>
      <img src="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/hero01-free-img.jpg" alt="" />
      <div className="px-6">
        <br /><p className="text-gray-700 mb-2">
          {description2}</p>
        <div className="flex justify-between mt-4">
        <a className="inline-block" href="#">
        <button
          className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          <p className="text-red-600">Read More </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            aria-hidden="true"
            className="h-4 w-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            ></path>
          </svg>
        </button>
      </a>
       <br /><br />
          </div>
          </div>
      </div>
    </div>
   
    <div className="relative flex max-w-[20rem] flex-col rounded-xl bg-gray-100 text-gray-700 shadow-md bg-[#f3f2f3]">
    <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal bg-gray-100 text-blue-gray-900 antialiased bg-gray-100 ">
    Consectetuer vehicula  <br /> Consectetuer vehicula ab</h4><br />   
     <div className="bg-gray-100 ">

    <p className="text-red-600 bg-gray-100 ">November 21, 2017 / Kitchen, Lifestyle</p>
      <img src="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/pic20-free-img.jpg" alt="" />
      <div className="px-6">
        <br /><p className="text-gray-700 mb-2">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....
        </p>
        <div className="flex justify-between mt-4">
        <a className="inline-block" href="#">
        <button
          className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          <p className="text-red-600">Read More </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            aria-hidden="true"
            className="h-4 w-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            ></path>
          </svg>
        </button>
      </a>
          <br /><br />
          </div>
          </div>
      </div>
    </div>
  </div>
 
  <div className="mt-6 md:flex space-x-6 m-0">
  <div className="relative flex max-w-[20rem] flex-col rounded-xl  text-gray-700 shadow-md bg-gray-100">
    <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased bg-gray-100 ">
    Consectetuer vehicula  <br /> Consectetuer vehicula ab</h4><br />
    <div className="bg-gray-100">
    <p className="text-red-600 bg-gray-100 ">November 21, 2017 / Kitchen, Lifestyle</p>
      <img src="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/hero01-free-img.jpg" alt="" />
      <div className="px-6">
        <br /><p className="text-gray-700 mb-2">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....
        </p>
        <div className="flex justify-between mt-4">
        <a className="inline-block" href="#">
        <button
          className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          <p className="text-red-600">Read More </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            aria-hidden="true"
            className="h-4 w-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            ></path>
          </svg>
        </button>
      </a>
       <br /><br />
          </div>
          </div>
      </div>
    </div>
   
    <div className="relative flex max-w-[20rem] flex-col rounded-xl bg-gray-100 text-gray-700 shadow-md ">
    <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased bg-gray-100 ">
    Consectetuer vehicula  <br /> Consectetuer vehicula ab</h4><br />
    <div className="bg-gray-100">
    <p className="text-red-600 bg-gray-100 ">November 21, 2017 / Kitchen, Lifestyle</p>
      <img src="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/sofa-with-pot.jpg" alt="" />
      <div className="px-6">
        <br /><p className="text-gray-700 mb-2">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....
        </p>
        <div className="flex justify-between mt-4">
        <a className="inline-block" href="#">
        <button
          className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          <p className="text-red-600">Read More </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            aria-hidden="true"
            className="h-4 w-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            ></path>
          </svg>
        </button>
      </a>
       <br /><br />
          </div>
          </div>
      </div>
    </div>
  </div>
  
  <br /><br /><nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination ml-20">
  {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
  <a href="#" aria-current="page" className="relative z-10 inline-flex items-center bg-red-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ml-20">1</a>
  <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">2</a>  
  <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">3</a>

 
</nav>
  <div className="paginateNext float-right mr-20">
    <a href="#" className="relative inline-flex items-center rounded-r-md px-2 py-2 text-red-400 ring-1 ring-inset ring-red-300 hover:bg-red-50 focus:z-20 focus:outline-offset-0">
    Next
    <svg className="size-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
      <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />Next
    </svg>
    </a>
  </div>
  <br /><br />
</main>
    </div>
             {/* Premier element flexé a droite*/}
    <div className="flex justify-center items-center min-h-screen p-4 mt-0 bg-gray-100 ">
    <div className="max-w-[720px] mx-auto bg-gray-100 ">
        <div className="relative flex w-110 h-200 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md bg-gray-100 ">
            <div className="py-4 bg-gray-100 ">
                <div className="flex items-center bg-gray-100 ">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full max-w-md rounded-md border border-gray-300 bg-gray-100  px-4 py-2 text-sm text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-100 "
                    />
                    <svg
                        className="h-8 w-8 text-black"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <circle cx="10" cy="10" r="7" />
                        <line x1="21" y1="21" x2="15" y2="15" />
                    </svg>
                </div>
            </div>
            <div className="bg-gray-100">
            <br /><b className="ml-5" bg-gray-100 >Recent Posts</b>
            <div className="p-6 m-0 bg-gray-100 ">
                <div className="relative flex bg-clip-border rounded-xl bg-gray-100  text-gray-700 shadow-md w-full max-w-[25rem] flex-row h-23 m-0">
                    <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-gray-100  rounded-r-none bg-clip-border rounded-xl shrink-0">
                        <img 
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
                            alt="card-image" className="object-cover w-25 h-30 bg-gray-100 "/>
                    </div>
                    <div className="p-6 m-0">
                        <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
                                   <p className="text-red-600">  startups   </p>

                        </h6>
                        <p>
                            Lyft launching cross-platform service this week
                        </p>
                    </div>
                </div>
            </div>
            <div className="p-6 m-0">
                <div className="relative flex bg-clip-border rounded-xl bg-gray-100  text-gray-700 shadow-md w-full max-w-[25rem] flex-row h-23 m-0">
                    <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-gray-100  rounded-r-none bg-clip-border rounded-xl shrink-0">
                        <img 
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
                            alt="card-image" className="object-cover w-25 h-30"/>
                    </div>
                    <div className="p-6 m-0">
                        <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
                        <p className="text-red-600">  startups   </p>

                        </h6>
                        <p>
                            Lyft launching cross-platform service this week
                        </p>
                    </div>
                </div>
            </div>
            <div className="p-6 m-0">
                <div className="relative flex bg-clip-border rounded-xl bg-gray-100  text-gray-700 shadow-md w-full max-w-[25rem] flex-row h-23 m-0">
                    <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-gray-100  rounded-r-none bg-clip-border rounded-xl shrink-0">
                        <img 
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
                            alt="card-image" className="object-cover w-25 h-30"/>
                    </div>
                    <div className="p-6 m-0">
                        <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
                        <p className="text-red-600">  startups   </p>

                        </h6>
                        <p>
                            Lyft launching cross-platform service this week
                        </p>
                    </div>
                </div>
            </div>
            <div className="p-6 m-0">
                <div className="relative flex bg-clip-border rounded-xl bg-gray-100  text-gray-700 shadow-md w-full max-w-[25rem] flex-row h-23 m-0">
                    <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-gray-100  rounded-r-none bg-clip-border rounded-xl shrink-0">
                        <img 
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
                            alt="card-image" className="object-cover w-25 h-30"/>
                    </div>
                    <div className="p-6 m-0">
                        <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
                        <p className="text-red-600">  startups   </p>
                        </h6>
                        <p>
                            Lyft launching cross-platform service this week
                        </p>
                    </div>
                </div>
            </div>
            

            <div className="p-6 m-0">
                <div className="relative flex bg-clip-border rounded-xl bg-gray-100  text-gray-700 shadow-md w-full max-w-[25rem] flex-row h-23 m-0">
                    <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-gray-100  rounded-r-none bg-clip-border rounded-xl shrink-0">
                        <img 
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
                            alt="card-image" className="object-cover w-25 h-30"/>
                    </div>
                    <div className="p-6 m-0">
                        <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
                        <p className="text-red-600">  startups   </p>
                        </h6>
                        <p>
                            Lyft launching cross-platform service this week
                        </p>
                    </div>
                </div>
                <br /><br />  </div>           {/* Deuxieme element*/}

    <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md bg-gray-100">
    <div className="p-4 bg-gray-100 ">
  <h2 className="text-xl font-bold text-black-700 mb-4">Tags</h2>
  <div className="flex flex-wrap gap-2">
  <span
      className="bg-white-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer"
    >
      sitdoor
    </span>
    
    <span
      className="bg-white-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer"
    >
      sitdoor
    </span>
    <span
      className="bg-white-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer"
    >
      sitdoor
    </span>
    <span
      className="bg-white-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer"
    >
      sitdoor
    </span>
    <span
      className="bg-white-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer"
    >
      sitdoor
    </span>
    <span
      className="bg-white-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer"
    >
      sitdoor
    </span>
    <span
      className="bg-white-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer"
    >
      sitdoor
    </span>
    <span
      className="bg-white-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer"
    >
      sitdoor
    </span>
    <span
      className="bg-white-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer"
    >
      sitdoor
    </span>
    <span
      className="bg-white-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer"
    >
      sitdoor
    </span>
    <span
      className="bg-white-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer"
    >
      sitdoor
    </span>
    <span
      className="bg-white-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer"
    >
      sitdoor
    </span>
    <span
      className="bg-white-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer"
    >
      sitdoor
    </span>
    <span
      className="bg-white-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer"
    >
      sitdoor
    </span>
    <span
      className="bg-white-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer"
    >
      sitdoor
    </span>
    <span
      className="bg-white-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer"
    >
      sitdoor
    </span>
    <span
      className="bg-white-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer"
    >
      sitdoor
    </span>
    <span
      className="bg-white-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer"
    >
      sitdoor
    </span>
    <span
      className="bg-white-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer"
    >
      sitdoor
    </span>
    <span
      className="bg-white-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer"
    >
      sitdoor
    </span>
    <span
      className="bg-white-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer"
    >
      sitdoor
    </span>
    <span
      className="bg-white-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer"
    >
      sitdoor
    </span>
    <span
      className="bg-white-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer"
    >
      sitdoor
    </span>
    <span
      className="bg-white-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer"
    >
      sitdoor
    </span>
    <span
      className="bg-white-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer"
    >
      sitdoor
    </span>
    <span
      className="bg-white-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer"
    >
      sitdoor
    </span>
    <span
      className="bg-white-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer"
    >
      sitdoor
    </span>
    <span
      className="bg-white-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer"
    >
      sitdoor
    </span>
    <span
      className="bg-white-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer"
    >
      sitdoor
    </span>
    <span
      className="bg-white-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer"
    >
      sitdoor
    </span>
    <span
      className="bg-white-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer"
    >
      sitdoor
    </span>
    <span
      className="bg-white-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer"
    >
      sitdoor
    </span>
    <span
      className="bg-white-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer"
    >
      sitdoor
    </span>
    <span
      className="bg-white-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer"
    >
      sitdoor
    </span>
    <span
      className="bg-white-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer"
    >
      sitdoor
    </span>
    <span
      className="bg-white-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer"
    >
      sitdoor
    </span>
    <span
      className="bg-white-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer"
    >
      sitdoor
    </span>
    <span
      className="bg-white-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer"
    >
      sitdoor
    </span>
    <span
      className="bg-white-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer"
    >
      sitdoor
    </span>
    <span
      className="bg-white-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer"
    >
      sitdoor
    </span>
    <span
      className="bg-white-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer"
    >
      sitdoor
    </span>
    <span
      className="bg-white-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer"
    >
      sitdoor
    </span>
    <span
      className="bg-white-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer"
    >
      sitdoor
    </span>
    <span
      className="bg-white-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer"
    >
      sitdoor
    </span>
    <span
      className="bg-white-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer"
    >
      sitdoor
    </span>
    <span
      className="bg-white-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer"
    >
      sitdoor
    </span>
    <span
      className="bg-white-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer"
    >
      sitdoor
    </span>
    <span
      className="bg-white-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer"
    >
      sitdoor
    </span>
    <span
      className="bg-white-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer"
    >
      sitdoor
    </span>
    <span
      className="bg-white-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer"
    >
      sitdoor
    </span>
    <span
      className="bg-white-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer"
    >
      sitdoor
    </span>
    <span
      className="bg-white-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer"
    >
      sitdoor
    </span>
    <span
      className="bg-white-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer"
    >
      sitdoor
    </span>
    <span
      className="bg-white-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer"
    >
      sitdoor
    </span>
    <span
      className="bg-white-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer"
    >
      sitdoor
    </span>
    <span
      className="bg-white-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer"
    >
      sitdoor
    </span>
    {/* Ajoutez plus de tags si nécessaire */}
  </div>
</div>

</div>

            </div>
        </div>
    </div>

    {/* stylesheet */}
    <link
        rel="stylesheet"
        href="https://unpkg.com/@material-tailwind/html@latest/styles/material-tailwind.css"
    />

    {/* Ripple Effect */}
    {/* from cdn */}
    <script src="https://unpkg.com/@material-tailwind/html@latest/scripts/ripple.js"></script>
   

</div>

    </div>
    </div>
       </>
  );
}

export default Main;