import React, { useState } from "react";

function FunctionComponent() {
    const[name, setName]=useState("Ameer");
    const [age ,setAge]=useState(27);
  return <div>
        <p>welcome {name}</p>
        <p>Age: {age}</p>
        <p>using useState  react hooks</p>
  </div>;
}
export default FunctionComponent;
