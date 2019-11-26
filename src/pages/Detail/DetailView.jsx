import React from 'react';
import { Link } from 'react-router-dom';
import { DetailViewWrap } from './DetailStyles';
import { ButtonRound } from "../../assets/styles/Lib";

const DetailView = props => {
  console.log(props);
  const { country : { name, flag, population } } = props; 
  return (
    <DetailViewWrap>
      <div className="colimage">
        <img src={flag} alt=""/>
      </div>
      <div className="coldescription">
        <div className="countryname">
          { name }
        </div>
        <div>
          População: { population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") }
        </div>
        <div>
          <ButtonRound as={Link} to="/" marginLeft="0" marginTop="2rem">Voltar</ButtonRound>
        </div>
      </div>
    </DetailViewWrap>
  )
}

export default DetailView;
