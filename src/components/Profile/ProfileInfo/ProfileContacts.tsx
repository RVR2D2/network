import React from "react";

type PropsType = {
  contactsTitle: string;
  contactsValue: string;
};

const ProfileContacts: React.FC<PropsType> = ({
  contactsTitle,
  contactsValue,
}) => {
  return (
    <p>
      {contactsTitle}: {contactsValue}
    </p>
  );
};

export default ProfileContacts;
