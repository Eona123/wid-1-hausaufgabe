import "./styles.css";

export default function App() {
  return (
    <div className="App">
      {/*Dein Code unter dieser Zeile  */}
      <header className = "Bodyheader"> 
        <h1>Fachhochschule Nordwestschweiz</h1>
      </header>  
      <body className = "Body">
        <p className = "BodyBox">Die Fachhochschule Nordwestschweiz (FHNW) ist eine der führenden Fachhochschulen in der Schweiz. 
          Sie bietet eine breite Palette von Studiengängen in verschiedenen Disziplinen an, darunter Ingenieurwissenschaften, Wirtschaft, 
          Sozialwissenschaften und Kunst.</p>
        
        <table className="table">
          <tr>
            <h2 className="SubboxHeader">
              Fachhochschule Nordwestschweiz
            </h2>
          </tr>
          <tr>
            <img className="SubboxImage" src="https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d3/FHNW_Logo.svg/500px-FHNW_Logo.svg.png" alt="FHNW Logo" />
          </tr>
          <table className="subtable">
            <tr>
              <p className="Body"> 
                <th><bold>Gründung</bold></th>
                <td>1. Januar 2006</td>
              </p>
            </tr>
            <tr>
              <p className="Body">
                <th><bold>Trägerschaft</bold></th>
                <td>Kantone Aargau, Basel-Landschaft, Basel-Stadt, Solothurn</td>
                </p>
            </tr>
            <tr>
              <p className="Body">
                <th><bold>Ort</bold></th>
                <td>Windisch AG, Muttenz, Olten, Basel</td>
              </p>
            </tr>
          </table>
        </table>
      </body>











        {/*Dein Code über dieser Zeile  */}
    </div>
  );
}
