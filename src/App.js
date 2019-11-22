import React, {Component} from 'react';
import Score from "./components/Score";
import Wrapper from "./components/Wrapper";
import FriendCard from "./components/FriendCard";
import friends from "./Images.json";

let correctClicks = 0;
let topScore = 0;
let clickMessage = "Click to pledge your loyaty to a queen bee.";

  class App extends Component {

  // Setting this.state.friends to the friends json array
  state = {
    friends,
    topScore,
    correctClicks,
    clickMessage
  };

 // on click
  chooseFriend = id => {
    const friends = this.state.friends;
    const clickedDup = friends.filter(friends => friends.id === id);

    // If duplicate clicked
    // game over ...
    if (clickedDup[0].clicked) {
      console.log("Score: " + correctClicks);
      console.log("Top Score: " + topScore);

      correctClicks = 0;
      clickMessage = "Oh no! You've pledged your loyalty to the same mean queen twice! Now she rules. Get lost peasant!";

      for (let i = 0; i < friends.length; i++) {
        friends[i].clicked = false;
      }

      this.setState({clickMessage});
      this.setState({correctClicks});
      this.setState({friends});

    }
    else if (correctClicks < 11) {
      //set value of clickedDup to true
      clickedDup[0].clicked = true;

      //add to score
      correctClicks++;

      clickMessage = "Your betrayal skills are on point! Keep it up if you're going to be queen."

      if (correctClicks > topScore) {
        topScore = correctClicks;
        this.setState({topScore});
      }

      // Shuffle cards
      // let friends = this.state.friends;
      //this.setState({friends})
      for (let i = friends.length-1; i >= 0; i--) {
        let randomIndex = Math.floor(Math.random() * (i+1));
        let itemAtIndex = friends[randomIndex];
        friends[randomIndex] = friends[i];
        friends[i] = itemAtIndex;
        this.setState({friends});
        this.setState({correctClicks});
        this.setState({clickMessage});
      }
    }
      else {
        // set value to true
        clickedDup[0].clicked = true;
        // restart score
        correctClicks = 0;
        // notify they've won the iron throne
        clickMessage = "Wow! You're vicious! Obviously you deserve to be crowned the most fabulous of all mean girls.";
        topScore = 12;
        this.setState({topScore});

        for (let i = 0; i < friends.length; i++) {
          friends[i].clicked = false;
        }

        // Shuffle cards
        // let friends = this.state.friends;
        //this.setState({friends})
        for (let i = friends.length-1; i >= 0; i--) {
          let randomIndex = Math.floor(Math.random() * (i+1));
          let itemAtIndex = friends[randomIndex];
          friends[randomIndex] = friends[i];
          friends[i] = itemAtIndex;
          this.setState({friends});
          this.setState({correctClicks});
          this.setState({clickMessage});
      }
    }
  }
    render() {
      return (
     <div>
        <Score
          clickMessage={this.state.clickMessage}
          correctClicks={this.state.correctClicks}
          topScore={this.state.topScore}
        />
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