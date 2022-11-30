import logo from "../assets/logo.svg";

function Banner() {
  const title = "La maison jungle";
  return (
    <header>
      <div
        style={{
          alignItems: "center",
          flexDirection: "column",
          display: "flex",
        }}
      >
        <div className="lmj-titrePage">
          <img src={logo} alt="La maison jungle" className="lmj-logo" />
          <h1 className="lmj-title">{title}</h1>
        </div>
        <Recommendation />
      </div>
    </header>
  );
}

function Recommendation() {
  const currentMonth = new Date().getMonth();
  const isSpring = currentMonth >= 2 && currentMonth <= 4; //mars à mai
  const isSummer = currentMonth >= 5 && currentMonth <= 7; //juin à août
  const isFall = currentMonth >= 8 && currentMonth <= 10; //septembre à novembre
  const isWinter = currentMonth >= 11 || currentMonth <= 1; // décembre à février

  if (isSpring) {
    return (
      <div
        style={{
          display: "flex",
        }}
      >
        C'est le printemps, il est temps de rempoter !
      </div>
    );
  }
  if (isSummer) {
    return (
      <div
        style={{
          display: "flex",
        }}
      >
        Préparez-vous à la récolte !
      </div>
    );
  }
  if (isFall) {
    return (
      <div
        style={{
          display: "flex",
        }}
      >
        Le froid arrive attention
      </div>
    );
  }
  if (isWinter) {
    return (
      <div
        style={{
          display: "flex",
        }}
      >
        Cachez bien vos plantes du froid
      </div>
    );
  }
}

export default Banner;
