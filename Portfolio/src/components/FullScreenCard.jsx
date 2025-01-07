import React from "react";
import "../styles/FullScreenCard.css";
import proPic from './profilePic.jpg';

const FullScreenCard = () => {
  return (
    <div className="content">
      <h3>
        About Me ~ Marcel Peyton 
      </h3>
      <img class="profilePic" src={proPic} alt="Profile Picture" ></img>
      <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad voluptatibus deserunt, inventore fugit eveniet omnis quis quam? Accusamus, nisi voluptatum!
      Voluptate consequatur quasi cum iure, saepe ea inventore sapiente pariatur labore fuga rem eaque facere veniam incidunt voluptatem minima qui!
      <br></br>
      <br></br>
      Hic tempora nemo nobis laborum saepe repellendus architecto, explicabo obcaecati tenetur accusantium ad distinctio iste! Natus dolore exercitationem fuga alias?
      Voluptate iste excepturi accusamus beatae. Praesentium, ut, quaerat minus tempora id nulla ducimus reprehenderit quam eius modi, hic animi suscipit.
      <br></br>
      <br></br>
      Aliquid commodi expedita tenetur voluptatibus ex earum, accusantium reiciendis ipsam accusamus modi, quia corrupti, aut exercitationem vel ad quae consequatur!
      </p>
    </div>
  );
};

export default FullScreenCard;