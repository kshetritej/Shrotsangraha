import { useQuery } from "react-query";
import {LoginCard } from "@/components/LoginCard"
function App() {
  const { isLoading, data, error } = useQuery("github/kshetritej", () =>
    fetch("https://api.github.com/users/kshetritej").then((res) => res.json())
  );

  if (isLoading) return <>Loading ...</>;
  if (error) return <>JSON.stringify(error)</>;
  if (!data) return <>No data available.</>;

  return (
    <>
      <div className="flex p-4 flex-col items-center justify-center align-middle h-[100%]">
        <h1 className="text-blue-500 text-2xl font-extrabold">{data.login}</h1>
        <div className="flex gap-2 p-4">
          <div className="p-2 text-green-500">
            <h3>Followers: {data.followers} </h3>
          </div>
          <div className="p-2 text-green-500">
            <h3>Following: {data.following} </h3>
          </div>
        </div>

      <LoginCard/>
      </div>
    </>
  );
}
export default App;
