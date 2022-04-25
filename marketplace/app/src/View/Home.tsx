import React from "react"
import bgMobileImage from "../assets/images/hero-bg-mobile.png"
import bgImage from "../assets/images/hero-bg.png"
import mountain from "../assets/images/mountain-bg.png"
import { useMedia } from "../hooks"

const Home = () => {
  const imageName = useMedia(
    ["(max-width: 320px)", "(min-width: 321px)"],
    ["heroMobile", "hero"],
    "heroMobile"
  )
  return (
    <div>
      <div className="flex w-full flex-col">
        <figure className="relative">
          <img
            src={imageName === "hero" ? bgImage : bgMobileImage}
            className="relative z-0 w-full"
            alt="Hero image"
          />
          <figcaption className="absolute top-20 left-4 flex flex-col text-white sm:left-32 sm:top-72 md:top-40 md:left-16 lg:top-52 lg:left-12 xl:top-80 xl:left-32">
            <span className="sm:text-md text-xs font-extralight tracking-widest">
              APPS unveils new studio
            </span>
            <span className="sm:font-extraligh text-3xl font-thin tracking-tighter sm:text-6xl">
              Lagom
            </span>
          </figcaption>
        </figure>
        <div className="flex flex-col items-center justify-center bg-gray-100 px-5 py-20 text-center font-extralight text-black/60 sm:h-[350px] lg:h-[512px]">
          <h1 className="text-3xl leading-8">
            Innovation and experience design agency.{" "}
          </h1>
          <p className="py-6">
            Apps is an innovation and experience design agency. We exist to
            create a better future with you.
          </p>
          <button className="h-10 w-28 rounded bg-accent text-xs font-extralight uppercase text-white shadow-md shadow-gray-400">
            Products
          </button>
        </div>
        <div className="flex h-full flex-col items-start justify-start py-20 font-extralight text-black/60 sm:h-[350px] md:flex-row-reverse md:pt-0 lg:h-[512px]">
          <div className="flex w-full flex-col sm:h-[350px] sm:items-start sm:justify-center lg:h-[512px]">
            <h1 className="px-5 text-3xl leading-8 sm:px-20">
              The imaginative application of art and science.
            </h1>
            <p className="py-6 px-5 sm:px-20">
              We architect, design and deliver iconic experiences, services and
              products that improve people’s lives.
            </p>
            <button className="ml-5 mb-20 h-10 w-28 rounded bg-accent text-xs font-extralight uppercase text-white shadow-md shadow-gray-400 sm:mb-0 sm:ml-20">
              Read Latest
            </button>
          </div>
          <img
            src={mountain}
            className="relative z-0 sm:h-[350px] lg:h-[512px]"
            alt="Hero image"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
