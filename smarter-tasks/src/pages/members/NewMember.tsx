import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { addMember } from "../../context/members/actions";
import { useMembersDispatch } from "../../context/members/context";

type Inputs = {
  name: string;
  email: string;
  password: string;
};

const NewMember: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState(null);

  const dispatchMembers = useMembersDispatch();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>();

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const response = await addMember(dispatchMembers, data);
    if (response.ok) {
      console.log("Member added successfully");
      reset();
      closeModal();
    } else {
      console.log("Error adding member:", response.errors);
      setError(response.errors);
    }
  };

  return (
    <>
      <button
        type="button"
        id="new-member-btn"
        onClick={openModal}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add New Member
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
                  <Dialog.Title className="text-xl font-semibold text-gray-900 dark:text-white">
                    Add New Member
                  </Dialog.Title>

                  <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
                    {error && <p className="text-sm text-red-500">{error}</p>}

                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Name</label>
                      <input
                        id="name"
                        placeholder="Enter full name"
                        {...register("name", { required: "Name is required" })}
                        className={`w-full border rounded px-3 py-2 mt-1 dark:bg-gray-800 dark:text-white ${errors.name ? "border-red-500" : "border-gray-300"}`}
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Email</label>
                      <input
                        id="email"
                        type="email"
                         placeholder="Enter email address"
                        {...register("email", { required: "Email is required" })}
                        className={`w-full border rounded px-3 py-2 mt-1 dark:bg-gray-800 dark:text-white ${errors.email ? "border-red-500" : "border-gray-300"}`}
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>

                    <div>
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Password</label>
                      <input
                        id="password"
                        type="password"
                        placeholder="Enter a strong password"
                        {...register("password", { required: "Password is required" })}
                        className={`w-full border rounded px-3 py-2 mt-1 dark:bg-gray-800 dark:text-white ${errors.password ? "border-red-500" : "border-gray-300"}`}
                      />
                      {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                    </div>

                    <div className="flex justify-end space-x-2 pt-4">
                      <button
                        type="submit"
                        id="create-member-btn"
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                      >
                        Create Member
                      </button>
                      <button
                        type="button"
                        onClick={closeModal}
                        className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white rounded hover:bg-gray-400 dark:hover:bg-gray-600"
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
  );
};

export default NewMember;
