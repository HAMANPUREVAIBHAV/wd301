import React, { useState } from "react";
import MemberList from "./MemberList";
import NewMember from "./NewMember";

const Members = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Members</h2>
        <button
          onClick={() => setIsDialogOpen(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add New Member
        </button>
      </div>
      <MemberList />
      {isDialogOpen && (
        <NewMember onClose={() => setIsDialogOpen(false)} />
      )}
    </div>
  );
};

export default Members;