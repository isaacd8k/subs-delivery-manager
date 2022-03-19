import React from "react";
import { Authenticator } from "@aws-amplify/ui-react";
// See min 19:31

function Profile() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div>
          <h1>Profile</h1>
          <h1>Username: {user.username}</h1>
          <p>Email: {user.attributes?.email}</p>
          <button onClick={signOut}>Sign out</button>
        </div>
      )}
    </Authenticator>
  );
}

export default Profile;
