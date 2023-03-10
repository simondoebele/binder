import swal from 'sweetalert';

function SwipeView(props) {
  function addBookACB() {
    swal("It's a match.", "Your book was added to your likes books.", "success");
    props.onAddToLiked(props.currentBook);
    props.onAddToSeen(props.currentBook);
    props.changeCurrentBook();
  }

  function deleteBookACB() {
    swal("Nope", "You didn't like this book.", "error");
    props.onAddToSeen(props.currentBook);
    props.changeCurrentBook();
  }

  function selectedBookACB() {
    props.selectedBook(props.currentBook); //book object to change current
  }

  // Make the DIV element draggable & Droppable:

  function allowDrop(ev) {
    ev.preventDefault();
    // changing the color if hovered over:
    // if (ev.target.id == "div1"){
    //   console.log("dragoverdislike");
    //   ev.target.style.backgroundColor = '#tomato';
    // }
    // if (ev.target.id == "div2"){
    //   console.log("dragoverlike");
    //   ev.target.style.backgroundColor = '#49A078';
    // }
  }
  
  function dragBookCB(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    console.log("dragging");
  }
  
  function dropBookCB(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    //ev.target.appendChild(document.getElementById(data));
    console.log("dropped");
    console.log(ev.target.id);
    if (ev.target.id == "div1"){
      deleteBookACB();
    }
    if (ev.target.id == "div2"){
      addBookACB();
      // ev.target.style.backgroundColor = '#49A078';
      // setTimeout(() => {
      //   console.log("Delayed for 2 seconds.");
      // }, 2000)
      // ev.target.style.backgroundColor = '#white';
    }
  }

  function removeStyleCB(ev) {
    console.log("removedragcolor");
    ev.target.style.backgroundColor = '#white';
}

    
  //dragElement(document.getElementById("mydiv"));

  // function dragElement(elmnt) {
  //   var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  //   console.log(elmnt);
  //   if (document.getElementById(elmnt.id)) {
  //     // if present, the header is where you move the DIV from:
  //     document.getElementById(elmnt.id).onmousedown = dragMouseDown;
  //   } else {
  //     // otherwise, move the DIV from anywhere inside the DIV: 
  //     elmnt.onmousedown = dragMouseDown;
  //   }

  //   function dragMouseDown(e) {
  //     e = e || window.event;
  //     e.preventDefault();
  //     // get the mouse cursor position at startup:
  //     pos3 = e.clientX;
  //     pos4 = e.clientY;
  //     document.onmouseup = closeDragElement;
  //     // call a function whenever the cursor moves:
  //     document.onmousemove = elementDrag;
  //   }

  //   function elementDrag(e) {
  //     e = e || window.event;
  //     e.preventDefault();
  //     // calculate the new cursor position:
  //     pos1 = pos3 - e.clientX;
  //     pos2 = pos4 - e.clientY;
  //     pos3 = e.clientX;
  //     pos4 = e.clientY;
  //     // set the element's new position:
  //     elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
  //     elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  //     if (elmnt.style.left >= 100){
  //       addBookACB();
  //     }
  //     if (elmnt.style.left <= -100){
  //       deleteBookACB();
  //     }

  //   }

  //   function closeDragElement() {
  //     // stop moving when mouse button is released:
  //     document.onmouseup = null;
  //     document.onmousemove = null;
  //   }
  // }

  return (
    <div class="swipe">

      <div class="row">
        <div class="left" id="div1" ondrop={dropBookCB} ondragover={allowDrop} /*ondragleave={removeStyleCB}*/></div>
        <div class="middle">
          <div
            onClick={function () {
              window.location.hash = "#details";
              props.selectedBook(props.currentBook);
            }}
            class="bookInfo"
          >
              <img src={props.currentBook.cover_id + "-L.jpg"}
                  id="drag1" 
                  draggable="true" 
                  ondragstart={dragBookCB}
                  style="right: {{howFarWeHaveMoved}}px"
              ></img>
              <div class="swipeTitle">{props.currentBook.title}</div>
              <div class="description">Genre: {props.currentBook.sub}</div>
          </div>
        </div>
        <div class="right" id="div2" ondrop={dropBookCB} ondragover={allowDrop} /*ondragleave={removeStyleCB}*/></div>

      </div>

      <div class="like">
        <img
          height="75"
          width="75"
          src="https://upload.wikimedia.org/wikipedia/commons/1/1f/Eo_circle_green_heart.svg"
          onClick={addBookACB}
        ></img>
      </div>

      <div class="dislike">
        <img
          height="75"
          width="75"
          src="https://upload.wikimedia.org/wikipedia/commons/8/83/Eo_circle_red_white_letter-x.svg"
          onClick={deleteBookACB}
        ></img>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div></div>
      <div class="topnavDetailsUser" style="margin-top:4px">
        <div
          class="iconcontain"
          onClick={function () {
            window.location.hash = "#userinfo";
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="currentColor"
            class="bi bi-person-circle"
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path
              fill-rule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
            />
          </svg>
          Profile
        </div>

        <div
          class="iconcontainCurr"
          onClick={function () {
            window.location.hash = "#swipe";
            props.fetchSub();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="currentColor"
            class="bi bi-search-heart"
            viewBox="0 0 16 16"
          >
            <path d="M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018Z" />
            <path d="M13 6.5a6.471 6.471 0 0 1-1.258 3.844c.04.03.078.062.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1.007 1.007 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5ZM6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z" />
          </svg>
          Swipe
        </div>

        <div
          class="iconcontain"
          onClick={function () {
            window.location.hash = "#aboutus";
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="currentColor"
            class="bi bi-info-circle"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
          </svg>
          About
        </div>

        <div
          class="iconcontain"
          onClick={function () {
            window.location.hash = "#login";
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="currentColor"
            class="bi bi-box-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
            />
            <path
              fill-rule="evenodd"
              d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
            />
          </svg>
          Logout
        </div>
      </div>
    </div>
  );
}

export default SwipeView;
