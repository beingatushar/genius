"use client";

import * as z from "zod";
import axios from "axios";

import { FaCode as Code, FaImage as ImageIcon, FaComment as MessageSquare, FaMusic as Music, FaVideo as VideoIcon } from 'react-icons/fa';

import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { ChatCompletionRequestMessage } from "openai";
import { FaCloudUploadAlt } from 'react-icons/fa';
import { BotAvatar } from "@/components/bot-avatar";
import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { cn, convertImageToText } from "@/lib/utils";
import { Loader } from "@/components/loader";
import { UserAvatar } from "@/components/user-avatar";
import { Empty } from "@/components/ui/empty";
import { useProModal } from "@/hooks/use-pro-modal";

import { formSchema } from "./constants";
import { Island_Moments } from "next/font/google";

const ImageToTextPage = () => {
  const [message, setMessage] = useState<string | null>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: ""
    }
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleChangeImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setIsLoading(true);
      try {
        const convertedText = await convertImageToText(e.target.files[0]);
        setMessage(convertedText);
        console.log(convertedText)
      } catch (error) {
        toast.error("Error converting image to text.");
      }
      setIsLoading(false);
    }
  };
  return (
    <div>
      <Heading
        title="Extract text from image"
        description="Our most advanced OCR model."
        icon={MessageSquare}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
      <div className="px-4 lg:px-8 h-50vh">
        <div>
          <div className="relative border-dotted border-4 rounded-lg h-72 w-full focus-within:shadow-sm flex items-center justify-center flex-col"
          >
            <span>Drag and Drop</span>
            <span>or</span>
            <span>Upload Multiple Pictures</span>
            <label htmlFor="image" className="absolute inset-0 cursor-pointer">
              <span className="sr-only">Upload Image</span>
              <input type="file" name="image" id="image" className="hidden" accept="image/*" onChange={handleChangeImage} disabled={isLoading} />
            </label>
          </div>
        </div>
        <div className="space-y-4 mt-4">
          {isLoading && (
            <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
              <Loader />
            </div>
          )}
          {!message && !isLoading && (
            <Empty label="Upload or paste an image to get started." />
          )}
          {
            message
            &&
            <div className="p-8 w-full flex items-start gap-x-8 rounded-lg bg-muted"          >
              <BotAvatar />
              <p className="text-sm">
                {message}
              </p>
            </div>
          }

        </div>
      </div>
    </div >
  );
}

export default ImageToTextPage;

