import React from "react";
import { AdditionalPageProps } from "./_app";
import { NextPage } from "next";

type PageProps = AdditionalPageProps & {};

const Profile: NextPage<PageProps> = ({ auth }) => {
  return (
    <div>
      <h1>Profile</h1>
      <h1>Username: {auth.user.username}</h1>
      <p>Email: {auth.user.attributes?.email}</p>
      <button onClick={auth.signOut}>Sign out</button>
    </div>
  );
};

export default Profile;
