import UserInfoView from "../views/userInfoView";
export default 

function userInfo(props) {
  function removeBookACB(title){
    props.model.removeLikedBook(title);
  }
  return (<UserInfoView likedBooks={props.model.likedBooks} removeBook={removeBookACB} />)
}
