import React, { useState } from "react";


function FormAdd(props) {
  const [movie, setMovie] = useState({
    Title: " ",
    rating: " ",
    posterURL: " ",
    Description: " ",
  });
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <div style={{ padding: 15 }}>
          <button
            className="close"
            aria-label="Close"
            onClick={() => props.settrigger(false)}
          ></button>
        </div>
        <form className="AddMovie">
          <h3> Fill your movie card </h3>
          <input
            className=" input"
            type="text"
            placeholder=" Choose a title for your Movie..."
            onChange={(e) => setMovie({ ...movie, Title: e.target.value })}
          />
          <div className="cut"></div>
          <input
            className=" input"
            type="text"
            placeholder=" Add a rating ..."
            onChange={(e) => setMovie({ ...movie, rating: e.target.value })}
          />
          <div className="cut"></div>
          <input
            className="input"
            type="text"
            placeholder=" Add a url for your movie's poster..."
            onChange={(e) => setMovie({ ...movie, posterURL: e.target.value })}
          />
          <input
            className="input"
            type="text"
            placeholder=" Add a short description ..."
            onChange={(e) =>
              setMovie({ ...movie, Description: e.target.value })
            }
          />
          <button
            className="submit"
            onClick={(e) => {
              e.preventDefault();
              props.add(movie);
              props.setformKey(props.formKey + 1);
            }}       
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  ) : (
    ""
  );
}
export default FormAdd;
