import React from "react"
import classes from "./Spinner.module.css"
import ContentLoader from "react-content-loader"

const Spinner = (props) => {
  console.log(classes)
  return (
    <div className={classes.Spinner}>
      <ContentLoader
        speed={1}
        width={900}
        height={360}
        viewBox="0 0 900 360"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
      >
        <rect x="3" y="52" rx="2" ry="2" width="169" height="294" />
        <rect x="535" y="53" rx="2" ry="2" width="137" height="290" />
        <rect x="360" y="53" rx="2" ry="2" width="156" height="288" />
        <rect x="187" y="54" rx="2" ry="2" width="152" height="288" />
      </ContentLoader>
    </div>
  )
}

export default Spinner

