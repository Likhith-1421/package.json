import { useState } from "react";
import UseOnline from "./Useonline.js";

const Hedder = () => {
  // console.log(translations)
  // const t = translations[lang]

  const [ShowIteams, setShowIteams] = useState(false);
  const HandleSubmit = () => {
    setShowIteams(!ShowIteams);
  };
  const online= UseOnline()
  return (
    <div>
      <div className="First">
        <ul>
          <li>HOME</li>
          <li>ABOUTUS</li>
          <li>CONTACTUS</li>
          <li>LOGIN</li>
          <div className="Second">
            <div className="Third" onClick={HandleSubmit}>
              <h5>Language Selector</h5>
              <p>🔻</p>
            </div>

            {ShowIteams && (
              <form>
                <label>
                  <input type="radio" className="checkbox" />
                  English
                </label>
                <br />
                <label>
                  <input type="radio" className=" checkbox" />
                  Telugu
                </label>
              </form>
            )}
          </div>
        </ul>
      </div>
      
      <h4>{online ? "✅" : "🔴"}</h4>
    </div>
  );
};
export default Hedder;
