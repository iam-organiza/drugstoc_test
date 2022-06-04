import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Svg, { Path } from "react-native-svg"

export default function PadLockIcon(props) {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={37}
    height={37}
    fill="none"
    {...props}
  >
    <Path
      fill="#4B70D6"
      d="M18.5 0C8.283 0 0 8.283 0 18.5S8.283 37 18.5 37 37 28.717 37 18.5C36.99 8.286 28.714.009 18.5 0zm0 35.408c-9.338 0-16.908-7.57-16.908-16.908 0-9.338 7.57-16.908 16.908-16.908 9.338 0 16.908 7.57 16.908 16.908-.009 9.334-7.574 16.9-16.908 16.908z"
    />
    <Path
      fill="#4B70D6"
      d="M23.945 15.857v-1.99a5.46 5.46 0 0 0-10.906 0v1.974a2.866 2.866 0 0 0-1.592 2.627v7.196a2.866 2.866 0 0 0 2.898 2.898h8.454a2.913 2.913 0 0 0 2.897-2.898V18.5a2.898 2.898 0 0 0-1.751-2.643zm-9.314-1.99a3.869 3.869 0 0 1 7.738 0v1.703H14.63v-1.703zm8.12 13.103h-8.47a1.306 1.306 0 0 1-1.306-1.306V18.5a1.274 1.274 0 0 1 1.306-1.305h8.454c.72 0 1.305.584 1.305 1.305l.016 7.164c0 .721-.584 1.306-1.305 1.306z"
    />
    <Path
      fill="#4B70D6"
      d="M18.5 19.726a1.321 1.321 0 0 0-1.306 1.29c.008.394.195.764.51 1.003v1.592a.796.796 0 0 0 1.592 0v-1.593A1.27 1.27 0 0 0 19.821 21a1.306 1.306 0 0 0-1.321-1.274z"
    />
  </Svg>
  )
}

const styles = StyleSheet.create({})