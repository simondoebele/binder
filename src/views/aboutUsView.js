import swal from 'sweetalert';

function AboutUsView(props) {
  function handleLogoutCB() {
    window.location.hash = "#login";
  }

  function helpMessageCB() {
    swal( "How swiping works!" ,
      "Here is a short explanation of how the swiping works:\n" +
        "\nYou can either: drag and drop the book. If you drop it to the right, outside of the screen, you like it. If you drop it to the left, you dislike it.\n" +
        "\nOtherwise simply: Press the heart icon to like a book. Press the X button to dislike a book.\n" +
        "\nHappy Swiping!",
        "info");
  }

  return (
    <div class="profileInfo">
      <div class="binder">
        <img src="https://i.ibb.co/jMvDC4d/bindr-logo.png" alt="bindr-logo" />
      </div>
      <div>Welcome to Bindr!</div>
      <div class="aboutUsDescription">
        Do you love reading but find it hard to find the right book to read?{" "}
        <br />
        Then Bindr is the solution for you!
        <br />
        <br />
        In Bindr you can explore new books. Bindr suggests new books based on the 
        book genres of your interest.
        Under Swipe, you can swipe books in two ways (find out how, or click the help
        button for an explanation.) The swiped books are then either added
        to your books list (which you can see under Profile) or discarded.
        Happy swiping!
        <br />
        <button onClick={helpMessageCB}>Help</button>
      </div>

      <div class="topnavDetailsUser" style="margin-top:14px">
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
          class="iconcontain"
          onClick={function () {
            window.location.hash = "#swipe";
            props.fetchSub;
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
          class="iconcontainCurr"
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

        <div class="iconcontain" onClick={handleLogoutCB}>
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

export default AboutUsView;
