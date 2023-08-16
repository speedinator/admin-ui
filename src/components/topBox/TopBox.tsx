import "./topBox.scss";
import { topDealUsers } from "../../data";

const TopBox = () => {
  return (
    <div className="topBox">
      <div className="title">
        <h1>Top Deals</h1>
      </div>
      <div className="list">
        {topDealUsers.map((user) => (
          <div className="listItem" key={user.id}>
            <div className="user">
              <img src={user.img}></img>
              <div className="userTexts">
                <span className="userName">{user.username} </span>
                <span className="email">{user.email}</span>
              </div>
              <span className="amount">${user.amount}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBox;
