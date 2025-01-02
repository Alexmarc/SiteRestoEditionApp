import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { PhotoIcon } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

interface Props {
  currentImage: string;
  onUpload: (path: string) => void;
  folder: string;
  filename?: string;
}

export default function ImageUpload({ currentImage, onUpload, folder, filename }: Props) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (!file) return;

    // Simulate file upload - in a real app, this would upload to a server
    const path = `/images/${folder}/${filename || file.name}`;
    onUpload(path);
    toast.success('Image téléchargée avec succès');
  }, [folder, filename, onUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.webp']
    },
    maxFiles: 1
  });

  return (
    <div>
      <div
        {...getRootProps()}
        className={`mt-2 flex justify-center rounded-lg border border-dashed px-6 py-10 cursor-pointer
          ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-900/25'}`}
      >
        <div className="text-center">
          <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
          <div className="mt-4 flex text-sm leading-6 text-gray-600">
            <label className="relative cursor-pointer rounded-md bg-white font-semibold text-blue-600">
              <span>Télécharger une image</span>
              <input {...getInputProps()} />
            </label>
          </div>
          {currentImage && (
            <p className="text-xs leading-5 text-gray-600 mt-2">
              Image actuelle: {currentImage}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}