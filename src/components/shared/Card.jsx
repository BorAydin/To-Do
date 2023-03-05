function Card({ children, active }) {
  return <div className={`card ${active && "active"}`}>{children}</div>;
}

export default Card;
