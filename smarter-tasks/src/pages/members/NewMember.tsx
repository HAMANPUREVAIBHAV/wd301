import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { addMember } from "../../context/members/actions";

import { useMembersDispatch } from "../../context/members/context";

type Imputs = {
  name: string;
  email: string;
  password: string;
};

type NewMemberProps = {
  onClose: () => void;
};

const NewMember: React.FC<NewMemberProps> = ({ onClose }) =>{
  const [isOpen, setIsOpen] = useState(false);

  const [error, setError] = useState(null);

  const dispatchMembers = useMembersDispatch();

  const { register, handleSubmit, formState: { errors } } = useForm<Imputs>();

  const closeModel = () =>{
    setIsOpen(false);
    onClose();
  }

  const openModel = () =>{
    setIsOpen(true);
  }

  const onSubmit: SubmitHandler<Imputs> = async (data) => {
    const {name , email, password} = data;
    const response = await addMember(dispatchMembers, {name, email, password});
    if (response.ok) {
      console.log("Member added successfully");
      closeModel();
    } else {
      console.log("Error adding member:", response.errors);
      setError(response.errors);
    }
  }
  return (
    <>
  <button
    type="button"
    id="new-member-btn"
    onClick={openModel}
    className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
  >
    + New Member
  </button>

  <Transition appear show={isOpen} as={Fragment}>
    <Dialog as="div" className="relative z-10" onClose={closeModel}>
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-black bg-opacity-30" />
      </Transition.Child>

      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-xl bg-white dark:bg-gray-900 p-6 text-left shadow-xl transition-all">
              <Dialog.Title
                as="h3"
                className="text-xl font-semibold text-gray-900 dark:text-white"
              >
                Add New Member
              </Dialog.Title>

              <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
                {error && (
                  <p className="text-sm text-red-500 bg-red-50 px-3 py-2 rounded-md">{error}</p>
                )}

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                    Name
                  </label>
                  <input
                    id="name"
                    placeholder="John Doe"
                    autoFocus
                    {...register('name', { required: true })}
                    className={`w-full rounded-md border px-3 py-2 mt-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {errors.name && <p className="text-sm text-red-500 mt-1">Name is required.</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                    Email
                  </label>
                  <input
                    id="email"
                    placeholder="john@example.com"
                    type="email"
                    {...register('email', { required: true })}
                    className={`w-full rounded-md border px-3 py-2 mt-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {errors.email && <p className="text-sm text-red-500 mt-1">Email is required.</p>}
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    {...register('password', { required: true })}
                    className={`w-full rounded-md border px-3 py-2 mt-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {errors.password && <p className="text-sm text-red-500 mt-1">Password is required.</p>}
                </div>

                <div className="flex justify-end pt-4 space-x-2">
                  <button
                    type="submit"
                    id="create-member-btn"
                    className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    onClick={closeModel}
                    className="inline-flex items-center justify-center rounded-md bg-gray-200 dark:bg-gray-700 px-4 py-2 text-sm font-medium text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </div>
    </Dialog>
  </Transition>
</>

  )

}

export default NewMember;