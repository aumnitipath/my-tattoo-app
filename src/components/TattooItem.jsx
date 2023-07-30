import "./TattooItem.css";

function TattooItem(props) {
  //destructuring หรือ จะใช้ props.thumbnailUrl ก็ได้
  const { tattoo } = props;
  return (
    <div className="tattoo-item">
      <img src={tattoo.thumbnailUrl} />
      <h4>{tattoo.title}</h4>
    </div>
  );
}

export default TattooItem;
