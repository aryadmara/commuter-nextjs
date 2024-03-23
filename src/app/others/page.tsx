"use client";
import { getBlogPosts } from "@/utils/contentful";
import * as React from "react";
import { useState } from "react";

interface IOtherArticleProps {}
interface userData {
  fields: {
    title: string;
    content: string;
    // tambahkan properti lain yang diperlukan sesuai struktur data
  };
  // tambahkan properti lain yang diperlukan sesuai struktur data
}
const OtherArticle: React.FunctionComponent<IOtherArticleProps> = (props) => {
  const [blogData, setBlogData] = useState<any>(null);
  React.useEffect(() => {
    getOtherArticle();
  }, []);
  const getOtherArticle = async () => {
    try {
      const response = await getBlogPosts();
      console.log("mengambil data dari:", response);
      setBlogData(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="bg-white">
      <div>
        {blogData &&
          blogData.map((post: userData, index: number) => (
            <div key={index}>
              <h2>{post.fields?.title}</h2>
              <p>{post.fields?.content}</p>
              {/* Tambahkan elemen untuk properti lain yang diperlukan */}
            </div>
          ))}
      </div>
    </section>
  );
};

export default OtherArticle;
