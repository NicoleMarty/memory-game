import React, {Component} from 'react';
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import FriendCard from "./components/FriendCard";
import friends from "./Images.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

  chooseFriend = id => {
        const friends = this.state.friends.filter(friend => friend.id !== id);
        this.setState({friends});
    };

    render() {
        return (
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
    );
  }
}

    


export default App;

