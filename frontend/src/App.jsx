import "./App.css";
import atharv from "./assets/atharv.jpeg";

function App() {
  return (
    <div className="App w-screen h-screen flex justify-center font-UbuntuMono">
      <div className="container w-8/12 border-2 mt-28 rounded-lg border-gray-400 h-fit">
        <div className="h-7 w-full border-2 border-b-gray-400 rounded-t-lg flex flex-col justify-center">
          {/* close buttons */}
          <div className="flex ml-3">
            <div className="mr-2 h-3 w-3 rounded-full bg-red-500"></div>
            <div className="mr-2 h-3 w-3 rounded-full bg-yellow-500"></div>
            <div className="mr-2 h-3 w-3 rounded-full bg-green-500"></div>
          </div>
        </div>
        <nav className="w-11/12 flex justify-between mt-10 mx-auto">
          <div className="bg-black p-3 rounded-md">
            <h1 className=" font-bold font-UbuntuMono text-xl text-white">
              {"</> "} Lazy dev Inc.
            </h1>
          </div>
          <ul className="flex justify-around my-auto font-UbuntuMono text-lg">
            <li
              onClick={() => {
                window.location.href = "https://atharvp.dev/";
              }}
              className="mr-10 cursor-pointer"
            >
              Home
            </li>
            <li
              onClick={() => {
                window.location.href = "https://atharvp.dev/projects";
              }}
              className="mr-10 cursor-pointer"
            >
              Projects
            </li>
            <li
              onClick={() => {
                window.location.href = "https://atharvparlikar.hashnode.dev/";
              }}
              className="mr-10 cursor-pointer"
            >
              Blog
            </li>
          </ul>
        </nav>
        <div className="hero h-fit w-11/12 mx-auto flex my-16 font-UbuntuMono">
          <div className="links flex flex-col justify-center">
            {/* github */}
            <svg
              onClick={() => window.open("https://github.com/atharvParlikar")}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="my-5 cursor-pointer"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
            {/* twitter */}
            <svg
              onClick={() => window.open("https://twitter.com/atharvParlikar1")}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="my-5 cursor-pointer fill-current text-sky-500"
              viewBox="0 0 16 16"
            >
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
            </svg>
            {/* instagram */}
            <svg
              onClick={() =>
                window.open("https://www.instagram.com/atharvparlikar01/")
              }
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="my-5 cursor-pointer fill-current text-pink-500"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
            </svg>
          </div>
          <div className="flex">
            <div className="intro mx-10 my-auto">
              <h1 className="text-4xl font-bold mb-5">Atharv Parlikar</h1>
              {/* location */}
              <div className="mb-5 flex">
                <p className="align-middle">
                  <a
                    href="https://goo.gl/maps/P7HkXoHNVmvXh3xP7"
                    target="_blank"
                  >📍 </a>
                  <a
                    href="https://goo.gl/maps/P7HkXoHNVmvXh3xP7"
                    target="_blank"
                    className="underline"
                  >
                    Nagpur, Maharashtra, India
                  </a>
                </p>
               </div>
              <p className="w-10/12">
                Hii, i am a second year Computer Science student based in Nagpur
                (for next 3 years atleast). I know web technologies like HTML,
                CSS, JavaScript, ReactJS but i'm more interested in recreational
                programming :) very fond of low level programming languages like
                c, rust. Interested in ML but maths is hard 🥲
              </p>
            </div>
            <img
              src={atharv}
              alt="me"
              className="h-96 border-2 border-black rounded-md"
            />
          </div>
        </div>
        <div className="made-with w-11/12 mx-auto font-2xl font-bold">
          <h1 className="mb-5">{"~ "}Made with 👨‍💻</h1>
          <div className="flex mb-5">
            <img className="mr-3" src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" />
            <img className="mr-3" src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" />
            <img className="mr-3" src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" />
            <img className="mr-3" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" />
            <img className="mr-3" src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" />
            <img className="mr-3" src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" />
            <div className="flex">
              <svg fill="#000000" width="20px" height="20px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M256,48,496,464H16Z"/>
              </svg>
                <h1 className="ml-2">Vercel</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
