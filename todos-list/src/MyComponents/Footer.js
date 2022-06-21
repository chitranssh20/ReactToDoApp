import React from 'react'
// import './footer.css'
export const Footer = () => {
  let footerStyle= {
    position: "relative",
    marginTop: "20px",
    top: "100%",
    width: "100%"
  }
  return (
    <div className='bg-dark text-light py-3' style= {footerStyle}>
      <p className='text-center'>Copyright &copy: My ToDO List.com</p></div>
  )
}
