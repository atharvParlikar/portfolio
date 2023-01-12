const Projects = () => {
  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="container h-4/6 w-8/12 border-2 border-gray-400  rounded-xl font-UbuntuMono flex flex-col my-auto">
        <nav className="w-11/12 flex justify-center mt-10 mx-auto">
          <ul className="flex justify-around my-auto font-UbuntuMono text-lg">
            <li
              onClick={() => {
                window.location.href = "http://portfolio-atharvparlikar.vercel.app/";
              }}
              className="mx-5 cursor-pointer"
            >
              Home
            </li>
            <li
              onClick={() => {
                window.location.href = "http://portfolio-atharvparlikar.vercel.app/projects";
              }}
              className="mx-5 cursor-pointer"
            >
              Projects
            </li>
            <li
              onClick={() => {
                window.location.href = "http://portfolio-atharvparlikar.vercel.app/blogs";
              }}
              className="mx-5 cursor-pointer"
            >
              Blog
            </li>
          </ul>
        </nav>
        <div className="h-full mt-36 px-16">
          <h1 className="text-3xl  font-bold">Under Construction 🚧</h1>
          <p className="font-thin text-md">
            Not really under construction but its just that i dont have any good
            projects to show for so im just in the process of making projects to
            put it here...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
