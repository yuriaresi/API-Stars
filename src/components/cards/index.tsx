import { CardStyled } from "./styled";

export interface CardProps {
  name: string;
  isPlanet: boolean;
  density: number;
  gravity: number;
  discoveryDate: string;
  discoveredBy: string
}

export function StarCard(props: CardProps) {
  return (
    <CardStyled>
      <h3>{props.name}</h3>
      <p>type: {props.isPlanet ? "Planet" : "Star"}</p>
      <p>Density: {props.density} kg/m3</p>
      <p>Gravity: {props.gravity} m/s²</p>
      <p>discovered By: {props.discoveredBy}</p>
      <p>discovery Date: {props.discoveryDate}</p>
    </CardStyled>
  );
}
