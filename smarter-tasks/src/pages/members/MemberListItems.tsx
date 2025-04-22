/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { deleteMember } from "../../context/members/actions";
import { useMembersDispatch, useMembersState } from "../../context/members/context";

const MemberListItems: React.FC = () => {
  const { members, isLoading, isError, errorMessage }: any = useMembersState();
  const dispatchMembers = useMembersDispatch();

  const handleDelete = async (member_id: number) => {
    await deleteMember(dispatchMembers, member_id);
    // Context will automatically update members after delete action.
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {errorMessage}</div>;

  return (
    <>
      {members.map((member: any) => {
        // eslint-disable-next-line no-prototype-builtins
        if (member.hasOwnProperty("user")) {
          member = member.user;
        }

        return (
          <div
            key={member.id}
            className="flex items-center justify-between bg-white dark:bg-gray-800 text-black dark:text-white rounded-xl shadow-sm p-5 mb-4 transition hover:shadow-lg"
          >
            <div>
              <h5 className="text-xl font-semibold">{member.name}</h5>
              <p className="text-sm text-gray-600 dark:text-gray-400">{member.email}</p>
            </div>

            <button
              onClick={() => handleDelete(member.id)}
              className="p-2 rounded-full bg-red-500 hover:bg-red-600 transition-colors"
              title="Delete Member"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21
                  c.342.052.682.107 1.022.166m-1.022-.165L18.16
                  19.673a2.25 2.25 0 0 1-2.244
                  2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772
                  5.79m14.456 0a48.108 48.108 0 0
                  0-3.478-.397m-12 .562c.34-.059.68-.114
                  1.022-.165m0 0a48.11 48.11 0 0
                  1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964
                  51.964 0 0 0-3.32 0c-1.18.037-2.09
                  1.022-2.09 2.201v.916m7.5 0a48.667
                  48.667 0 0 0-7.5 0"
                />
              </svg>
            </button>
          </div>
        );
      })}
    </>
  );
};

export default MemberListItems;
