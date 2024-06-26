import Image from "next/image";
import figma from "./FigmaTag.svg";
import adobeillustrator from "./AdobeIllustratorTag.svg";
import adobeXD from "./AdobeXD.svg";
import userImage from "./UserImage.svg"
export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center">
      <div className="w-full md:w-[80%] 2xl:w-[1200px] min-h-full p-3">
        <div className="flex flex-col w-fit h-[80px] justify-between">
          <div className="flex justify-between items-center space-x-3">
            {" "}
            <p className="text-3xl font-bold">Senior Product Designer</p>
            <div className="bg-[#D1D1D1] p-[3px] rounded-full" />
            <span className="text-[#D1D1D1] text-xs">posted 2 days ago</span>
            <svg
              width="59"
              height="23"
              viewBox="0 0 59 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.5 11.0302C0.5 5.23116 5.20101 0.530151 11 0.530151H48C53.799 0.530151 58.5 5.23116 58.5 11.0302C58.5 16.8291 53.799 21.5302 48 21.5302H11C5.20101 21.5302 0.5 16.8291 0.5 11.0302Z"
                fill="#ECFDF3"
              />
              <path
                d="M0.5 11.0302C0.5 5.23116 5.20101 0.530151 11 0.530151H48C53.799 0.530151 58.5 5.23116 58.5 11.0302C58.5 16.8291 53.799 21.5302 48 21.5302H11C5.20101 21.5302 0.5 16.8291 0.5 11.0302Z"
                stroke="#ABEFC6"
              />
              <circle cx="10" cy="11.0302" r="3" fill="#17B26A" />
              <path
                d="M22.8329 15.1142C22.0569 15.1142 21.3409 14.9342 20.6849 14.5742C20.0369 14.2062 19.5209 13.6982 19.1369 13.0502C18.7609 12.3942 18.5729 11.6582 18.5729 10.8422C18.5729 10.0262 18.7609 9.29415 19.1369 8.64615C19.5209 7.99815 20.0369 7.49415 20.6849 7.13415C21.3409 6.76615 22.0569 6.58215 22.8329 6.58215C23.6169 6.58215 24.3329 6.76615 24.9809 7.13415C25.6369 7.49415 26.1529 7.99815 26.5289 8.64615C26.9049 9.29415 27.0929 10.0262 27.0929 10.8422C27.0929 11.6582 26.9049 12.3942 26.5289 13.0502C26.1529 13.6982 25.6369 14.2062 24.9809 14.5742C24.3329 14.9342 23.6169 15.1142 22.8329 15.1142ZM22.8329 13.9262C23.3849 13.9262 23.8769 13.8022 24.3089 13.5542C24.7409 13.2982 25.0769 12.9382 25.3169 12.4742C25.5649 12.0022 25.6889 11.4582 25.6889 10.8422C25.6889 10.2262 25.5649 9.68615 25.3169 9.22215C25.0769 8.75815 24.7409 8.40215 24.3089 8.15415C23.8769 7.90615 23.3849 7.78215 22.8329 7.78215C22.2809 7.78215 21.7889 7.90615 21.3569 8.15415C20.9249 8.40215 20.5849 8.75815 20.3369 9.22215C20.0969 9.68615 19.9769 10.2262 19.9769 10.8422C19.9769 11.4582 20.0969 12.0022 20.3369 12.4742C20.5849 12.9382 20.9249 13.2982 21.3569 13.5542C21.7889 13.8022 22.2809 13.9262 22.8329 13.9262ZM29.8071 9.39015C30.0391 9.08615 30.3551 8.83015 30.7551 8.62215C31.1551 8.41415 31.6071 8.31015 32.1111 8.31015C32.6871 8.31015 33.2111 8.45415 33.6831 8.74215C34.1631 9.02215 34.5391 9.41815 34.8111 9.93015C35.0831 10.4422 35.2191 11.0302 35.2191 11.6942C35.2191 12.3582 35.0831 12.9542 34.8111 13.4822C34.5391 14.0022 34.1631 14.4102 33.6831 14.7062C33.2111 14.9942 32.6871 15.1382 32.1111 15.1382C31.6071 15.1382 31.1591 15.0382 30.7671 14.8382C30.3751 14.6302 30.0551 14.3742 29.8071 14.0702V18.1742H28.4391V8.41815H29.8071V9.39015ZM33.8271 11.6942C33.8271 11.2382 33.7311 10.8462 33.5391 10.5182C33.3551 10.1822 33.1071 9.93015 32.7951 9.76215C32.4911 9.58615 32.1631 9.49815 31.8111 9.49815C31.4671 9.49815 31.1391 9.58615 30.8271 9.76215C30.5231 9.93815 30.2751 10.1942 30.0831 10.5302C29.8991 10.8662 29.8071 11.2622 29.8071 11.7182C29.8071 12.1742 29.8991 12.5742 30.0831 12.9182C30.2751 13.2542 30.5231 13.5102 30.8271 13.6862C31.1391 13.8622 31.4671 13.9502 31.8111 13.9502C32.1631 13.9502 32.4911 13.8622 32.7951 13.6862C33.1071 13.5022 33.3551 13.2382 33.5391 12.8942C33.7311 12.5502 33.8271 12.1502 33.8271 11.6942ZM42.6319 11.5622C42.6319 11.8102 42.6159 12.0342 42.5839 12.2342H37.5319C37.5719 12.7622 37.7679 13.1862 38.1199 13.5062C38.4719 13.8262 38.9039 13.9862 39.4159 13.9862C40.1519 13.9862 40.6719 13.6782 40.9759 13.0622H42.4519C42.2519 13.6702 41.8879 14.1702 41.3599 14.5622C40.8399 14.9462 40.1919 15.1382 39.4159 15.1382C38.7839 15.1382 38.2159 14.9982 37.7119 14.7182C37.2159 14.4302 36.8239 14.0302 36.5359 13.5182C36.2559 12.9982 36.1159 12.3982 36.1159 11.7182C36.1159 11.0382 36.2519 10.4422 36.5239 9.93015C36.8039 9.41015 37.1919 9.01015 37.6879 8.73015C38.1919 8.45015 38.7679 8.31015 39.4159 8.31015C40.0399 8.31015 40.5959 8.44615 41.0839 8.71815C41.5719 8.99015 41.9519 9.37415 42.2239 9.87015C42.4959 10.3582 42.6319 10.9222 42.6319 11.5622ZM41.2039 11.1302C41.1959 10.6262 41.0159 10.2222 40.6639 9.91815C40.3119 9.61415 39.8759 9.46215 39.3559 9.46215C38.8839 9.46215 38.4799 9.61415 38.1439 9.91815C37.8079 10.2142 37.6079 10.6182 37.5439 11.1302H41.2039ZM47.3141 8.31015C47.8341 8.31015 48.2981 8.41815 48.7061 8.63415C49.1221 8.85015 49.4461 9.17015 49.6781 9.59415C49.9101 10.0182 50.0261 10.5302 50.0261 11.1302V15.0302H48.6701V11.3342C48.6701 10.7422 48.5221 10.2902 48.2261 9.97815C47.9301 9.65815 47.5261 9.49815 47.0141 9.49815C46.5021 9.49815 46.0941 9.65815 45.7901 9.97815C45.4941 10.2902 45.3461 10.7422 45.3461 11.3342V15.0302H43.9781V8.41815H45.3461V9.17415C45.5701 8.90215 45.8541 8.69015 46.1981 8.53815C46.5501 8.38615 46.9221 8.31015 47.3141 8.31015Z"
                fill="#067647"
              />
            </svg>
          </div>
          <div className="flex items-center w-fit space-x-3">
            <div className="flex justify-center items-center space-x-2">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 13.5302C13.6569 13.5302 15 12.187 15 10.5302C15 8.8733 13.6569 7.53015 12 7.53015C10.3431 7.53015 9 8.8733 9 10.5302C9 12.187 10.3431 13.5302 12 13.5302Z"
                  stroke="#5D5D5D"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 22.5302C16 18.5302 20 14.9484 20 10.5302C20 6.11187 16.4183 2.53015 12 2.53015C7.58172 2.53015 4 6.11187 4 10.5302C4 14.9484 8 18.5302 12 22.5302Z"
                  stroke="#5D5D5D"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span className="text-[#5D5D5D]">Delaware, USA</span>
            </div>
            <div className="bg-[#D1D1D1] p-[3px] rounded-full" />
            <div className="flex justify-center items-center space-x-2">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 5.53015C13 6.63472 10.5376 7.53015 7.5 7.53015C4.46243 7.53015 2 6.63472 2 5.53015M13 5.53015C13 4.42558 10.5376 3.53015 7.5 3.53015C4.46243 3.53015 2 4.42558 2 5.53015M13 5.53015V7.03015M2 5.53015V17.5302C2 18.6347 4.46243 19.5302 7.5 19.5302M7.5 11.5302C7.33145 11.5302 7.16468 11.5274 7 11.522C4.19675 11.4301 2 10.5734 2 9.53015M7.5 15.5302C4.46243 15.5302 2 14.6347 2 13.5302M22 12.0302C22 13.1347 19.5376 14.0302 16.5 14.0302C13.4624 14.0302 11 13.1347 11 12.0302M22 12.0302C22 10.9256 19.5376 10.0302 16.5 10.0302C13.4624 10.0302 11 10.9256 11 12.0302M22 12.0302V19.5302C22 20.6347 19.5376 21.5302 16.5 21.5302C13.4624 21.5302 11 20.6347 11 19.5302V12.0302M22 15.7802C22 16.8847 19.5376 17.7802 16.5 17.7802C13.4624 17.7802 11 16.8847 11 15.7802"
                  stroke="#5D5D5D"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span className="text-[#5D5D5D]">$300k-$400k</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full border-y-[1px] border-[#E7E7E7] flex justify-center items-center">
        <div className="w-full md:w-[80%] 2xl:w-[1200px] min-h-full p-3 mt-4">
          <div className="flex justify-center w-fit text-xs space-x-20">
            <div className="flex flex-col justify-center space-y-2">
              <span className="text-[#6E6D6D]">Skills Required</span>
              <Image
                src={figma}
                width={12}
                height={12}
                alt="figma"
                className="h-fit w-fit"
              />
              <Image
                src={adobeillustrator}
                width={12}
                height={12}
                alt="figma"
                className="h-fit w-fit"
              />
              <Image
                src={adobeXD}
                width={12}
                height={12}
                alt="figma"
                className="h-fit w-fit"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <span className="text-[#6E6D6D]">Preferred Language</span>
              <span className="text-base">English</span>
            </div>
            <div className="flex flex-col space-y-2">
              <span className="text-[#6E6D6D]">Type</span>
              <span className="text-base">Full time</span>
            </div>
            <div className="flex flex-col space-y-2">
              {" "}
              <span className="text-[#6E6D6D]">Years of Experience</span>
              <span className="text-base">3+ Years of Experience</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full border-y-[1px] border-[#E7E7E7] flex justify-center items-center">
        <div className="w-full md:w-[77%] 2xl:w-[1100px] min-h-full p-3 mt-4">
          <span className="text-[#6E6D6D]">About the job</span>

          <ol type="1">
            <li>Handle the UI/UX research design</li>
            <li>
              Work on researching on latest web applications designs & trends
            </li>
            <li>Work on conceptualizing and visualizing</li>
            <li>
              Work on creating graphics content and other graphic related works
            </li>
          </ol>
          <span>Benefits:</span>
          <ul>
            <li>Health insurance</li>
            <li>Provident Fund</li>
          </ul>
          <span>Schedule:</span>
          <ul>
            <li>Day Shift</li>
          </ul>
          <span>Supplemental pay types:</span>
          <ul>
            <li>Performance bonus...</li>
          </ul>
        </div>
      </div>
      <div className="absolute top-0 right-0 bg-white p-4 w-fit h-full border-x-[1px] border-[#E7E7E7]">
        <div className="flex justify-between items-center space-x-3">
          <button className="bg-[#FEF4F2] text-[#DC4A2D] py-2 px-4 rounded-md flex justify-center items-center space-x-3 border-[1px] border-[#DC4A2D]">
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 3.03015H13M3 5.53015H18M16.3333 5.53015L15.7489 14.2962C15.6612 15.6114 15.6174 16.269 15.3333 16.7677C15.0833 17.2066 14.706 17.5596 14.2514 17.7799C13.735 18.0302 13.0759 18.0302 11.7578 18.0302H9.24221C7.92409 18.0302 7.26503 18.0302 6.74861 17.7799C6.29396 17.5596 5.91674 17.2066 5.66665 16.7677C5.38259 16.269 5.33875 15.6114 5.25107 14.2962L4.66667 5.53015M8.83333 9.28015V13.4468M12.1667 9.28015V13.4468"
                stroke="#DC4A2D"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span>Delete job</span>
          </button>
          <button className="bg-[#DC4A2D] text-white py-2 px-4 rounded-md flex justify-center items-center space-x-3 border-[1px] border-[#FED3CA]">
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5 7.19683L9.83331 4.53016M2.16663 14.8635L4.42287 14.6128C4.69853 14.5822 4.83636 14.5669 4.96519 14.5252C5.07949 14.4882 5.18826 14.4359 5.28855 14.3697C5.4016 14.2952 5.49966 14.1971 5.69578 14.001L14.5 5.19683C15.2364 4.46045 15.2364 3.26654 14.5 2.53016C13.7636 1.79378 12.5697 1.79378 11.8333 2.53016L3.02911 11.3343C2.83299 11.5305 2.73493 11.6285 2.66038 11.7416C2.59425 11.8419 2.54197 11.9506 2.50497 12.0649C2.46326 12.1938 2.44795 12.3316 2.41732 12.6073L2.16663 14.8635Z"
                stroke="white"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span>Delete job</span>
          </button>
        </div>
        <div className="flex flex-col justify-center items-center space-y-2 w-full p-3">
          <div className="flex justify-between items-center w-full  border-b-[2px] border-[#E7E7E7] py-5">
            <div className="flex justify-center items-center space-x-2">
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.3334 18.0302V16.3635C18.3334 14.8103 17.271 13.5052 15.8334 13.1352M12.9167 3.27245C14.1383 3.76694 15 4.96458 15 6.36348C15 7.76239 14.1383 8.96003 12.9167 9.45452M14.1667 18.0302C14.1667 16.477 14.1667 15.7004 13.913 15.0879C13.5746 14.2711 12.9257 13.6222 12.109 13.2839C11.4964 13.0302 10.7198 13.0302 9.16669 13.0302H6.66669C5.11355 13.0302 4.33698 13.0302 3.72441 13.2839C2.90765 13.6222 2.25874 14.2711 1.92042 15.0879C1.66669 15.7004 1.66669 16.477 1.66669 18.0302M11.25 6.36348C11.25 8.20443 9.75764 9.69682 7.91669 9.69682C6.07574 9.69682 4.58335 8.20443 4.58335 6.36348C4.58335 4.52254 6.07574 3.03015 7.91669 3.03015C9.75764 3.03015 11.25 4.52254 11.25 6.36348Z"
                  stroke="#4F4F4F"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>Applicant</span>
            </div>{" "}
            <span>400</span>
          </div>
          <div className="flex justify-between items-center w-full  border-b-[2px] border-[#E7E7E7] py-5">
            <div className="flex justify-center items-center space-x-2">
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 13.4468H6.25002C5.08705 13.4468 4.50557 13.4468 4.0324 13.5904C2.96707 13.9135 2.13339 14.7472 1.81022 15.8125C1.66669 16.2857 1.66669 16.8672 1.66669 18.0302M13.3334 15.5302L15 17.1968L18.3334 13.8635M12.0834 6.78015C12.0834 8.85122 10.4044 10.5302 8.33335 10.5302C6.26229 10.5302 4.58335 8.85122 4.58335 6.78015C4.58335 4.70908 6.26229 3.03015 8.33335 3.03015C10.4044 3.03015 12.0834 4.70908 12.0834 6.78015Z"
                  stroke="#4F4F4F"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <span>Matches</span>
            </div>{" "}
            <span>100</span>
          </div>
          <div className="flex justify-between items-center w-full  border-b-[2px] border-[#E7E7E7] py-5">
            <div className="flex justify-center items-center space-x-2">
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.5 7.03015C2.5 5.63002 2.5 4.92995 2.77248 4.39518C3.01217 3.92477 3.39462 3.54232 3.86502 3.30264C4.3998 3.03015 5.09987 3.03015 6.5 3.03015H13.5C14.9001 3.03015 15.6002 3.03015 16.135 3.30264C16.6054 3.54232 16.9878 3.92477 17.2275 4.39518C17.5 4.92995 17.5 5.63002 17.5 7.03015V11.5302C17.5 12.9303 17.5 13.6303 17.2275 14.1651C16.9878 14.6355 16.6054 15.018 16.135 15.2577C15.6002 15.5302 14.9001 15.5302 13.5 15.5302H8.06979C7.54975 15.5302 7.28972 15.5302 7.04101 15.5812C6.82036 15.6265 6.60683 15.7014 6.40624 15.8039C6.18014 15.9194 5.9771 16.0818 5.57101 16.4067L3.58313 17.997C3.23639 18.2744 3.06302 18.4131 2.91712 18.4132C2.79022 18.4134 2.67019 18.3557 2.59102 18.2565C2.5 18.1425 2.5 17.9204 2.5 17.4764V7.03015Z"
                  stroke="#4F4F4F"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <span>Messages</span>
            </div>{" "}
            <span>147</span>
          </div>
          <div className="flex justify-between items-center w-full  border-b-[2px] border-[#E7E7E7] py-5">
            <div className="flex justify-center items-center space-x-2">
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.01677 11.1245C1.90328 10.9448 1.84654 10.8549 1.81477 10.7163C1.79091 10.6122 1.79091 10.4481 1.81477 10.344C1.84654 10.2054 1.90328 10.1155 2.01677 9.93584C2.95461 8.45086 5.74617 4.69682 10.0003 4.69682C14.2545 4.69682 17.0461 8.45086 17.9839 9.93584C18.0974 10.1155 18.1541 10.2054 18.1859 10.344C18.2098 10.4481 18.2098 10.6122 18.1859 10.7163C18.1541 10.8549 18.0974 10.9448 17.9839 11.1245C17.0461 12.6095 14.2545 16.3635 10.0003 16.3635C5.74617 16.3635 2.95461 12.6095 2.01677 11.1245Z"
                  stroke="#4F4F4F"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.0003 13.0302C11.381 13.0302 12.5003 11.9109 12.5003 10.5302C12.5003 9.14944 11.381 8.03016 10.0003 8.03016C8.61962 8.03016 7.50034 9.14944 7.50034 10.5302C7.50034 11.9109 8.61962 13.0302 10.0003 13.0302Z"
                  stroke="#4F4F4F"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <span>Views</span>
            </div>{" "}
            <span>800</span>
          </div>
        </div>
      </div>
      <div className="absolute bottom-28 right-5 bg-white border-[1px] border-[#F7F7F7] p-4 w-fit rounded-xl shadow-xl">
        <span className="text-xl font-bold">“A quote from a Atlassian.”</span>
        <div className="flex items-center justify-center w-fit space-x-2 mt-10">
<Image src={userImage} width={32} height={32} alt="account" className="w-fit h-fit" />
<div className="w-fit flex flex-col">
  <span className="font-bold leading-tight">Name</span>
  <span className="leading-relaxed font-light text-sm">Description</span>
</div>
        </div>
      </div>
    </main>
  );
}
