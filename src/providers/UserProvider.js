import React, { Component, createContext } from 'react';
import { auth , createOrGetUserProfileDocument} from '../firebase';

const initialUserState = { user: null, loading: false};
export const UserContext = createContext(initialUserState);

class UserProvider extends Component {
    state=initialUserState;

    async componentDidMount(){
      //will be fired whenever you go from logged in to logged out state or vice versa
      auth.onAuthStateChanged(async(userAuth)=>{
          console.log('UserProvider --> componentDidMount --> userAuth')
          if(userAuth){
            const userRef = await createOrGetUserProfileDocument(userAuth);
            console.log('userRef',userRef);
            
            userRef.onSnapshot(snapshot=>{
              console.log('snapshot', snapshot);
              console.log('snapshot', snapshot.data);
              this.setState({
                user:{uid:snapshot.id, ...snapshot.data()},
                loading:false,
              });
            })
          }
      });
    }
    
  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default UserProvider;

