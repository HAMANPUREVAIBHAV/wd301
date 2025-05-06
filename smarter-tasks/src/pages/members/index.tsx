import { Suspense } from "react";
import ErrorBoundary from "../../components/ErrorBoundary";
import MemberList from "./MemberList";
import NewMember from "./NewMember";

const Members = () => {
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Members</h2>
        <NewMember />
      </div>

      <div className="suspense-loading">
        <ErrorBoundary>
          <Suspense
            fallback={<div className="suspense-loading">Loading...</div>}
          >
            <MemberList />
          </Suspense>
        </ErrorBoundary>
      </div>
    </>
  );
};

export default Members;
