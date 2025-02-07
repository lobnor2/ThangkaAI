"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";

const formSchema = z.object({
  prompt: z
    .string()
    .min(7, { message: "Prompt must be atleast 7 characters long" }),
});

const Page = () => {
  const [outputImg, setOutputImg] = useState<string | null>(null);
  const [inputPrompt, setInputPrompt] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setLoading(true);
      const response = await fetch("/api/image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: values.prompt }),
      });
      const data = await response.json();
      if (response.status === 200) {
        setOutputImg(data.url);
      } else {
        toast({
          variant: "destructive",
          description: data.error,
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className=" w-full h-[calc(100vh-4rem-2.5rem)] flex flex-col">
      <div className="w-full flex flex-col items-center">
        <h1 className="text-3xl mt-3">Create</h1>
        <p className="text-gray-500 text-lg">
          Generate Stunning Images from Text
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-5 px-5 h-full">
        <div className="lg:flex-[1] flex flex-col items-start justify-center">
          <p className="mb-1 mt-5">
            Type your prompt below to create any image you can imagine
          </p>
          <div className="w-full">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="">
                <FormField
                  control={form.control}
                  name="prompt"
                  render={({ field }) => (
                    <FormItem className="">
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="a child playing football near river"
                          className="mb-2"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="text-right w-full mt-3">
                  Generate
                </Button>
              </form>
            </Form>
          </div>
        </div>
        <div className="lg:flex-[1] flex items-center justify-center">
          {loading ? (
            <p>Generating Image...</p>
          ) : outputImg ? (
            <Image
              src={outputImg}
              className="w-[100%] md:w-[90%]"
              width={512}
              height={512}
              alt={inputPrompt}
            />
          ) : (
            <p>Enter your prompt and click generate to see the magic happen</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
