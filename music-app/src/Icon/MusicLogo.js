import React from "react";

export const HomeIcon = ({fill, width, height}) => {
  return (
      <svg xmlns="http://www.w3.org/2000/svg" width={`${width ? width : 24}`} height={`${height ? height : 24}`}
           viewBox={`0 0 ${width} ${height}`}> fill="none">
        <path
            d="M9.13478 20.7735V17.7157C9.13478 16.9352 9.77217 16.3024 10.5584 16.3024H13.4326C13.8102 16.3024 14.1723 16.4513 14.4393 16.7164C14.7063 16.9814 14.8563 17.3409 14.8563 17.7157V20.7735C14.8539 21.098 14.9821 21.41 15.2124 21.6403C15.4427 21.8706 15.7561 22.0001 16.0829 22.0001H18.0438C18.9596 22.0025 19.8388 21.643 20.4872 21.0009C21.1356 20.3589 21.5 19.4871 21.5 18.5779V9.86698C21.5 9.13258 21.1721 8.43596 20.6046 7.96479L13.934 2.67599C12.7737 1.74868 11.1111 1.77862 9.98539 2.7471L3.46701 7.96479C2.87274 8.42207 2.51755 9.12076 2.5 9.86698V18.5691C2.5 20.464 4.04738 22.0001 5.95617 22.0001H7.87229C8.55123 22.0001 9.103 21.4563 9.10792 20.7824L9.13478 20.7735Z"
            fill={fill ? fill : "#FFFBF5"}
        />
      </svg>
  )
}
export const AlbumsIcon = ({fill, width, height}) => {
  return (
      <svg xmlns="http://www.w3.org/2000/svg" width={`${width ? width : 24}`} height={`${height ? height : 24}`}
           viewBox={`0 0 ${width} ${height}`}> fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd"
              d="M12 0C16.9706 0 21 4.02944 21 9H16C16 6.79086 14.2091 5 12 5C9.79086 5 8 6.79086 8 9H3C3 4.02944 7.02944 0 12 0ZM14 9C14 7.89543 13.1046 7 12 7C10.8954 7 10 7.89543 10 9H14Z"
              fill={fill ? fill : "#FFFBF5"}/>
        <path d="M1 11H23V22C23 23.1046 22.1046 24 21 24H3C1.89543 24 1 23.1046 1 22V11Z"
              fill={fill ? fill : "#FFFBF5"}/>
      </svg>
  )
}
export const ArtistsIcon = ({strokeColor, fill, width, height}) => {
  return (
      <svg xmlns="http://www.w3.org/2000/svg" width={`${width ? width : 24}`} height={`${height ? height : 24}`}
           viewBox={`0 0 ${width} ${height}`}> fill="none">
        <path
            d="M8 11C10.7614 11 13 8.76142 13 6C13 3.23858 10.7614 1 8 1C5.23858 1 3 3.23858 3 6C3 8.76142 5.23858 11 8 11Z"
            fill={fill ? fill : "#FFFBF5"}/>
        <path
            d="M0 21C0 16.5817 3.58172 13 8 13C12.4183 13 16 16.5817 16 21C16 22.1046 15.1046 23 14 23H2C0.895431 23 0 22.1046 0 21Z"
            fill={fill ? fill : "#FFFBF5"}/>
        <path
            d="M17 13C18.6569 13 20 11.6569 20 10C20 8.34315 18.6569 7 17 7C15.3431 7 14 8.34315 14 10C14 11.6569 15.3431 13 17 13Z"
            fill={fill ? fill : "#FFFBF5"}/>
        <path d="M19 10V2L22 3" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
  )
}
export const FastFwd = ({fill, width, height}) => {
  return (
      <svg xmlns="http://www.w3.org/2000/svg" width={`${width ? width : 24}`} height={`${height ? height : 24}`}
           viewBox={`0 0 ${width} ${height}`}> fill="none">
        <path
            d="M12.8297 12.9977C13.3984 12.5996 13.3984 11.7573 12.8297 11.3592L5.57346 6.27985C4.91069 5.81591 4 6.29006 4 7.09908V17.2578C4 18.0668 4.91069 18.5409 5.57346 18.077L12.8297 12.9977Z"
            fill={fill ? fill : "#FFFBF5"}/>
        <path
            d="M19.8297 12.9977C20.3984 12.5996 20.3984 11.7573 19.8297 11.3592L12.5735 6.27985C11.9107 5.81591 11 6.29006 11 7.09908V17.2578C11 18.0668 11.9107 18.5409 12.5735 18.077L19.8297 12.9977Z"
            fill={fill ? fill : "#FFFBF5"}/>
      </svg>
  )
}
export const Library = ({fill, width, height}) => {
  return (
      <svg xmlns="http://www.w3.org/2000/svg" width={`${width ? width : 24}`} height={`${height ? height : 24}`}
           viewBox={`0 0 ${width} ${height}`}> fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd"
              d="M2 8C0.895431 8 0 8.89543 0 10V22C0 23.1046 0.89543 24 2 24H22C23.1046 24 24 23.1046 24 22V10C24 8.89543 23.1046 8 22 8H2ZM9.5 13.5002C9.5 12.7323 10.3295 12.251 10.9961 12.6319L14.9806 14.9087C15.6524 15.2926 15.6524 16.2613 14.9806 16.6452L10.9961 18.9221C10.3295 19.303 9.5 18.8216 9.5 18.0538V13.5002Z"
              fill={fill ? fill : "#FFFBF5"}/>
        <rect x="1" y="4" width="22" height="2" rx="1" fill={fill ? fill : "#FFFBF5"}/>
        <rect x="2" width="20" height="2" rx="1" fill={fill ? fill : "#FFFBF5"}/>
      </svg>
  )
}
export const Mute = ({fill, width, height}) => {
  return (
      <svg xmlns="http://www.w3.org/2000/svg" width={`${width ? width : 24}`} height={`${height ? height : 24}`}
           viewBox={`0 0 ${width} ${height}`}> fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd"
              d="M17 3.94319C17 3.12982 16.0806 2.6567 15.4188 3.12946L10 7H7C5.89543 7 5 7.89543 5 9V15C5 16.1046 5.89543 17 7 17H7.22832L17 9.39981V3.94319ZM17 11.9335L10.2533 17.1809L15.4188 20.8705C16.0806 21.3433 17 20.8702 17 20.0568V11.9335Z"
              fill={fill ? fill : "#FFFBF5"}/>
        <path d="M21 5L3 19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
  )
}
export const Pause = ({fill, width, height}) => {
  return (
      <svg xmlns="http://www.w3.org/2000/svg" width={`${width ? width : 24}`} height={`${height ? height : 24}`}
           viewBox={`0 0 ${width} ${height}`}> fill="none">
        <rect x="4" y="3" width="6" height="18" rx="2" fill={fill ? fill : "#FFFBF5"}/>
        <rect x="14" y="3" width="6" height="18" rx="2" fill={fill ? fill : "#FFFBF5"}/>
      </svg>
  )
}
export const Play = ({fill, width, height}) => {
  return (
      <svg xmlns="http://www.w3.org/2000/svg" width={`${width ? width : 24}`} height={`${height ? height : 24}`}
           viewBox={`0 0 ${width} ${height}`}> fill="none">
        <path
            d="M19.6432 12.848C20.2699 12.4564 20.2699 11.5437 19.6432 11.152L6.53 2.95627C5.86395 2.53999 5 3.01884 5 3.80427V20.1958C5 20.9812 5.86395 21.4601 6.53 21.0438L19.6432 12.848Z"
            fill={fill ? fill : "#FFFBF5"}/>
      </svg>
  )
}
export const Repeat = ({fill, width, height}) => {
  return (
      <svg xmlns="http://www.w3.org/2000/svg" width={`${width ? width : 24}`} height={`${height ? height : 24}`}
           viewBox={`0 0 ${width} ${height}`}> fill="none">
        <path
            d="M21.6432 6.04388C22.2699 5.65222 22.2699 4.73956 21.6432 4.34789L16.53 1.15214C15.864 0.735855 15 1.2147 15 2.00013V8.39164C15 9.17707 15.864 9.65592 16.53 9.23964L21.6432 6.04388Z"
            fill={fill ? fill : "#FFFBF5"}/>
        <path
            d="M2.47014 19.0439C1.84347 18.6522 1.84347 17.7396 2.47014 17.3479L7.58334 14.1521C8.24939 13.7359 9.11334 14.2147 9.11334 15.0001V21.3916C9.11334 22.1771 8.24939 22.6559 7.58334 22.2396L2.47014 19.0439Z"
            fill={fill ? fill : "#FFFBF5"}/>
        <path d="M4 11V11C4 7.68629 6.68629 5 10 5V5H15" stroke="white" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round"/>
        <path d="M19 12V12C19 15.3137 16.3137 18 13 18V18H8" stroke="white" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round"/>
      </svg>
  )
}
export const Rewind = ({fill, width, height}) => {
  return (
      <svg xmlns="http://www.w3.org/2000/svg" width={`${width ? width : 24}`} height={`${height ? height : 24}`}
           viewBox={`0 0 ${width} ${height}`}> fill="none">
        <path
            d="M11.1703 12.9977C10.6016 12.5996 10.6016 11.7573 11.1703 11.3592L18.4265 6.27985C19.0893 5.81591 20 6.29006 20 7.09908V17.2578C20 18.0668 19.0893 18.5409 18.4265 18.077L11.1703 12.9977Z"
            fill={fill ? fill : "#FFFBF5"}/>
        <path
            d="M4.17033 12.9977C3.60162 12.5996 3.60161 11.7573 4.17033 11.3592L11.4265 6.27985C12.0893 5.81591 13 6.29006 13 7.09908V17.2578C13 18.0668 12.0893 18.5409 11.4265 18.077L4.17033 12.9977Z"
            fill={fill ? fill : "#FFFBF5"}/>
      </svg>
  )
}
export const Setting = ({fill, width, height}) => {
  return (
      <svg xmlns="http://www.w3.org/2000/svg" width={`${width ? width : 24}`} height={`${height ? height : 24}`}
           viewBox={`0 0 ${width} ${height}`}> fill="none">
        <path d="M3 16H5V22C5 22.5523 4.55228 23 4 23C3.44772 23 3 22.5523 3 22V16Z" fill={fill ? fill : "#FFFBF5"}/>
        <path d="M11 13H13V22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22V13Z"
              fill={fill ? fill : "#FFFBF5"}/>
        <path d="M3 2C3 1.44772 3.44772 1 4 1C4.55228 1 5 1.44772 5 2V11H3V2Z" fill={fill ? fill : "#FFFBF5"}/>
        <path d="M19 16H21V22C21 22.5523 20.5523 23 20 23C19.4477 23 19 22.5523 19 22V16Z"
              fill={fill ? fill : "#FFFBF5"}/>
        <path d="M19 2C19 1.44772 19.4477 1 20 1C20.5523 1 21 1.44772 21 2V11H19V2Z" fill={fill ? fill : "#FFFBF5"}/>
        <path d="M11 2C11 1.44772 11.4477 1 12 1C12.5523 1 13 1.44772 13 2V8H11V2Z" fill={fill ? fill : "#FFFBF5"}/>
        <rect x="16" y="13" width="8" height="5" rx="2" fill={fill ? fill : "#FFFBF5"}/>
        <rect x="8" y="6" width="8" height="5" rx="2" fill={fill ? fill : "#FFFBF5"}/>
        <rect y="13" width="8" height="5" rx="2" fill={fill ? fill : "#FFFBF5"}/>
      </svg>
  )
}
export const Shuffle = ({fill, width, height}) => {
  return (
      <svg xmlns="http://www.w3.org/2000/svg" width={`${width ? width : 24}`} height={`${height ? height : 24}`}
           viewBox={`0 0 ${width} ${height}`}> fill="none">
        <path d="M16 18C14.423 18 12.9466 17.3826 11.8512 16.3346" stroke="white" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7.15475 8.05196C5.78876 6.76008 3.95637 6 2 6" stroke="white" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round"/>
        <path
            d="M22.6432 19.0439C23.2699 18.6522 23.2699 17.7396 22.6432 17.3479L17.53 14.1521C16.864 13.7359 16 14.2147 16 15.0001V21.3916C16 22.1771 16.864 22.6559 17.53 22.2396L22.6432 19.0439Z"
            fill={fill ? fill : "#FFFBF5"}/>
        <path d="M16 6V6C13.5778 6 11.3932 7.45643 10.4615 9.69231L8.92308 13.3846C7.75856 16.1795 5.02776 18 2 18V18"
              stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path
            d="M21.6432 7.04388C22.2699 6.65222 22.2699 5.73956 21.6432 5.34789L16.53 2.15214C15.864 1.73586 15 2.2147 15 3.00013V9.39164C15 10.1771 15.864 10.6559 16.53 10.2396L21.6432 7.04388Z"
            fill={fill ? fill : "#FFFBF5"}/>
      </svg>
  )
}
export const SkipBack = ({fill, width, height}) => {
  return (
      <svg xmlns="http://www.w3.org/2000/svg" width={`${width ? width : 24}`} height={`${height ? height : 24}`}
           viewBox={`0 0 ${width} ${height}`}> fill="none">
        <path
            d="M9.32576 12.8436C8.70826 12.4507 8.70825 11.5493 9.32575 11.1563L17.4631 5.978C18.1288 5.55436 19 6.03257 19 6.82166V17.1783C19 17.9674 18.1288 18.4456 17.4631 18.022L9.32576 12.8436Z"
            fill={fill ? fill : "#FFFBF5"}/>
        <rect width="2" height="14" rx="1" transform="matrix(-1 0 0 1 7 5)" fill={fill ? fill : "#FFFBF5"}/>
      </svg>
  )
}

export const SkipFwd = ({fill, width, height}) => {
  return (
      <svg xmlns="http://www.w3.org/2000/svg" width={`${width ? width : 24}`} height={`${height ? height : 24}`}
           viewBox={`0 0 ${width} ${height}`}> fill="none">
        <path
            d="M14.6742 12.8436C15.2917 12.4507 15.2917 11.5493 14.6742 11.1563L6.53688 5.978C5.87115 5.55436 5 6.03257 5 6.82166V17.1783C5 17.9674 5.87115 18.4456 6.53688 18.022L14.6742 12.8436Z"
            fill={fill ? fill : "#FFFBF5"}/>
        <rect x="17" y="5" width="2" height="14" rx="1" fill={fill ? fill : "#FFFBF5"}/>
      </svg>
  )
}

export const SongsIcon = ({fill, width, height}) => {
  return (
      <svg xmlns="http://www.w3.org/2000/svg" width={`${width ? width : 24}`} height={`${height ? height : 24}`}
           viewBox={`0 0 ${width} ${height}`}> fill="none">
        <path
            d="M8.5 23C11.5376 23 14 20.5376 14 17.5C14 14.4624 11.5376 12 8.5 12C5.46243 12 3 14.4624 3 17.5C3 20.5376 5.46243 23 8.5 23Z"
            fill={fill ? fill : "#FFFBF5"}/>
        <rect x="11" y="4" width="3" height="13" fill={fill ? fill : "#FFFBF5"}/>
        <rect x="11" y="1" width="11" height="6" rx="2" fill={fill ? fill : "#FFFBF5"}/>
      </svg>
  )
}
export const VolumeDown = ({fill, width, height}) => {
  return (
      <svg xmlns="http://www.w3.org/2000/svg" width={`${width ? width : 24}`} height={`${height ? height : 24}`}
           viewBox={`0 0 ${width} ${height}`}> fill="none">
        <path
            d="M13.4188 3.12946C14.0806 2.6567 15 3.12982 15 3.94319V20.0568C15 20.8702 14.0806 21.3433 13.4188 20.8705L8 17H5C3.89543 17 3 16.1046 3 15V9C3 7.89543 3.89543 7 5 7H8L13.4188 3.12946Z"
            fill={fill ? fill : "#FFFBF5"}/>
        <path d="M17.9938 16.9053C19.2347 15.6423 20 13.9105 20 12C20 10.0815 19.2282 8.34323 17.9781 7.0788"
              stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
  )
}
export const VolumeUp = ({fill, width, height}) => {
  return (
      <svg xmlns="http://www.w3.org/2000/svg" width={`${width ? width : 24}`} height={`${height ? height : 24}`}
           viewBox={`0 0 ${width} ${height}`}> fill="none">
        <path
            d="M11.4188 3.12946C12.0806 2.6567 13 3.12982 13 3.94319V20.0568C13 20.8702 12.0806 21.3433 11.4188 20.8705L6 17H3C1.89543 17 1 16.1046 1 15V9C1 7.89543 1.89543 7 3 7H6L11.4188 3.12946Z"
            fill={fill ? fill : "#FFFBF5"}/>
        <path d="M15.9938 16.9053C17.2347 15.6423 18 13.9105 18 12C18 10.0815 17.2282 8.34323 15.9781 7.0788"
              stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M18.7782 4.2218C20.7688 6.21241 22 8.96241 22 12C22 15.0375 20.7688 17.7875 18.7782 19.7782"
              stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
  )
}
export const PlayListsIcon = ({fill, width, height}) => {
  return (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none"
           viewBox="0 0 48 48"
           width={`${width ? width : 24}`} height={`${height ? height : 24}`}
      >
        <g id="playlist--playlist-song-entertainment">
          <path id="Union" fill={fill ? fill : "#FFFBF5"} fill-rule="evenodd"
                d="M24 10c12.02 0 17.055 -0.122 19.135 -0.211 1.183 -0.051 2.526 -0.716 2.76 -2.248C45.959 7.12 46 6.611 46 6c0 -0.611 -0.041 -1.12 -0.105 -1.541 -0.234 -1.532 -1.577 -2.197 -2.76 -2.248C41.055 2.121 36.021 2 24 2c-12.02 0 -17.055 0.122 -19.135 0.211 -1.183 0.051 -2.526 0.716 -2.76 2.248C2.042 4.88 2 5.389 2 6c0 0.611 0.041 1.12 0.106 1.541 0.233 1.532 1.576 2.197 2.759 2.248C6.945 9.879 11.979 10 24 10Zm19.135 11.789c-2.08 0.09 -7.114 0.211 -19.135 0.211 -12.02 0 -17.055 -0.122 -19.135 -0.211 -1.183 -0.051 -2.526 -0.716 -2.76 -2.248C2.042 19.12 2 18.611 2 18c0 -0.611 0.041 -1.12 0.106 -1.541 0.233 -1.532 1.576 -2.197 2.759 -2.248C6.945 14.121 11.979 14 24 14c12.02 0 17.055 0.122 19.135 0.211 1.183 0.051 2.526 0.716 2.76 2.248 0.064 0.421 0.105 0.93 0.105 1.541 0 0.611 -0.041 1.12 -0.105 1.541 -0.234 1.532 -1.577 2.197 -2.76 2.248ZM12 34c3.8 0 6.032 -0.083 7.304 -0.164 1.33 -0.084 2.535 -0.992 2.65 -2.499 0.028 -0.37 0.046 -0.812 0.046 -1.337a17.8 17.8 0 0 0 -0.046 -1.337c-0.115 -1.507 -1.32 -2.415 -2.65 -2.5C18.032 26.084 15.8 26 12 26c-3.8 0 -6.032 0.083 -7.304 0.164 -1.33 0.084 -2.535 0.992 -2.65 2.499C2.018 29.033 2 29.475 2 30c0 0.525 0.018 0.966 0.046 1.337 0.115 1.507 1.32 2.415 2.65 2.5C5.968 33.916 8.2 34 12 34Zm0 12c3.8 0 6.032 -0.083 7.304 -0.164 1.33 -0.084 2.535 -0.992 2.65 -2.499 0.028 -0.37 0.046 -0.812 0.046 -1.337a17.8 17.8 0 0 0 -0.046 -1.337c-0.115 -1.507 -1.32 -2.415 -2.65 -2.5C18.032 38.084 15.8 38 12 38c-3.8 0 -6.032 0.083 -7.304 0.164 -1.33 0.084 -2.535 0.992 -2.65 2.499C2.018 41.033 2 41.475 2 42c0 0.525 0.018 0.966 0.046 1.337 0.115 1.507 1.32 2.415 2.65 2.5C5.968 45.916 8.2 46 12 46Zm15.243 -4.107C27.104 40.504 27 38.597 27 36c0 -2.598 0.104 -4.505 0.243 -5.894 0.124 -1.249 0.775 -2.251 1.762 -2.792 0.974 -0.534 2.166 -0.559 3.287 -0.097 1.55 0.64 3.701 1.59 6.525 2.976 2.24 1.1 3.859 2.024 5.026 2.774 1.134 0.73 1.822 1.823 1.822 3.033s-0.688 2.303 -1.822 3.033c-1.167 0.75 -2.786 1.675 -5.026 2.774 -2.823 1.385 -4.974 2.336 -6.524 2.975 -1.121 0.462 -2.313 0.438 -3.288 -0.097 -0.987 -0.54 -1.638 -1.543 -1.762 -2.792Z"
                clip-rule="evenodd"
                stroke-width="1"
          />
        </g>
      </svg>
  )
}

export const LikedIcon = ({fill, width, height}) => {
  return (
      <svg xmlns="http://www.w3.org/2000/svg" width={`${width ? width : 24}`} height={`${height ? height : 24}`}
           viewBox="0 0 24 24" fill="none">
        <path fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.8498 2.50077C16.4808 2.50077 17.1108 2.58977 17.7098 2.79077C21.4008 3.99077 22.7308 8.04077 21.6198 11.5808C20.9898 13.3898 19.9598 15.0408 18.6108 16.3898C16.6798 18.2598 14.5608 19.9198 12.2798 21.3498L12.0298 21.5008L11.7698 21.3398C9.48077 19.9198 7.34977 18.2598 5.40077 16.3798C4.06077 15.0308 3.02977 13.3898 2.38977 11.5808C1.25977 8.04077 2.58977 3.99077 6.32077 2.76977C6.61077 2.66977 6.90977 2.59977 7.20977 2.56077H7.32977C7.61077 2.51977 7.88977 2.50077 8.16977 2.50077H8.27977C8.90977 2.51977 9.51977 2.62977 10.1108 2.83077H10.1698C10.2098 2.84977 10.2398 2.87077 10.2598 2.88977C10.4808 2.96077 10.6898 3.04077 10.8898 3.15077L11.2698 3.32077C11.3616 3.36974 11.4647 3.44457 11.5537 3.50924C11.6102 3.55021 11.661 3.58711 11.6998 3.61077C11.7161 3.6204 11.7327 3.63008 11.7494 3.63984C11.8351 3.68989 11.9245 3.74203 11.9998 3.79977C13.1108 2.95077 14.4598 2.49077 15.8498 2.50077ZM18.5098 9.70077C18.9198 9.68977 19.2698 9.36077 19.2998 8.93977V8.82077C19.3298 7.41977 18.4808 6.15077 17.1898 5.66077C16.7798 5.51977 16.3298 5.74077 16.1798 6.16077C16.0398 6.58077 16.2598 7.04077 16.6798 7.18977C17.3208 7.42977 17.7498 8.06077 17.7498 8.75977V8.79077C17.7308 9.01977 17.7998 9.24077 17.9398 9.41077C18.0798 9.58077 18.2898 9.67977 18.5098 9.70077Z"
              fill={fill ? fill : "#FFFBF5"}/>
      </svg>
  )
}
export const PodcastsIcon = ({fill, width, height}) => {
  return (
      <svg xmlns="http://www.w3.org/2000/svg"
           fill="none"
           viewBox="0 0 48 48"
           width={`${width ? width : 24}`} height={`${height ? height : 24}`}>
        <g id="user-podcast--human-person-share-signal-transmit-user">
          <path id="Union"
                fill={fill ? fill : "#FFFBF5"}
                fill-rule="evenodd"
                d="M8.826 24.06C8.826 15.596 15.65 8.79 24 8.79s15.174 6.806 15.174 15.27c0 2.511 -0.6 4.873 -1.661 6.955 -0.437 0.857 -0.56 1.876 0.05 2.62 0.664 0.81 1.793 1.796 3.583 2.316 1.066 0.309 2.165 -0.255 2.689 -1.234A22.523 22.523 0 0 0 46.5 24.06C46.5 11.63 36.457 1.5 24 1.5S1.5 11.631 1.5 24.06c0 3.848 0.964 7.48 2.665 10.657 0.524 0.98 1.622 1.543 2.689 1.233 1.79 -0.519 2.919 -1.505 3.583 -2.316 0.61 -0.743 0.487 -1.762 0.05 -2.619a15.267 15.267 0 0 1 -1.661 -6.955Zm24.595 -0.054a9.416 9.416 0 0 1 -4.622 8.11c4.249 1.762 7.442 5.797 8.28 10.713 0.279 1.63 -0.647 2.965 -2.286 3.184 -1.885 0.252 -5.153 0.487 -10.791 0.487 -5.639 0 -8.907 -0.235 -10.792 -0.487 -1.639 -0.22 -2.565 -1.553 -2.287 -3.184 0.84 -4.916 4.032 -8.95 8.28 -10.713A9.421 9.421 0 0 1 24 14.586a9.421 9.421 0 0 1 9.42 9.42Z"
                clip-rule="evenodd"
                stroke-width="1"/>
        </g>
      </svg>
  )
}

export const RadioIcon = ({fill, width, height}) => {
  return (
      <svg xmlns="http://www.w3.org/2000/svg"
           fill="none"
           viewBox="0 0 48 48"
           width={`${width ? width : 24}`} height={`${height ? height : 24}`}
      >
        <g id="radio--antenna-audio-music-radio-entertainment">
          <path id="Union" fill={fill ? fill : "#FFFBF5"} fill-rule="evenodd"
                d="M35.188 5.278C33.32 6.005 29.29 7.567 24.22 9.5l-0.22 0c-6.61 0 -11.474 0.168 -14.795 0.35 10.78 -3.852 21.15 -7.389 24.54 -8.54 0.709 -0.24 1.508 -0.067 1.9 0.57 0.151 0.246 0.298 0.528 0.41 0.836 0.112 0.308 0.181 0.619 0.224 0.904 0.109 0.74 -0.393 1.387 -1.09 1.658ZM24 11.5c-7.423 0 -12.616 0.213 -15.875 0.416 -3.236 0.201 -5.868 2.602 -6.174 5.9C1.716 20.343 1.5 24.02 1.5 29c0 4.98 0.216 8.658 0.45 11.183 0.307 3.299 2.939 5.7 6.175 5.901 3.259 0.203 8.452 0.416 15.875 0.416s12.616 -0.213 15.875 -0.416c3.236 -0.201 5.868 -2.602 6.174 -5.9 0.235 -2.526 0.451 -6.204 0.451 -11.184 0 -4.98 -0.216 -8.658 -0.45 -11.183 -0.307 -3.299 -2.939 -5.7 -6.175 -5.901 -3.259 -0.203 -8.452 -0.416 -15.875 -0.416ZM38.5 29a8.5 8.5 0 1 0 -17 0 8.5 8.5 0 0 0 17 0ZM10 21.5a1.5 1.5 0 0 0 0 3h6a1.5 1.5 0 0 0 0 -3h-6ZM8.5 29a1.5 1.5 0 0 1 1.5 -1.5h6a1.5 1.5 0 0 1 0 3h-6A1.5 1.5 0 0 1 8.5 29Zm1.5 7.5a1.5 1.5 0 0 1 0 -3h6a1.5 1.5 0 0 1 0 3h-6Z"
                clip-rule="evenodd" stroke-width="1"/>
        </g>
      </svg>
  )
}

export const BrowseIcon = ({fill, width, height}) => {
  return (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none"
           viewBox="0 0 48 48"
           width={`${width ? width : 24}`} height={`${height ? height : 24}`}
      >
        <g id="magnifying-glass--glass-search-magnifying">
          <path id="Subtract" fill={fill ? fill : "#FFFBF5"} fill-rule="evenodd"
                d="M1.5 21.884C1.5 10.627 10.622 1.5 21.875 1.5s20.374 9.127 20.374 20.384c0 3.971 -1.135 7.678 -3.099 10.812 0.297 0.248 0.593 0.493 0.889 0.738l0.011 0.01c1.634 1.355 3.256 2.7 4.858 4.186 1.923 1.783 2.189 4.557 0.32 6.49a46.185 46.185 0 0 1 -1.106 1.107c-1.932 1.87 -4.705 1.605 -6.487 -0.32 -1.484 -1.603 -2.829 -3.226 -4.183 -4.861l-0.006 -0.008 -0.002 -0.002 -0.734 -0.885a20.275 20.275 0 0 1 -10.835 3.118C10.622 42.269 1.5 33.142 1.5 21.884ZM22 35c7.18 0 13 -5.82 13 -13S29.18 9 22 9 9 14.82 9 22s5.82 13 13 13Z"
                clip-rule="evenodd" stroke-width="1"/>
        </g>
      </svg>
  )
}