import * as React from "react";
import Svg, { Circle, G, Path, Polyline, Rect } from "react-native-svg";
import { THEME_COLORS } from "../../GlobalStyles/GlobalStyles";

export const AccountIcon = (props:any) => (
  <Svg
    width="30px"
    height="30px"
    viewBox="0 0 24 24"
    fill='none'
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle
      cx={12}
      fill={props.color ===`${THEME_COLORS.secondary}`? props.color : 'none' }
      cy={7}
      r={4}
      stroke={props.color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M4 21V17C4 15.8954 4.89543 15 6 15H18C19.1046 15 20 15.8954 20 17V21"
      stroke={props.color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>

);

export const CategoriesIcon = (props:any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="30px"
    height="30px"
    viewBox="0 0 900.000000 900.000000"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <G
      transform="translate(0.000000,900.000000) scale(0.100000,-0.100000)"
      fill={props.color}
      stroke={props.color}
    >
      <Path d="M4300 8986 c0 -10 -16 -17 -47 -21 -45 -6 -122 -28 -203 -56 -19 -7 -75 -31 -125 -54 -86 -41 -126 -60 -385 -183 -63 -30 -151 -71 -195 -92 -44 -21 -143 -68 -220 -105 -77 -37 -176 -84 -220 -105 -44 -21 -134 -63 -200 -95 -66 -31 -156 -74 -200 -95 -44 -21 -133 -63 -197 -94 -65 -31 -171 -81 -235 -112 -130 -62 -222 -106 -388 -184 -60 -29 -155 -74 -210 -100 -224 -107 -510 -244 -655 -312 -47 -22 -125 -60 -175 -83 -49 -24 -135 -64 -190 -90 -139 -65 -152 -73 -218 -123 -104 -79 -189 -208 -223 -339 -18 -70 -18 -256 0 -326 45 -173 179 -339 331 -411 28 -13 91 -43 140 -66 97 -45 216 -102 390 -185 61 -29 155 -74 210 -100 107 -51 231 -110 415 -198 63 -30 160 -76 215 -102 105 -50 219 -104 425 -203 69 -33 166 -79 215 -102 50 -23 135 -64 190 -90 55 -26 159 -76 230 -109 72 -34 171 -82 220 -106 98 -47 242 -116 400 -190 114 -54 279 -132 440 -210 158 -76 254 -114 350 -138 142 -37 328 -47 480 -26 160 21 268 57 495 166 63 31 156 75 205 98 162 77 420 200 630 300 317 151 519 248 620 295 107 51 278 132 430 205 61 29 153 73 205 98 165 78 311 147 425 202 184 88 320 153 412 196 49 23 144 68 213 101 69 33 159 76 200 95 200 94 255 128 322 201 58 63 121 171 145 247 5 17 15 29 21 28 9 -2 12 39 12 157 0 147 -2 162 -20 180 -11 11 -20 28 -20 39 0 40 -113 217 -167 261 -62 51 -127 96 -153 106 -22 9 -137 63 -280 132 -69 32 -170 81 -225 107 -55 26 -152 72 -215 102 -63 30 -155 74 -205 98 -49 23 -137 65 -195 93 -58 27 -154 73 -215 102 -244 115 -285 135 -400 190 -66 32 -169 81 -230 110 -60 29 -146 69 -190 90 -44 21 -129 61 -190 90 -60 29 -159 76 -220 105 -145 70 -332 159 -425 202 -41 20 -138 66 -215 103 -466 225 -541 256 -705 287 -26 5 -44 14 -42 21 1 9 -47 12 -193 12 -163 0 -195 -2 -195 -14z m273 -647 c95 -14 168 -39 307 -106 167 -80 450 -216 655 -313 61 -29 162 -77 225 -107 185 -89 287 -137 415 -198 66 -31 167 -80 225 -107 58 -28 146 -70 195 -93 50 -24 146 -70 215 -103 184 -88 351 -168 470 -224 58 -28 146 -70 195 -93 50 -24 137 -66 195 -93 260 -123 312 -148 425 -202 66 -32 146 -70 178 -85 32 -15 57 -31 55 -37 -4 -12 -45 -34 -183 -99 -60 -28 -162 -76 -225 -106 -63 -30 -155 -74 -205 -98 -49 -23 -137 -65 -195 -93 -58 -27 -150 -71 -205 -97 -115 -54 -290 -138 -420 -200 -49 -24 -137 -66 -195 -93 -58 -27 -154 -73 -215 -102 -60 -29 -148 -70 -195 -92 -47 -22 -139 -66 -205 -98 -66 -32 -169 -81 -230 -110 -286 -135 -446 -211 -615 -292 -69 -33 -161 -77 -205 -98 -44 -21 -129 -61 -189 -90 -162 -77 -217 -91 -351 -91 -135 0 -190 14 -350 91 -59 28 -117 56 -129 61 -11 5 -28 13 -36 18 -8 5 -49 25 -90 44 -231 109 -432 204 -620 294 -74 36 -171 82 -215 103 -191 90 -302 143 -417 198 -136 66 -246 118 -415 198 -179 85 -299 142 -428 204 -110 53 -189 91 -425 202 -47 22 -139 66 -205 98 -176 85 -350 168 -432 206 -40 19 -73 39 -73 44 0 8 109 64 343 174 190 90 284 134 412 196 72 34 172 82 223 106 202 96 286 136 375 178 50 24 146 69 212 101 263 125 324 155 415 198 140 65 283 133 385 183 160 77 358 171 430 204 39 18 122 57 185 87 142 69 279 134 435 208 66 31 128 60 137 66 40 21 108 42 178 54 99 17 100 17 183 4z" />
      <Path d="M250 4760 c-63 -9 -125 -47 -178 -105 -56 -65 -72 -110 -72 -213 0 -102 29 -171 95 -230 28 -24 159 -95 362 -196 175 -86 325 -161 333 -166 8 -5 89 -45 180 -90 91 -45 584 -291 1095 -545 1916 -953 1825 -909 1970 -954 132 -41 322 -71 455 -71 82 0 290 24 350 39 139 37 187 53 280 94 49 21 637 312 1920 950 1689 839 1791 890 1835 929 45 40 78 93 90 146 3 18 13 32 21 32 10 0 14 15 14 60 0 41 -4 59 -12 58 -6 -2 -16 13 -22 32 -6 19 -19 49 -28 65 -20 37 -80 105 -92 105 -5 0 -17 6 -25 14 -50 42 -188 59 -257 30 -22 -9 -284 -137 -584 -286 -1999 -992 -2292 -1138 -2390 -1189 -73 -38 -734 -361 -764 -373 -182 -74 -461 -76 -651 -5 -33 13 -515 251 -1780 879 -2068 1027 -1986 987 -2045 992 -30 3 -75 2 -100 -2z" />
      <Path d="M226 2554 c-94 -29 -170 -96 -207 -181 -27 -62 -26 -194 1 -257 46 -109 33 -101 863 -515 2969 -1477 2944 -1465 3022 -1496 203 -81 338 -105 590 -105 227 0 319 13 495 70 112 37 115 38 1190 573 2476 1231 2665 1326 2699 1359 43 42 81 102 81 128 0 11 9 29 20 40 24 24 29 114 6 123 -8 3 -17 21 -21 39 -10 42 -29 72 -79 126 -50 54 -93 77 -173 92 -49 10 -73 10 -115 0 -31 -7 -432 -201 -958 -463 -498 -247 -1242 -617 -1655 -822 -1064 -529 -1179 -585 -1199 -585 -9 0 -26 -5 -36 -10 -10 -6 -70 -18 -132 -27 -98 -14 -127 -14 -223 -3 -60 7 -125 19 -144 26 -18 8 -40 14 -49 14 -19 0 -76 28 -1137 555 -484 240 -1233 613 -1665 827 -432 214 -823 409 -870 433 -146 74 -212 87 -304 59z" />
    </G>
  </Svg>
);

export const PercentageIcon = (props:any) => (
  <Svg
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    fill={`${THEME_COLORS.secondary}`}
    width='70px'
    height='70px'
    x="0px"
    y="0px"
    viewBox="0 0 488.027 488.027"
    style={{
      enableBackground: "new 0 0 488.027 488.027",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <G>
      <G>
        <Circle cx={179.163} cy={202.563} r={20.4} />
        <Circle cx={308.763} cy={285.363} r={20.4} />
        <Path d="M476.963,270.963l-7.4-10.1c-8-11-8.2-25.9-0.3-37.1l7.2-10.2c11-15.6,5.9-37.3-11-46.4l-11-5.9 c-12-6.4-18.6-19.8-16.3-33.3l2.1-12.3c3.2-18.8-10.9-36.2-30-37l-12.5-0.5c-13.6-0.6-25.4-9.8-29.2-22.9l-3.5-12 c-5.3-18.4-25.5-27.9-43.1-20.3l-11.5,4.9c-12.5,5.4-27.1,2.2-36.2-8l-8.3-9.3c-12.7-14.2-35-14.1-47.6,0.4l-8.2,9.4 c-9,10.3-23.5,13.7-36.1,8.5l-11.6-4.8c-17.7-7.3-37.7,2.6-42.8,21l-3.3,12.1c-3.6,13.2-15.2,22.6-28.8,23.3l-12.5,0.7 c-19.1,1.1-32.9,18.7-29.4,37.5l2.3,12.3c2.5,13.4-3.9,26.9-15.8,33.5l-10.9,6.1c-16.7,9.3-21.5,31.1-10.2,46.5l7.4,10.1 c8,11,8.2,25.9,0.3,37.1l-7.2,10.2c-11,15.6-5.9,37.3,11,46.4l11,5.9c12,6.4,18.6,19.8,16.3,33.3l-2.1,12.3 c-3.2,18.8,10.9,36.2,30,37l12.5,0.5c13.6,0.6,25.4,9.8,29.2,22.9l3.5,12c5.3,18.4,25.5,27.9,43.1,20.3l11.5-4.9 c12.5-5.4,27.1-2.2,36.2,8l8.3,9.3c12.8,14.2,35.1,14.1,47.6-0.4l8.2-9.4c9-10.3,23.5-13.7,36.1-8.5l11.6,4.8 c17.7,7.3,37.7-2.6,42.8-21l3.3-12.1c3.6-13.2,15.2-22.6,28.8-23.3l12.5-0.7c19.1-1.1,32.9-18.7,29.4-37.5l-2.3-12.3 c-2.5-13.4,3.9-26.9,15.8-33.5l10.9-6.1C483.463,308.263,488.263,286.463,476.963,270.963z M129.863,202.563 c0-27.2,22-49.2,49.2-49.2s49.2,22,49.2,49.2s-22,49.2-49.2,49.2S129.863,229.663,129.863,202.563z M188.563,329.463 c-4.2,5.1-11.8,5.8-16.9,1.6l0,0c-5.1-4.2-5.8-11.8-1.6-16.9l129.1-155.5c4.2-5.1,11.8-5.8,16.9-1.6s5.8,11.8,1.6,16.9 L188.563,329.463z M308.763,334.563c-27.2,0-49.2-22-49.2-49.2s22-49.2,49.2-49.2s49.2,22,49.2,49.2 S335.963,334.563,308.763,334.563z" />
      </G>
    </G>
  </Svg>
);

export const SearchIcon = (props:any) => (
  <Svg
    width="30px"
    height="30px"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M14.5 14.5L10.5 10.5M6.5 12.5C3.18629 12.5 0.5 9.81371 0.5 6.5C0.5 3.18629 3.18629 0.5 6.5 0.5C9.81371 0.5 12.5 3.18629 12.5 6.5C12.5 9.81371 9.81371 12.5 6.5 12.5Z"
      stroke={props.color}
    />
  </Svg>
)

export const HomeIcon = (props:any) => (
  <Svg
  id="Layer_1"
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  viewBox="0 0 32 32"
  enableBackground="new 0 0 32 32"
  xmlSpace="preserve"
  width='35px'
  height='35px'
  {...props}
>
  <Polyline
    fill="none"
    stroke={props.color}
    strokeWidth={1.5}
    strokeMiterlimit={10}
    points="3,17 16,4 29,17 "
  />
  <Polyline
    fill="none"
    stroke={props.color}
    strokeWidth={1.5}
    strokeMiterlimit={10}
    points="6,14 6,27 13,27 13,17 19,17 19,27 26,27  26,14 "
  />
</Svg>
);










