export default function LoadingIndicator({text}) {
  return (
    <>
      {/* <div><h2>Events are Loading...</h2></div> */}
      <div><h2>{text}</h2></div>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}
