const Projects = () => {
  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="container w-8/12 border-2 border-gray-400  rounded-xl font-UbuntuMono flex flex-col my-auto">
        <nav className="w-11/12 flex  my-2 mx-auto justify-between">
          <div className="flex my-2">
            <div className="mr-2 h-3 w-3 rounded-full bg-red-500"></div>
            <div className="mr-2 h-3 w-3 rounded-full bg-yellow-500"></div>
            <div className="mr-2 h-3 w-3 rounded-full bg-green-500"></div>
          </div>
          <ul className="flex justify-around my-auto font-UbuntuMono text-lg">
            <li
              onClick={() => {
                window.location.href = "https://atharvp.dev";
              }}
              className="mx-5 cursor-pointer"
            >
              Home
            </li>
            <li
              onClick={() => {
                window.location.href = "https://atharvp.dev/projects";
              }}
              className="mx-5 cursor-pointer"
            >
              Projects
            </li>
            <li
              onClick={() => {
                window.location.href = "https://atharvparlikar.hashnode.dev";
              }}
              className="mx-5 cursor-pointer"
            >
              Blog
            </li>
          </ul>
        </nav>

        <div className="break h-0.5 w-full bg-gray-400"></div>

        <div className="h-full mt-16 px-16">
          <div className="border-2 border-orange-700 rounded">
            <div className="p-7 cursor-pointer" onClick={() => window.location = "https://github.com/atharvParlikar/disk-cleaner-cli"}>
              <h1 className="text-2xl">Disk cleaner cli</h1>
              <p>dick-cleaner-cli is a tool written in rust that can detect duplicate files in your system and give an analysis of storage consumption by filetype.</p>
              <p>Languages:</p>
              <p className="ml-6">Rust := 100%</p>
            </div>
          </div>
        </div>

        <div className="h-full mt-16 px-16">
          <div className="border-2 border-green-700 rounded">
            <div className="p-7 cursor-pointer" onClick={() => window.location = "https://github.com/atharvParlikar/NeuraForge"}>
              <h1 className="text-2xl">NeuraForge</h1>
              <p>A low-level Neural Network / autograd library that does not hide any part of training a Neural Network</p>
              <p>Languages:</p>
              <p className="ml-6">Python := 100%</p>
            </div>
          </div>
        </div>

        <div className="h-full mt-16 px-16 mb-16">
          <div className="border-2 border-blue-500 rounded">
            <div className="p-7 cursor-pointer" onClick={() => window.location = "https://github.com/atharvParlikar/chess"}>
              <h1 className="text-2xl">chess</h1>
              <p>An Implementation of a basic multiplayer chess game with React as frontend and express.js with socket.io for socket connections</p>
              <p>Languages:</p>
              <p className="ml-6">Javascript := 94%</p>
              <p className="ml-6">HTML := 3%</p>
              <p className="ml-6">CSS := 3%</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Projects;
