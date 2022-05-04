import { useCallback, useEffect, useRef, useState } from "react"
import { ButtonNavigations } from "./components/ButtonNavigations"
import { coverImages } from "./contrant"
import logo from "./logo.svg"

function App() {
  const [currentImage, setCurrentImage] = useState(0)

  const handlePrevImage = () => {
    setCurrentImage((latestValue) =>
      latestValue > 0 ? latestValue - 1 : coverImages.length - 1
    )
  }

  const handleNextImage = () => {
    setCurrentImage((latestValue) =>
      latestValue < coverImages.length - 1 ? latestValue + 1 : 0
    )
  }

  useEffect(() => {
    const autoSlide = setInterval(() => {
      handleNextImage()
    }, 3000)

    return () => {
      clearInterval(autoSlide)
    }
  }, [])

  return (
    <div className="App w-full min-h-screen bg-neutral-100 select-none">
      <div className="relative mx-auto container py-[5rem] w-[764px]">
        <div className=" mx-auto overflow-hidden w-full">
          <div
            className={` w-full h-full whitespace-nowrap transition-all ease-in-out  duration-700  transform  -translate-x-[${
              currentImage * 100
            }%] `}>
            {coverImages.map((image, index) => {
              return (
                <div className="inline-block aspect-video" key={image}>
                  <img src={image} alt="123" className="overflow-hidden" />
                </div>
              )
            })}
          </div>
        </div>
        <div className="w-full min-h-[3rem] bg-neutral-200 flex justify-center items-center text-black">
          <ul className="flex justify-center items-center gap-4">
            {[...Array(coverImages.length)].map((item, index) => (
              <li
                key={index}
                className={`w-4 h-4  rounded-full transition-all duration-200 ease-in-out ${
                  currentImage === index ? "bg-black" : "bg-slate-400"
                }`}></li>
            ))}
          </ul>
        </div>

        <ButtonNavigations
          handlePrevImage={handlePrevImage}
          handleNextImage={handleNextImage}></ButtonNavigations>
      </div>
    </div>
  )
}

export default App
