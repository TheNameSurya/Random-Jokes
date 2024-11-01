
import { useState } from "react";
import { useSelector } from "react-redux";
import { fetchjoke } from "./jokeslice";
import { useDispatch } from "react-redux";


function App() {
  const [cate, setcate] = useState()


  const dispatch = useDispatch()
  const joke = useSelector(function (state) {
    return state.joke.joke
  })


  function handlecatagory(e) {
    setcate(e.target.value)
  }

  function handlefetch() {
    dispatch(fetchjoke(cate))
  }


  return (
    <div className="flex flex-col items-center bg-gray-600 w-[100%] h-screen justify-center gap-10">
      <div className="flex flex-row gap-4 bg-white rounded-lg p-4 focus:none">
        <input onChange={handlecatagory} className=" w-96 rounded-lg"></input>
        <button onClick={handlefetch} className="bg-white p-1 rounded-lg w-12">Get</button></div>

      <h3 className="text-white text-2xl font-bold"> Jokes :{joke}😂😆😜 </h3>

    </div>
  );
}

export default App;