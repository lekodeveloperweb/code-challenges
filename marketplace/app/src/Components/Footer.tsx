import React from "react"
import { NavLink } from "react-router-dom"
import Menu from "./Menu"

const Footer = () => {
  return (
    <div className="mt-6 flex w-full flex-col items-start py-4 px-6 sm:flex-row sm:items-center sm:space-x-8">
      <NavLink to="/" className="text-2xl font-semibold">
        APPS
      </NavLink>
      <Menu
        className="flex flex-col"
        itemsClassName="py-4 sm:p-2 text-black/80"
        mergeNewItems
        items={[{ name: "Your cart", path: "/cart" }]}
      />
      <div className="flex w-full flex-col items-start py-4 pr-2 sm:items-end">
        <ul className="my-6 inline-flex w-full justify-start space-x-6 sm:justify-end">
          <li>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.54">
                <path
                  d="M20.3444 14.3276H13.1837V16.7145H17.5524C16.9007 18.7896 14.9624 20.2948 12.6722 20.2948C9.84728 20.2948 7.5574 18.0048 7.5574 15.18C7.5574 12.3552 9.84736 10.0653 12.6722 10.0653C14.0947 10.0653 15.3813 10.6461 16.3084 11.5834L18.041 9.70017C16.6573 8.34428 14.7626 7.50793 12.6722 7.50793C8.43496 7.50789 5 10.9429 5 15.18C5 19.4172 8.43496 22.8523 12.6722 22.8523C16.3839 22.8523 19.6335 20.2163 20.3444 16.7145V14.3276L20.3444 14.3276Z"
                  fill="black"
                />
                <path
                  d="M24.9942 14.3236H23.5295V12.8589H22.274V14.3236H20.8093V15.579H22.274V17.0437H23.5295V15.579H24.9942V14.3236Z"
                  fill="black"
                />
              </g>
            </svg>
          </li>
          <li>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.54">
                <path
                  d="M19.7026 5.00412L17.1325 5C14.2451 5 12.3791 6.91443 12.3791 9.87753V12.1264H9.79499C9.57169 12.1264 9.39087 12.3074 9.39087 12.5307V15.7891C9.39087 16.0124 9.5719 16.1932 9.79499 16.1932H12.3791V24.4151C12.3791 24.6383 12.5599 24.8192 12.7832 24.8192H16.1548C16.3781 24.8192 16.5589 24.6381 16.5589 24.4151V16.1932H19.5804C19.8037 16.1932 19.9845 16.0124 19.9845 15.7891L19.9857 12.5307C19.9857 12.4235 19.943 12.3208 19.8674 12.2449C19.7917 12.1691 19.6886 12.1264 19.5814 12.1264H16.5589V10.22C16.5589 9.30371 16.7773 8.83856 17.9709 8.83856L19.7022 8.83794C19.9253 8.83794 20.1061 8.65691 20.1061 8.43381V5.40825C20.1061 5.18536 19.9255 5.00454 19.7026 5.00412Z"
                  fill="black"
                />
              </g>
            </svg>
          </li>
          <li>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.54">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.4887 5H19.4007C22.4274 5 24.8898 7.46235 24.8896 10.4888V19.4008C24.8896 22.4273 22.4274 24.8896 19.4007 24.8896H10.4887C7.46224 24.8896 5 22.4274 5 19.4008V10.4888C5 7.46235 7.46224 5 10.4887 5ZM19.4008 23.1249C21.4544 23.1249 23.1251 21.4544 23.1251 19.4008H23.1249V10.4888C23.1249 8.43541 21.4542 6.76471 19.4007 6.76471H10.4887C8.43529 6.76471 6.76471 8.43541 6.76471 10.4888V19.4008C6.76471 21.4544 8.43529 23.1251 10.4887 23.1249H19.4008Z"
                  fill="black"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.81982 14.945C9.81982 12.119 12.1189 9.81995 14.9449 9.81995C17.7709 9.81995 20.0699 12.119 20.0699 14.945C20.0699 17.7709 17.7709 20.0698 14.9449 20.0698C12.1189 20.0698 9.81982 17.7709 9.81982 14.945ZM11.5845 14.9449C11.5845 16.7977 13.0921 18.305 14.9449 18.305C16.7977 18.305 18.3052 16.7977 18.3052 14.9449C18.3052 13.0919 16.7978 11.5845 14.9449 11.5845C13.0919 11.5845 11.5845 13.0919 11.5845 14.9449Z"
                  fill="black"
                />
                <path
                  d="M20.2848 8.32361C19.9448 8.32361 19.6108 8.46126 19.3707 8.70243C19.1294 8.94243 18.9907 9.27655 18.9907 9.61773C18.9907 9.95784 19.1295 10.2918 19.3707 10.533C19.6107 10.773 19.9448 10.9118 20.2848 10.9118C20.626 10.9118 20.959 10.773 21.2001 10.533C21.4413 10.2918 21.579 9.95773 21.579 9.61773C21.579 9.27655 21.4413 8.94243 21.2001 8.70243C20.9601 8.46126 20.626 8.32361 20.2848 8.32361Z"
                  fill="black"
                />
              </g>
            </svg>
          </li>
          <li>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.54">
                <path
                  d="M25 8.81153C24.2639 9.1377 23.474 9.35891 22.6442 9.45767C23.4915 8.95025 24.1401 8.14542 24.4476 7.18934C23.6527 7.65924 22.7754 8.00045 21.8405 8.18542C21.0919 7.38682 20.0271 6.8894 18.8461 6.8894C16.5803 6.8894 14.7431 8.72656 14.7431 10.9911C14.7431 11.3123 14.7793 11.626 14.8493 11.926C11.44 11.7547 8.41683 10.1213 6.39346 7.63924C6.03977 8.24414 5.83856 8.94898 5.83856 9.70137C5.83856 11.1249 6.56343 12.3809 7.66324 13.1157C6.99085 13.0932 6.35846 12.9083 5.80484 12.6008V12.6521C5.80484 14.6392 7.21958 16.2976 9.09546 16.6751C8.75177 16.7675 8.38935 16.8188 8.01441 16.8188C7.74948 16.8188 7.49327 16.7925 7.24206 16.7425C7.76444 18.3735 9.27918 19.5595 11.0739 19.592C9.67036 20.6918 7.90069 21.3454 5.97856 21.3454C5.64739 21.3454 5.32118 21.3254 5 21.2892C6.81592 22.4553 8.97177 23.1351 11.2888 23.1351C18.8361 23.1351 22.9616 16.8838 22.9616 11.4623L22.9479 10.9312C23.754 10.3562 24.4513 9.63388 25 8.81153Z"
                  fill="black"
                />
              </g>
            </svg>
          </li>
        </ul>
        <span className="mr-1 text-xs text-light">Privacy Policy</span>
        <span className="mr-1 text-xs text-light">
          ?? 2017 Google. All Rights Reserved
        </span>
      </div>
    </div>
  )
}

export default Footer
