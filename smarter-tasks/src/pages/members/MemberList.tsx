import React , {useEffect} from "react";

import { useMembersDispatch } from "../../context/members/context";
import { fetchMembers } from "../../context/members/actions";

import MemberListItems from "./MemberListItems";

const MemberList: React.FC = () => {
  const dispatchMembers = useMembersDispatch();
  useEffect(() => {
    fetchMembers(dispatchMembers);
}, []);

  return (
    <div className="container mx-auto mt-4">
      <h1 className="text-2xl font-bold mb-4">Members List</h1>
      <MemberListItems />
    </div>
  );   

}

export default MemberList;