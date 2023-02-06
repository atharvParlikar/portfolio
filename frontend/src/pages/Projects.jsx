const Projects = () => {
  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="container h-4/6 w-8/12 border-2 border-gray-400  rounded-xl font-UbuntuMono flex flex-col my-auto">
        <nav className="w-11/12 flex justify-center mt-10 mx-auto">
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
        <div className="h-full mt-36 px-16">
          <div className="border-2 border-orange-700 rounded">
            <div className="p-7 cursor-pointer" onClick={() => window.location = "https://github.com/atharvParlikar/disk-cleaner-cli"}>
              <h1 className="text-2xl">Disk cleaner cli</h1>
              <p>dick-cleaner-cli is a tool written in rust that can detect duplicate files in your system and give an analysis of storage consumption by filetype.</p>
              <p>Languages:</p>
              <p className="ml-6">Rust := 100%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
