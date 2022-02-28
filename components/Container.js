import Header from "./Header";

export default function Container(props) {
  return (
    <div>
      <Header />
      <div className="container">
        {props.children}
      </div>
    </div>
  )
}