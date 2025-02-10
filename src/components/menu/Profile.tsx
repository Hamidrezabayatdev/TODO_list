import React, { useState } from "react";
interface ProfileProps {
  name: string;
  date: string;
}
export const Profile: React.FC<ProfileProps> = ({ name, date }) => {
  const [image, setImage] = useState<string | null>(null);
  const cameraIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
    </svg>
  );

  // Handle file selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string); // Convert file to base64
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <div className="flex items-center gap-4 mt-12 mb-14 pr-2 mx-3">
        <div className="relative flex items-center justify-center w-24 h-24 rounded-full overflow-hidden border border-gray-300">
          {/* Profile Image Preview */}
          <div className="w-full h-full">{image ? <img src={image} alt="Profile" className="w-full h-full object-cover" /> : <div className="w-full h-full flex items-center justify-center text-gray-400">No Image</div>}</div>
          {/* Upload Button */}
          <input type="file" accept="image/*" className="hidden" id="fileInput" onChange={handleFileChange} />
          <label htmlFor="fileInput" className="absolute w-full h-full flex items-center justify-center cursor-pointer px-1 text-white rounded-md hover:bg-zinc-700/40 opacity-0 hover:opacity-100 transition-all">
            {cameraIcon}
          </label>
        </div>
        <div className="flex flex-col">
          <div className="text-xl font-bold">{name}</div>
          <div className="text-xl font-bold">{date}</div>
        </div>
      </div>
    </div>
  );
};
