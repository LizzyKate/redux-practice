"use client";
import React from "react";
import { nanoid } from "@reduxjs/toolkit";
import { type Post } from "@/features/reducers/posts/types";
import { useAppDispatch } from "@/features/store";
import { addPostAction } from "@/features/reducers/posts";
import { useRouter } from "next/navigation";

// omit form types
interface AddPostFormFields extends HTMLFormControlsCollection {
  postTitle: HTMLInputElement;
  postContent: HTMLTextAreaElement;
}
interface AddPostFormElements extends HTMLFormElement {
  readonly elements: AddPostFormFields;
}

const AddPostForm = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent<AddPostFormElements>) => {
    e.preventDefault();

    const { elements } = e.currentTarget;
    const title = elements.postTitle.value;
    const content = elements.postContent.value;

    const newPost: Post = {
      id: nanoid(),
      title,
      content,
    };
    dispatch(addPostAction(newPost));

    e.currentTarget.reset();
    router.push("/posts");
  };

  return (
    <section>
      <h2>Add a New Post</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="postTitle">Post Title:</label>
        <input type="text" id="postTitle" defaultValue="" required />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          defaultValue=""
          required
        />
        <button>Save Post</button>
      </form>
    </section>
  );
};

export default AddPostForm;
