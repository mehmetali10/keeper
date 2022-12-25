import React from "react";


class Footer extends React.Component{
  render(){
    return ( 
    <footer>
      <p>Copyright ⓒ {new Date().getFullYear()}</p>
      <p>{this.props.name}</p>
    </footer>);
  }
}

export default Footer;
