import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Tags(props:any) {
  return (
    <Svg
      width={23}
      height={18}
      viewBox="0 0 23 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M5.856 5.827L2.048 9l3.808 3.174a.75.75 0 11-.96 1.152l-4.5-3.75a.75.75 0 010-1.153l4.5-3.75a.75.75 0 01.96 1.154zm16.5 2.596l-4.5-3.75a.75.75 0 10-.96 1.154L20.704 9l-3.808 3.174a.75.75 0 10.96 1.152l4.5-3.75a.75.75 0 000-1.153zM14.632.045a.75.75 0 00-.96.45l-6 16.5a.75.75 0 101.41.511l6-16.5a.748.748 0 00-.45-.961z"
        fill="#fff"
      />
    </Svg>
  )
}

export default Tags
