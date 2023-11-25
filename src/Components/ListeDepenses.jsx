import React from "react";
import { useSelector } from "react-redux";

export default function ListeDepenses() {
  const depenses = useSelector((state) => state.depenses.depenses);
  return (
    <table border={1} className="ldp">
        <thead>

      <tr>
        <th>Montant</th>
        <th>Titre</th>
      </tr>
        </thead>
<tbody>
    
      {depenses.map((d,i) => (
          <tr key={i}>
          <td>{d.montant}</td>
          <td>{d.titre}</td>
        </tr>
      ))}
      </tbody>
    </table>
  );
}
