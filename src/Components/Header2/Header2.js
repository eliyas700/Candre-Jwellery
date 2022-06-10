import React from "react";
import heart from "../../Assets/heart.svg";
import user from "../../Assets/user.svg";
import cart from "../../Assets/cart.svg";
import logo from "../../Assets/logo.svg";
import { Link } from "react-router-dom";
const Header2 = () => {
  return (
    <div className="w-[85%] mx-auto">
      <div className="navbar bg-base-100 my-2 ">
        <div>
          {/* <img height={"36px"} width={"188px"} src={logo} alt="" /> */}
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="250"
              height="71"
              viewBox="0 0 250 71"
              fill="none"
              class="img-svg replaced-svg"
            >
              <path
                class="right-line"
                d="M184.6 41.5C184.6 41.5 186.6 38 192.1 37.5C200.083 36.7743 204.521 41.9634 202.6 43.5C200.679 45.0366 197.6 41 198.1 37.5C198.667 33.5338 201.671 30.7858 205.6 30C209.529 29.2142 213.858 29.3614 221.1 33.5C228.1 37.5 235.1 43.5 242.1 43.5C245.577 43.5 249.1 41.4766 249.1 38C249.1 36 247.881 34 245.6 34C242.1 34 241.6 37.5 243.1 38C244.1 38.3333 245.1 37.5 244.6 36.5"
                stroke="black"
                stroke-linecap="round"
              ></path>
              <g opacity="0.53">
                <circle
                  cx="115.1"
                  cy="20"
                  r="19"
                  stroke="#EC9DAB"
                  stroke-width="2"
                ></circle>
                <circle
                  cx="135.1"
                  cy="20"
                  r="19"
                  stroke="#EC9DAB"
                  stroke-width="2"
                ></circle>
              </g>
              <path
                d="M105.523 49.6181C104.902 49.4556 104.282 49.3004 103.661 49.1526C103.055 48.9901 102.435 48.8423 101.799 48.7093C101.046 50.2461 100.248 51.7534 99.4053 53.2311C98.563 54.7088 97.669 56.1643 96.7233 57.5977C95.9992 58.6911 95.1865 59.7625 94.2851 60.8116C93.3985 61.8608 92.4528 62.8435 91.4479 63.7596C90.4579 64.6906 89.4235 65.5402 88.3448 66.3086C87.2808 67.0918 86.2021 67.7642 85.1086 68.3257C84.0299 68.902 82.9512 69.3453 81.8725 69.6556C80.8085 69.9659 79.7742 70.1211 78.7693 70.1211C77.8679 70.1211 76.9591 69.9585 76.043 69.6335C75.1268 69.3231 74.3067 68.8503 73.5826 68.2149C72.8438 67.5795 72.2453 66.7815 71.7872 65.821C71.3291 64.8753 71.1001 63.7596 71.1001 62.474C71.1001 61.8091 71.1814 61.1072 71.3439 60.3683C71.4917 59.6295 71.7429 58.8685 72.0975 58.0853C72.4522 57.3021 72.9103 56.4968 73.4718 55.6693C74.0333 54.8565 74.7204 54.0216 75.5332 53.1646C76.6119 52.0267 77.8236 51.0441 79.1683 50.2166C80.4982 49.3891 81.9168 48.7093 83.4241 48.1774C84.9313 47.6306 86.505 47.2316 88.1453 46.9804C89.7855 46.7144 91.4479 46.5815 93.1325 46.5815C94.2408 46.5815 95.3416 46.6332 96.4351 46.7366C97.5434 46.84 98.6517 46.9878 99.7599 47.1799C100.543 45.5545 101.252 43.9364 101.888 42.3257C102.523 40.715 103.077 39.1265 103.55 37.5601C104.26 35.1663 104.769 33.0901 105.08 31.3317C105.39 29.5732 105.545 28.0512 105.545 26.7656C105.545 25.6721 105.456 24.7338 105.279 23.9506C105.102 23.1526 104.873 22.4803 104.592 21.9335C104.311 21.372 103.986 20.9213 103.617 20.5815C103.247 20.2268 102.87 19.9608 102.486 19.7835C102.117 19.5914 101.747 19.4658 101.378 19.4067C101.023 19.3328 100.706 19.2959 100.425 19.2959C99.2428 19.2959 98.1862 19.5766 97.2553 20.1381C96.3243 20.6997 95.5337 21.4902 94.8836 22.5098C94.2482 23.5294 93.7605 24.7633 93.4206 26.2115C93.0808 27.6448 92.9108 29.2407 92.9108 30.9992C92.9108 32.3734 93.0291 33.6443 93.2655 34.8116C93.5019 35.979 93.7975 37.0429 94.1521 38.0034C94.5067 38.9639 94.8909 39.8136 95.3047 40.5525C95.7332 41.2913 96.1248 41.9119 96.4795 42.4144C96.8489 42.9168 97.1518 43.301 97.3882 43.567C97.6247 43.8329 97.7503 43.9659 97.7651 43.9659L97.0779 44.6752C96.1322 43.8625 95.2456 42.9611 94.4181 41.9711C93.5906 40.981 92.8739 39.9171 92.268 38.7792C91.6622 37.6414 91.1819 36.4371 90.8273 35.1663C90.4726 33.8807 90.2953 32.536 90.2953 31.1322C90.2953 29.5363 90.5244 27.9625 90.9825 26.4109C91.4405 24.8594 92.1055 23.4703 92.9773 22.2439C93.8492 21.0026 94.9205 20.0052 96.1913 19.2515C97.4621 18.4979 98.9103 18.1211 100.536 18.1211C100.905 18.1211 101.334 18.158 101.821 18.2319C102.309 18.3058 102.811 18.461 103.329 18.6974C103.846 18.919 104.356 19.2368 104.858 19.6505C105.375 20.0643 105.826 20.6184 106.21 21.3129C106.609 21.9926 106.927 22.8349 107.163 23.8398C107.414 24.8298 107.54 26.0194 107.54 27.4084C107.54 28.0438 107.51 28.7235 107.451 29.4476C107.392 30.1569 107.304 30.9253 107.185 31.7528C106.772 34.5013 106.151 37.2055 105.323 39.8653C104.496 42.5104 103.484 45.1185 102.287 47.6897C102.907 47.8227 103.513 47.9631 104.104 48.1109C104.695 48.2586 105.279 48.4138 105.855 48.5763L105.523 49.6181ZM78.7472 68.9685C79.8554 69.0276 81.008 68.8133 82.205 68.3257C83.4019 67.8381 84.6062 67.1288 85.8179 66.1978C87.0296 65.2817 88.2339 64.1734 89.4309 62.873C90.6426 61.5726 91.8173 60.1467 92.9552 58.5951C94.1078 57.0435 95.2087 55.3959 96.2578 53.6522C97.3218 51.9085 98.3118 50.1205 99.228 48.2882C98.4744 48.1847 97.7207 48.1035 96.9671 48.0444C96.2283 47.9853 95.4672 47.9557 94.6841 47.9557C92.3789 47.9557 90.2436 48.2143 88.2783 48.7315C86.3277 49.2487 84.5471 49.9358 82.9364 50.7929C81.3405 51.6499 79.9293 52.6326 78.7028 53.7409C77.4763 54.8491 76.4493 55.987 75.6218 57.1543C74.7943 58.3365 74.1663 59.5039 73.7378 60.6565C73.3092 61.8239 73.095 62.8878 73.095 63.8483C73.095 64.6019 73.228 65.289 73.494 65.9097C73.7452 66.5451 74.1146 67.0844 74.6022 67.5277C75.0751 67.9858 75.6662 68.3405 76.3755 68.5917C77.07 68.8429 77.8605 68.9685 78.7472 68.9685Z"
                fill="#111111"
              ></path>
              <path
                d="M120.706 47.1356C120.765 47.1504 120.824 47.1578 120.884 47.1578C120.943 47.1578 121.009 47.1578 121.083 47.1578C121.497 47.1578 121.874 47.1208 122.213 47.0469C122.553 46.9583 122.864 46.8253 123.144 46.6479C123.44 46.4706 123.721 46.2416 123.987 45.9608C124.253 45.6653 124.511 45.3106 124.763 44.8969L125.56 45.5175C124.851 46.5223 124.12 47.2242 123.366 47.6232C122.612 48.0222 121.815 48.2217 120.972 48.2217C120.662 48.2217 120.389 48.1921 120.152 48.133C119.517 49.197 118.837 50.1057 118.113 50.8594C117.389 51.5982 116.65 52.2041 115.896 52.6769C115.143 53.1498 114.396 53.4897 113.658 53.6965C112.919 53.9182 112.232 54.029 111.596 54.029C110.946 54.029 110.34 53.9108 109.779 53.6744C109.232 53.4527 108.759 53.1276 108.36 52.6991C107.961 52.2706 107.651 51.7608 107.429 51.1697C107.208 50.5786 107.097 49.9137 107.097 49.1748C107.097 48.436 107.215 47.6823 107.451 46.9139C107.688 46.1455 108.005 45.3845 108.404 44.6309C108.818 43.8773 109.298 43.1532 109.845 42.4587C110.392 41.7494 110.983 41.0918 111.618 40.486C112.254 39.8801 112.911 39.3334 113.591 38.8457C114.271 38.3581 114.951 37.9591 115.63 37.6488L116.34 38.5797C115.556 39.1413 114.759 39.8506 113.946 40.7076C113.148 41.5647 112.416 42.503 111.751 43.5226C111.101 44.5422 110.562 45.6062 110.133 46.7144C109.72 47.8079 109.513 48.8719 109.513 49.9063C109.513 50.8372 109.72 51.5613 110.133 52.0785C110.547 52.5809 111.175 52.8321 112.017 52.8321C112.668 52.8321 113.31 52.6991 113.946 52.4331C114.581 52.1671 115.202 51.8051 115.808 51.347C116.414 50.8889 116.997 50.3496 117.559 49.7289C118.12 49.0935 118.652 48.4212 119.155 47.7119C118.726 47.4607 118.349 47.1282 118.024 46.7144C117.699 46.2859 117.426 45.8057 117.204 45.2737C116.982 44.7269 116.813 44.1433 116.694 43.5226C116.591 42.902 116.539 42.2666 116.539 41.6164C116.539 40.9662 116.62 40.353 116.783 39.7767C116.946 39.2004 117.167 38.698 117.448 38.2694C117.743 37.8261 118.083 37.4789 118.468 37.2277C118.852 36.9765 119.273 36.8508 119.731 36.8508C120.145 36.8508 120.514 36.9617 120.839 37.1833C121.164 37.3902 121.438 37.6857 121.659 38.0699C121.881 38.4394 122.051 38.8827 122.169 39.3999C122.287 39.9171 122.346 40.4712 122.346 41.0623C122.346 41.5056 122.31 41.9932 122.236 42.5252C122.162 43.0572 122.051 43.5965 121.903 44.1433C121.77 44.6752 121.6 45.2072 121.393 45.7392C121.201 46.2564 120.972 46.7218 120.706 47.1356ZM117.692 41.6164C117.692 42.0449 117.729 42.5104 117.803 43.0128C117.876 43.5152 117.995 44.0029 118.157 44.4757C118.32 44.9486 118.527 45.3919 118.778 45.8057C119.029 46.2046 119.339 46.5223 119.709 46.7588C119.975 46.2416 120.196 45.717 120.374 45.185C120.566 44.6383 120.721 44.1137 120.839 43.6113C120.972 43.1089 121.061 42.6434 121.105 42.2149C121.164 41.7716 121.194 41.3874 121.194 41.0623C121.194 40.619 121.157 40.2126 121.083 39.8432C121.009 39.4738 120.906 39.156 120.773 38.8901C120.655 38.6093 120.499 38.395 120.307 38.2473C120.13 38.0847 119.93 38.0034 119.709 38.0034C119.413 38.0034 119.14 38.1069 118.889 38.3138C118.637 38.5059 118.423 38.7718 118.246 39.1117C118.069 39.4368 117.928 39.821 117.825 40.2643C117.736 40.6928 117.692 41.1435 117.692 41.6164Z"
                fill="#111111"
              ></path>
              <path
                d="M137.286 47.1356C137.345 47.1504 137.404 47.1578 137.463 47.1578C137.522 47.1578 137.589 47.1578 137.663 47.1578C138.077 47.1578 138.453 47.1208 138.793 47.0469C139.133 46.9583 139.443 46.8253 139.724 46.6479C140.02 46.4706 140.3 46.2416 140.566 45.9608C140.832 45.6653 141.091 45.3106 141.342 44.8969L142.14 45.5175C141.431 46.5223 140.699 47.2242 139.946 47.6232C139.192 48.0222 138.394 48.2217 137.552 48.2217C137.242 48.2217 136.968 48.1921 136.732 48.133C136.096 49.197 135.417 50.1057 134.693 50.8594C133.969 51.5982 133.23 52.2041 132.476 52.6769C131.722 53.1498 130.976 53.4897 130.237 53.6965C129.499 53.9182 128.811 54.029 128.176 54.029C127.526 54.029 126.92 53.9108 126.358 53.6744C125.812 53.4527 125.339 53.1276 124.94 52.6991C124.541 52.2706 124.231 51.7608 124.009 51.1697C123.787 50.5786 123.676 49.9137 123.676 49.1748C123.676 48.436 123.795 47.6823 124.031 46.9139C124.267 46.1455 124.585 45.3845 124.984 44.6309C125.398 43.8773 125.878 43.1532 126.425 42.4587C126.972 41.7494 127.563 41.0918 128.198 40.486C128.834 39.8801 129.491 39.3334 130.171 38.8457C130.851 38.3581 131.53 37.9591 132.21 37.6488L132.919 38.5797C132.136 39.1413 131.338 39.8506 130.526 40.7076C129.728 41.5647 128.996 42.503 128.331 43.5226C127.681 44.5422 127.142 45.6062 126.713 46.7144C126.299 47.8079 126.092 48.8719 126.092 49.9063C126.092 50.8372 126.299 51.5613 126.713 52.0785C127.127 52.5809 127.755 52.8321 128.597 52.8321C129.247 52.8321 129.89 52.6991 130.526 52.4331C131.161 52.1671 131.782 51.8051 132.387 51.347C132.993 50.8889 133.577 50.3496 134.138 49.7289C134.7 49.0935 135.232 48.4212 135.734 47.7119C135.306 47.4607 134.929 47.1282 134.604 46.7144C134.279 46.2859 134.005 45.8057 133.784 45.2737C133.562 44.7269 133.392 44.1433 133.274 43.5226C133.171 42.902 133.119 42.2666 133.119 41.6164C133.119 40.9662 133.2 40.353 133.363 39.7767C133.525 39.2004 133.747 38.698 134.028 38.2694C134.323 37.8261 134.663 37.4789 135.047 37.2277C135.431 36.9765 135.853 36.8508 136.311 36.8508C136.724 36.8508 137.094 36.9617 137.419 37.1833C137.744 37.3902 138.017 37.6857 138.239 38.0699C138.461 38.4394 138.631 38.8827 138.749 39.3999C138.867 39.9171 138.926 40.4712 138.926 41.0623C138.926 41.5056 138.889 41.9932 138.815 42.5252C138.741 43.0572 138.631 43.5965 138.483 44.1433C138.35 44.6752 138.18 45.2072 137.973 45.7392C137.781 46.2564 137.552 46.7218 137.286 47.1356ZM134.271 41.6164C134.271 42.0449 134.308 42.5104 134.382 43.0128C134.456 43.5152 134.574 44.0029 134.737 44.4757C134.899 44.9486 135.106 45.3919 135.358 45.8057C135.609 46.2046 135.919 46.5223 136.289 46.7588C136.554 46.2416 136.776 45.717 136.953 45.185C137.146 44.6383 137.301 44.1137 137.419 43.6113C137.552 43.1089 137.641 42.6434 137.685 42.2149C137.744 41.7716 137.774 41.3874 137.774 41.0623C137.774 40.619 137.737 40.2126 137.663 39.8432C137.589 39.4738 137.485 39.156 137.352 38.8901C137.234 38.6093 137.079 38.395 136.887 38.2473C136.71 38.0847 136.51 38.0034 136.289 38.0034C135.993 38.0034 135.72 38.1069 135.468 38.3138C135.217 38.5059 135.003 38.7718 134.826 39.1117C134.648 39.4368 134.508 39.821 134.404 40.2643C134.316 40.6928 134.271 41.1435 134.271 41.6164Z"
                fill="#111111"
              ></path>
              <path
                d="M157.412 20.9139C157.929 20.9139 158.358 21.0395 158.698 21.2907C159.052 21.542 159.23 22 159.23 22.665C159.23 23.1231 159.134 23.6698 158.942 24.3052C158.764 24.9406 158.513 25.6352 158.188 26.3888C157.878 27.1276 157.508 27.9108 157.08 28.7383C156.651 29.551 156.186 30.3638 155.683 31.1765C155.196 31.9892 154.678 32.7798 154.132 33.5482C153.6 34.3166 153.068 35.0259 152.536 35.6761C151.472 36.9912 150.548 38.0995 149.765 39.0009C148.997 39.9023 148.332 40.6707 147.77 41.3061C147.209 41.9267 146.736 42.4365 146.352 42.8355C145.967 43.2197 145.628 43.5522 145.332 43.8329C145.036 44.1137 144.763 44.3723 144.512 44.6087C144.261 44.8304 144.002 45.0816 143.736 45.3624C143.618 45.9239 143.559 46.4632 143.559 46.9804C143.574 47.4828 143.581 47.9483 143.581 48.3769C143.581 49.6624 143.788 50.6156 144.202 51.2362C144.615 51.8568 145.199 52.1671 145.953 52.1671C146.455 52.1671 146.957 52.0415 147.46 51.7903C147.977 51.5243 148.487 51.1845 148.989 50.7707C149.492 50.357 149.979 49.8915 150.452 49.3743C150.925 48.8423 151.368 48.3104 151.782 47.7784C152.211 47.2316 152.595 46.7071 152.935 46.2046C153.275 45.7022 153.57 45.2663 153.821 44.8969L154.641 45.5175C154.597 45.5766 154.449 45.8131 154.198 46.2268C153.962 46.6258 153.644 47.1134 153.245 47.6897C152.846 48.266 152.373 48.8867 151.826 49.5516C151.28 50.2018 150.689 50.8077 150.053 51.3692C149.418 51.9307 148.745 52.3962 148.036 52.7656C147.342 53.135 146.632 53.3197 145.908 53.3197C145.302 53.3197 144.719 53.2089 144.157 52.9873C143.61 52.7508 143.123 52.3888 142.694 51.9011C142.281 51.3987 141.941 50.7633 141.675 49.9949C141.423 49.2265 141.298 48.303 141.298 47.2242C141.298 45.8795 141.453 44.4757 141.763 43.0128C142.088 41.5351 142.524 40.0574 143.071 38.5797C143.618 37.0873 144.261 35.617 145 34.1688C145.738 32.7207 146.522 31.3464 147.349 30.0461C148.191 28.7309 149.063 27.5192 149.965 26.4109C150.881 25.2879 151.775 24.32 152.647 23.5073C153.533 22.6946 154.383 22.0591 155.196 21.6011C156.008 21.143 156.747 20.9139 157.412 20.9139ZM144.135 43.3896C145.391 42.0893 146.603 40.7741 147.77 39.4442C148.952 38.0995 150.053 36.777 151.073 35.4766C152.107 34.1614 153.053 32.8906 153.91 31.6641C154.767 30.4229 155.499 29.2555 156.104 28.162C156.71 27.0685 157.183 26.0711 157.523 25.1697C157.863 24.2683 158.033 23.4925 158.033 22.8423C158.033 22.7241 157.974 22.5689 157.855 22.3768C157.737 22.17 157.597 22.0665 157.434 22.0665C156.976 22.0665 156.37 22.3695 155.617 22.9753C154.863 23.5812 154.043 24.4087 153.156 25.4578C152.285 26.4922 151.376 27.7039 150.43 29.093C149.499 30.482 148.62 31.9671 147.792 33.5482C146.965 35.1293 146.226 36.7622 145.576 38.4468C144.926 40.1313 144.445 41.779 144.135 43.3896Z"
                fill="#111111"
              ></path>
              <path
                d="M163.774 33.5039C163.774 33.7994 163.7 34.1097 163.552 34.4348C163.404 34.7451 163.212 35.0259 162.976 35.2771C162.754 35.5283 162.503 35.7352 162.222 35.8977C161.941 36.0603 161.66 36.1416 161.38 36.1416C161.129 36.1416 160.936 36.0529 160.803 35.8756C160.67 35.6835 160.604 35.4544 160.604 35.1884C160.604 34.952 160.648 34.6713 160.737 34.3462C160.826 34.0211 160.959 33.7181 161.136 33.4374C161.313 33.1418 161.527 32.8906 161.779 32.6838C162.03 32.4769 162.318 32.3734 162.643 32.3734C162.953 32.3734 163.219 32.4917 163.441 32.7281C163.663 32.9645 163.774 33.2231 163.774 33.5039ZM159.629 38.4246C159.437 38.8088 159.163 39.3186 158.809 39.954C158.469 40.5746 158.099 41.2618 157.7 42.0154C157.301 42.7542 156.895 43.5374 156.481 44.3649C156.067 45.1776 155.691 45.9756 155.351 46.7588C155.026 47.5272 154.76 48.2512 154.553 48.931C154.346 49.6107 154.242 50.187 154.242 50.6599C154.242 51.0884 154.331 51.384 154.508 51.5465C154.686 51.6943 154.937 51.7682 155.262 51.7682C155.868 51.7682 156.459 51.5687 157.035 51.1697C157.612 50.7707 158.181 50.2535 158.742 49.6181C159.318 48.9679 159.88 48.2291 160.427 47.4016C160.973 46.5741 161.52 45.7392 162.067 44.8969L162.865 45.5175C162.436 46.2859 161.949 47.106 161.402 47.9779C160.87 48.8497 160.271 49.6624 159.606 50.4161C158.942 51.1549 158.21 51.7682 157.412 52.2558C156.614 52.7434 155.742 52.9873 154.797 52.9873C153.91 52.9873 153.23 52.7213 152.757 52.1893C152.285 51.6573 152.048 50.9702 152.048 50.1279C152.048 49.1379 152.277 48.1035 152.735 47.0248C153.193 45.946 153.762 44.8821 154.442 43.8329C155.136 42.769 155.883 41.7494 156.681 40.7741C157.493 39.7988 158.24 38.9122 158.919 38.1143L159.629 38.4246Z"
                fill="#111111"
              ></path>
              <path
                d="M163.751 48.1109C163.722 48.2882 163.7 48.4655 163.685 48.6428C163.67 48.8202 163.663 48.9975 163.663 49.1748C163.663 49.7068 163.737 50.2166 163.884 50.7042C164.047 51.1771 164.276 51.5982 164.572 51.9676C164.882 52.3223 165.259 52.6031 165.702 52.8099C166.16 53.0168 166.677 53.1202 167.254 53.1202C169.189 53.1202 171.059 52.4627 172.861 51.1475C174.664 49.8324 176.46 47.7488 178.248 44.8969L179.001 45.5618C178.026 47.1873 177.036 48.5616 176.031 49.6846C175.026 50.7929 174.021 51.6943 173.017 52.3888C172.027 53.0833 171.051 53.5857 170.091 53.896C169.13 54.2063 168.214 54.3615 167.342 54.3615C166.707 54.3615 166.034 54.2728 165.325 54.0955C164.616 53.9182 163.958 53.6227 163.352 53.2089C162.761 52.7952 162.274 52.241 161.89 51.5465C161.491 50.852 161.291 49.9875 161.291 48.9531C161.291 47.8449 161.483 46.7809 161.867 45.7613C162.237 44.7269 162.724 43.7664 163.33 42.8798C163.936 41.9932 164.631 41.1879 165.414 40.4638C166.197 39.725 166.988 39.0969 167.786 38.5797C168.598 38.0626 169.389 37.6636 170.157 37.3828C170.926 37.0873 171.605 36.9395 172.196 36.9395C172.581 36.9395 172.972 36.9986 173.371 37.1168C173.77 37.235 174.125 37.4198 174.435 37.671C174.76 37.9222 175.019 38.2547 175.211 38.6684C175.418 39.0822 175.521 39.5772 175.521 40.1535C175.521 40.9367 175.337 41.6755 174.967 42.37C174.612 43.0498 174.132 43.6852 173.526 44.2763C172.921 44.8526 172.219 45.3771 171.421 45.85C170.623 46.3081 169.788 46.6997 168.916 47.0248C168.044 47.3499 167.165 47.6084 166.278 47.8005C165.392 47.9926 164.549 48.0961 163.751 48.1109ZM163.929 47.1578C164.919 47.0543 165.85 46.8474 166.722 46.5371C167.593 46.2268 168.391 45.85 169.115 45.4067C169.84 44.9486 170.482 44.4536 171.044 43.9216C171.62 43.3896 172.1 42.8503 172.485 42.3035C172.869 41.7568 173.164 41.2322 173.371 40.7298C173.578 40.2274 173.682 39.7767 173.682 39.3777C173.682 38.9787 173.571 38.661 173.349 38.4246C173.142 38.1882 172.891 38.0699 172.595 38.0699C171.945 38.0699 171.214 38.3064 170.401 38.7792C169.588 39.2373 168.776 39.8801 167.963 40.7076C167.15 41.5204 166.382 42.4809 165.658 43.5891C164.948 44.6974 164.372 45.8869 163.929 47.1578Z"
                fill="#111111"
              ></path>
              <path
                class="left-line"
                d="M65.5 41.5002C65.5 41.5002 63.5 38.0002 58 37.5002C50.0173 36.7745 45.5793 41.9636 47.5 43.5002C49.4207 45.0368 52.5 41.0002 52 37.5002C51.4334 33.534 48.4286 30.7859 44.5 30.0002C40.5714 29.2144 36.2425 29.3616 29 33.5002C22 37.5002 15 43.5002 8 43.5002C4.52346 43.5002 1 41.4767 1 38.0002C1 36.0002 2.21875 34.0002 4.5 34.0002C8 34.0002 8.5 37.5002 7 38.0002C6 38.3335 5 37.5002 5.5 36.5002"
                stroke="black"
                stroke-linecap="round"
              ></path>
            </svg>
          </Link>
        </div>
        <div className="flex relative ml-28">
          <input
            className=" w-[40vw] py-3 px-4  focus:border-0  bg-[#F8F8F8] rounded-box"
            type="text"
            placeholder="What are you looking for today? Eg: solitaire rings"
          />
          <button className="btn btn-ghost btn-circle absolute right-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-15"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
        <div className="navbar-end">
          <button className="mr-5">
            <img className="w-[20px]" src={heart} alt="" />
          </button>
          <Link to="/cart" className="mr-5">
            <img className="w-[20px]" src={cart} alt="" />
          </Link>
          <div class="dropdown dropdown-hover mr-5">
            <label tabindex="0" class=" m-1">
              <img className="w-[20px]" src={user} alt="" />
            </label>
            <ul
              tabindex="0"
              class="dropdown-content menu py-2 px-1 shadow bg-base-100 rounded-box w-[250px] right-0 "
            >
              <p>Your Account</p>
              <small className="text-[12px]">
                Access account and Manage orders
              </small>
              <li>
                <button className="btn mt-2 bg-[#2fbccc] hover:bg-transparent mx-4">
                  Sign In
                </button>
              </li>
              <li>
                <button className="btn rounded-lg mb-3 mt-2 bg-transparent hover:bg-[#2fbccc] mx-4">
                  Log In
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header2;
