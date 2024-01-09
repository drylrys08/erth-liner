"use client";
import { FacebookProvider, CustomChat } from "react-facebook";

function FacebookMsg() {
  return (
    <FacebookProvider appId="734832954918827" chatSupport>
      <CustomChat
        pageId="104347214616405"
        minimized={true}
        themeColor="black"
      />
    </FacebookProvider>
  );
}

export default FacebookMsg;
