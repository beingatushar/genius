import * as z from 'zod';

// Custom validation function for image
const isImage = (value: string) => {
  // You can implement your own logic to check if the value is an image
  // For example, you might want to check the file extension or MIME type
  // This is a simple example, you should adjust it based on your specific requirements
  return /\.(jpg|jpeg|png|gif)$/i.test(value);
};

export const formSchema = z.object({
  prompt: z.string().refine(isImage, {
    message: "Prompt must be a valid image (jpg, jpeg, png, gif).",
  }),
});
