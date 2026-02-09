import { useEffect, useState } from "react";
import { Spinner } from "flowbite-react";
import CardProfileComp from "../components/CardProfileComp";

export default function Profile() {
  const [profile, setProfile] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getProfile() {
    const url = "https://api.escuelajs.co/api/v1/users/3";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const result = await response.json();
      setProfile(result);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getProfile();
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center">
        <Spinner size="xl" aria-label="Loading" />
        <p className="mt-4 text-gray-600 text-lg font-medium animate-pulse">
          Sedang memuat...
        </p>
      </div>
    );
  }

  return <CardProfileComp data={profile} type="profile" />;
}
