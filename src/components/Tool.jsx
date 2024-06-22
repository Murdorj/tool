export const Tool = (props) => {
  return (
    <div onClick={props.onClick}>
      <img src={props.image} />
      <p>{props.name}</p>
    </div>
  );
};
