import React, {Component} from 'react';
//import Score from "./components/Score";
import Wrapper from "./components/Wrapper";
import FriendCard from "./components/FriendCard";
import friends from "./Images.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };
  // Shuffling cards by id
  chooseFriend = id => {
    let friends = this.state.friends;
    this.setState({friends});
    console.log(id);
    for (let i = friends.length-1; i >= 0; i--) {
      let randomIndex = Math.floor(Math.random() * (i+1));
      let itemAtIndex = friends[randomIndex];
      friends[randomIndex] = friends[i];
      friends[i] = itemAtIndex;
    };
  }
   render() {
        return (
      <div>
      <Wrapper>
        {this.state.friends.map(friend => (
          <FriendCard
            chooseFriend={this.chooseFriend}
            id={friend.id}
            key={friend.id}
            image={friend.image}
          />
        ))}
      </Wrapper>
      </div>
    );
  }
}

    
export default App;

