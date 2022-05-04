import React from "react"

type IPropsButtonNavigations = {
  handlePrevImage: () => void
  handleNextImage: () => void
}
export function ButtonNavigations({
  handleNextImage,
  handlePrevImage
}: IPropsButtonNavigations) {
  return (
    <div className="absolute w-full top-1/2 -translate-y-1/2 px-3 flex justify-between items-center">
      <button
        className="bg-emerald-400 px-2 rounded-md text-white"
        onClick={() => handlePrevImage()}>
        &#x2039; Previous
      </button>
      <button
        className="bg-emerald-400 px-2 rounded-md text-white"
        onClick={() => handleNextImage()}>
        Next &#x203A;
      </button>
    </div>
  )
}
