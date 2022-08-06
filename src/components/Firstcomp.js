import React, { useState } from 'react';
function Firstcomp() {
  let [element, setElement] = useState('');
  let [list, addList] = useState([]);

  function addItem(event) {
    setElement(event.target.value);
  }
  function plus() {
    if (element != '') {
      addList([...list, element]);
      setElement('');
    }
  }
  /*  addList(element) krenge to list jo ki array ha vo non array bna jaega
    addList([element]) krenge to sabkutch sahi to rahega but vo always 0 index pr hi exist krega
    to counter that problem humne ...list(spreadOperator) use kia jisse hum pehla element array ka sara existing elements add krre ha thn new element */

  function deleteElement(id) {
    console.log(id);
    let updatedItem = list.filter((ele, ind) => {
      return ind != id;
    });
    addList(updatedItem);
  }

  return (
    <>
      <div>
        <h1 className="middle">ToDo on React</h1>
        <div className="middle">
          <input
            type="text"
            onChange={addItem}
            placeholder="enter your text here..."
            value={element} // value islia taki input bar ka andar ka display content ko manipulate kara sake
          />
          <button onClick={plus}>add item </button>
        </div>
        {list.map((ele, ind) => {
          return (
            <div className="middle">
              {ele}
              <button onClick={() => deleteElement(ind)}>delete</button>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Firstcomp;
