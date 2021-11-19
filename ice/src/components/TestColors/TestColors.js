

function TestColors() {

  let one = 118;
  let two = 131;
  let three = 105;

  let width = "80%";
  let radius = "10px";
  let marginTop = "20px";

  const green = {
    width: width,
    height: "300px",
    borderRadius: radius,
    backgroundColor: `rgb(${two}, ${three}, ${one})`,
    marginTop: marginTop,
  };

  const violet = {
    width: width,
    height: "200px",
    borderRadius: radius,
    backgroundColor: `rgb(${one}, ${two}, ${three})`,
    marginTop: marginTop,
  };

  const blue = {
    width: width,
    height: "200px",
    borderRadius: radius,
    backgroundColor: `rgb(${three}, ${one}, ${two})`,
    marginTop: marginTop,
  };

  const background = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "800px",
    backgroundColor: "rgb(32, 32, 32)"
  }

  return (
    <div>
      <h2>Testing Colors</h2>
      <div id="background-color" style={background}>
        <div id="violet" style={violet}>
          <p style={{ color: "#ffffff" }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p style={{ color: "#000000" }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div id="green" style={green}>
          <p style={{ color: "#ffffff" }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p style={{ color: "#000000" }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div id="orange" style={blue}>
          <p style={{ color: "#ffffff" }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p style={{ color: "#000000" }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        {/* <div id="orange" style="height: 200px; background-color: hsl(39, 100%, 50%)"></div>  */}
      </div>
    </div >
  );
}

export default TestColors;
