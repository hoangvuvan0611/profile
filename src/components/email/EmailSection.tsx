"use client";
import Link from 'next/link';
import React, { FormEvent, useState } from 'react';
import { FaFacebookSquare, FaGithub, FaLinkedinIn, FaStackOverflow, FaTwitter } from 'react-icons/fa';

const EmailSection = () => {

    const [emailSubmitted, setEmailSubmitted] = useState(false);    

    const handleSubmit = async (e: FormEvent) => {
        // e.preventDefault();
        // const data = {
        //     // email: e.target.email.value,
        //     // subject: e.target.subject.value,
        //     // message: e.target.message.value,
        // };
        // const JSONdata = JSON.stringify(data);
        // const endpoint = "/api/send";

        // // Form the request for sending data to the server.
        // const options = {
        //     // The method is POST because we are sending data.
        //     method: "POST",
        //     // Tell the server we're sending JSON.
        //     headers: {
        //     "Content-Type": "application/json",
        //     },
        //     // Body of the request is the JSON data we created above.
        //     body: JSONdata,
        // };

        // const response = await fetch(endpoint, options);
        // const resData = await response.json();
        // console.log(resData);
        // if (response.status === 200) {
        //     console.log("Message sent.");
        //     setEmailSubmitted(true);
        // }
    };

  return (
    <section className="z-10">
        <h2 className="text-center text-4xl font-bold text-white mt-12 mb-1 md:mb-1">
            Liên hệ
        </h2>
        <section
        id="contact"
        className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
        >
        <div>
            <h5 className="text-xl font-bold text-white my-2">
            Hãy kết nối với tôi "hoangvuvan677@gmail.com" 
            </h5>
            <p className="text-[#ADB7BE] mb-4 max-w-md">
            {" "}
                Hiện tại, tôi luôn tìm cho mình những cơ hội học hỏi và làm việc mới,
                hộp thư của tôi luôn luôn mở. Dù bạn muốn đặt câu hỏi hoặc trao đổi 
                bất kỳ điều gì, hãy liên lạc với tôi. Tôi sẽ cố gắng trả lời bạn 
                sớm nhất!
            </p>
            <div className="socials flex flex-row gap-2">
            <Link href="https://www.facebook.com/profile.php?id=100024724700014">
                <FaFacebookSquare color='white' size={20}/>
            </Link>
            <Link href="https://github.com/hoangvuvan0611" target='blank'>
                <FaGithub color='white' size={20}/>
            </Link>
            <Link href="https://www.linkedin.com/in/ho%C3%A0ng-v%C5%A9-v%C4%83n-831a352b1/">
                <FaLinkedinIn color='white' size={20}/>
            </Link>
            <Link href="https://stackoverflow.com/users/21594731/ho%c3%a0ng-v%c5%a9-v%c4%83n">
                <FaStackOverflow color='white' size={20}/>
            </Link>
            <Link href="https://twitter.com/hoangvuvan677">
                <FaTwitter color='white' size={20}/>
            </Link>
            </div>
        </div>
        <div>
            {emailSubmitted ? (
            <p className="text-green-500 text-sm mt-2">
                Email gửi thành công!
            </p>
            ) : (
            <form className="flex flex-col">
                <div className="mb-6">
                <label
                    htmlFor="email"
                    className="text-white block mb-2 text-sm font-medium"
                >
                    Email của bạn
                </label>
                <input
                    name="email"
                    type="email"
                    id="email"
                    required
                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                    placeholder="abc@google.com"
                />
                </div>
                <div className="mb-6">
                <label
                    htmlFor="subject"
                    className="text-white block text-sm mb-2 font-medium"
                >
                    Tiêu đề
                </label>
                <input
                    name="subject"
                    type="text"
                    id="subject"
                    required
                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                    placeholder="Trao đổi công việc"
                />
                </div>
                <div className="mb-6">
                <label
                    htmlFor="message"
                    className="text-white block text-sm mb-2 font-medium"
                >
                    Thông điệp bạn muốn gửi
                </label>
                <textarea
                    name="message"
                    id="message"
                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                    placeholder="Tôi muốn liện lạc với bạn để ..."
                />
                </div>
                <button
                type="submit"
                className="bg-blue-500 hover:bg-red-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
                >
                Gửi tin nhắn tới tôi
                </button>
            </form>
            )}
        </div>
        </section>
    </section>

  );
};

export default EmailSection;
