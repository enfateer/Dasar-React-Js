import { Card } from "flowbite-react";
import { useState } from "react";

export default function CardProfileComp({ data }) {
  const [profile] = useState(data);

  return (
    <Card className="max-w-sm justify-center mt-10 mx-auto rounded-2xl">
      <div className="flex flex-col items-center pb-10 mt-6">
        <img
          alt="Bonnie image"
          height="96"
          src={profile.avatar}
          width="96"
          className="mb-3 rounded-full shadow-lg"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {profile.name}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Hello Iam a {profile.name}
        </span>
        <div className="mt-4 flex space-x-3 lg:mt-6">
          <p className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">
            {profile.role}
          </p>
          <p className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700">
            {profile.email}
          </p>
        </div>
      </div>
    </Card>
  );
}
